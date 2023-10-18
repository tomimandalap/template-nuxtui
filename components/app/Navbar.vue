<script setup lang="ts">
const { navbar } = useAppConfig()
const { show, toggleShow, toggleHide } = useSidebar()

function onClickMenubar() {
  if (show.value) {
    toggleHide()
    return
  }

  toggleShow()
}
</script>

<template>
  <nav :class="navbar.base">
    <div :class="navbar.container">
      <div :class="navbar.wrapper">
        <div class="flex items-center justify-start">

          <UButton icon="i-iconoir-menu" variant="link" class="sm:hidden" @click="onClickMenubar" />

          <nuxt-link to="/admin">
            <h4 class="ms-2 sm:ms-0 text-lg font-semibold capitalize">Dashboard</h4>
          </nuxt-link>

        </div>
        <div class="flex items-center">
          <div class="flex items-center ml-3">
            <h1>hello</h1>

            <!-- <pre>{{ navbar }}</pre> -->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>