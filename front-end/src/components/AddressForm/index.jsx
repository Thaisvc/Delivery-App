import { useContext } from 'react';
import CartContext from '../../context/Cart/CartContext';
import * as C from './styles';

function AddressForm() {
  const { sellers } = useContext(CartContext);

  return (
    <C.AddressForm>
      <C.Inputs>
        <C.Label>
          <C.Title>
            P. Vendedora Responsável
          </C.Title>

          <C.Select
            data-testid="customer_checkout__select-seller"
          >
            {
              sellers
                .map((item) => (
                  <option key={ item.id } value={ item.name }>{ item.name }</option>
                ))
            }
          </C.Select>
        </C.Label>

        <C.Label>
          <C.Title>
            Endereço
          </C.Title>

          <C.Input
            type="address"
            data-testid="customer_checkout__input-address"
          />
        </C.Label>

        <C.Label>
          <C.Title>
            Número
          </C.Title>

          <C.Input
            type="number"
            data-testid="customer_checkout__input-address-number"
          />
        </C.Label>
      </C.Inputs>
    </C.AddressForm>
  );
}

export default AddressForm;
