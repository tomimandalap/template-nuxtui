<script setup lang="ts">
const { title } = useAppConfig()
const route = useRoute()

useHead({
  titleTemplate() {
    return `${title} - ${route.meta.title}`
  },
})
</script>

<template>
  <UNotifications />
  <app-navbar />
  <app-sidebar />

  <main class="main__app">
    <app-breadcrumb />
    <div class="main__app__content">
      <slot />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main__app {
  @apply px-5 py-9 sm:ml-64 min-h-screen;

  &__content {
    @apply my-5;
  }
}
</style>
