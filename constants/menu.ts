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

import type { Menu } from "@/types/menu_type"

const menu: Array<Menu> = [
  {
    title: 'Analytics',
    label: 'Incomes',
    slot: 'admin-analytics',
    icon: 'i-iconoir-dollar',
    to: '/admin/incomes',
    roles: ['admin'],
  },
  {
    title: 'Sub Menu',
    slot: 'admin-forms',
    label: 'Documentation',
    icon: 'i-iconoir-component',
    roles: ['super_admin'],
    // defaultOpen: true,
    childs: [
      {
        label: 'Datepicker',
        to: '/admin/documentation/datepicker',
        roles: ['super_admin'],
      },
      {
        label: 'Form Validation',
        to: '/admin/documentation/form-validation',
        icon: 'i-iconoir-settings',
        roles: ['super_admin'],
      },
      {
        label: 'Table Responsive',
        to: '/admin/documentation/table',
        count: 1,
        roles: ['super_admin'],
      },
    ],
  },
  {
    label: 'Products',
    slot: 'admin-products',
    icon: 'i-iconoir-box-iso',
    roles: ['super_admin'],
    childs: [
      {
        label: 'All',
        to: '/admin/products/all',
        icon: 'i-iconoir-share-android',
        count: 100,
        roles: ['super_admin'],
      },
    ],
  },
  {
    title: 'Settings',
    slot: 'admin-users',
    label: 'Users',
    icon: 'i-iconoir-group',
    to: '/admin/users',
    roles: ['super_admin'],
  },
]

export default menu