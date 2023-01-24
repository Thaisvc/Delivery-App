import React, { useState, useEffect } from 'react';
import Navbar from '../components/Products/Navbar';

function Products() {
  const [logged, setLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLogin(true);
    }
  }, []);
  return (
    <>
      <Navbar
        logged={ logged }
        setLogin={ setLogin }
      />
      <section className="products-section" />
    </>
  );
}

export default Products;
