import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register/Register';
import Products from '../pages/Products/Products';
import CustomerCheckout from '../pages/CustomerCheckout';

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/customer/checkout" element={ <CustomerCheckout /> } />
    </Routes>
  );
}
