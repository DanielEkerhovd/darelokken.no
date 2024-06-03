/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          lightFocus: "#F1E5D1",
          background: "#987070",
          mediumFocus: "#DBB5B5",
          darkFocus: "#C39898",
        },
        fontFamily: {
          poppins: ['Poppins', "sans-serif"],
          sans: ['"Open Sans"', "sans-serif"],
        },
      },
    },
    plugins: [],
  }; 