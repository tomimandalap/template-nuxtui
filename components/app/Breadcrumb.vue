<script setup lang="ts">
const { breadcrumb } = useAppConfig()

const route = useRoute()
const items = computed<string[]>(() => {
  return route.path
    .split('/')
    .filter((item) => item)
    .map((item) => item.replace('-', ' '))
})
</script>
<template>
  <div :class="breadcrumb.wrapper">
    <ul :class="breadcrumb.ul">
      <li
        v-for="(link, index) in items"
        :key="`list-breadcrumb-${index}`"
        :class="breadcrumb.li"
      >
        <nuxt-link
          to="/admin"
          :class="[
            index ? breadcrumb.link.inactive : breadcrumb.link.hover,
            breadcrumb.link.wrapper,
          ]"
        >
          <UIcon v-if="index" :name="breadcrumb.icon" />
          {{ link }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
