/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js, jsx, ts, tsx}",
    "./components/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(243, 87%, 12%)",
        "desat-blue": "hsl(238, 22%, 44%)",
        "bright-blue": "hsl(224, 83%, 58%)",
        "moderate-cyan": "hsl(170, 45%, 43%)",
        "grayish-blue": "hsl(240, 75%, 98%)",
        "light-gray": "hsl(0, 0, 75%)",
      },
      fontFamily: {
        "raleway": ["Raleway", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}
