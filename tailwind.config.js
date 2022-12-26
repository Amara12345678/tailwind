/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Montserrat"],
      },
      fontSize: {
        "2xs": "0.65rem",
      },
      colors: {
        dark: "#181818",
        primary: "#d29e0e",
        secondary: "#e5001c",
      },
    },
  },
  plugins: [],
};
