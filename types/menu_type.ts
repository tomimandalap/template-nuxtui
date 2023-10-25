export interface SubMenu {
  label: string
  icon?: string
  to?: string
  count?: number
  roles?: string[] | string
}

export interface MenuItem<T> {
  title?: string
  slot: string
  defaultOpen?: boolean
  childs?: Array<T>,
}

export type Menu = MenuItem<SubMenu> & SubMenu