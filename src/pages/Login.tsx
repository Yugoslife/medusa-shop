import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';  // ← default import

const LoginPage: React.FC = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: ваш fetch к /store/auth
    navigate('/search');
  };

  return (
    <>
        <main className="p-8">
        <h1 className="text-2xl mb-4">Вход</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            data-testid="username"
            value={user}
            onChange={e => setUser(e.target.value)}
            placeholder="user"
            className="border p-2 w-full"
          />
          <input
            data-testid="password"
            type="password"
            value={pass}
            onChange={e => setPass(e.target.value)}
            placeholder="pass"
            className="border p-2 w-full"
          />
          <button
            data-testid="login-btn"
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Enter
          </button>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
