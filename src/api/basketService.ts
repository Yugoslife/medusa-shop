// src/api/basketService.ts
import http from './http'

/** Интерфейс элемента корзины */
export interface BasketItem {
  id: number
  productId: string
  quantity: number
}

/** Получить содержимое корзины (GET /carts) */
export async function fetchBasket(): Promise<BasketItem[]> {
  const { data } = await http.get<{ id: number; product_id: string; quantity: number }[]>('/carts')
  return data.map(item => ({
    id: item.id,
    productId: item.product_id,
    quantity: item.quantity,
  }))
}

/** Добавить товар в корзину (POST /carts) */
export async function addItem(productId: string, quantity: number): Promise<BasketItem> {
  const { data } = await http.post<{ id: number; product_id: string; quantity: number }>(
    '/carts',
    { product_id: productId, quantity }
  )
  return {
    id: data.id,
    productId: data.product_id,
    quantity: data.quantity,
  }
}

/** Удалить один товар из корзины (DELETE /carts/:id) */
export async function removeFromBasket(id: number): Promise<void> {
  await http.delete(`/carts/${id}`)
}

/** Очистить всю корзину */
export async function clearCart(): Promise<void> {
  const items = await fetchBasket()
  await Promise.all(items.map(i => http.delete(`/carts/${i.id}`)))
}
