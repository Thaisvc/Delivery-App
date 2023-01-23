import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import AppProvider from './provider/AppProvider';
import Products from './pages/Products';

function App() {
  return (
    <AppProvider>
      <Router>
        <Route path="/products" element={ <Products /> } />
      </Router>
    </AppProvider>
  );
}

export default App;
