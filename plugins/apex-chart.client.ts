// https://www.npmjs.com/package/vue3-apexcharts
// fixing issue https://github.com/apexcharts/vue3-apexcharts/issues/9
import VueApexCharts from 'vue3-apexcharts'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueApexCharts)
})