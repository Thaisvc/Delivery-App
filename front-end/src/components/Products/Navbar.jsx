import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/Auth/AuthContext';

function Navbar() {
  const { setUser } = useContext(AuthContext);

  return (
    <header className="header">
      <Link
        data-testid="customer_products__element-navbar-link-products"
        to="/customer/products"
      >
        PRODUTOS
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/customer/orders"
      >
        MEUS PEDIDOS
      </Link>
      <Link
        data-testid="customer_products__element-navbar-user-full-name"
        to="/customer/profile"
      >
        User Name
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-logout"
        to="/login"
        onClick={ setUser(null) }
      >
        Sair
      </Link>
    </header>
  );
}

export default Navbar;
