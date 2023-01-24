import React from 'react';
import { PropTypes } from 'prop-types';
import { Navigate } from 'react-router-dom';

function Navbar({ setLogin }) {
  // const navigate = useNavigate();

  const logoff = () => {
    localStorage.removeItem('token');
    setLogin(false);
    navigate('/login');
  };

  return (
    <header className="header">
      <div>
        <div
          data-testid="customer_products__element-navbar-link-products"
        // onClick={() => navigate('/products')}
        >
          PRODUTOS
        </div>
        <div
          data-testid="customer_products__element-navbar-link-orders"
        // type="button"
        // req12 onClick={() => navigate('/ ')}
        >
          MEUS PEDIDOS
        </div>
        <div
          data-testid="customer_products__element-navbar-user-full-name"
        />
        User Name
      </div>

      <div
        data-testid="customer_products__element-navbar-link-logout"
      />
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
