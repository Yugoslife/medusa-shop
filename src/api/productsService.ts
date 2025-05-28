// src/api/productsService.ts
import http from './http'

/** Модель продукта */
export interface Product {
  id: string
  title: string
  price?: number
}

/** Получить все продукты (GET /products) */
export async function getAllProducts(): Promise<Product[]> {
  const { data } = await http.get<Product[]>('/products')
  return data
}

/** Получить продукт по ID (GET /products/:id) */
export async function getProductById(id: string): Promise<Product> {
  const { data } = await http.get<Product>(`/products/${id}`)
  return data
}
