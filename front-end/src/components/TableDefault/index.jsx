import { string, arrayOf, shape } from 'prop-types';
import { useEffect, useState } from 'react';
import * as C from './styles';

function TableDefault({ type, listItems }) {
  const [dataTestType, setDataTestType] = useState('');
  // types: 'users', 'checkout', 'order'

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
              { item.id }
            </td>
            <td
              data-testid={
                type === 'users'
                  ? 'admin_manage__input-email' : `${dataTestType}-table-name-${i}`
              }
            >
              { type === 'users' ? item.name : item.description }
            </td>
            <td data-testid={ `${dataTestType}-table-quantity-${i}` }>
              { type === 'users' ? item.email : item.quantity }
            </td>
            <td data-testid={ `${dataTestType}-table-unit-price-${i}` }>
              { type === 'users' ? item.type : item.unitPrice }
            </td>
            <td data-testid={ `${dataTestType}-table-sub-total-${i}` }>
              {
                type !== 'users' ? item.subTotal : <button type="button">Excluir</button>
              }
            </td>
            <td>
              { type === 'checkout' && (
                <button
                  data-testid={ `${dataTestType}-table-remove-${i}` }
                  type="button"
                  onClick={ () => 'remover' }
                >
                  Remover item
                </button>) }
            </td>
          </C.Line>))}
      </tbody>
    </C.Table>
  );
}

TableDefault.propTypes = {
  type: string.isRequired,
  listItems: arrayOf(shape()).isRequired,
};

export default TableDefault;
