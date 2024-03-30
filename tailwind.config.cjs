/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
        noto: ["Noto Serif JP", "sans-serif"],
        jet: ["JetBrains Mono", "monospace"],
      },

    },
  },
  plugins: [],
}