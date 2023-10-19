<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})

const ui = {
  body: {
    padding: 'p-3.5 flex flex-col justify-center items-center'
  },
}
</script>

<template>
  <h1 class="text-xl font-semibold">Form Datepicker</h1>

  <div class="grid grid-cols-12 gap-5 my-3.5">
    <div class="col-span-12 md:col-span-3">
      <UCard :ui="ui">
        <h4 class="text-base mb-2">Calendar in Button</h4>
        <calendar-button />
      </UCard>
    </div>

    <div class="col-span-12 md:col-span-3">
      <UCard :ui="ui">
        <h4 class="text-base mb-2">Calendar in Button</h4>
        <calendar-button />
      </UCard>
    </div>
  </div>
</template>