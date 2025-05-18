import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProductCard } from '../components/ProductCard';

describe('ProductCard', () => {
  it('рендерит переданный заголовок и вызывает onAdd по клику', async () => {
    const handleAdd = jest.fn();
    const { getByText, getByTestId } = render(
      <ProductCard id="123" title="Тестовый товар" onAdd={handleAdd} />
    );

    // Проверяем, что заголовок отобразился
    expect(getByText('Тестовый товар')).toBeTruthy();

    // Находим кнопку по data-testid и кликаем
    const btn = getByTestId('add-to-basket');
    await userEvent.click(btn);

    // Проверяем, что onAdd был вызван
    expect(handleAdd).toHaveBeenCalledTimes(1);
  });
});
