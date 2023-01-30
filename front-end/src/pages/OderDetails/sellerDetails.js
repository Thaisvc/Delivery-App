import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/NavBar';
import TableDefault from '../../components/TableDefault';

export default function SellerDetails() {
  const teste = [
    { name: 'teste', quant: 2, price: 10.50, subTotal: 21 },
    { name: 'teste', quant: 2, price: 10.50, subTotal: 21 },
    { name: 'teste', quant: 2, price: 10.50, subTotal: 21 },
  ];
  const { pathname } = useLocation();
  const bronkenPath = pathname.split('/');
  return (
    <>
      <Navbar />
      <h2> Detalhe do Pedido </h2>
      <main>
        <span
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          { `PEDIDO ${bronkenPath[bronkenPath.length - 1]}` }
        </span>
        <span
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          Data: 12/12/1212
        </span>
        <span
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          PENDENTE
        </span>
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
        >
          SAIU PARA ENTREGA
        </button>
        <TableDefault type="orders" listItems={ teste } />
      </main>
    </>
  );
}
