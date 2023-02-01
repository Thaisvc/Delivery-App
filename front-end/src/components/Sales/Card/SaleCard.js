import React, { useEffect, useState } from 'react';
import { number, string } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getByKey } from '../../../utils/localStorage';

const NUM_PARAM = 10;

function RenderSaleCard({
  id,
  totalPrice,
  saleDate,
  status,
  deliveryAddress,
  deliveryNumber }) {
  const getRole = getByKey('user').role;
  const month = saleDate.split('-');
  const dateObj = new Date(saleDate);
  const navigate = useNavigate();
  const [dataTestType, setDataTestType] = useState(null);
  const [urlToGo, setUrlToGo] = useState(null);
  const [day, setDay] = useState('');

  useEffect(() => {
    setDay(dateObj.getDate() < NUM_PARAM ? `0${dateObj.getDate()}` : dateObj.getDate());
    if (getRole === 'seller') {
      setDataTestType('seller_orders__element');
      setUrlToGo(`/seller/orders/${id}`);
    } else {
      setDataTestType('customer_orders__element');
      setUrlToGo(`/customer/orders/${id}`);
    }
  }, []);

  const onClick = () => {
    navigate(urlToGo);
  };

  const onKeyDown = (event) => {
    event.preventDefault();
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  };

  if (urlToGo && dataTestType) {
    return (

      <div
        role="button"
        tabIndex="0"
        onKeyDown={ onKeyDown }
        onClick={ () => navigate(urlToGo) }
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
          { `${day}/${month[1]}/${dateObj.getFullYear()}` }
        </p>
        <p
          data-testid={ `${dataTestType}-card-price-${id}` }
        >
          { `${totalPrice.replace('.', ',')}` }
        </p>
        { getRole === 'seller' && (
          <p
            data-testid={ `${dataTestType}-card-address-${id}` }
          >
            { `${deliveryAddress}, ${deliveryNumber}` }
          </p>) }

      </div>
    );
  }

  return <p>carregando</p>;
}

RenderSaleCard.propTypes = {
  id: number,
  totalPrice: number,
  saleDate: string,
  status: string,
}.isRequired;

export default RenderSaleCard;
