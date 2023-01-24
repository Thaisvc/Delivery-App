import React, { useEffect, useState } from 'react';

function RenderProdCard(key) {
  const [quant, setQuant] = useState(0);
  useEffect(() => {
    if (quant < 0) setQuant(0);
  }, [quant]);

  return (
    <div className="card" key={ key }>
      <p data-testid={ `customer_products__element-card-price-${key}` }>
        Preço
      </p>
      <img
        className="card-img"
        data-testid={ `customer_products__img-card-bg-image-${key}` }
        alt=""
      />
      <p
        data-testid={ `customer_products__element-card-title-${key}` }
      >
        teste
      </p>
      <button
        data-testid={ `customer_products__button-card-add-item-${key}` }
        type="button"
        onClick={ () => { setQuant(quant + 1); } }
      >
        +
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${key}` }
        type="number"
        value={ quant }
        className="input-quantity"
      />
      <button
        data-testid={ `customer_products__button-card-rm-item-${key}` }
        type="button"
        onClick={ () => { setQuant(quant - 1); } }
      >
        -
      </button>
    </div>
  );
}

export default RenderProdCard;
