import React, { useEffect, useState } from 'react';
import { number, string } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getByKey } from '../../../utils/localStorage';

function RenderSaleCard({
  id,
  totalPrice,
  saleDate,
  status,
  deliveryAddress,
  deliveryNumber }) {
  const month = saleDate.split('-');
  const dateObj = new Date(saleDate);
  const navigate = useNavigate();
  const [dataTestType, setDataTestType] = useState('');

  useEffect(() => {
    const userRole = getByKey('user').role;
    if (userRole === 'seller') setDataTestType('seller_orders__element');
    else setDataTestType('customer_orders__element');
  }, [deliveryAddress]);

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
      onClick={ () => navigate(`/seller/orders/${id}`) }
    >
      <p
        data-testid={ `${dataTestType}-order-id-${id}` }
      >
        {`Pedido ${id}`}
      </p>
      <p
        data-testid={ `${dataTestType}-delivery-status-${id}` }
      >
        { status }
      </p>
      <p
        data-testid={ `${dataTestType}-order-date-${id}` }
      >
        { `${dateObj.getDate()}/${month[1]}/${dateObj.getFullYear()}` }
      </p>
      <p
        data-testid={ `${dataTestType}-card-price-${id}` }
      >
        { `${totalPrice.replace('.', ',')}` }
      </p>
      <p
        data-testid={ `${dataTestType}-card-price-${id}` }
      >
        { `${deliveryAddress}, ${deliveryNumber}` }
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
