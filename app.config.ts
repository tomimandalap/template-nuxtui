import { items } from "@/menus"

export default defineAppConfig({
  menus: items,
  // sidebar: {
  //   base: 'fixed top-0 left-0 z-40 sm:w-64 w-full h-screen bg-white border-r dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-transform ease-in-out delay-100',
  //   show: 'sm:translate-x-0',
  //   hide: '-translate-x-full hidden',
  //   container: {
  //     base: 'h-full px-3 py-20 overflow-y-auto bg-white dark:bg-gray-800',
  //     list: 'space-y-2 font-medium'
  //   },
  //   item: {
  //     title: 'mb-3.5 text-base font-semibold'
  //   }
  // },
  ui: {
    strategy: 'override',
    size: 'md',
    primary: 'blue',
    accordion: {
      "item": {
        "base": "bg-gray-50/30 px-6 pt-3 mt-2.5 rounded-md",
      },
      "default": {
        "class": "py-3 w-full bg-transparent text-black hover:text-blue-500",
      },
    }
  }
})