/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        enterup: {
          "0%": { opacity: 0, transform: "translateY(-500%)" },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        enterup: "enterup 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
