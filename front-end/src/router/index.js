import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register/Register';
import Products from '../pages/Products/Products';
import CartProvider from '../context/Cart/CartProvider';
import AdminManage from '../pages/Admin/index';
import Sales from '../pages/Sales/Sales';

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
              <Sales />
            </CartProvider>
          }
        />
      </Route>
      <Route path="/admin/manage" element={ <AdminManage /> } />
    </Routes>
  );
}
