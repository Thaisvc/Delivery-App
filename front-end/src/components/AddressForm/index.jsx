import * as C from './styles';

function AddressForm() {
  const salesPeople = ['vendedor fulano silva']; // puxar do context o nome das pessoas vendedoras

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
              salesPeople
                .map((item, i) => <option key={ i } value={ item }>{ item }</option>)
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
