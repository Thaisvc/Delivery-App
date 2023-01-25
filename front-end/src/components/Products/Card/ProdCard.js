import React, { useEffect, useState } from 'react';
import { string, number } from 'prop-types';

function RenderProdCard({ count, name, price, url }) {
  const [quant, setQuant] = useState(0);
  useEffect(() => {
    if (quant < 0) setQuant(0);
  }, [quant]);

  return (
    <div className="card">
      <p data-testid={ `customer_products__element-card-price-${count}` }>
        { price.replace('.', ',') }
      </p>
      <img
        className="card-img"
        data-testid={ `customer_products__img-card-bg-image-${count}` }
        src={ url }
        alt={ `Imagem do produto ${name}` }
      />
      <p
        data-testid={ `customer_products__element-card-title-${count}` }
      >
        { name }
      </p>
      <button
        data-testid={ `customer_products__button-card-add-item-${count}` }
        type="button"
        onClick={ () => { setQuant(quant + 1); } }
      >
        +
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${count}` }
        type="number"
        value={ quant }
        className="input-quantity"
      />
      <button
        data-testid={ `customer_products__button-card-rm-item-${count}` }
        type="button"
        onClick={ () => { setQuant(quant - 1); } }
      >
        -
      </button>
    </div>
  );
}

RenderProdCard.propTypes = {
  count: number.isRequired,
  name: string.isRequired,
  price: string.isRequired,
  url: string.isRequired,
};

export default RenderProdCard;
