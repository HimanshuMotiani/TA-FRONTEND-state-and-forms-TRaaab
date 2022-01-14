module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        back: '#d8fcfd',
        secondary: '#C4A462',
       }),
    },
    textColor: {
      primary: '#112337',
      secondary: '#C4A462',
      tertiary: '#6C77A5',
      white:'#FFFFFF'
    },
    flex: {
      45: '0 1 45%',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
