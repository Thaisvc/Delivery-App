import { useState, useContext, useEffect } from 'react';
import CartContext from '../../context/Cart/CartContext';
import * as C from './styles';

function AddressForm() {
  const {
    sellers, seller, setSeller, setAddress, setHouseNumber,
  } = useContext(CartContext);
  const [userAddress, setUserAddress] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    setAddress(userAddress);
  }, [userAddress]);

  useEffect(() => {
    setHouseNumber(number);
  }, [number]);

  return (
    <C.AddressForm>
      <C.Inputs>
        <C.Label>
          <C.Title>
            P. Vendedora Responsável
          </C.Title>

          <C.Select
            data-testid="customer_checkout__select-seller"
            value={ seller }
            onChange={ (e) => {
              setSeller(e.target.value);
            } }
          >
            {
              sellers.length > 0 && sellers
                .map((item) => (
                  <option key={ item.id } value={ item.id }>{ item.name }</option>
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
            value={ userAddress }
            onChange={ (e) => setUserAddress(e.target.value) }
            data-testid="customer_checkout__input-address"
          />
        </C.Label>

        <C.Label>
          <C.Title>
            Número
          </C.Title>

          <C.Input
            type="number"
            value={ number }
            onChange={ (e) => setNumber(e.target.value) }
            data-testid="customer_checkout__input-address-number"
          />
        </C.Label>
      </C.Inputs>
    </C.AddressForm>
  );
}

export default AddressForm;
