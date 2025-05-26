import http from './http';
const API_URL = 'http://localhost:4000'



export interface BasketItem { productId: string; quantity: number; }

export async function fetchBasket(): Promise<BasketItem[]> {
  const { data } = await http.get<BasketItem[]>('/basket');
  return data;
}

export async function addItem(productId: string, quantity: number) {
  const res = await fetch(`${API_URL}/carts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ product_id: productId, quantity }),
  })
  return res.json()
}

export async function getCart() { /* … */ }
export async function clearCart()   { /* … */ }


export async function addToBasket(item: BasketItem): Promise<void> {
  await http.post('/basket', item);
}

export async function removeFromBasket(productId: string): Promise<void> {
  await http.delete(`/basket/${productId}`);
}
