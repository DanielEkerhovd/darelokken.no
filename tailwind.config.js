/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html"],
    theme: {
      extend: {
        colors: {
          lightFocus: "#F1E5D1",
          darkFocus: "#987070",
          mediumFocus: "#DBB5B5",
          background: "#C39898"
        },
        fontFamily: {
          sans: ["Poppins", "sans-serif"],
        }
      },
    },
    plugins: [],
  }; 