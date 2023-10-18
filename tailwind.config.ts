import type { Config } from 'tailwindcss'
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'


export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections at https://icones.js.org/ when you want to use
      collections: getIconCollections(['iconoir']),
    }),
  ],
}