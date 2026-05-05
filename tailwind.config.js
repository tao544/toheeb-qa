/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          primary: "#0f6e56",
          light: "#e8f4f0",
          muted: "#1d9e75",
        },
        cream: "#f8f7f4",
        dark: "#1a1a1a",
        muted: "#6b6b6b",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Jost'", "sans-serif"],
      },
    },
  },
  plugins: [],
}