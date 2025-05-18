import React from 'react';
import { ProductCard } from '../components/ProductCard';

const mockProducts = [
  { id: '1', title: 'Товар A' },
  { id: '2', title: 'Товар B' },
];

export const Catalog: React.FC = () => (
  <div>
    <h1>Каталог</h1>
    {mockProducts.map((p) => (
      <ProductCard
        key={p.id}
        id={p.id}
        title={p.title}
        onAdd={() => console.log(`Добавили ${p.title}`)}
      />
    ))}
  </div>
);
