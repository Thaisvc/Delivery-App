import React, { useEffect, useContext } from 'react';
import NavBar from '../../components/Navbar/NavBar';
import RenderSaleCard from '../../components/Sales/Card/SaleCard';
import * as C from './styles';
import CartContext from '../../context/Cart/CartContext';
import OrderDetails from '../OderDetails';

function Orders() {
  const { getSales, saleList } = useContext(CartContext);

  useEffect(() => {
    const populateSalesList = async () => {
      await getSales();
    };
    populateSalesList();
  }, []);
  return (
    <C.Container>
      <NavBar />
      { saleList.map((sale, index) => (
        <RenderSaleCard
          key={ index }
          id={ sale.id }
          totalPrice={ sale.totalPrice }
          saleDate={ sale.saleDate }
          status={ sale.status }
        />

      )) }
      <OrderDetails />
    </C.Container>
  );
}
export default Orders;
