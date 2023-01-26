import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/Products/Navbar';
import CartContext from '../../context/Cart/CartContext';
import RenderProdCard from '../../components/Products/Card/ProdCard';

function Products() {
  const { getProds, prodList, total } = useContext(CartContext);
  const navHistory = useNavigate();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const populateList = async () => {
      await getProds();
    };
    populateList();
  }, []);

  useEffect(() => {
    if (total > 0) return setDisabled(false);
    return setDisabled(true);
  }, [total]);

  return (
    <>
      <Navbar />
      {
        prodList
          .map(({
            name,
            price,
            urlImage,
            id,
          }) => (<RenderProdCard
            key={ id }
            count={ id }
            name={ name }
            price={ price }
            url={ urlImage }
          />))
      }
      <button
        data-testid="customer_products__button-cart"
        type="button"
        disabled={ disabled }
        onClick={ () => navHistory('/customer/checkout') }
      >
        Ver carinho: R$
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          { `Ver Carrinho: R$${total.toFixed(2).replace('.', ',')}` }
        </span>

      </button>
    </>
  );
}

export default Products;
