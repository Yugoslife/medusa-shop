import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => (
  <nav className="p-4 bg-gray-100 flex space-x-4">
    <Link to="/search" data-testid="nav-search">Поиск</Link>
    <Link to="/catalog" data-testid="nav-catalog">Каталог</Link>
    <Link to="/basket" data-testid="nav-basket">Корзина</Link>
    <Link to="/login" data-testid="nav-login">Вход</Link>
  </nav>
);

export default NavBar;
