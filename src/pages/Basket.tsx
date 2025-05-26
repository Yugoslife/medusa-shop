import React, { useEffect, useState } from 'react';


interface CartItem { product_title: string; quantity: number; }

const BasketPage: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    fetch('/api/store/carts').then(res => res.json()).then(data => setItems(data.items || []));
  }, []);

  return (
    <>
    
      <main data-testid="basket-page" className="p-8">
        <h1 className="text-2xl mb-4">Корзина</h1>
        {items.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <ul>
            {items.map((i, idx) => (
              <li key={idx}>
                {i.product_title} — {i.quantity}
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
};

export default BasketPage;
