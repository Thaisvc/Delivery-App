import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/Products/Navbar';
import RenderProdCard from '../../components/Products/Card/ProdCard';
import CartContext from '../../context/Cart/CartContext';

function Products() {
  const { getProds, prodList, cart } = useContext(CartContext);
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
        onClick={ () => nav('/customer/checkout') }
      >
        { `Ver Carrinho: R$${cart.reduce((acc, cur) => acc + cur)}` }
      </button>
    </>
  );
}

export default Products;
