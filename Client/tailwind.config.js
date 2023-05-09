/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}