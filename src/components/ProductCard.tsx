import React from 'react';

export interface ProductCardProps {
  id: string;
  title: string;
  onAdd?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  onAdd = () => {},
}) => (
  <div data-testid={`product-${id}`}>
    <h2>{title}</h2>
    <button
      data-testid="add-to-basket"
      onClick={onAdd}
    >
      Добавить в корзину
    </button>
  </div>
);
