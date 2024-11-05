/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    extend: {
      colors: {
        primary: "#4CAF50 ",
        secondary: "#009688 ",
        accent: "#FFC107 ",
        background: "#F5F5F5 ",
        text: "#212121 ",
        disabled: "#BDBDBD ",
        error: "#F44336 ",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        outfit: ["Outfit"],
      },
    },
  },
  plugins: [],
};
