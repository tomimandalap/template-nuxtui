<script setup lang="ts">
const date = ref<Date>()

const placeHolder = computed(() => {
  return date.value ? date.value.toDateString() : 'Select date'
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
  <VDatePicker v-model="date" :is-dark="isDark" :popover="popover">
    <template #default="{ inputValue, inputEvents }">
      <UInput icon="i-iconoir-calendar" readonly :value="inputValue" v-on="inputEvents" :placeholder="placeHolder" />
    </template>
  </VDatePicker>
</template>