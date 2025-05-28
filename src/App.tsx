// src/App.tsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Catalog from './pages/Catalog'
import ProductDetail from './pages/ProductDetail'
import BasketPage from './pages/Basket'
import Login from './pages/Login'
import Search from './pages/Search'

const App: React.FC = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/catalog"      element={<Catalog />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/basket"       element={<BasketPage />} />
      <Route path="/login"        element={<Login />} />
      <Route path="/search"       element={<Search />} />
      <Route path="*"             element={<Catalog />} />
    </Routes>
  </>
)

export default App
