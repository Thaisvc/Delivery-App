import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppProvider from './provider/AppProvider';
import Products from './pages/Products';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/customer/products" element={ <Products /> } />
      </Routes>
    </AppProvider>
  );
}

export default App;
