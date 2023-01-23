import React from 'react';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Navbar({ OnNavigation, OffNavegation, logged, setLogin }) {
  const navigate = useNavigate();

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
        <div
          data-testid="customer_products__element-navbar-link-logout"
        >
          <OnNavigation />
          {
            (logged)
              ? (
                <button type="button" onClick={ () => logoff() }>
                  SAIR
                </button>
              )
              : <OffNavegation />

          }
        </div>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  OnNavigation: PropTypes.elementType.isRequired,
  OffNavegation: PropTypes.elementType,
  logged: PropTypes.bool,
  setLogin: PropTypes.func,
};

Navbar.defaultProps = {
  OffNavegation: null,
  logged: undefined,
  setLogin: undefined,
};

export default Navbar;
