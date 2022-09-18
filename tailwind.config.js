/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ["Space Mono", "monospace"],
      },
      colors: {
        darkGreen: "hsl(183, 100%, 15%)",
        grayishCyan: "hsl(189, 41%, 97%)",
        darkCyan: "hsl(186, 14%, 43%)",
        cyanGray: "hsl(184, 14%, 56%)",
        strongCyan: "hsl(172, 67%, 45%)",
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        18: "5rem",
        20: "8rem",
        128: "32rem",
        144: "36rem",
      },
      fontSize: {
        "10xl": "30px",
      },
      boxShadow: {
        "3xl": "0px 0px 18px -10px hsl(186, 14%, 43%)",
      },
    },
  },
  plugins: [],
};
