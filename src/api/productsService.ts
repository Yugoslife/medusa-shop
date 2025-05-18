import http from './http';

export interface Product { id: string; title: string; }

export async function fetchProducts(): Promise<Product[]> {
  const { data } = await http.get<Product[]>('/products');
  return data;
}
