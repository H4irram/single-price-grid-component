/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      cyan: "hsl(179, 62%, 43%)",
      lightCyan: "HSL(179, 47%, 51%)",
      brightYellow: "hsl(71, 73%, 54%)",
      lightGray: "hsl(204, 43%, 85%)",
      grayishBlue: "hsl(218, 22%, 67%)",
    },
    fontFamily: {
      karla: ["Karla", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
