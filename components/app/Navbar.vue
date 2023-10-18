<script setup lang="ts">
const { navbar } = useAppConfig()
const { show, toggleShow, toggleHide } = useSidebar()

function onClickMenubar() {
  if (show.value) {
    toggleHide()
    return
  }

  toggleShow()
}

const items = [
  [{
    label: 'Account',
    slot: 'account',
    disabled: true
  }], [{
    label: 'Mode',
    slot: 'darkmode',
    disabled: true
  }], [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: () => logout()
  }]
]

const router = useRouter()
function logout() {
  router.push('/')
}

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
  <nav :class="navbar.base">
    <div :class="navbar.container">
      <div :class="navbar.wrapper">
        <div class="flex items-center justify-start">

          <UButton icon="i-iconoir-menu" variant="link" class="sm:hidden" @click="onClickMenubar" />

          <nuxt-link to="/admin">
            <h4 class="ms-2 sm:ms-0 text-lg font-semibold capitalize">Dashboard</h4>
          </nuxt-link>

        </div>
        <div class="flex items-center">
          <div class="flex items-center ml-3">
            <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
              :popper="{ placement: 'bottom-start' }">
              <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />

              <template #account="{ item }">
                <div class="text-left">
                  <p class="truncate text-gray-900 dark:text-white">
                    {{ item.label }}
                  </p>
                  <p class="text-xs my-1.5">Tomi Mandala Putra</p>
                  <UBadge variant="soft" size="xs" label="Super Admin" />
                </div>
              </template>

              <template #darkmode="{ item }">
                <div class="flex justify-between items-center w-full">
                  <p class="truncatetext-gray-900 dark:text-white">
                    {{ item.label }}
                  </p>

                  <UToggle v-model="isDark" />
                </div>
              </template>
              <template #item="{ item }">
                <span class="truncate">{{ item.label }}</span>
                <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
              </template>
            </UDropdown>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>