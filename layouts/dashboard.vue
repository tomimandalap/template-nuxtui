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
    @apply p-4 rounded-lg my-5;
    @apply border-2 border-dashed border-gray-200 dark:border-gray-700;
  }
}
</style>
