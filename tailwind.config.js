/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html"],
    theme: {
      extend: {
        colors: {
          lightFocus: "#F1E5D1",
          background: "#987070",
          mediumFocus: "#DBB5B5",
          darkFocus: "#C39898",
        },
        fontFamily: {
          sans: ['Poppins', "sans-serif"],
        },
      },
    },
    plugins: [],
  }; 