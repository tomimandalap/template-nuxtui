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

export interface SubMenu {
  label: string
  icon?: string
  to?: string
  count?: number
}

interface MenuItem<T> {
  title?: string
  slot: string
  childs?: Array<T>,
}

type Menu = MenuItem<SubMenu> & SubMenu

export const items: Menu[] = [
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