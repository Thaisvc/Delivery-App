import { useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import * as C from './styles';
import NavBar from '../../components/Navbar/NavBar';

import AddressForm from '../../components/AddressForm';
import TableDefault from '../../components/TableDefault';
import CartContext from '../../context/Cart/CartContext';
import toMoneyType from '../../utils/toMoneyType';
import AuthContext from '../../context/Auth/AuthContext';

function CustomerCheckout() {
  const [saleCreated, setSaleCreated] = useState(false);
  const {
    cart, total, getSellers, saleId, seller, address, houseNumber, createSale,
  } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const populateSellersList = async () => {
      await getSellers();
    };
    populateSellersList();
  }, []);

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
              onClick={ async () => {
                createSale({
                  userId: user.response.id,
                  sellerId: Number(seller),
                  totalPrice: Number(total.toFixed(2)),
                  deliveryAddress: address,
                  deliveryNumber: houseNumber,
                  status: 'Pendente',
                  cartItems: cart,
                });
                setSaleCreated(true);
              } }
            >
              Finalizar Pedido
            </C.SubmitOrderBtn>
          </C.Address>
        </C.Block>
      </C.Content>
      {
        saleCreated
        && saleId !== undefined
        && <Navigate to={ `/customer/orders/${saleId}` } />
      }
    </C.Container>
  );
}

export default CustomerCheckout;
