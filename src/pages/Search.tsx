// src/pages/Search.tsx
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';

interface Product { id: string; title: string; }

const SearchPage: React.FC = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [displayed, setDisplayed] = useState<Product[]>([]);
  const [query, setQuery] = useState('');

  // 1) Загрузка всех товаров при монтировании
  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then(r => r.json())
      .then((data: Product[]) => {
        setAllProducts(data);
        setDisplayed(data);
      });
  }, []);

  // 2) Функция фильтрации
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = allProducts.filter(p =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
    setDisplayed(filtered);
  };

  return (
    <>
      <main className="p-8">
        <h1 className="text-2xl mb-4">Поиск</h1>
        <form onSubmit={handleSearch}>
          <input
            data-testid="search-input"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Поиск..."
            className="border p-2 mb-4 w-full"
          />
        </form>
        <ul className="grid grid-cols-3 gap-4">
          {displayed.map(p => (
            <li
              key={p.id}
              data-testid="product-card"
              className="border p-4"
            >
              {p.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default SearchPage;
