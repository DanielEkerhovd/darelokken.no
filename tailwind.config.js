/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html"],
    theme: {
      extend: {
        colors: {
          background: "#F1E5D1",
          lightFocus: "#987070",
          darkFocus: "#DBB5B5",
          mediumFocus: "#C39898"
        },
        fontFamily: {
          sans: ["Poppins", "sans-serif"],
        }
      },
    },
    plugins: [],
  }; 