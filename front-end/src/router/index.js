import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register/Register';
import Products from '../pages/Products/Products';
import CartProvider from '../context/Cart/CartProvider';
import SellerProvider from '../context/Seller/SellerProvider';
import CustomerCheckout from '../pages/CustomerCheckout';
import Orders from '../pages/Orders';
import AdminManage from '../pages/Admin/index';
import OrderDetails from '../pages/OderDetails';
import SellerOrders from '../pages/SellerOrders';

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
        <Route
          path="orders"
          element={
            <CartProvider>
              <Orders />
            </CartProvider>
          }
        />
        <Route
          path="orders/:id"
          element={
            <CartProvider>
              <OrderDetails />
            </CartProvider>
          }
        />
      </Route>
      <Route path="/seller">
        <Route
          path="orders"
          element={
            <SellerProvider>
              <SellerOrders />
            </SellerProvider>
          }
        />
      </Route>
      <Route path="/admin/manage" element={ <AdminManage /> } />
    </Routes>
  );
}
