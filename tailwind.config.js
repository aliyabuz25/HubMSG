/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0d0630",
                accent: "#faff00",
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
            },
            animation: {
                'scroll': 'scroll 30s linear infinite',
                'fly-away': 'flyAway 1s forwards',
                'pulse-slow': 'pulse 3s infinite',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                flyAway: {
                    '0%': { transform: 'translate(0, 0)', opacity: '1' },
                    '100%': { transform: 'translate(100px, -100px)', opacity: '0' },
                }
            }
        },
    },
    plugins: [],
}
