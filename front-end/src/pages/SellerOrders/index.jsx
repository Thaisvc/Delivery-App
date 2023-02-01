import React, { useEffect, useContext } from 'react';
import NavBar from '../../components/Navbar/NavBar';
import RenderSaleCard from '../../components/Sales/Card/SaleCard';
import * as C from './styles';
import SellerContext from '../../context/Seller/SellerContext';

function SellerOrders() {
  const { saleList, getSales } = useContext(SellerContext);

  useEffect(() => {
    const populateSalesList = async () => {
      await getSales();
    };
    populateSalesList();
  }, [getSales]);

  return (
    <C.Container>
      <NavBar />
      { saleList.map((sale, index) => (
        <RenderSaleCard
          key={ index }
          id={ sale.id }
          totalPrice={ sale.totalPrice }
          saleDate={ sale.saleDate }
          status={ sale.status }
          deliveryAddress={ sale.deliveryAddress }
          deliveryNumber={ sale.deliveryNumber }
        />
      )) }
    </C.Container>
  );
}

export default SellerOrders;
