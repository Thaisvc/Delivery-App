import * as C from './styles';
import NavBar from '../../components/Products/Navbar';

import AddressForm from '../../components/AddressForm';
import TableDefault from '../../components/TableDefault';

const testItems = [
  {
    id: 1,
    description: 'Test item',
    quantity: 1,
    unitPrice: 3.12,
    subTotal: 71.52,
  },
];

function CustomerCheckout() {
  // puxar do context ou do localStorage a lista de produtos no carrinho e puxar o valor total

  return (
    <C.Container>
      <NavBar />

      <C.Content>
        <C.Block>
          <C.Title>Finalizar Pedido</C.Title>
          <C.Order>
            <TableDefault type="checkout" listItems={ testItems } />
          </C.Order>

          <C.TotalPrice>
            <C.Value>{ `R$ ${0}` }</C.Value>
          </C.TotalPrice>
        </C.Block>

        <C.Block>
          <C.Title>Detalhes e Endereço para Entrega</C.Title>
          <C.Address>
            <AddressForm />

            <C.SubmitOrderBtn
              type="submit"
              data-testid="customer_checkout__button-submit-order"
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
