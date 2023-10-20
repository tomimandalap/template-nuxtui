<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: '',
    required: true,
  },
  name: {
    type: String,
    default: '',
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: '',
  }
})
</script>

<template>
  <UFormGroup :name="name" :class="customClass">
    <template #label>
      <p class="mb-1.5">{{ label }} <span v-show="required" class="text-red-500">*</span></p>
    </template>

    <slot />
  </UFormGroup>
</template>