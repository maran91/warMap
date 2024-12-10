/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],  theme: {
    extend: {
        colors: {
            'primary': '#ebf8ff',
            'secondary': {
                100: '#3490dc',
                200: '#1d4e89',
            },
        },
    },
  },
  plugins: [],
}

