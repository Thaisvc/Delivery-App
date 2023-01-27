import React from 'react';
import { number, string } from 'prop-types';

function RenderSaleCard({ id, totalPrice, saleDate, status }) {
  return (
    <>
      <p
        data-testid={ `customer_orders__element-order-id-${id}` }
      >
        {`Pedido ${id}`}
      </p>
      <p
        data-testid={ `customer_orders__element-delivery-status-${id}` }
      >
        { status }
      </p>
      <p
        data-testid={ `customer_orders__element-order-date-${id}` }
      >
        { saleDate }
      </p>
      <p
        data-testid={ `customer_orders__element-card-price-${id}` }
      >
        { `R$ ${totalPrice}` }
      </p>
    </>
  );
}

RenderSaleCard.propTypes = {
  id: number,
  totalPrice: number,
  saleDate: string,
  status: string,
}.isRequired;

export default RenderSaleCard;
