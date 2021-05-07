
module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      sans:['Montserrat', 'sans-serif'],
    },
    extend: {
      colors:{
      'st-gray':'#3A3A3A',
      'st-yellow':'#FFC600'
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
