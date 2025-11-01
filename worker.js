
const dashboard = \`
<!DOCTYPE html>
<html class="dark" lang="en">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>PorchPass Dashboard</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <style>
        .material-symbols-outlined {
          font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24;
          font-size: 24px;
        }
      </style>
    <script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "primary": "#3B82F6",
                "primary-dark": "#60A5FA",
                "background-light": "#F8FAFC",
                "background-dark": "#0B1120",
                "card-light": "#FFFFFF",
                "card-dark": "#1E293B",
                "muted-light": "#64748B",
                "muted-dark": "#94A3B8",
              },
              fontFamily: {
                "display": ["Inter", "sans-serif"]
              },
              borderRadius: {
                "DEFAULT": "0.5rem",
                "lg": "0.75rem",
                "xl": "1rem",
                "full": "9999px"
              },
            },
          },
        }
      </script>
    <style>
        body {
          min-height: max(884px, 100dvh);
        }
      </style>
</head>
<body class="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200">
    <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div class="flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm p-4 justify-between sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800">
            <div class="flex items-center gap-2">
                <div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 text-primary dark:text-primary-dark">
                    <span class="material-symbols-outlined !text-2xl">local_shipping</span>
                </div>
                <h1 class="text-slate-900 dark:text-white text-xl font-bold">PorchPass</h1>
            </div>
            <div class="flex items-center justify-end">
                <button class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-transparent text-slate-500 dark:text-slate-400 gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                    <span class="material-symbols-outlined">notifications</span>
                </button>
            </div>
        </div>
        <div class="flex-grow p-4 pb-32">
            <div class="mb-6">
                <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Hello, Alex</h2>
                <p class="text-muted-light dark:text-muted-dark mt-1">You have 3 packages on the way.</p>
            </div>
            <div class="mb-8 rounded-xl bg-card-light dark:bg-card-dark border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div class="p-5">
                    <div class="flex items-start gap-4">
                        <div class="flex-shrink-0 size-11 flex items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-500 dark:text-amber-400">
                            <span class="material-symbols-outlined">crisis_alert</span>
                        </div>
                        <div class="flex-1">
                            <p class="font-semibold text-slate-900 dark:text-white">Amazon package arriving today</p>
                            <p class="text-sm text-muted-light dark:text-muted-dark mt-1">Generate a One-Time Access Code for the driver to ensure a secure delivery.</p>
                        </div>
                    </div>
                </div>
                <div class="bg-slate-50 dark:bg-slate-900/50 px-5 py-3">
                    <button class="w-full flex items-center justify-center gap-2 rounded-lg h-11 px-4 bg-primary text-white text-sm font-semibold shadow-sm hover:bg-primary/90 transition-colors" onclick="window.location.href='/generate-pass'">
                        <span class="material-symbols-outlined !text-xl">key</span>
                        <span>Generate Secure Code</span>
                    </button>
                </div>
            </div>
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-bold text-slate-900 dark:text-white">Package Status</h3>
                <a class="text-sm font-medium text-primary dark:text-primary-dark hover:underline" href="#">View All</a>
            </div>
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-4 rounded-xl bg-card-light dark:bg-card-dark border border-slate-200 dark:border-slate-800 p-4 shadow-sm" onclick="window.location.href='/package-details'">
                    <div class="flex items-center gap-4">
                        <div class="flex items-center justify-center size-12 rounded-lg bg-slate-100 dark:bg-slate-700">
                            <img alt="Amazon logo" class="h-8 w-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN8J8lwg2moyVL3oyEqvgGxwHWKERL_Fn4gW4TA0adr9GNUJc3xW6UfYEzG9tUweEA86-JYcBYsdbv4KXPh9-a94aA5t34HDkhC3_Jmorn6d7JvO8A9EDyfXfoz-Sqv6cHjSp7R7PsIFMCStqKphPo5ua21C399PS3cdErQAeJ4KOvg4E8lDD_Lr339TU9APmKSdaHqc5Ye79zkC7gMdfJH0KF2wTqOMXFmIUdkDZP5DKbYFszIeznuZ5DfP7oASeEB2V-r4s87-U"/>
                        </div>
                        <div class="flex-1">
                            <p class="font-semibold text-slate-800 dark:text-white">Amazon</p>
                            <p class="text-sm text-muted-light dark:text-muted-dark">#701-1234567-8901234</p>
                        </div>
                        <div class="text-right">
                            <p class="font-semibold text-slate-800 dark:text-white">Today</p>
                            <p class="text-sm text-muted-light dark:text-muted-dark">by 8:00 PM</p>
                        </div>
                    </div>
                    <div class="relative pt-4">
                        <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                            <div class="bg-amber-500 h-1.5 rounded-full" style="width: 75%"></div>
                        </div>
                        <div class="absolute -top-1.5 w-full flex justify-between items-center px-0.5">
                            <div class="relative">
                                <div class="size-2.5 rounded-full bg-amber-500 ring-2 ring-card-light dark:ring-card-dark"></div>
                            </div>
                            <div class="relative">
                                <div class="size-2.5 rounded-full bg-amber-500 ring-2 ring-card-light dark:ring-card-dark"></div>
                                <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 w-max px-2 py-1 bg-slate-800 dark:bg-slate-50 text-white dark:text-slate-900 text-xs font-semibold rounded-md">Out for Delivery</div>
                            </div>
                            <div class="relative">
                                <div class="size-2.5 rounded-full bg-slate-200 dark:bg-slate-700 ring-2 ring-card-light dark:ring-card-dark"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4 rounded-xl bg-card-light dark:bg-card-dark border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
                    <div class="flex items-center gap-4">
                        <div class="flex items-center justify-center size-12 rounded-lg bg-slate-100 dark:bg-slate-700">
                            <img alt="FedEx logo" class="h-8 w-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8PVu7H1gF-PretaF42kirc6wHVgJCqJ37PkUMxPh8b4crEUnR1OsYXPeW0GN8-mAwy159_kt1a3UrxK5P3yvbpjESfgd6B5U4EIGmECApPcynkRC2Z2j7Z-k1ncTmyf3UVxO32OGaqpaPni4j0R-9KeEFX62bu6rygg932rcFW1o6PIJoe-RzSHz7hPXkja8uexvgEytMT5Sn3HiIvwVtaoINTTmMf7qLz6JYc8AJjM94rX5PHr8FhbVfNcC_R2APxrllO4uZsso"/>
                        </div>
                        <div class="flex-1">
                            <p class="font-semibold text-slate-800 dark:text-white">FedEx</p>
                            <p class="text-sm text-muted-light dark:text-muted-dark">#1234 5678 9012</p>
                        </div>
                        <div class="text-right">
                            <p class="font-semibold text-slate-800 dark:text-white">Tomorrow</p>
                            <p class="text-sm text-muted-light dark:text-muted-dark">by 5:00 PM</p>
                        </div>
                    </div>
                    <div class="relative pt-4">
                        <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                            <div class="bg-blue-500 h-1.5 rounded-full" style="width: 50%"></div>
                        </div>
                        <div class="absolute -top-1.5 w-full flex justify-between items-center px-0.5">
                            <div class="relative">
                                <div class="size-2.5 rounded-full bg-blue-500 ring-2 ring-card-light dark:ring-card-dark"></div>
                            </div>
                            <div class="relative">
                                <div class="size-2.5 rounded-full bg-blue-500 ring-2 ring-card-light dark:ring-card-dark"></div>
                                <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 w-max px-2 py-1 bg-slate-800 dark:bg-slate-50 text-white dark:text-slate-900 text-xs font-semibold rounded-md">In Transit</div>
                            </div>
                            <div class="relative">
                                <div class="size-2.5 rounded-full bg-slate-200 dark:bg-slate-700 ring-2 ring-card-light dark:ring-card-dark"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4 rounded-xl bg-card-light dark:bg-card-dark border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
                    <div class="flex items-center gap-4">
                        <div class="flex items-center justify-center size-12 rounded-lg bg-slate-100 dark:bg-slate-700">
                            <img alt="UPS logo" class="h-8 w-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKv8WigZl316FHyC2EoUSLQfR3kUL3B7XpKyIEhXvroH3UFNFqKIrXZt1YcEnL3xwQEXlzuSG4kXBridkSk3k75PKNJTgV_r8lbaYB1vrv8bZ5LBi4RLWNU6zmTwzQjK4swEdRA9HyvJLZvJ4A5zDMlrroWwmROvYdfWWx8C5erRXs9W8lc8pin7qHWRfA5aqewr6AdzqQQd9mmXwz97xOySzmqe95URPun-I3Uzq66x0QMzl2v9VB_EK0eyHGEKV1Ag4Wx8mKPTc"/>
                        </div>
                        <div class="flex-1">
                            <p class="font-semibold text-slate-800 dark:text-white">UPS</p>
                            <p class="text-sm text-muted-light dark:text-muted-dark">#1Z9999999999999999</p>
                        </div>
                        <div class="text-right">
                            <p class="font-semibold text-slate-800 dark:text-white">Friday</p>
                            <p class="text-sm text-muted-light dark:text-muted-dark">by End of Day</p>
                        </div>
                    </div>
                    <div class="relative pt-4">
                        <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                            <div class="bg-blue-500 h-1.5 rounded-full" style="width: 25%"></div>
                        </div>
                        <div class="absolute -top-1.5 w-full flex justify-between items-center px-0.5">
                            <div class="relative">
                                <div class="size-2.5 rounded-full bg-blue-500 ring-2 ring-card-light dark:ring-card-dark"></div>
                                <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 w-max px-2 py-1 bg-slate-800 dark:bg-slate-50 text-white dark:text-slate-900 text-xs font-semibold rounded-md">Shipped</div>
                            </div>
                            <div class="relative">
                                <div class="size-2.5 rounded-full bg-slate-200 dark:bg-slate-700 ring-2 ring-card-light dark:ring-card-dark"></div>
                            </div>
                            <div class="relative">
                                <div class="size-2.5 rounded-full bg-slate-200 dark:bg-slate-700 ring-2 ring-card-light dark:ring-card-dark"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed bottom-4 left-4 right-4 z-10">
            <div class="flex h-16 items-center justify-around rounded-full bg-card-light/80 dark:bg-card-dark/80 backdrop-blur-lg border border-slate-200 dark:border-slate-800 shadow-lg max-w-sm mx-auto">
                <button class="flex flex-col items-center justify-center gap-1 text-primary dark:text-primary-dark w-20">
                    <span class="material-symbols-outlined !font-normal" style="font-variation-settings: 'FILL' 1;">dashboard</span>
                    <span class="text-xs font-semibold">Dashboard</span>
                </button>
                <button class="flex flex-col items-center justify-center gap-1 text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary-dark w-20 transition-colors" onclick="window.location.href='/history'">
                    <span class="material-symbols-outlined !font-normal">history</span>
                    <span class="text-xs font-medium">History</span>
                </button>
                <button class="flex flex-col items-center justify-center gap-1 text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary-dark w-20 transition-colors" onclick="window.location.href='/access'">
                    <span class="material-symbols-outlined !font-normal">key</span>
                    <span class="text-xs font-medium">Access</span>
                </button>
                <button class="flex flex-col items-center justify-center gap-1 text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary-dark w-20 transition-colors" onclick="window.location.href='/settings'">
                    <span class="material-symbols-outlined !font-normal">person</span>
                    <span class="text-xs font-medium">Profile</span>
                </button>
            </div>
        </div>
    </div>
</body>
</html>
\`;

const generatePass = \`
<!DOCTYPE html>
<html class="dark" lang="en">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>PorchPass - Generate Temporary Pass</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "primary": "#00C49A",
                "background-light": "#F7F8FC",
                "background-dark": "#0A1929",
                "card-light": "#FFFFFF",
                "card-dark": "#162B41",
                "text-primary-light": "#051A31",
                "text-primary-dark": "#FFFFFF",
                "text-secondary-light": "#5A6B80",
                "text-secondary-dark": "#A0B3CC",
              },
              fontFamily: {
                "display": ["Inter", "sans-serif"]
              },
              borderRadius: {
                "DEFAULT": "0.75rem",
                "lg": "1rem",
                "xl": "1.25rem",
                "full": "9999px"
              },
              boxShadow: {
                'card': '0px 8px 16px rgba(0, 0, 0, 0.05)',
              }
            },
          },
        }
      </script>
    <style>
        body {
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          min-height: 100dvh;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-text-primary-light dark:text-text-primary-dark">
    <div class="flex flex-col min-h-screen">
        <header class="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
            <button class="flex items-center justify-center text-text-secondary-light size-10 dark:text-text-secondary-dark" onclick="window.location.href='/'">
                <span class="text-2xl material-symbols-outlined">arrow_back</span>
            </button>
            <h1 class="flex-1 text-lg font-bold leading-tight tracking-tight text-center">Generate Temporary Pass</h1>
            <div class="size-10"></div>
        </header>
        <main class="flex-grow p-4 pb-28">
            <div class="flex flex-col gap-8">
                <section class="flex flex-col gap-4">
                    <div class="flex items-start gap-3">
                        <div class="flex items-center justify-center text-sm font-bold text-white rounded-full size-6 bg-primary">1</div>
                        <div>
                            <h2 class="text-xl font-bold leading-tight tracking-tight">Select a Package</h2>
                            <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark">Choose the delivery you want to grant access for.</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-3">
                        <div class="relative flex items-center gap-4 p-4 overflow-hidden transition-colors border-2 rounded-lg shadow-sm bg-card-light dark:bg-card-dark border-primary">
                            <div class="absolute top-0 right-0 p-1 text-white rounded-bl-lg bg-primary">
                                <span class="text-base material-symbols-outlined">check</span>
                            </div>
                            <div class="flex items-center justify-center rounded-full size-12 bg-primary/10">
                                <span class="text-3xl material-symbols-outlined text-primary">local_shipping</span>
                            </div>
                            <div class="flex-1">
                                <p class="font-semibold">Amazon</p>
                                <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark">#123-4567890-1234567</p>
                            </div>
                            <p class="text-sm font-medium text-right text-text-secondary-light dark:text-text-secondary-dark">Arriving<br/>Today</p>
                        </div>
                        <div class="flex items-center gap-4 p-4 transition-colors border rounded-lg shadow-sm bg-card-light dark:bg-card-dark border-slate-200 dark:border-slate-700">
                            <div class="flex items-center justify-center rounded-full size-12 bg-slate-100 dark:bg-slate-700">
                                <span class="text-3xl material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">inventory_2</span>
                            </div>
                            <div class="flex-1">
                                <p class="font-semibold">Walmart</p>
                                <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark">#987-6543210-9876543</p>
                            </div>
                            <p class="text-sm font-medium text-right text-text-secondary-light dark:text-text-secondary-dark">Arriving<br/>Tomorrow</p>
                        </div>
                    </div>
                </section>
                <section class="flex flex-col gap-4">
                    <div class="flex items-start gap-3">
                        <div class="flex items-center justify-center text-sm font-bold text-white rounded-full size-6 bg-primary">2</div>
                        <div>
                            <h2 class="text-xl font-bold leading-tight tracking-tight">Generate Pass</h2>
                            <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark">Create a single-use code that expires in 15 minutes.</p>
                        </div>
                    </div>
                    <div class="flex flex-col items-center gap-4 p-6 text-center border rounded-xl bg-card-light dark:bg-card-dark border-slate-200 dark:border-slate-700 shadow-card">
                        <div class="flex items-center justify-center">
                            <button class="px-6 py-3 font-semibold transition-colors rounded-full text-text-primary-light dark:text-text-primary-dark bg-slate-100 dark:bg-background-dark">Access Code</button>
                            <button class="px-6 py-3 font-semibold text-white transition-colors rounded-full bg-primary -ml-2.5">QR Code</button>
                        </div>
                        <div class="relative w-full aspect-square max-w-[200px] flex items-center justify-center">
                            <div class="absolute inset-0 border-4 rounded-full border-primary animate-pulse"></div>
                            <div class="absolute inset-2 bg-white rounded-full p-2.5 shadow-md">
                                <img alt="A QR code for package delivery access" class="w-full h-full rounded-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoa7Nxb7I4z5eTF0t7lrBmFzxefXxXbHo0trPX63xUCMk9Mg0bAnDiiq-kfbUUFxwuYD3wDYtE9P_nG9USFqkrC2l1Ne_YPs31a9_h44uw6-EbIHx2MQXplF-bsIoTqsMQQSbmuht3Qzt6NGsNmvydj2zU8AAacUeNy82P7t4NcJFy3j2rkKKgO9NjjZQ3P8qyHS4zMD1xLOrMy_Tw_E_a1f6z5wmaixEcn7a4XTLd1m2BeIOVnI0Wp4Yg_J543NrR2S57nO4Uh7Q"/>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 p-2 px-3 text-sm font-medium rounded-full bg-amber-400/20 text-amber-800 dark:text-amber-300 dark:bg-amber-400/10">
                            <span class="text-base material-symbols-outlined">timer</span>
                            <span>Expires in 14:32</span>
                        </div>
                    </div>
                </section>
                <section class="flex flex-col gap-4">
                    <div class="flex items-start gap-3">
                        <div class="flex items-center justify-center text-sm font-bold text-white rounded-full size-6 bg-primary">3</div>
                        <div>
                            <h2 class="text-xl font-bold leading-tight tracking-tight">Share with Carrier</h2>
                            <p class="text-sm text-text-secondary-light dark:text-text-secondary-dark">Add the pass to your delivery instructions.</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">
                        <button class="w-full flex items-center justify-center gap-3 py-4 text-base font-semibold text-white transition-all rounded-lg bg-primary hover:bg-opacity-90 active:scale-95">
                            <span class="text-xl material-symbols-outlined">add_notes</span>
                            <span>Add to Delivery Instructions</span>
                        </button>
                        <button class="w-full flex items-center justify-center gap-3 py-4 text-base font-semibold transition-all rounded-lg bg-card-light dark:bg-card-dark border border-slate-200 dark:border-slate-700 text-text-primary-light dark:text-text-primary-dark hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95">
                            <span class="text-xl material-symbols-outlined">share</span>
                            <span>Share Pass</span>
                        </button>
                    </div>
                </section>
            </div>
        </main>
        <footer class="fixed bottom-0 left-0 right-0 z-20 p-4 bg-transparent">
            <div class="flex items-center justify-around max-w-sm px-4 py-3 mx-auto rounded-full shadow-lg bg-card-light/90 dark:bg-card-dark/90 backdrop-blur-lg ring-1 ring-slate-200/50 dark:ring-slate-700/50">
                <a class="flex flex-col items-center gap-1 transition-colors text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary" href="/" onclick="window.location.href='/'">
                    <span class="text-2xl material-symbols-outlined">home</span>
                    <span class="text-xs font-medium">Home</span>
                </a>
                <a class="flex flex-col items-center gap-1 transition-colors text-primary" href="#">
                    <span class="text-2xl material-symbols-outlined">qr_code_scanner</span>
                    <span class="text-xs font-bold">Generate</span>
                </a>
                <a class="flex flex-col items-center gap-1 transition-colors text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary" href="/passes" onclick="window.location.href='/passes'">
                    <span class="text-2xl material-symbols-outlined">key</span>
                    <span class="text-xs font-medium">Passes</span>
                </a>
                <a class="flex flex-col items-center gap-1 transition-colors text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary" href="/settings" onclick="window.location.href='/settings'">
                    <span class="text-2xl material-symbols-outlined">settings</span>
                    <span class="text-xs font-medium">Settings</span>
                </a>
            </div>
        </footer>
    </div>
</body>
</html>
\`;

const packageDetails = \`
<!DOCTYPE html>
<html class="dark" lang="en">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>Package Details - PorchPass</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
    <script>
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "primary": "#007AFF",
                "background-light": "#F7F7F7",
                "background-dark": "#101622",
                "success": "#34C759",
                "text-light-primary": "#1C1C1E",
                "text-light-secondary": "#8E8E93",
                "text-dark-primary": "#FFFFFF",
                "text-dark-secondary": "#8E8E93",
                "card-light": "#FFFFFF",
                "card-dark": "#1C1C1E",
                "border-light": "#E5E5EA",
                "border-dark": "#38383A",
              },
              fontFamily: {
                "display": ["Inter", "sans-serif"]
              },
              borderRadius: {
                "DEFAULT": "0.5rem",
                "lg": "0.75rem",
                "xl": "1rem",
                "2xl": "1.25rem",
                "full": "9999px"
              },
            },
          },
        }
      </script>
    <style>
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          font-size: 24px;
        }
        .material-symbols-outlined.filled {
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
        }
      </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-text-light-primary dark:text-text-dark-primary">
    <div class="relative flex flex-col w-full h-full flex-grow">
        <header class="sticky top-0 z-10 flex items-center bg-background-light/80 dark:bg-background-dark/80 p-4 pb-3 backdrop-blur-sm">
            <button class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" onclick="window.location.href='/'">
                <span class="material-symbols-outlined">arrow_back_ios_new</span>
            </button>
            <h1 class="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em]">Package Details</h1>
            <div class="h-10 w-10 shrink-0"></div>
        </header>
        <main class="flex-grow px-4 pb-32 pt-4">
            <div class="flex flex-col gap-8">
                <div>
                    <h2 class="pb-3 text-lg font-bold leading-tight tracking-[-0.015em]">Visual Proof of Delivery (VPoD)</h2>
                    <div class="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-2xl bg-card-light shadow-sm dark:bg-card-dark">
                        <img class="h-full w-full object-cover" data-alt="Photo of a package delivered to a front porch" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmi9wSuMY91AecoSzv5KezTH1EVyitFdEKxeTE84MaXlqsDKECAEQU47YMr1dWBnECG04Xt3zzHyHTz6gGgq1Q9AxaREKTH4w6WIdwNkxctzSZp8OwlbItpQWnB77M3bMvLz2HaGtToY9mxlvEKikwvPnjqDCXWvhERCbq9_A2mZ68nfbxL0YvSQ5PvJfsydh2M1wwUcXZm-P_0TAKSEclGsvhJaHW_Luuq-i3GvA0k0aIXxei_IoO3zGMRCEA3QQTEZplDpA4h2U"/>
                        <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 pt-10">
                            <p class="text-sm font-medium text-white/90">Delivered</p>
                            <p class="text-lg font-bold text-white">Tue, Oct 26, 2:15 PM</p>
                        </div>
                    </div>
                </div>
                <div class="divide-y divide-border-light rounded-2xl bg-card-light p-4 shadow-sm dark:divide-border-dark dark:bg-card-dark">
                    <div class="flex items-center justify-between py-3">
                        <div>
                            <p class="text-sm text-text-light-secondary dark:text-text-dark-secondary">Tracking Number</p>
                            <p class="font-semibold">1Z9999W99999999999</p>
                        </div>
                        <button class="flex h-10 w-10 items-center justify-center rounded-full bg-background-light text-primary dark:bg-background-dark">
                            <span class="material-symbols-outlined !text-xl">content_copy</span>
                        </button>
                    </div>
                    <div class="flex items-center justify-between py-3">
                        <div>
                            <p class="text-sm text-text-light-secondary dark:text-text-dark-secondary">Carrier</p>
                            <p class="font-semibold">Amazon</p>
                        </div>
                        <img alt="Amazon Logo" class="h-6 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQFWb9OzrnrdX3joGvV7ER5RbewAP0IUOGCS_a3vaQaRPUJIuWHilks93KOdYOPdiOKO_JWjv1pvuo3d0mKF-DfHhGel49Mo7wtwd3UnbPZFpyCw8btEEhbdazBK0DBt736DdbY8h3F1M6M77IBQTl22FyfS0JIA52qPiv9CXs0UgmuOpUAE-gN2dIyOE0ny6G4eG7XHAOTBoYfb8FgWiwlY6b5YF7G8tKgn2x_8YJYjEqkICyP7owbLBxZwRL44yJGnJSAHfNTOs"/>
                    </div>
                    <div class="flex items-center justify-between py-3">
                        <div>
                            <p class="text-sm text-text-light-secondary dark:text-text-dark-secondary">Estimated Delivery</p>
                            <p class="font-semibold text-success">Delivered Tue, Oct 26</p>
                        </div>
                        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-success/10 text-success">
                            <span class="material-symbols-outlined !text-xl">task_alt</span>
                        </div>
                    </div>
                </div>
                <button class="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-base font-bold text-white shadow-sm" onclick="window.location.href='/generate-pass'">
                    <span class="material-symbols-outlined !text-xl">refresh</span>
                    Re-generate OTAC
                </button>
                <div>
                    <h2 class="pb-3 text-lg font-bold leading-tight tracking-[-0.015em]">Tracking History</h2>
                    <div class="rounded-2xl bg-card-light p-4 shadow-sm dark:bg-card-dark">
                        <div class="grid grid-cols-[auto_1fr] gap-x-4">
                            <div class="flex flex-col items-center">
                                <div class="flex h-8 w-8 items-center justify-center rounded-full bg-success text-white">
                                    <span class="material-symbols-outlined !text-lg">task_alt</span>
                                </div>
                                <div class="w-0.5 flex-grow bg-success"></div>
                            </div>
                            <div class="pb-6">
                                <p class="font-semibold">Delivered</p>
                                <p class="text-sm text-text-light-secondary dark:text-text-dark-secondary">Tue, Oct 26, 2:15 PM</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="flex h-8 w-8 items-center justify-center rounded-full bg-success text-white">
                                    <span class="material-symbols-outlined !text-lg">local_shipping</span>
                                </div>
                                <div class="w-0.5 flex-grow bg-border-light dark:bg-border-dark"></div>
                            </div>
                            <div class="pb-6">
                                <p class="font-semibold">Out for Delivery</p>
                                <p class="text-sm text-text-light-secondary dark:text-text-dark-secondary">Tue, Oct 26, 8:30 AM</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="flex h-8 w-8 items-center justify-center rounded-full bg-border-light text-text-light-secondary dark:bg-border-dark dark:text-text-dark-secondary">
                                    <span class="material-symbols-outlined !text-lg">package_2</span>
                                </div>
                                <div class="w-0.5 flex-grow bg-border-light dark:bg-border-dark"></div>
                            </div>
                            <div class="pb-6">
                                <p class="font-semibold">In Transit</p>
                                <p class="text-sm text-text-light-secondary dark:text-text-dark-secondary">Mon, Oct 25, 10:00 PM</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="flex h-8 w-8 items-center justify-center rounded-full bg-border-light text-text-light-secondary dark:bg-border-dark dark:text-text-dark-secondary">
                                    <span class="material-symbols-outlined !text-lg">receipt_long</span>
                                </div>
                            </div>
                            <div>
                                <p class="font-semibold">Label Created</p>
                                <p class="text-sm text-text-light-secondary dark:text-text-dark-secondary">Mon, Oct 25, 11:20 AM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer class="fixed bottom-0 left-0 right-0 z-10 px-4 pb-4 pt-2 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
            <div class="flex items-center justify-around rounded-full bg-card-light dark:bg-card-dark px-2 py-2 shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                <a class="flex flex-col items-center justify-center gap-1 rounded-full px-5 py-2 text-primary" href="/" onclick="window.location.href='/'">
                    <span class="material-symbols-outlined filled !text-2xl">home</span>
                    <span class="text-xs font-medium">Home</span>
                </a>
                <a class="flex flex-col items-center justify-center gap-1 rounded-full px-5 py-2 text-text-light-secondary dark:text-text-dark-secondary" href="/access" onclick="window.location.href='/access'">
                    <span class="material-symbols-outlined !text-2xl">key</span>
                    <span class="text-xs font-medium">Access</span>
                </a>
                <a class="flex flex-col items-center justify-center gap-1 rounded-full px-5 py-2 text-text-light-secondary dark:text-text-dark-secondary" href="/activity" onclick="window.location.href='/activity'">
                    <span class="material-symbols-outlined !text-2xl">notifications</span>
                    <span class="text-xs font-medium">Activity</span>
                </a>
                <a class="flex flex-col items-center justify-center gap-1 rounded-full px-5 py-2 text-text-light-secondary dark:text-text-dark-secondary" href="/settings" onclick="window.location.href='/settings'">
                    <span class="material-symbols-outlined !text-2xl">settings</span>
                    <span class="text-xs font-medium">Settings</span>
                </a>
            </div>
        </footer>
    </div>
</body>
</html>
\`;

const settings = \`
<!DOCTYPE html>
<html class="dark" lang="en">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>Settings - PorchPass</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
    <script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "primary": "#135bec",
                "background-light": "#f6f6f8",
                "background-dark": "#101622",
                "neutral-gray": "#757575",
                "success": "#2E7D32",
                "warning": "#C62828",
                "surface-light": "#ffffff",
                "surface-dark": "#1C2431",
                "border-light": "#E5E7EB",
                "border-dark": "#374151"
              },
              fontFamily: {
                "display": ["Inter", "sans-serif"]
              },
              borderRadius: {
                "DEFAULT": "0.5rem",
                "lg": "0.75rem",
                "xl": "1rem",
                "full": "9999px"
              },
            },
          },
        }
      </script>
    <style type="text/tailwindcss">
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .material-symbols-outlined.fill {
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      </style>
</head>
<body class="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200">
    <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden pb-28">
        <div class="flex items-center bg-background-light dark:bg-background-dark p-4 pb-3 justify-between sticky top-0 z-10 border-b border-border-light dark:border-border-dark">
            <div class="flex size-10 shrink-0 items-center justify-center text-slate-800 dark:text-white" onclick="window.location.href='/'">
                <span class="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
            </div>
            <h1 class="text-slate-800 dark:text-white text-lg font-semibold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Settings</h1>
        </div>
        <div class="flex flex-col gap-8 p-4">
            <div>
                <h2 class="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider pb-3 px-2">Automatic Tracking</h2>
                <div class="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm overflow-hidden">
                    <div class="flex items-start gap-4 p-4">
                        <div class="text-white flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 shrink-0 size-10 mt-1">
                            <span class="material-symbols-outlined text-primary text-2xl">forward_to_inbox</span>
                        </div>
                        <div class="flex flex-col justify-center flex-1">
                            <p class="text-base font-semibold leading-normal">Link Email Account</p>
                            <p class="text-neutral-gray text-sm font-normal leading-normal mt-1">Automatically import tracking info from your emails.</p>
                            <div class="mt-4">
                                <label class="sr-only" for="email">Email address</label>
                                <div class="relative">
                                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-neutral-gray text-xl">mail</span>
                                    <input class="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark py-2.5 pl-10 pr-4 text-base focus:ring-2 focus:ring-primary focus:border-primary" id="email" placeholder="Enter your email address" type="email"/>
                                </div>
                            </div>
                            <button class="mt-3 w-full bg-primary text-white font-semibold py-2.5 rounded-lg text-base hover:bg-primary/90 transition-colors">Connect Email</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 class="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider pb-3 px-2">General</h2>
                <div class="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm overflow-hidden divide-y divide-border-light dark:divide-border-dark">
                    <div class="flex items-center gap-4 px-4 min-h-[64px] py-2 justify-between">
                        <p class="text-base font-medium leading-normal">Notification Preferences</p>
                        <div class="shrink-0">
                            <div class="text-slate-400 dark:text-slate-500 flex size-7 items-center justify-center">
                                <span class="material-symbols-outlined">chevron_right</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 px-4 min-h-[64px] py-2 justify-between">
                        <p class="text-base font-medium leading-normal">Dark Mode</p>
                        <div class="shrink-0">
                            <label class="relative inline-flex cursor-pointer items-center">
                                <input checked="" class="peer sr-only" type="checkbox" value=""/>
                                <div class="peer h-6 w-11 rounded-full bg-slate-200 dark:bg-gray-700 after:absolute after:start-[2px] after:top-[2px] after:h-5 after-w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 class="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider pb-3 px-2">Integrations</h2>
                <div class="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm overflow-hidden divide-y divide-border-light dark:divide-border-dark">
                    <div class="flex items-center gap-4 px-4 min-h-[64px] py-2 justify-between">
                        <p class="text-base font-medium leading-normal">Smart Locks</p>
                        <div class="flex items-center gap-2">
                            <p class="text-sm text-neutral-gray">Connected</p>
                            <div class="text-slate-400 dark:text-slate-500 flex size-7 items-center justify-center">
                                <span class="material-symbols-outlined">chevron_right</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 px-4 min-h-[64px] py-2 justify-between">
                        <p class="text-base font-medium leading-normal">Security Cameras</p>
                        <div class="flex items-center gap-2">
                            <p class="text-sm text-neutral-gray">Not Connected</p>
                            <div class="text-slate-400 dark:text-slate-500 flex size-7 items-center justify-center">
                                <span class="material-symbols-outlined">chevron_right</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 class="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider pb-3 px-2">Account</h2>
                <div class="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm overflow-hidden divide-y divide-border-light dark:divide-border-dark">
                    <div class="flex items-center gap-4 px-4 min-h-[64px] py-2 justify-between">
                        <p class="text-base font-medium leading-normal">Manage Account</p>
                        <div class="shrink-0">
                            <div class="text-slate-400 dark:text-slate-500 flex size-7 items-center justify-center">
                                <span class="material-symbols-outlined">chevron_right</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 px-4 min-h-[64px] py-2 justify-between">
                        <p class="text-warning text-base font-medium leading-normal">Log Out</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed bottom-0 left-0 right-0 z-20 px-4 pb-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg">
            <div class="flex items-center justify-around rounded-full bg-surface-light dark:bg-surface-dark shadow-lg h-16">
                <a class="flex flex-col items-center justify-center text-neutral-gray dark:text-slate-400 w-1/4" href="/" onclick="window.location.href='/'">
                    <span class="material-symbols-outlined text-2xl">home</span>
                    <span class="text-xs font-medium">Home</span>
                </a>
                <a class="flex flex-col items-center justify-center text-neutral-gray dark:text-slate-400 w-1/4" href="/deliveries" onclick="window.location.href='/deliveries'">
                    <span class="material-symbols-outlined text-2xl">package_2</span>
                    <span class="text-xs font-medium">Deliveries</span>
                </a>
                <a class="flex flex-col items-center justify-center text-neutral-gray dark:text-slate-400 w-1/4" href="/access" onclick="window.location.href='/access'">
                    <span class="material-symbols-outlined text-2xl">key</span>
                    <span class="text-xs font-medium">Access</span>
                </a>
                <a class="flex flex-col items-center justify-center text-primary w-1/4" href="#">
                    <span class="material-symbols-outlined text-2xl fill">settings</span>
                    <span class="text-xs font-semibold">Settings</span>
                </a>
            </div>
        </div>
    </div>
</body>
</html>
\`;

const history = \`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>History</title>
</head>
<body>
    <h1>History Page</h1>
    <p>This page is under construction.</p>
    <a href="/">Go back to Dashboard</a>
</body>
</html>
\`;

const access = \`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Access</title>
</head>
<body>
    <h1>Access Page</h1>
    <p>This page is under construction.</p>
    <a href="/">Go back to Dashboard</a>
</body>
</html>
\`;

const passes = \`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Passes</title>
</head>
<body>
    <h1>Passes Page</h1>
    <p>This page is under construction.</p>
    <a href="/">Go back to Dashboard</a>
</body>
</html>
\`;

const deliveries = \`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deliveries</title>
</head>
<body>
    <h1>Deliveries Page</h1>
    <p>This page is under construction.</p>
    <a href="/">Go back to Dashboard</a>
</body>
</html>
\`;

const activity = \`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Activity</title>
</head>
<body>
    <h1>Activity Page</h1>
    <p>This page is under construction.</p>
    <a href="/">Go back to Dashboard</a>
</body>
</html>
\`;

export default {
    async fetch(request, env, ctx) {
      const url = new URL(request.url);
      const path = url.pathname;

      let response;

      if (path === '/') {
        response = new Response(dashboard, { headers: { 'Content-Type': 'text/html' } });
      } else if (path === '/generate-pass') {
        response = new Response(generatePass, { headers: { 'Content-Type': 'text/html' } });
      } else if (path === '/package-details') {
        response = new Response(packageDetails, { headers: { 'Content-Type': 'text/html' } });
      } else if (path === '/settings') {
        response = new Response(settings, { headers: { 'Content-Type': 'text/html' } });
      } else if (path === '/history') {
        response = new Response(history, { headers: { 'Content-Type': 'text/html' } });
      } else if (path === '/access') {
        response = new Response(access, { headers: { 'Content-Type': 'text/html' } });
      } else if (path === '/passes') {
        response = new Response(passes, { headers: { 'Content-Type': 'text/html' } });
      } else if (path === '/deliveries') {
        response = new Response(deliveries, { headers: { 'Content-Type': 'text/html' } });
      } else if (path === '/activity') {
        response = new Response(activity, { headers: { 'Content-Type': 'text/html' } });
      } else {
        response = new Response('Not Found', { status: 404 });
      }

      return response;
    },
  };
