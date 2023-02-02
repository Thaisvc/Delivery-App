import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getByKey, logout } from '../../utils/localStorage';
import * as C from './styles';
import AuthContext from '../../context/Auth/AuthContext';

function Navbar() {
  const [userRole, setUserRole] = useState();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const getLocalStorage = getByKey('user');
    if (getLocalStorage) {
      setUserName(getLocalStorage.name);
      setUserRole(getLocalStorage.role);
    }
    console.log(userRole);
  }, []);

  const { setUser } = useContext(AuthContext);
  const handleExit = () => {
    setUser(null);
    logout();
  };

  return (
    <C.Header className="header">
      <C.Nav>
        { userRole === 'customer' && (
          <>
            <div>
              <Link
                data-testid="customer_products__element-navbar-link-products"
                to="/customer/products"
              >
                PRODUTOS
              </Link>
            </div>
            <div>
              <Link
                data-testid="customer_products__element-navbar-link-orders"
                to="/customer/orders"
              >
                MEUS PEDIDOS
              </Link>
            </div>
          </>
        ) }
        { userRole === 'administrator' && (
          <div>
            <Link
              data-testid="customer_products__element-navbar-link-orders"
              to="/admin"
            >
              'GERENCIAR USUÁRIOS'
            </Link>
          </div>) }
        { userRole === 'seller' && (
          <div>
            <Link
              data-testid="customer_products__element-navbar-link-orders"
              to="/seller/orders"
            >
              PEDIDOS
            </Link>
          </div>
        ) }
        <div
          data-testid="customer_products__element-navbar-user-full-name"
          to="/customer/profile"
        >
          { userName }
        </div>
        <div>
          <Link
            data-testid="customer_products__element-navbar-link-logout"
            to="/login"
            onClick={ handleExit }
          >
            Sair
          </Link>
        </div>
      </C.Nav>
    </C.Header>
  );
}

export default Navbar;
