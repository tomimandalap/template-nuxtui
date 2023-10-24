<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
})

const params = ref<{ q: string; skip: number; limit: number }>({
  q: '',
  skip: 0,
  limit: 10,
})

const { getData } = useProducts()
const { data, pending } = getData(params)

const products = computed(() => data.value?.products || [])
</script>
<template>
  <h1 class="text-xl font-semibold mb-5">Products</h1>

  <div class="grid grid-cols-12 gap-5">
    <div
      v-for="(product, index) in products"
      :key="`product-card-${index}`"
      class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
    >
      <products-card :product="product" />
    </div>
  </div>
</template>
