<script setup lang="ts">
import { accordion } from '@nuxt/ui';

const menus = [
  {
    title: 'Dashboard',
    label: 'Analytics',
    icon: 'i-iconoir-graph-up',
    to: '/admin',
    slot: 'admin-analytics',
    childs: [],
  },
  {
    label: 'Products',
    icon: 'i-iconoir-box-iso',
    to: '/admin/products',
    count: 10,
    slot: 'admin-products',
    childs: [],
  },
  {
    title: 'Documentation',
    label: 'Forms',
    icon: 'i-iconoir-component',
    slot: 'admin-forms',
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
    icon: 'i-iconoir-book',
    slot: 'admin-navigation',
    childs: [
      {
        label: 'Hero',
        to: '/admin/hero',
      },
    ],
  },
  {
    title: 'Settings',
    label: 'Users',
    icon: 'i-iconoir-group',
    to: '/admin/users',
    slot: 'admin-users',
    childs: [],
  },
]
</script>

<template>
  <aside id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar">
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">

        <li v-for="(menu, i) in menus" :key="`menu-item-${i}`">
          <!-- TITLE -->
          <template v-if="menu.title">
            <h3 class="mb-3 text-base font-semibold">{{ menu.title }}</h3>
          </template>
          <!-- TITLE -->

          <!-- MENU -->
          <template v-if="!menu.childs.length">
            <app-sidebar-item :item="menu" />
          </template>
          <!-- MENU -->

          <!-- SUBMENU -->
          <template v-else>
            <UAccordion multiple :items="[menu]">
              <template v-slot:[`${menu.slot}`]="{ item, index, open }">
                <app-sidebar-item v-for="(submenu, idx) in item.childs" :key="`submenu-${index}-${idx}`" :item="submenu"
                  mode="submenu" class="mb-2" />
              </template>
            </UAccordion>
          </template>
          <!-- END SUBMENU -->
        </li>
      </ul>
    </div>
  </aside>
</template>