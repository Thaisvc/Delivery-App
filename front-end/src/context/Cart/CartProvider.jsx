import { useMemo, useState } from 'react';
import { node } from 'prop-types';
import CartContext from './CartContext';
import useApi from '../../hooks/useApi';

function CartProvider({ children }) {
  const [prodList, setProdList] = useState([]);
  const [cart, setCart] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [total, setTotal] = useState(0);

  const api = useApi();

  const getProds = async () => {
    const data = await api.getProds();
    if (data) {
      setProdList(data);
      return true;
    }
    return false;
  };

  const value = useMemo(
    () => ({ prodList, getProds, cart, setCart, total, setTotal }),
    [prodList, getProds, cart, setCart, total, setTotal],
  );

  return (
    <CartContext.Provider value={ value }>
      { children }
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: node.isRequired,
};

export default CartProvider;
