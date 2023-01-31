import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import useApi from '../../hooks/useApi';
import Navbar from '../../components/Navbar/NavBar';
import TableDefault from '../../components/TableDefault';
import toMoneyType from '../../utils/toMoneyType';

export default function SellerDetails() {
  const [prodsList, setProdsList] = useState(null);
  const api = useApi();
  const dateArray = prodsList && prodsList.saleDate.split('-');
  const { pathname } = useLocation();
  const bronkenPath = pathname.split('/');
  const orderId = bronkenPath[bronkenPath.length - 1];

  useEffect(() => {
    (async () => {
      const response = await api.getSaleProds(orderId);
      setProdsList(response);
    })();
  }, []);

  const renderTotal = () => (
    <p
      data-testid="seller_order_details__element-order-total-price "
    >
      { `TOTAL: R$ ${toMoneyType(prodsList.totalPrice)}` }
    </p>
  );

  return (
    <>
      <Navbar />
      <h2> Detalhe do Pedido </h2>
      <main>
        <span
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          { `PEDIDO ${orderId}` }
        </span>
        <span
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          {
            dateArray && `Data: ${
              dateArray[2].split('T')[0]
            }/${dateArray[1]}/${dateArray[0]}`
          }
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
        { prodsList
        && <TableDefault
          type="orders"
          listItems={ prodsList.sales.map((sale) => ({
            name: sale.name,
            quant: sale.SaleProduct.quantity,
            price: sale.price,
            subTotal: sale.SaleProduct.quantity * sale.price,
          })) }
        /> }
        { prodsList && renderTotal() }
      </main>
    </>
  );
}
