<script setup lang="ts">
const range = ref<{ start: Date | undefined, end: Date | undefined }>({
  start: undefined,
  end: undefined,
});

const placeHolder = computed(() => {
  return range.value && range.value.start ? range.value.start.toDateString() : 'Select date'
})

const colorMode = useColorMode()
const isDark = computed<boolean>(() => colorMode.value === 'dark')

// https://vcalendar.io/datepicker/api.html#popoveroptions
const popover = {
  visibility: 'click',
  placement: 'bottom'
}
</script>

<template>
  <VDatePicker v-model.range="range" color="lime" :is-dark="isDark" :popover="popover">
    <template #default="{ inputValue, inputEvents }">
      <UInput readonly :value="inputValue.start && inputValue.end ? `${inputValue.start} - ${inputValue.end}` : null"
        v-on="inputEvents.start" :placeholder="placeHolder" :ui="{ wrapper: 'w-full' }" />
    </template>
    <template #footer>
      <div class="px-2 pb-2">
        <UButton block label="Reset" @click="range = { start: undefined, end: undefined }" />
      </div>
    </template>
  </VDatePicker>
</template>

<style lang="scss">
.vc-lime {
  --vc-accent-50: theme('colors.pink.50');
  --vc-accent-100: theme('colors.pink.100');
  --vc-accent-200: theme('colors.pink.200');
  --vc-accent-300: theme('colors.pink.300');
  --vc-accent-400: theme('colors.pink.400');
  --vc-accent-500: theme('colors.pink.500');
  --vc-accent-600: theme('colors.pink.600');
  --vc-accent-700: theme('colors.pink.700');
  --vc-accent-800: theme('colors.pink.800');
  --vc-accent-900: theme('colors.pink.900');
}
</style>