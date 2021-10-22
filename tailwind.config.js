module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        quicksand : ['Quicksand']
      },
      boxShadow: {
        blue: '0 4px 14px 0 rgba(19, 51, 81, 0.39)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      fontSize:['hover'],
    },
  },
  plugins: [],
}
