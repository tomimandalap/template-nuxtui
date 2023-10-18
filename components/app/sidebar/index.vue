<script setup lang="ts">
const { menus, sidebar } = useAppConfig()
const { show } = useSidebar()

const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

</script>
<template>
  <aside id="sidebar" :class="[sidebar.base, show ? sidebar.show : sidebar.hide]" aria-label="Sidebar">
    <div :class="sidebar.container.base">
      <ul :class="sidebar.container.list">

        <li v-for="(menu, i) in menus" :key="`menu-item-${i}`" class="list__item">
          <!-- TITLE -->
          <template v-if="menu.title">
            <h3 :class="sidebar.title">{{ menu.title }}</h3>
          </template>
          <!-- TITLE -->

          <!-- MENU -->
          <template v-if="!menu.childs || !menu.childs.length">
            <app-sidebar-item :item="menu" />
          </template>
          <!-- MENU -->

          <!-- SUBMENU -->
          <template v-else>
            <UAccordion multiple :items="[menu]">
              <template v-slot:[`${menu.slot}`]="{ item, index }">
                <app-sidebar-item v-for="(submenu, idx) in item.childs" :key="`submenu-${index}-${idx}`" :item="submenu"
                  mode="submenu" class="mb-2" />
              </template>
            </UAccordion>
          </template>
          <!-- END SUBMENU -->
        </li>
      </ul>

    </div>

    <div :class="sidebar.footer">
      <UToggle v-model="isDark" />
    </div>
  </aside>
</template>