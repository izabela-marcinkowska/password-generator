/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Times New Roman", "serif"],
      serif: ["Menlo", "sans-serif"],
    },
    colors: {
      success: "#E63946",
      white: "#F1FAEE",
      "light-blue": "#A8DADC",
      "middle-blue": "#457B9D",
      "dark-blue": "#1D3557",
    },
    extend: {},
  },
  plugins: [],
};
