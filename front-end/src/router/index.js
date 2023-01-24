import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/costumer/products" />
    </Routes>
  );
}
