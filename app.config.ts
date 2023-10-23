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

TITLE
----------------
LABEL 1
LABEL 2
LABEL 3
-----------------
  SUB LABEL 1
*/

import type { Menu } from "@/types/menus"

const menus: Array<Menu> = [
  {
    title: 'Analytics',
    label: 'Incomes',
    slot: 'admin-analytics',
    icon: 'i-iconoir-dollar',
    to: '/admin',
  },
  {
    title: 'Documentation',
    slot: 'admin-forms',
    label: 'Components',
    icon: 'i-iconoir-component',
    // defaultOpen: true,
    childs: [
      {
        label: 'Datepicker',
        to: '/admin/documentation/datepicker',
      },
      {
        label: 'Form Validation',
        to: '/admin/documentation/form-validation',
        icon: 'i-iconoir-settings',
      },
      {
        label: 'Table Responsive',
        to: '/admin/documentation/table',
        count: 1,
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
    container: 'px-3 py-3.5 lg:px-5',
    wrapper: 'flex items-center justify-between',
  },
  sidebar: {
    base: 'fixed top-0 left-0 z-40 sm:w-64 w-full h-screen border-r border-gray-200 dark:border-gray-800 transition-transform ease-in-out delay-100',
    title: 'my-2.5 text-sm font-semibold',
    show: 'sm:translate-x-0',
    hide: '-translate-x-full hidden',
    container: {
      base: 'h-full px-3 py-20 overflow-y-auto bg-white dark:bg-gray-900',
      list: 'space-y-2 py-1.5 font-medium'
    },
    link: {
      base: 'flex items-center text-black dark:text-blue-400 hover:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-md px-2.5 transition-all ',
      active: 'bg-blue-50 dark:bg-blue-950 text-blue-500 dark:text-blue-400 cursor-no-drop',
      wrapper: 'flex items-center w-full',
      icon: 'w-5 h-5',
      label: 'text-sm truncate'
    },
    padding: {
      base: 'py-0.5',
      icon: 'py-0.5',
      count: 'py-2.5'
    }
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
        "class": "py-2.5 w-full bg-transparent dark:bg-transparent text-black hover:text-blue-500",
      },
    },
    toggle: {
      "default": {
        "onIcon": 'i-iconoir-sun-light',
        "offIcon": 'i-iconoir-moon-sat',
      },
    },
    notifications: {
      position: 'top-0 right-0'
    },
    button: {
      "default": {
        "loadingIcon": "i-iconoir-system-restart"
      }
    },
    input: {
      "wrapper": "relative w-full",
    },
    formGroup: {
      "error": "mt-2 text-xs text-red-500 dark:text-red-400",
    },
    table: {
      loadingState: {
        label: 'text-md text-center',
        icon: 'w-10 h-10 mx-auto mb-4 animate-spin',
      },
      emptyState: {
        label: 'text-md text-center',
        icon: 'w-10 h-10 mx-auto mb-4',
      },
      default: {
        loadingState: {
          icon: 'i-iconoir-system-restart',
          label: 'Loading...',
        },
        emptyState: {
          icon: 'i-iconoir-multiple-pages-empty',
          label: 'Data not available',
        },
      },
    },
  }
})