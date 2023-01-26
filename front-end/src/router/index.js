import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register/Register';
import Products from '../pages/Products/Products';
import CustomerCheckout from '../pages/CustomerCheckout';
import CartProvider from '../context/Cart/CartProvider';
import AdminManage from '../pages/Admin/index';

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
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
          path="checkout"
          element={
            <CartProvider>
              <CustomerCheckout />
            </CartProvider>
          }
        />
      </Route>
      <Route path="/admin/manage" element={ <AdminManage /> } />
    </Routes>
  );
}
