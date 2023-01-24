import React from 'react';
import { PropTypes } from 'prop-types';
import { Link, Navigate } from 'react-router-dom';
import { useContext } from 'react';

function Navbar() {
  const auth = useContext();

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
        onClick={}
      >
        Sair
      </Link>
      { (logoff) && <Navigate to="/login" /> }
    </header>
  );
}

Navbar.propTypes = {
  setLogin: PropTypes.func,
};

Navbar.defaultProps = {
  setLogin: undefined,
};

export default Navbar;
