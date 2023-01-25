import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getUser, logout } from '../../utils/localStorage';

import AuthContext from '../../context/Auth/AuthContext';

function Navbar() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const getLocalStorage = getUser();
    setUserName(getLocalStorage.name);
  }, []);

  const { setUser } = useContext(AuthContext);
  const handleExit = () => {
    setUser(null);
    logout();
  };

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
      <span
        data-testid="customer_products__element-navbar-user-full-name"
        to="/customer/profile"
      >
        {userName}
      </span>
      <Link
        data-testid="customer_products__element-navbar-link-logout"
        to="/login"
        onClick={ handleExit }
      >
        Sair
      </Link>
    </header>
  );
}

export default Navbar;
