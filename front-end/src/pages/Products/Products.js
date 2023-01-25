import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/Products/Navbar';
import CartContext from '../../context/Cart/CartContext';
import RenderProdCard from '../../components/Products/Card/ProdCard';

function Products() {
  const { getProds, prodList, total, cart } = useContext(CartContext);
  const nav = useNavigate();

  useEffect(() => {
    const populateList = async () => {
      await getProds();
    };
    populateList();
  }, [getProds]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

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
        { `Ver Carrinho: R$${total}` }
      </button>
    </>
  );
}

export default Products;
