import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import CartPage from './components/Pages/Cart/CartPage';

export default function AppRoutes() {
  return (
    <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/search/:searchTerm" element={<Home />} />
        <Route path ="/cart" element={<CartPage />} />
    </Routes>
  );
}
