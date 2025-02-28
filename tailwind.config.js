/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#541472',
        secondary: '#841DAD',
        terceary: '#C7A4FF',
        background: '#1B1B2F',
      },
    },
  },
  plugins: [],
};