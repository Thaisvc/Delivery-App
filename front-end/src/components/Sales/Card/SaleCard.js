import React from 'react';
import { number, string } from 'prop-types';
import { useNavigate } from 'react-router-dom';

function RenderSaleCard({ id, totalPrice, saleDate, status }) {
  const month = saleDate.split('-');
  const dateObj = new Date(saleDate);
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/customer/orders/${id}`);
  };

  const onKeyDown = (event) => {
    event.preventDefault();
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex="0"
      onKeyDown={ onKeyDown }
      onClick={ () => navigate(`/customer/orders/${id}`) }
    >
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
        { `${dateObj.getDate()}/${month[1]}/${dateObj.getFullYear()}` }
      </p>
      <p
        data-testid={ `customer_orders__element-card-price-${id}` }
      >
        { `${totalPrice.replace('.', ',')}` }
      </p>
    </div>
  );
}

RenderSaleCard.propTypes = {
  id: number,
  totalPrice: number,
  saleDate: string,
  status: string,
}.isRequired;

export default RenderSaleCard;
