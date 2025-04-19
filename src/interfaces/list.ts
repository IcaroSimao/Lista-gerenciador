import type { Item } from './item'

export interface List {
  id: number
  title: string
  items: Item[]
  type: string
  createAt: string
}
