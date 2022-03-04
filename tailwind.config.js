module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        60: "60",
      },
      screens: {
        "3xl": "1600px",
        "2.5xl": "1570px",
        "2.25xl": "1555px",
        "8xl": "1255px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
