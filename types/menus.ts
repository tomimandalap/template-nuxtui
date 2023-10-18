export interface SubMenu {
  label: string
  icon?: string
  to?: string
  count?: number
}

export interface MenuItem<T> {
  title?: string
  slot: string
  childs?: Array<T>,
}

export type Menu = MenuItem<SubMenu> & SubMenu