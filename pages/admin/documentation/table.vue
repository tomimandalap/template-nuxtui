<script setup lang="ts">
import { watchDebounced } from '@vueuse/core'

definePageMeta({
  layout: 'dashboard',
})

const columns = [
  {
    key: 'title',
    label: 'Product Name',
  },
  {
    key: 'category',
    label: 'Category',
  },
  {
    key: 'price',
    label: 'Price',
  },
  {
    key: 'stock',
    label: 'Stock',
  },
  {
    key: 'actions',
  },
]

const page = ref<number>(1)
const params = ref<{ q: string; skip: number; limit: number }>({
  q: '',
  skip: 0,
  limit: 10,
})

const { getData } = useProducts()
const { data, pending, refresh } = getData(params)

const products = computed(() => data.value?.products || [])
const totalData = computed(() => data.value?.total || 0)

watchDebounced(
  params.value,
  async (value) => {
    if (value.q.length) {
      params.value.skip = 0
      page.value = 1
    }

    await refresh()
  },
  { debounce: 500, maxWait: 1000 },
)

watch(page, (newValue) => {
  params.value.skip = 0 // reset

  params.value.skip = params.value.skip + (newValue - 1) * params.value.limit
})
</script>

<template>
  <h1 class="text-xl font-semibold">Table Responsive</h1>

  <div class="mt-5">
    <UInput
      v-model="params.q"
      icon="i-iconoir-search"
      placeholder="Search by name..."
    >
      <template #trailing>
        <UButton
          v-show="params.q !== ''"
          color="gray"
          variant="link"
          icon="i-iconoir-cancel"
          :padded="false"
          @click="params.q = ''"
        />
      </template>
    </UInput>

    <UTable :loading="pending" :rows="products" :columns="columns">
      <template #category-header="{ column }">
        <h4 class="text-h4">
          {{ column.label }}
        </h4>

        <UBadge label="Brand" size="xs" />
      </template>

      <template #category-data="{ row }">
        <p>{{ row.brand }}</p>

        <UBadge variant="outline" :label="row.brand" size="xs" />
      </template>

      <template #price-data="{ row }">
        <p>$ {{ row.price }}</p>
      </template>

      <template #actions-data="{ row }">
        <UButton variant="ghost" icon="i-iconoir-eye-alt" />
        <UButton
          color="green"
          variant="ghost"
          icon="i-iconoir-edit"
          class="mx-1"
        />
        <UButton color="red" variant="ghost" icon="i-iconoir-trash" />
      </template>
    </UTable>

    <div class="flex items-center justify-between">
      <USelect v-model="params.limit" :options="[5, 10, 25, 50]" />

      <UPagination
        v-model="page"
        :page-count="Number(params.limit)"
        :total="totalData"
      />
    </div>
  </div>
</template>
