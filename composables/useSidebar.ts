// Doc https://vueuse.org/core/useBreakpoints/
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const largerThanSm = breakpoints.greater('sm') // only larger than sm
const show = ref<boolean>(true)

watch(largerThanSm, (newValue) => {
  show.value = newValue
})


const toggleShow = () => {
  show.value = true
}

const toggleHide = () => {
  show.value = false
}

export function useSidebar() {
  const { sidebar: { menu } } = useAppConfig()
  const { hasRole } = usePermission()

  const menus = computed(() => menu.filter(menu => hasRole(menu.roles)).map((menu) => {
    // console.log('test', menu, menu.childs);

    return {
      ...menu,
      childs: menu.childs?.filter(submenu => hasRole(submenu.roles)),
    }
  }))

  return {
    show,
    largerThanSm,
    toggleShow,
    toggleHide,
    menus
  }
}