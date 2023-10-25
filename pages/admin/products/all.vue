<script setup lang="ts">
import type { IUser } from '@/types/responses/products_response_type'

definePageMeta({
  layout: 'dashboard',
})

const params = ref<{ q: string; skip: number; limit: number }>({
  q: '',
  skip: 0,
  limit: 10,
})

const products = ref<IUser[]>([])
const total = ref<number>(0)

const { getData } = useProducts()
const load = async (): Promise<void> => {
  const { data } = await getData(params)

  if (data.value && data.value.products) {
    products.value = [...products.value, ...data.value.products]
    total.value = data.value?.total || 0
  }
}

// first load
await load()

const productContainer = ref<HTMLElement | null>(null)

useInfiniteScroll(
  productContainer,
  async () => {
    params.value.skip += 10

    if (params.value.skip < total.value) await load()

    return
  },
  { distance: 100 },
)

const { list, containerProps, wrapperProps } = useVirtualList(products, {
  itemHeight: 1,
  overscan: 10,
})
</script>
<template>
  <div>
    <h1 class="text-xl font-semibold mb-5">Products</h1>
    <!-- <pre>{{ wrapperProps }}</pre> -->
    <div v-bind="containerProps">
      <div v-bind="wrapperProps" style="height: calc(100vh - 14rem) !important">
        <div
          ref="productContainer"
          class="grid grid-cols-12 gap-5 h-[calc(100vh-14rem)] overflow-auto p-0.5"
        >
          <div
            v-for="product in list"
            :key="`product-card-${product.index}`"
            class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
          >
            <products-card :product="product.data" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
