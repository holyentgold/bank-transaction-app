/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#001F3F",
        secondary:  "#FFD700",
        tertiary:  '#32004b',
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimGolden:   'rgba(255, 223, 0, 0.1)'
        ,
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

