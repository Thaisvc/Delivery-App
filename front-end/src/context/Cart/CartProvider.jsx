import { useMemo, useState, useEffect } from 'react';
import { node } from 'prop-types';
import CartContext from './CartContext';
import useApi from '../../hooks/useApi';

function CartProvider({ children }) {
  const [prodList, setProdList] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [sellers, setSellers] = useState([]);
  const [saleId, setSaleId] = useState();
  const [seller, setSeller] = useState();
  const [address, setAddress] = useState();
  const [houseNumber, setHouseNumber] = useState();

  const api = useApi();

  useEffect(() => {
    let value = 0;
    cart.forEach((item) => {
      value += item.price * item.quant;
      item.subTotal = Number((Number(item.price) * item.quant).toFixed(2));
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
      setSeller(data[0].id);
      return true;
    }
    return false;
  };

  const createSale = async ({
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status, cartItems,
  }) => {
    const data = await api.createSale({
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status, cartItems,
    });
    console.log(data);
    return setSaleId(data.id);
  };

  const value = useMemo(
    () => ({
      prodList,
      getProds,
      cart,
      setCart,
      total,
      setTotal,
      sellers,
      getSellers,
      saleId,
      createSale,
      seller,
      setSeller,
      address,
      setAddress,
      houseNumber,
      setHouseNumber,
    }),
    [
      prodList,
      getProds,
      cart,
      setCart,
      total,
      setTotal,
      sellers,
      getSellers,
      saleId,
      createSale,
      seller,
      setSeller,
      address,
      setAddress,
      houseNumber,
      setHouseNumber,
    ],
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
