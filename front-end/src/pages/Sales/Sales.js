import React from 'react';
import RenderSaleCard from '../../components/Sales/Card/SaleCard';
import NavBar from '../../components/Navbar/NavBar';

function Sales() {
  return (
    <>
      <NavBar />
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
