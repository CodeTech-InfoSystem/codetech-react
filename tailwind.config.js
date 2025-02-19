/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure this path is correct
  theme: {
    extend: {
      fontFamily: {
        baloo: ["Baloo 2", "cursive"], // Add Baloo font
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