<script setup lang="ts">
const props = defineProps({
  pdfFile: {
    type: String,
    required: true,
  },
})

const loadPSPDFKit = async (): Promise<void> => {
  // import("pspdfkit")
  //   .then((PSPDFKit) => {
  //     this.PSPDFKit = PSPDFKit;
  //     PSPDFKit.unload(".pdf-container");
  //     return PSPDFKit.load({
  //       document: this.pdfFile,
  //       container: ".pdf-container",
  //       baseUrl: "http://localhost:3000/js/",
  //     });
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
}

watch(
  () => props.pdfFile,
  (newValue) => {
    if (newValue) return
  },
)
// mounted() {
//     this.loadPSPDFKit().then((instance) => {
//       this.$emit("loaded", instance);
//     });
//   },
//   /**
//    * We watch for `pdfFile` prop changes and trigger unloading and loading when there's a new document to load.
//    */
//   watch: {
//     pdfFile(val) {
//       if (val) {
//         this.loadPSPDFKit();
//       }
//     },
//   },
</script>

<template>
  <div ref="" class="pdf-container"></div>
</template>

<style lang="scss" scoped>
.pdf-container {
  height: 100vh;
}
</style>
