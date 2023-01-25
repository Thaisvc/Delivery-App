import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/Products/Navbar';
import CartContext from '../../context/Cart/CartContext';
import RenderProdCard from '../../components/Products/Card/ProdCard';
import toMoneyType from '../../utils/toMoneyType';

function Products() {
  const { getProds, prodList, total } = useContext(CartContext);
  const nav = useNavigate();

  useEffect(() => {
    const populateList = async () => {
      await getProds();
    };
    populateList();
  }, []);

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
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => nav('/customer/checkout') }
      >
        <p data-testid="customer_products__checkout-bottom-value">
          { `Ver Carrinho: R$${toMoneyType(total)}` }
        </p>
      </button>
    </>
  );
}

export default Products;
