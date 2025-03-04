/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#ebf8ff",
                secondary: {
                    100: "#3490dc",
                    200: "#1d4e89",
                },
                // Primary Colors
                "dark-green": "#2E4A3B",
                "charcoal-black": "#333333",
                "dark-brown": "#5E4B3C",
                "deep-red": "#B93B3B",

                // Secondary/Accent Colors
                yellow: "#FFCC00",
                "steel-gray": "#7A7A7A",
                "muted-gold": "#C6A400",

                // Background Colors
                "midnight-blue": "#1E2A47",
                "army-green": "#4B5D16",

                // Text Colors
                "light-gray": "#D1D1D1",
                white: "#FFFFFF",

                // Button Colors
                "dark-red-orange": "#FF4C00",
                "olive-green": "#6D7C29",
            },
        },
    },
    plugins: [],
};
