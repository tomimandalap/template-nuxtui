<script setup lang="ts">
import type { IUser } from '@/types/responses/products_response_type'
import { useImage } from '@vueuse/core'

const props = defineProps({
  product: {
    type: Object as PropType<IUser>,
    default: () => {},
  },
})

const { isLoading } = useImage({ src: props.product.thumbnail })
</script>
<template>
  <UCard class="min-h-full">
    <template v-if="isLoading">
      <USkeleton class="object-contain aspect-[3/2]" />
      <USkeleton class="h-4 w-48 my-2.5" />
      <USkeleton class="h-4 w-36 my-2.5" />
      <USkeleton class="h-4" />
    </template>

    <template v-else>
      <img
        :src="product.thumbnail"
        :alt="`image-${product.title}`"
        class="object-contain aspect-[3/2]"
      />

      <h4
        class="my-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ product.title }}
      </h4>

      <h5 class="text-lg tracking-tight text-gray-900 dark:text-white">
        $ {{ product.price }}
      </h5>

      <h6 class="text-base tracking-tight text-gray-900 dark:text-white">
        Rating: {{ product.rating }}
      </h6>

      <p class="my-3 font-normal text-gray-700 dark:text-gray-400">
        {{ product.description }}
      </p>

      <!-- <UButton block variant="outline" label="Add to cart" /> -->
    </template>
  </UCard>
</template>
