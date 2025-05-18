import React from 'react';

export const Basket: React.FC = () => (
  <div>
    <h1>Корзина</h1>
    {/* пока просто проверим, что попадаем на эту страницу */}
    <div data-testid="basket-page">Здесь будут товары</div>
  </div>
);
