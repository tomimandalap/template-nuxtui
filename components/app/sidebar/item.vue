<script setup lang="ts">
import type { SubMenu } from '@/types/menu_type'

const props = defineProps({
  item: {
    type: Object as PropType<SubMenu>,
    default: () => {},
    required: true,
  },
  mode: {
    type: String as PropType<'menu' | 'submenu' | 'mini'>,
    default: 'menu',
  },
})

const { sidebar } = useAppConfig()
const { largerThanSm } = useSidebar()

const padding = computed<string>(() => {
  const { base, icon, count } = sidebar.padding

  if (props.mode === 'submenu') {
    if (props.item.icon) return icon

    return count
  }

  return base
})

const margin = computed<string | undefined>(() => {
  if (props.item.icon) return 'm-2'

  return
})

const isModeMiniSidebar = computed<boolean>(() => props.mode === 'mini')
</script>

<template>
  <nuxt-link v-bind="$props" v-slot="{ isActive }" :to="item.to">
    <!-- MINI SIDEBAR MODE -->
    <template v-if="isModeMiniSidebar">
      <div
        v-bind="$attrs"
        :class="[sidebar.link.miniBase, isActive && sidebar.link.miniActive]"
      >
        <div class="flex items-center">
          <template v-if="item.icon">
            <Icon :name="item.icon" />
          </template>

          <p :class="[item.icon && 'ms-2']">
            {{ item.label }}
          </p>
        </div>

        <template v-if="item.count">
          <UBadge size="xs" variant="subtle" :label="item.count" />
        </template>
      </div>
    </template>

    <!-- FULL SIDEBAR MODE -->
    <template v-else>
      <div
        v-bind="$attrs"
        :class="[
          sidebar.link.base,
          isActive && sidebar.link.active,
          !largerThanSm && 'py-1.5',
        ]"
      >
        <div :class="[sidebar.link.wrapper, padding]">
          <template v-if="item.icon">
            <Icon :name="item.icon" :class="sidebar.link.icon" />
          </template>

          <template v-if="largerThanSm">
            <p :class="[sidebar.link.label, margin]">
              {{ item.label }}
            </p>
          </template>
        </div>

        <template v-if="item.count">
          <UBadge size="xs" variant="subtle" :label="item.count" />
        </template>
      </div>
    </template>
  </nuxt-link>
</template>
