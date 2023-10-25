<script setup lang="ts">
import type { Menu, MenuItem, SubMenu } from '@/types/menu_type'

const { sidebar } = useAppConfig()
const { show, menus } = useSidebar()

const accordion = ref()
const route = useRoute()

function handleDefaultOpen(itemMenu: Menu) {
  let result = []

  if (itemMenu.childs) {
    result = itemMenu.childs.filter((item) => item.to === route.fullPath)
  }

  return result.length > 0
}

// handle close accordion when click menu without childs
watch(
  () => route.fullPath,
  (newValue) => {
    const isDeep = newValue.split('/').filter((item) => item).length > 2

    if (newValue && !isDeep) {
      handleCloseOthers('menu')
    }
  },
)

function handleCloseOthers(type: 'menu' | 'submenu', slot?: string) {
  if (accordion.value && !accordion.value.length) return

  if (type === 'menu') {
    accordion.value.forEach((item: { buttonRefs: { close: () => void }[] }) => {
      item.buttonRefs?.[0]?.close()
    })
    return
  }

  // for submenu
  const itemSidebar = menus.value.filter(
    (menu: MenuItem<SubMenu>) => menu.childs && menu.childs.length,
  )
  const itemIndexSidebar = itemSidebar.findIndex(
    (item: MenuItem<SubMenu>) => item.slot === slot,
  )

  itemSidebar.forEach((_: any, index: number) => {
    if (index !== itemIndexSidebar) {
      accordion.value[index]?.buttonRefs?.[0]?.close()
    }
  })
}
</script>
<template>
  <aside
    id="sidebar"
    :class="[sidebar.base, show ? sidebar.show : sidebar.hide]"
    aria-label="Sidebar"
  >
    <div :class="sidebar.container.base">
      <ul :class="sidebar.container.list">
        <li
          v-for="(menu, i) in menus"
          :key="`menu-item-${i}`"
          class="list__item"
        >
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
            <UAccordion
              ref="accordion"
              multiple
              :items="[menu]"
              :default-open="handleDefaultOpen(menu)"
            >
              <template #default="{ item, open }">
                <UButton
                  :label="item.label"
                  variant="ghost"
                  color="black"
                  @click="handleCloseOthers('submenu', menu.slot)"
                >
                  <template v-if="item.icon" #leading>
                    <Icon :name="item.icon" :class="sidebar.link.icon" />
                  </template>

                  <template #trailing>
                    <UIcon
                      name="i-iconoir-nav-arrow-right"
                      :class="[
                        open && 'rotate-90',
                        sidebar.link.icon,
                        'ms-auto transform transition-transform duration-200',
                      ]"
                    />
                  </template>
                </UButton>
              </template>

              <template v-slot:[`${menu.slot}`]="{ item, index }">
                <app-sidebar-item
                  v-for="(submenu, idx) in item.childs"
                  :key="`submenu-${index}-${idx}`"
                  :item="submenu"
                  mode="submenu"
                  class="mb-2"
                />
              </template>
            </UAccordion>
          </template>
          <!-- END SUBMENU -->
        </li>
      </ul>
    </div>
  </aside>
</template>
~/types/menu
