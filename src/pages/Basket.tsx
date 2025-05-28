// src/pages/Basket.tsx
import React, { useState, useEffect } from 'react'
import type { BasketItem } from '../api/basketService'
import { fetchBasket, removeFromBasket, clearCart } from '../api/basketService'
import { useNavigate } from 'react-router-dom'

const BasketPage: React.FC = () => {
  const [items, setItems]     = useState<BasketItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchBasket()
      .then(data => setItems(data))
      .catch(() => setError('Failed to load basket'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p data-testid="basket-loading">Loading basket…</p>
  if (error)   return <p data-testid="basket-error">{error}</p>

  return (
    <main className="p-8">
      <h1 className="text-3xl mb-4">Your Basket</h1>

      {items.length === 0 ? (
        <p data-testid="basket-empty">Your basket is empty.</p>
      ) : (
        <ul className="space-y-2">
          {items.map(item => (
            <li
              key={item.id}
              data-testid="cart-item"
              className="flex justify-between items-center p-4 border rounded"
            >
              <span>{item.productId} × {item.quantity}</span>
              <button
                data-testid="remove-item"
                className="px-2 py-1 bg-red-500 text-white rounded"
                onClick={async () => {
                  await removeFromBasket(item.id)
                  setItems(prev => prev.filter(i => i.id !== item.id))
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex space-x-4">
        <button
          data-testid="clear-basket"
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={async () => {
            await clearCart()
            setItems([])
          }}
        >
          Clear Basket
        </button>
        <button
          data-testid="back-to-catalog"
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => navigate('/catalog')}
        >
          Continue Shopping
        </button>
      </div>
    </main>
  )
}

export default BasketPage
