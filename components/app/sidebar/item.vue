<script setup lang="ts">
interface ObjectItem {
  label: string
  icon?: string
  count?: number,
  to?: string
}

defineProps({
  item: {
    type: Object as PropType<ObjectItem>,
    default: () => { },
    required: true,
  },
  mode: {
    type: String as PropType<'menu' | 'submenu'>,
    default: 'menu',
  }
})
</script>

<template>
  <nuxt-link v-bind="$props" v-slot="{ isActive }" :to="item.to" class="custome-link">
    <div v-bind="$attrs" :class="['custome-link__container', { 'active': isActive }]">

      <div :class="['first', { 'py-3': mode === 'submenu', 'py-1.5': mode === 'menu' }]">
        <template v-if="item.icon">
          <UIcon :name="item.icon" class="icon" />
        </template>

        <p :class="['label', { 'm-2': item.icon }]">{{ item.label }}</p>
      </div>

      <template v-if="item.count">
        <UBadge size="xs" variant="subtle" :label="item.count" />
      </template>
    </div>
  </nuxt-link>
</template>

<style lang="scss" scoped>
.custome-link {
  &__container {
    @apply flex items-center rounded-md px-2.5 transition-all;
    @apply text-black hover:text-blue-500;
    @apply hover:bg-blue-100;

    &.active {
      @apply bg-blue-50 text-blue-500 cursor-no-drop
    }

    & .first {
      @apply flex items-center w-full;

      & .icon {
        @apply w-5 h-5;
      }

      & .label {
        @apply text-sm truncate
      }
    }

  }
}
</style>
