import React from 'react';
import { number } from 'prop-types';

function RenderSaleCard({ count }) {
  return (
    <>
      <p
        data-testid={ `customer_orders__element-order-id-${count}` }
      >
        {`Pedido ${count}`}
      </p>
      <p
        data-testid={ `customer_orders__element-delivery-status-${count}` }
      >
        Status
      </p>
      <p
        data-testid={ `customer_orders__element-order-date-${count}` }
      >
        Data da Venda
      </p>
      <p
        data-testid={ `customer_orders__element-card-price-${count}` }
      >
        Total da Venda
      </p>
    </>
  );
}

RenderSaleCard.propTypes = {
  count: number.isRequired,
};

export default RenderSaleCard;
