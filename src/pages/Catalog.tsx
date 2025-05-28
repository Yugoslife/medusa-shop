// src/pages/Catalog.tsx
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllProducts } from '../api/productsService'
import type { Product } from '../api/productsService'

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getAllProducts()
      .then(data => setProducts(data))
      .catch(() => setError('Failed to load products'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p data-testid="catalog-loading">Loading catalog…</p>
  if (error)   return <p data-testid="catalog-error">{error}</p>

  return (
    <main className="p-8">
      <h1 data-testid="catalog-title" className="text-3xl mb-4">Каталог</h1>
      <ul data-testid="products-list" className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <li
            key={product.id}
            data-testid="product-card"
            className="border p-4"
          >
            <Link
              to={`/products/${product.id}`}
              data-testid="product-link"
              className="block hover:underline"
            >
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Catalog
