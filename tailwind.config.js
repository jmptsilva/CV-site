/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    colors: {
      "light-sea-green": "#15abab",
      white: "#fff",
      "granny-smith-apple": "#acd68b",
      "bleu-de-france": "#3a8def",
      "mystic-color": "#e13f79",
    },
    extend: {},
  },
  plugins: [],
};
