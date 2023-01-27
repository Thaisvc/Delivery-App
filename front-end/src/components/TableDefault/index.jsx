import { string, arrayOf, shape } from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import * as C from './styles';
import toMoneyType from '../../utils/toMoneyType';
import CartContext from '../../context/Cart/CartContext';

function TableDefault({ type, listItems }) {
  const { cart, setCart } = useContext(CartContext);
  const [dataTestType, setDataTestType] = useState('');
  // types: 'users', 'checkout', 'order'

  const removeItem = (name) => {
    const newcart = cart.filter((item) => item.name !== name);
    setCart(newcart);
    console.log(cart);
  };

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
                type === 'users'
                  ? 'admin_manage__input-email' : `${dataTestType}-table-name-${i}`
              }
            >
              { item.name }
            </td>
            <td data-testid={ `${dataTestType}-table-quantity-${i}` }>
              { type === 'users' ? item.email : item.quant }
            </td>
            <td data-testid={ `${dataTestType}-table-unit-price-${i}` }>
              { type === 'users' ? item.type : `R$${toMoneyType(item.price)}` }
            </td>
            <td data-testid={ `${dataTestType}-table-sub-total-${i}` }>
              {
                type !== 'users' ? `R$${toMoneyType(item.subTotal)}`
                  : <button type="button">Excluir</button>
              }
            </td>
            <td>
              { type === 'checkout' && (
                <button
                  data-testid={ `${dataTestType}-table-remove-${i}` }
                  type="button"
                  onClick={ () => removeItem(item.name) }
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
