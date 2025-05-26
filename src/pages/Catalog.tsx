import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Product { id: string; title: string; }

const CatalogPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then(r => r.json())
      .then(setProducts);
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl mb-4">Каталог</h1>
      <ul className="grid grid-cols-3 gap-4">
        {products.map(p => (
          <li key={p.id} data-testid="product-card" className="border p-4">
            <Link to={`/catalog/${p.id}`} className="block hover:underline" data-testid="product-link">
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CatalogPage;