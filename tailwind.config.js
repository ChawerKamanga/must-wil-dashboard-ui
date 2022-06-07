module.exports = {
  content: ["./src/*.html"],
  theme: {
    screens: {
      md: '768px',
      lg: '900px',
      xl: '1240px',
    },
    extend: {
      colors: {
        darkGray: 'hsl(257, 7%, 63%)',
        lightGray: 'hsl(0, 0%, 96%)',
        textLightGray: 'hsl(0, 0%, 51%)',
        progressBraLightGray: 'hsl(0, 0%, 85%)',
        darkBlue: 'hsl(218, 37%, 44%)',
        veryDarkBlue: 'hsl(218, 43%, 23%)',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
