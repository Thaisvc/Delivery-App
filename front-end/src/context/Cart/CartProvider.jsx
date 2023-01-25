import { useMemo, useState, useEffect } from 'react';
import { node } from 'prop-types';
import CartContext from './CartContext';
import useApi from '../../hooks/useApi';

function CartProvider({ children }) {
  const [prodList, setProdList] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [sellers, setSellers] = useState([]);

  const api = useApi();

  useEffect(() => {
    let value = 0;
    cart.forEach((item) => {
      value += item.price * item.quant;
      item.subTotal = item.price * item.quant;
    });
    setTotal(value);
  }, [cart]);

  const getProds = async () => {
    const data = await api.getProds();
    if (data) {
      setProdList(data);
      return true;
    }
    return false;
  };

  const getSellers = async () => {
    const data = await api.getSellers();
    if (data) {
      setSellers(data);
      return true;
    }
    return false;
  };

  const value = useMemo(
    () => ({ prodList, getProds, cart, setCart, total, setTotal, sellers, getSellers }),
    [prodList, getProds, cart, setCart, total, setTotal, sellers, getSellers],
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
