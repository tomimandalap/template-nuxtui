/*
NOTE!
{
  title: 'Dashboard', // optional
  label: 'Analytics', // required
  slot: 'admin-analytics',  // required, mustbe unique value
  icon: 'i-iconoir-graph-up', // optional
  to: '/admin', // optional when children are empty list submenus
  childs: [], // optional, but if exist must be an array of SubMenu
}
*/

import type { Menu } from "@/types/menus"

const menus: Array<Menu> = [
  {
    title: 'Dashboard',
    label: 'Analytics',
    slot: 'admin-analytics',
    icon: 'i-iconoir-graph-up',
    to: '/admin',
  },
  {
    label: 'Products',
    slot: 'admin-products',
    icon: 'i-iconoir-box-iso',
    to: '/admin/products',
    count: 10,
  },
  {
    title: 'Documentation',
    slot: 'admin-forms',
    label: 'Forms',
    icon: 'i-iconoir-component',
    childs: [
      {
        label: 'Badge',
        to: '/admin/badge',
      },
      {
        label: 'Button',
        to: '/admin/button',
        count: 2,
      },
    ],
  },
  {
    label: 'Navigations',
    slot: 'admin-navigation',
    icon: 'i-iconoir-book',
    childs: [
      {
        label: 'Hero',
        to: '/admin/hero',
        icon: 'i-iconoir-share-android',
        count: 100,
      },
    ],
  },
  {
    title: 'Settings',
    slot: 'admin-users',
    label: 'Users',
    icon: 'i-iconoir-group',
    to: '/admin/users',
  },
]

export default defineAppConfig({
  menus,
  navbar: {
    base: 'fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800',
    container: 'px-3 py-5 lg:px-5 lg:pl-3',
    wrapper: 'flex items-center justify-between',
  },
  sidebar: {
    base: 'fixed top-0 left-0 z-40 sm:w-64 w-full h-screen border-r border-gray-200 dark:border-gray-800 transition-transform ease-in-out delay-100',
    title: 'my-2.5 text-base font-semibold',
    show: 'sm:translate-x-0',
    hide: '-translate-x-full hidden',
    container: {
      base: 'h-full px-3 py-20 overflow-y-auto bg-white dark:bg-gray-900',
      list: 'space-y-2 font-medium'
    },
    link: {
      base: 'flex items-center text-black dark:text-blue-400 hover:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-md px-2.5 transition-all ',
      active: 'bg-blue-50 dark:bg-blue-950 text-blue-500 dark:text-blue-400 cursor-no-drop',
      wrapper: 'flex items-center w-full',
      icon: 'w-5 h-5',
      label: 'text-sm truncate'
    },
  },
  ui: {
    strategy: 'override',
    size: 'md',
    primary: 'blue',
    accordion: {
      "item": {
        "base": "bg-gray-300/10 dark:bg-gray-800/10 mt-1 rounded-md",
        "padding": "pt-3 pb-1 px-3",
      },
      "default": {
        "class": "py-3 w-full bg-transparent dark:bg-transparent text-black hover:text-blue-500",
      },
    },
    toggle: {
      "default": {
        "onIcon": 'i-iconoir-sun-light',
        "offIcon": 'i-iconoir-moon-sat',
      },
    }
  }
})