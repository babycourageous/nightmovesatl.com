const twForms = require('@tailwindcss/custom-forms')

function owl({ addUtilities, config, e }) {
  const newUtilities = {}
  const spacing = config('theme.spacing')

  Object.keys(spacing).forEach((key) => {
    const className = `.${e(`o-${key}`)} > * + *`
    const marginTop = spacing[key]

    // Horizontal spacing too!
    const classNameHorizontal = `.${e(`oh-${key}`)} > * + *`
    const marginLeft = spacing[key]

    newUtilities[className] = { marginTop }
    newUtilities[classNameHorizontal] = { marginLeft }
  })

  addUtilities(newUtilities, ['responsive'])
}

module.exports = {
  theme: {
    fontFamily: {
      serif: 'Nixie One, serif',
      sans: 'PT Sans, sans-serif',
    },
    colors: {
      'gray-darkest': '#171717',
      'gray-dark': '#28211F',
      'pink-dark': '#D834A5',
      'purple-light': '#D393FB',
      purple: '#8484FC',
      white: '#fff',
    },
    extend: {},
  },
  variants: {},
  plugins: [twForms, owl],
}
