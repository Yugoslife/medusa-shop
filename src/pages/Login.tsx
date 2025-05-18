import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Вход</h1>
      <input data-testid="username" placeholder="Логин" />
      <input
        data-testid="password"
        type="password"
        placeholder="Пароль"
      />
      <button
        data-testid="login-btn"
        onClick={() => navigate('/search')}
      >
        Войти
      </button>
    </div>
  );
};
