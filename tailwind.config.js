module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     extend: {
      zIndex: {
        '60': '60',
      },
      screens: {
        '3xl': '1600px',
        '2.5xl': '1570px',
        '2.25xl': '1555px',


      },
     },
  },
  variants: {
    extend: {},
  },
  plugins: []
}