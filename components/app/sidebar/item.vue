<script setup lang="ts">
import type { SubMenu } from "@/types/menus"

const props = defineProps({
  item: {
    type: Object as PropType<SubMenu>,
    default: () => { },
    required: true,
  },
  mode: {
    type: String as PropType<'menu' | 'submenu'>,
    default: 'menu',
  }
})

const { largerThanSm, toggleHide } = useSidebar()
function onClickHideMenu() {
  if (largerThanSm.value) return

  toggleHide()
}

const { sidebar } = useAppConfig()
const padding = computed(() => {
  if (props.mode === 'submenu') {
    if (props.item.icon) return 'py-1'
    return 'py-2.5'
  }

  return 'py-1.5'
})
const margin = computed(() => {
  if (props.item.icon) return 'm-2'

  return
})
</script>

<template>
  <nuxt-link v-bind="$props" v-slot="{ isActive }" :to="item.to" @click="onClickHideMenu">
    <div v-bind="$attrs" :class="[sidebar.link.base, isActive && sidebar.link.active]">
      <div :class="[sidebar.link.wrapper, padding]">

        <template v-if="item.icon">
          <UIcon :name="item.icon" :class="sidebar.link.icon" />
        </template>

        <p :class="[sidebar.link.label, margin]">{{ item.label }}</p>
      </div>

      <template v-if="item.count">
        <UBadge size="xs" variant="subtle" :label="item.count" />
      </template>
    </div>
  </nuxt-link>
</template>