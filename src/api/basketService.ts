import http from './http';

export interface BasketItem { productId: string; quantity: number; }

export async function fetchBasket(): Promise<BasketItem[]> {
  const { data } = await http.get<BasketItem[]>('/basket');
  return data;
}

export async function addToBasket(item: BasketItem): Promise<void> {
  await http.post('/basket', item);
}

export async function removeFromBasket(productId: string): Promise<void> {
  await http.delete(`/basket/${productId}`);
}
