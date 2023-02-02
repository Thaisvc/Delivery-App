import { string, arrayOf, shape } from 'prop-types';
import { useEffect, useState } from 'react';
import * as C from './styles';
import toMoneyType from '../../utils/toMoneyType';
import useApi from '../../hooks/useApi';

function TableNoContext({ type, listItems }) {
  const [dataTestType, setDataTestType] = useState('');
  // types: 'users', 'checkout', 'order'

  const api = useApi();

  const removeItem = async (id) => listItems.forEach(async (item) => {
    if (item.id === id) await api.deleteUser(item.id);
  });

  useEffect(() => {
    if (type === 'users') setDataTestType('admin_manage__element-user');
    if (type === 'checkout') setDataTestType('customer_checkout__element-order');
    if (type === 'order') setDataTestType('customer_order_details__element-order');
  }, [type]);

  return (
    <C.Table>
      <thead>
        <C.Line>
          <C.Legend>Item</C.Legend>
          <C.Legend>{ type === 'users' ? 'Nome' : 'Descrição'}</C.Legend>
          <C.Legend>{ type === 'users' ? 'E-mail' : 'Quantidade' }</C.Legend>
          <C.Legend>{ type === 'users' ? 'Tipo' : 'Valor Unitário' }</C.Legend>
          <C.Legend>{ type !== 'users' ? 'Sub-total' : 'Excluir' }</C.Legend>
          { type === 'checkout' && <C.Legend>Remover item</C.Legend> }
        </C.Line>
      </thead>

      <tbody>
        { listItems.map((item, i) => (
          <C.Line key={ i }>
            <td data-testid={ `${dataTestType}-table-item-number-${i}` }>
              { i + 1 }
            </td>
            <td
              data-testid={
                `${dataTestType}-table-name-${i}`
              }
            >
              { item.name }
            </td>
            <td
              data-testid={
                `${dataTestType}-table-${type === 'users' ? 'email' : 'quantity'}-${i}`
              }
            >
              { type === 'users' ? item.email : item.quant }
            </td>
            <td
              data-testid={
                `${dataTestType}-table-${type === 'users' ? 'role' : 'unit-price'}-${i}`
              }
            >
              { type === 'users' ? item.role : `R$${toMoneyType(item.price)}` }
            </td>
            <td
              data-testid={
                `${dataTestType}-table-${type === 'users' ? 'remove' : 'sub-total'}-${i}`
              }
            >
              {
                type !== 'users' ? `R$${toMoneyType(item.subTotal)}`
                  : (
                    <button
                      type="button"
                      onClick={ async () => removeItem(item.id) }
                    >
                      Excluir
                    </button>)
              }
            </td>
            <td>
              { type === 'checkout' && (
                <button
                  data-testid={ `${dataTestType}-table-remove-${i}` }
                  type="button"
                  // onClick={ () => removeItem(item.id) }
                >
                  Remover item
                </button>) }
            </td>
          </C.Line>))}
      </tbody>
    </C.Table>
  );
}

TableNoContext.propTypes = {
  type: string.isRequired,
  listItems: arrayOf(shape()).isRequired,
};

export default TableNoContext;
