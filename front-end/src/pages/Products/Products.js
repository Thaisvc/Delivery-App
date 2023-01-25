import React, { useContext, useEffect } from 'react';
import Navbar from '../../components/Products/Navbar';
import AppContext from '../../context/AppContext';
import RenderProdCard from '../../components/Products/Card/ProdCard';

function Products() {
  const { getProds, prodList } = useContext(AppContext);

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
    </>
  );
}

export default Products;
