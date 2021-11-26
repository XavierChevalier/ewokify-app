const tailwindcss = require('../tailwind.config')
require('./../src/assets/styles/index.scss')

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {name: 'light', value: tailwindcss.theme.colors.white.dark},
      {name: 'dark', value: tailwindcss.theme.colors.black.light},
    ],
  },
}

export const decorators = [
  (story) => ({
    components: {story},
    template: '<story class="leading-tight" />'
  })
]
