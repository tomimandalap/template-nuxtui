<script setup lang="ts">
const date = ref<Date>()

const labelButton = computed(() => {
  return date.value ? date.value.toDateString() : 'Select date'
})
</script>

<template>
  <VDatePicker v-model="date">
    <template #default="{ togglePopover }">
      <UButton @click="togglePopover">
        {{ labelButton }}
      </UButton>
    </template>
  </VDatePicker>
</template>