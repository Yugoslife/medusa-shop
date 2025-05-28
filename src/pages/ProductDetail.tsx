// src/pages/ProductDetail.tsx
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { addItem } from '../api/basketService'

interface Product { id: string; title: string }

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!id) return
    fetch(`http://localhost:4000/products/${id}`)
      .then(res => res.json())
      .then(setProduct)
  }, [id])

  if (!product) {
    return <p>Loading…</p>
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl mb-4" data-testid="product-detail">
        {product.title}
      </h1>
      <p>ID: {product.id}</p>

      {/* Вот она, кнопка «Add to cart» */}
      <button
         data-testid="add-to-cart"
         className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
         onClick={() => {
          addItem(product.id, 1)       // POST /basket
           navigate('/basket')         // переходим на нашу страницу корзины
         }}
      >
        Add to cart
      </button>

      <button
        className="mt-2 text-blue-600"
        onClick={() => navigate('/catalog')}
      >
        ← Back to catalog
      </button>
    </main>
  )
}

export default ProductDetailPage
