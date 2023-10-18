<script setup lang="ts">
const { menus, sidebar } = useAppConfig()

const { show } = useSidebar()
</script>

<template>
  <aside id="sidebar" :class="['sidebar', { 'sm:translate-x-0': show, '-translate-x-full hidden': !show, }]"
    aria-label="Sidebar">
    <div class="sidebar__container">
      <ul class="list">

        <li v-for="(menu, i) in menus" :key="`menu-item-${i}`" class="list__item">
          <!-- TITLE -->
          <template v-if="menu.title">
            <h3 class="title">{{ menu.title }}</h3>
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
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  @apply fixed top-0 left-0 z-40 sm:w-64 w-full h-screen;
  @apply bg-white border-r dark:bg-gray-800;
  @apply border-gray-200 dark:border-gray-700;
  @apply transition-transform ease-in-out delay-100;

  &__container {
    @apply h-full px-3 py-20 overflow-y-auto;
    @apply bg-white dark:bg-gray-800;

    & .list {
      @apply space-y-2 font-medium;

      &__item {
        & .title {
          @apply mb-3.5 text-base font-semibold;
        }
      }
    }
  }
}
</style>