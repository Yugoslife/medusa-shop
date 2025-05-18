import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Catalog } from './pages/Catalog';
import { Basket } from './pages/Basket';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<Catalog />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  </BrowserRouter>
);

export default App;
