<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>Welcome to Nuxt UI Starter</h1>
          <ColorScheme>
            <USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" />
          </ColorScheme>
        </div>
      </template>
      <UButton icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank" class="me-3">Open Nuxt UI
        Documentation</UButton>
      <UButton icon="i-iconoir-pc-check" variant="outline" to="/admin">Dashboard</UButton>
    </UCard>
  </UContainer>
</template>
