/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        enterup: {
          "0%": { transform: "translateY(-700%)" },
          "100%": {  },
        },
      },
      animation: {
        enterup: "enterup 1s ease-in-out",
      },
      fontFamily: {
        manrope: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
};
