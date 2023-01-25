import { useContext } from 'react';
import * as C from './styles';
import NavBar from '../../components/Products/Navbar';

import AddressForm from '../../components/AddressForm';
import TableDefault from '../../components/TableDefault';
import CartContext from '../../context/Cart/CartContext';
import toMoneyType from '../../utils/toMoneyType';

function CustomerCheckout() {
  const { cart, total } = useContext(CartContext);

  const saveSale = () => {
    
  }

  return (
    <C.Container>
      <NavBar />

      <C.Content>
        <C.Block>
          <C.Title>Finalizar Pedido</C.Title>
          <C.Order>
            <TableDefault type="checkout" listItems={ cart } />
          </C.Order>

          <C.TotalPrice>
            <C.Value data-testid="customer_checkout__element-order-total-price">
              { `R$ ${toMoneyType(total)}` }
            </C.Value>
          </C.TotalPrice>
        </C.Block>

        <C.Block>
          <C.Title>Detalhes e Endereço para Entrega</C.Title>
          <C.Address>
            <AddressForm />

            <C.SubmitOrderBtn
              type="submit"
              data-testid="customer_checkout__button-submit-order"
              onClick={}
            >
              Finalizar Pedido
            </C.SubmitOrderBtn>
          </C.Address>
        </C.Block>
      </C.Content>
    </C.Container>
  );
}

export default CustomerCheckout;
