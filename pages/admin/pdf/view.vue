<script setup lang="ts">
import { PdfViewer } from '@privyid/pdf-ajaib'

definePageMeta({
  title: 'PDF Viewer',
  layout: 'dashboard',
})

const pdfFile = ref<string | undefined>(undefined)
function openDocument(event: Event) {
  if (pdfFile.value) {
    window.URL.revokeObjectURL(pdfFile.value)
  }

  const target = event.target as HTMLInputElement
  if (target) {
    pdfFile.value = window.URL.createObjectURL(target.files![0])
  }
}

function removeFile() {
  const input = document.getElementById('inputPDF') as HTMLInputElement
  input.value = ''
  pdfFile.value = undefined
}
</script>

<template>
  <h1 class="text-xl font-semibold">PDF View</h1>

  <div class="grid grid-cols-12 md:gap-3.5 gap-0 items-center my-5">
    <div class="col-span-12 md:col-span-10">
      <UInput
        id="inputPDF"
        type="file"
        accept="application/pdf"
        class="my-5"
        @change="openDocument"
      ></UInput>
    </div>

    <div class="col-span-12 md:col-span-2">
      <UButton :disabled="!pdfFile" block label="Remove" @click="removeFile" />
    </div>
  </div>

  <client-only>
    <pdf-viewer :src="pdfFile ? pdfFile : '/example.pdf'" />
  </client-only>
</template>
