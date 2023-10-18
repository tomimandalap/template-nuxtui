<template>
  <app-navbar />
  <app-sidebar />

  <main class="main__app">
    <div class="main__app__content">
      <slot />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main__app {
  @apply p-4 sm:ml-64 bg-gray-50/30 min-h-screen;

  &__content {
    @apply p-4 rounded-lg my-14;
    @apply border-2 border-dashed border-gray-200 dark:border-gray-700;
  }
}
</style>
