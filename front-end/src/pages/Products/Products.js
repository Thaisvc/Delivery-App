import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/Products/Navbar';
import CartContext from '../../context/Cart/CartContext';
import RenderProdCard from '../../components/Products/Card/ProdCard';

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
        data-testid="customer_products__checkout-bottom-value"
        onClick={ () => nav('/customer/checkout') }
      >
        { `Ver Carrinho: R$${total.toFixed(2).replace('.', ',')}` }
      </button>
    </>
  );
}

export default Products;
