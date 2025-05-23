import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import CatalogPage from './pages/Catalog';
import SearchPage from './pages/Search';
import BasketPage from './pages/Basket';
import LoginPage from './pages/Login';


const App: React.FC = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/basket" element={<BasketPage />} />
    </Routes>
  </>
);

export default App;
