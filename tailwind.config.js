/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        baloo: ["Baloo 2", "cursive"],
        raleway: ['Raleway', 'sans-serif'],
        graphik: ['Graphik'],
        canela: ['"Canela Text Trial"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      animation: {
        "move-up-down": "moveUpDown 4.5s infinite ease-in-out",
      },
      keyframes: {
        moveUpDown: {
          "0%, 100%": { transform: "translateY(-4px)" },
          "50%": { transform: "translateY(50px)" },
        },
      },
    }, 
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
};
