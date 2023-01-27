import React from 'react';
import * as C from './styles';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import Navbar from '../../components/Products/Navbar';

function Orders() {
  return (
    <C.Container>
      <Navbar />
      <OrderDetails />
    </C.Container>
  );
}

export default Orders;
