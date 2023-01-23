import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import AppProvider from './provider/AppProvider';
import Register from './pages/Register';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/register" element={ <Register /> } />
        <Route path="/costumer/products" />
      </Routes>
    </AppProvider>
  );
}

export default App;
