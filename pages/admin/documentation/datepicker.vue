<script setup lang="ts">
definePageMeta({
  title: 'Datepicker',
  layout: 'dashboard',
})

const ui = {
  body: {
    padding: 'p-3.5 flex flex-col justify-center items-start',
  },
}
</script>

<template>
  <div>
    <h1 class="text-xl font-semibold">Datepicker</h1>

    <div class="grid grid-cols-12 gap-5 my-3.5">
      <div class="col-span-12 lg:col-span-4">
        <UCard :ui="ui">
          <h4 class="text-base mb-2">Button</h4>
          <calendar-button />
        </UCard>
      </div>

      <div class="col-span-12 lg:col-span-4">
        <UCard :ui="ui">
          <h4 class="text-base mb-2">Input</h4>
          <calendar-input />
        </UCard>
      </div>

      <div class="col-span-12 lg:col-span-4">
        <UCard :ui="ui">
          <h4 class="text-base mb-2">Input Range</h4>
          <calendar-input-range />
        </UCard>
      </div>
    </div>
  </div>
</template>
