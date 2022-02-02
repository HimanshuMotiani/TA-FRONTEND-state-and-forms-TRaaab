module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex:{
        33:"0 1 33%",
        65:'0 1 65%',
        48:'0 1 48%'
      },
      backgroundColor:{
        primary:'#1074f6',
        box:'#f9f9fb'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
