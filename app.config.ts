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
  sidebar: {
    base: 'fixed top-0 left-0 z-40 sm:w-64 w-full h-screen bg-white border-r dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-transform ease-in-out delay-100',
    title: 'mb-3.5 text-base font-semibold',
    show: 'sm:translate-x-0',
    hide: '-translate-x-full hidden',
    container: {
      base: 'h-full px-3 py-20 overflow-y-auto bg-white dark:bg-gray-800',
      list: 'space-y-2 font-medium'
    },
    link: {
      base: 'flex items-center text-black hover:text-blue-500 hover:bg-blue-100 rounded-md px-2.5 transition-all ',
      active: 'bg-blue-50 text-blue-500 cursor-no-drop',
      wrapper: 'flex items-center w-full',
      icon: 'w-5 h-5',
      label: 'text-sm truncate'
    }
  },
  ui: {
    strategy: 'override',
    size: 'md',
    primary: 'blue',
    accordion: {
      "item": {
        "base": "bg-gray-50/30 px-6 mt-2 rounded-md",
      },
      "default": {
        "class": "py-3 w-full bg-transparent text-black hover:text-blue-500",
      },
    }
  }
})