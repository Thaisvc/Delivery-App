import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import useApi from '../../hooks/useApi';
import Navbar from '../../components/Navbar/NavBar';
import toMoneyType from '../../utils/toMoneyType';
import TableNoContext from '../../components/TableDefault/TableNoContext';

export default function SellerDetails() {
  const [prodsList, setProdsList] = useState(null);
  const [status, setStatus] = useState(null);
  const api = useApi();
  const dateArray = prodsList && prodsList.saleDate.split('-');
  const { pathname } = useLocation();
  const bronkenPath = pathname.split('/');
  const orderId = bronkenPath[bronkenPath.length - 1];
  const testId = 'seller_order_details__element-order-details-label-delivery-status';

  const getData = async () => {
    const response = await api.getSaleProds(orderId);
    setProdsList(response);
    setStatus(response.status);
  };

  const toUpdateStatus = async () => {
    await api.updateStatus(status, orderId);
    await getData();
  };

  useEffect(async () => {
    await getData();
  }, []);

  useEffect(async () => {
    console.log(status);
    if (status !== null) await toUpdateStatus();
  }, [status]);

  const renderTotal = () => (
    <p
      data-testid="seller_order_details__element-order-total-price"
    >
      { `TOTAL: R$ ${toMoneyType(prodsList.totalPrice)}` }
    </p>
  );

  if (prodsList) {
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
            data-testid={ testId }
          >
            { prodsList.status }
          </span>
          <button
            type="button"
            data-testid="seller_order_details__button-preparing-check"
            onClick={ () => setStatus('Preparando') }
            disabled={ prodsList.status !== 'Pendente' }
          >
            PREPARAR PEDIDO
          </button>
          <button
            type="button"
            data-testid="seller_order_details__button-dispatch-check"
            disabled={ prodsList.status !== 'Preparando' }
            onClick={ () => setStatus('Em Trânsito') }
          >
            SAIU PARA ENTREGA
          </button>
          { prodsList
          && <TableNoContext
            type="orders"
            listItems={ prodsList.sales.map((sale) => ({
              name: sale.name,
              quant: sale.SaleProduct.quantity,
              price: sale.price,
              subTotal: sale.SaleProduct.quantity * sale.price,
            })) }
          /> }
          { renderTotal() }
        </main>
      </>
    );
  }
  return <p>Carregando...</p>;
}
