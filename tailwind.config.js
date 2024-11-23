/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7F00F5',
        secondary: '#00D4FF',
        background: '#1B1B2F',
      },
    },
  },
  plugins: [],
};