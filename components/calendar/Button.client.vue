<script setup lang="ts">
const date = ref<Date>()

const labelButton = computed(() => {
  return date.value ? date.value.toDateString() : 'Select date'
})

const colorMode = useColorMode()
const isDark = computed<boolean>(() => colorMode.value === 'dark')

const popover = {
  visibility: 'click',
  placement: 'bottom'
}
</script>

<template>
  <VDatePicker v-model="date" :popover="popover" :is-dark="isDark">
    <template #default="{ togglePopover }">
      <UButton block @click="togglePopover">
        {{ labelButton }}
      </UButton>
    </template>
  </VDatePicker>
</template>
