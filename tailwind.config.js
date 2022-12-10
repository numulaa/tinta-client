/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx}",
    "./src/pages/*.{js,jsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightOrange: "rgb(229,140,55)",
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 89%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        darkBlue: "hsl(228, 39%, 23%)",
        veryGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        fromGradient: "rgba(0, 0, 0, 0.65) 0%",
        toGradient: "rgba(0, 0, 0, 0) 100%",
      },
    },
  },
  plugins: [],
};
