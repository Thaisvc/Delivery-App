import React from 'react';
import RenderSaleCard from '../../components/Sales/Card/SaleCard';
import Navbar from '../../components/Products/Navbar';

function Sales() {
  return (
    <>
      <Navbar />
      <RenderSaleCard
        id={ 1 }
        totalPrice={ 109 }
        saleDate="19/12/1990"
        status="pendente"
      />
    </>
  );
}

export default Sales;
