import * as C from './styles';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import Navbar from '../../components/Navbar/NavBar';

function Orders() {
  return (
    <C.Container>
      <Navbar />
      <OrderDetails />
    </C.Container>
  );
}

export default Orders;
