import Navbar from '../../components/Products/Navbar';
import RenderSaleCard from '../../components/Sales/Card/SaleCard';
import * as C from './styles';

function Orders() {
  return (
    <C.Container>
      <Navbar />
      <RenderSaleCard
        id={ 1 }
        totalPrice={ 109 }
        saleDate="19/12/1990"
        status="pendente"
      />
    </C.Container>
  );
}

export default Orders;
