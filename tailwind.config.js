/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      colors: {
        ivory: "#f6f3ee",
        bone: "#ece7df",
        ink: "#1a1a1a",
        gold: "#a38a5f",
      },
    },
  },
  plugins: [],
};
