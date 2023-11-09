<script setup lang="ts">
import type { Menu, MenuItem, SubMenu } from '@/types/menu_type'
import type { ButtonVariant } from '@nuxt/ui/dist/runtime/types'

const { sidebar } = useAppConfig()
const { show, menus, largerThanSm } = useSidebar()

const accordion = ref()
const route = useRoute()

function handleDefaultOpen(itemMenu: Menu): boolean {
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

function handleCloseOthers(type: 'menu' | 'submenu', slot?: string): void {
  if (accordion.value && !accordion.value.length) return

  if (type === 'menu') {
    if (!accordion.value) return

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

function handleMenuOnDropdown(menu: Menu): Array<SubMenu[]> {
  const first = [{ ...menu, disabled: true }]
  delete first[0].childs

  let subMenu: Array<SubMenu> = []

  if (menu.childs) {
    subMenu = menu.childs.map((item: SubMenu) => {
      return { ...item }
    })
  }

  return [first, subMenu]
}

const UIDropdown = computed(() => {
  return {
    item: {
      padding: 'p-0',
      disabled: 'cursor-text select-text',
    },
  }
})

const UIButtonMiniSidebar = computed(() => {
  return {
    color: {
      white: {
        ghost:
          'text-black dark:text-white hover:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-950',
      },
    },
  }
})

function handleVariantuttonMiniSidebar(subMenu: SubMenu[]): ButtonVariant {
  const newListSubMenu: Array<boolean> = subMenu.map(
    (item: SubMenu) => item.to === route.fullPath,
  )

  const isActive: boolean = newListSubMenu.some((state: boolean) => !!state)

  return isActive ? 'soft' : 'ghost'
}

function handleColorButtonMiniSidebar(subMenu: SubMenu[]): string {
  const newListSubMenu: Array<boolean> = subMenu.map(
    (item: SubMenu) => item.to === route.fullPath,
  )

  const isActive: boolean = newListSubMenu.some((state: boolean) => !!state)
  return isActive ? 'blue' : 'black'
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
            <!-- UP TO SMALL SCREEN -->
            <template v-if="largerThanSm">
              <h3 :class="sidebar.title">{{ menu.title }}</h3>
            </template>

            <!-- ONLY XSMALL SCREEN -->
            <template v-else>
              <hr class="mb-2" />
            </template>
          </template>
          <!-- TITLE -->

          <!-- MENU -->
          <template v-if="!menu.childs || !menu.childs.length">
            <!-- UP TO SMALL SCREEN -->
            <template v-if="largerThanSm">
              <app-sidebar-item :item="menu" />
            </template>

            <!-- ONLY XSMALL SCREEN -->
            <template v-else>
              <UTooltip :text="menu.label" :popper="{ placement: 'right' }">
                <app-sidebar-item :item="menu" />
              </UTooltip>
            </template>
          </template>
          <!-- MENU -->

          <!-- SUBMENU -->
          <template v-else>
            <!-- UP TO SMALL SCREEN -->
            <template v-if="largerThanSm">
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

            <!-- ONLY XSMALL SCREEN -->
            <template v-else>
              <UDropdown
                :items="handleMenuOnDropdown(menu)"
                :ui="UIDropdown"
                :popper="{ placement: 'right-start' }"
                mode="hover"
              >
                <!-- SHOW ICON WITH BUTTON AT SIDEBAR -->
                <UButton
                  :ui="UIButtonMiniSidebar"
                  :variant="handleVariantuttonMiniSidebar(menu.childs)"
                  :color="handleColorButtonMiniSidebar(menu.childs)"
                  size="xl"
                >
                  <template #leading>
                    <Icon :name="menu.icon!" :class="sidebar.link.icon" />
                  </template>
                </UButton>

                <!-- CONTENT HEADER DROPDOWN -->
                <template v-slot:[`${menu.slot}`]="{ item, index }">
                  <div
                    :key="`title-content-dropdown-${index}`"
                    class="flex justify-start items-center"
                  >
                    <Icon :name="item.icon" :class="sidebar.link.icon" />
                    <h1 class="font-bold ms-1">
                      {{ item.label }}
                    </h1>
                  </div>
                </template>

                <!-- CONTENT LIST DROPDOWN -->
                <template #item="{ item }">
                  <div class="w-full">
                    <app-sidebar-item :item="item" mode="mini" />
                  </div>
                </template>
              </UDropdown>
            </template>
          </template>
          <!-- END SUBMENU -->
        </li>
      </ul>
    </div>
  </aside>
</template>
