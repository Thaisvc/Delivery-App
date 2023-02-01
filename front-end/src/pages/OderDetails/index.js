import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/NavBar';

import TableDefault from '../../components/TableDefault';
import CartContext from '../../context/Cart/CartContext';
import toMoneyType from '../../utils/toMoneyType';

import useApi from '../../hooks/useApi'; // eu

export default function OrderDetails() {
  const {
    cart, total, getSales, saleList, sellers, seller,
  } = useContext(CartContext);

  const idSale = window.location.pathname.match(/\d+/)[0];

  const saleById = saleList.length
  && saleList.filter((sale) => Number(sale.id) === Number(idSale))[0];

  const getSellerName = sellers.length
  && sellers.filter(({ id }) => Number(id) === Number(seller))[0];

  const dateArray = saleById && saleById.saleDate.split('-');
  const dIStatus = 'customer_order_details__element-order-details-label-delivery-status';

  const [status, setStatus] = useState(null); // eu
  const api = useApi(); // eu

  const getData = async () => { // eu
    const response = await api.getSaleProds(idSale);
    setStatus(response.status);
    console.log('1', response.status);
    console.log('1', response);
  };

  const toUpdateStatus = async () => { // eu
    console.log('3', status, idSale);
    const test = await api.updateStatus(status, idSale);
    console.log(test, 'retorno');
    await getData();
  };

  useEffect(async () => { // eu
    console.log('2', status);
    if (status !== null) await toUpdateStatus();
  }, [status]);

  useEffect(async () => {
    const populateSalesList = () => {
      getSales();
      console.log(dIStatus);
    };
    populateSalesList();
    await getData();
  }, []);

  return (
    <>
      <Navbar />
      <h1 data-testid="top-title">Detalhes do Pedido</h1>

      <p
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        {`PEDIDO ${idSale}`}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        { `P.Vend: ${getSellerName && getSellerName.name}` }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {
          dateArray && `${
            dateArray[2].split('T')[0]
          }/${dateArray[1]}/${dateArray[0]}`
        }
      </p>
      <p
        data-testid={ dIStatus }
      >
        { `Status ${saleById && status}` }
      </p>

      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled={
          saleById ? status !== 'Em Trânsito'
            : true
        }
        onClick={ () => setStatus('Entregue') } // eu
      >
        MARCAR COMO ENTREGUE
      </button>
      { cart
        && <TableDefault
          type="order"
          listItems={ cart }
        />}

      <span data-testid="customer_order_details__element-order-total-price">
        { `R$ ${toMoneyType(total)}` }
      </span>
    </>

  );
}
