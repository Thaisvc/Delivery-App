import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register/Register';
import Products from '../pages/Products/Products';

import AdminManage from '../pages/Admin/Registration';

import CartProvider from '../context/Cart/CartProvider';

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />

      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/admin/manage" element={ <AdminManage /> } />

      <Route
        path="/customer"
      >
        <Route
          path="products"
          element={
            <CartProvider>
              <Products />
            </CartProvider>
          }
        />
        <Route
          path="order"
          element={
            <CartProvider>
              <Products />
            </CartProvider>
          }
        />
      </Route>

    </Routes>
  );
}
