/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        boxShadow: {},
        borderWidth: {
          1: "1px",
        },
        backgroundColor: {
          Light_brown: "#e9c989",
        },
        textColor: {
          red: "#AD0000",
          white: "#ffffff",
          gray: "#d9d9d9",
        },
      },
    },
    plugins: [],
  };
  