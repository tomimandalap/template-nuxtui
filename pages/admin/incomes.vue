<script setup lang="ts">
definePageMeta({
  title: 'Incomes',
  layout: 'dashboard',
})
</script>

<template>
  <div>
    <h3 class="text-2xl font-medium">Be single minded</h3>
    <div class="grid grid-cols-12 gap-5 my-5">
      <div class="col-span-12">
        <UCard>
          <chart-area />
        </UCard>
      </div>
    </div>
  </div>
</template>
