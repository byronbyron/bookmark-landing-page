const colors = require('tailwindcss/colors');
module.exports = {
  purge: [
    './**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['"Rubik"'],
    },
    extend: {
      colors: {
        blue: 'hsl(231, 69%, 60%)',
        red: 'hsl(0, 94%, 66%)',
        gray: 'hsl(229, 8%, 60%)',
        dark: 'hsl(229, 31%, 21%)',
      },
      fontSize: {
        md: '0.9375rem',
      },
      spacing: {
        '26': '6.5rem',
      },
      borderRadius: {
      }
    },
  },
  variants: {
    extend: {
      cursor: ['hover', 'focus']
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
