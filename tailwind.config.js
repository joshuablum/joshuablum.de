const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  // darkMode: 'media',
  purge: {
    content: [
      './resources/**/*.antlers.html',
      './resources/**/*.blade.php',
      './content/**/*.md'
    ]
  },
  important: true,
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        'hot-pink': '#fd2d78'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
