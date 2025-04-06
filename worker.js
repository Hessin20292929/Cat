/**
 * Cloudflare Worker: Secure Proxy for Google Gemini API (gemini-1.5-flash-latest)
 * Handles CORS for browser requests, including local file:// testing.
 */

// Define the Gemini API endpoint
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

// --- IMPORTANT: CONFIGURE ALLOWED ORIGINS ---
// List the specific URLs of your frontend application.
// Include 'null' for local `file://` testing.
// Include 'http://localhost:xxxx' or 'http://127.0.0.1:xxxx' if using a local dev server.
// !! REPLACE with your actual frontend URL(s) before deploying publicly !!
const allowedOrigins = [
     'null', // Allows testing by opening the HTML file directly (file://)
     // 'http://localhost:8080', // Example: If you use a local server
     // 'http://127.0.0.1:8080',
     // 'https://your-deployed-frontend.pages.dev', // Example: Your production URL
     // 'https://www.yourdomain.com'                // Example: Another production URL
];
// -----------------------------------------

export default {
    async fetch(request, env, ctx) {
        // Handle CORS Preflight request (OPTIONS)
        if (request.method === 'OPTIONS') {
            return handleOptions(request);
        }

        // Only allow POST requests for chat messages
        if (request.method !== 'POST') {
            return new Response('Method Not Allowed', { status: 405, headers: corsHeaders(request) });
        }

        // Check for JSON Content-Type
        const contentType = request.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
            return new Response('Expected Content-Type: application/json', { status: 415, headers: corsHeaders(request) });
        }

        // --- Get API Key from Worker Secrets ---
        const apiKey = env.GEMINI_API_KEY;
        if (!apiKey) {
            console.error("FATAL: GEMINI_API_KEY secret not set in Cloudflare Worker environment.");
            return new Response('API Key configuration error on server', { status: 500, headers: corsHeaders(request) });
        }

        try {
            // --- Parse Request Body ---
            const requestBody = await request.json();
            const userMessage = requestBody.message;

            if (!userMessage || typeof userMessage !== 'string' || userMessage.trim() === '') {
                return new Response('Invalid or empty message in request body. Expected { "message": "..." }', { status: 400, headers: corsHeaders(request) });
            }

            // --- Construct Gemini Payload ---
            const geminiPayload = {
                contents: [
                    { role: 'user', parts: [{ text: userMessage }] }
                    // Add history here if needed, sent from frontend
                ],
                systemInstruction: {
                    parts: [{ text: "You are a helpful assistant with a slightly quirky, retro-tech personality, like a Teenage Engineering device. Keep responses concise and friendly." }]
                },
                // Optional: Add generationConfig or safetySettings if desired
                // generationConfig: { "temperature": 0.7, "maxOutputTokens": 250 },
            };

            // --- Call Gemini API ---
            const geminiResponse = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(geminiPayload),
            });

            // --- Handle Gemini Response ---
            if (!geminiResponse.ok) {
                const errorText = await geminiResponse.text();
                console.error(`Gemini API Error (${geminiResponse.status}): ${errorText}`);
                return new Response(`Gemini API Error: ${geminiResponse.statusText}`, { status: geminiResponse.status, headers: corsHeaders(request) });
            }

            const geminiData = await geminiResponse.json();

            // --- Extract Text ---
            const botText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;

            // Check for blocked response
             if (!botText && geminiData?.promptFeedback?.blockReason) {
                console.warn(`Gemini response blocked: ${geminiData.promptFeedback.blockReason}`);
                return new Response("My safety filters prevented a response to that.", { headers: corsHeaders(request, { 'Content-Type': 'text/plain' }) });
            }

            // --- Return Success Response ---
            return new Response(botText || "Sorry, I couldn't generate a response.", { headers: corsHeaders(request, { 'Content-Type': 'text/plain' }) });

        } catch (error) {
            console.error("Worker Error:", error);
            if (error instanceof SyntaxError) {
                 return new Response('Invalid JSON in request body', { status: 400, headers: corsHeaders(request) });
            }
            return new Response('Internal Server Error', { status: 500, headers: corsHeaders(request) });
        }
    },
};

// --- CORS Helper Functions ---
function corsHeaders(request, additionalHeaders = {}) {
    const origin = request.headers.get('Origin');
    let headers = {
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400', // Cache preflight for 1 day
        ...additionalHeaders,
    };

    // Set Allow-Origin dynamically based on the request origin vs allowedOrigins list
    if (origin && allowedOrigins.includes(origin)) {
        headers['Access-Control-Allow-Origin'] = origin;
    } else if (!origin && allowedOrigins.includes('null')) {
        // Allow 'null' origin (needed for file:// URIs) if explicitly listed
        headers['Access-Control-Allow-Origin'] = 'null';
    } else {
        // Origin not allowed or not present (and null not allowed).
        // Do not add Allow-Origin header - browser will block.
        console.warn(`Origin ${origin || 'undefined'} not in allowedOrigins list.`);
    }
    return headers;
}

function handleOptions(request) {
    // Respond to OPTIONS preflight request with appropriate CORS headers
    const headers = corsHeaders(request);
    return new Response(null, { status: 204, headers: headers });
}
