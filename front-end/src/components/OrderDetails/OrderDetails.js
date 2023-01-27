import React from 'react';

function OrderDetails() {
  return (
    <>
      <h1 data-testid="top-title">
        Detalhes do Pedido
      </h1>

      <thead>
        <tr>
          <th
            data-testid="customer_order_details__
              element-order-details-label-order-id"
          >
            Pedido
          </th>
          <td
            data-testid="customer_order_details__
              element-order-details-label-seller-name"
          >
            P.Vend:fulana
          </td>
          <td
            data-testid="customer_order_details__
              element-order-details-label-order-date"
          >
            12/12/2020
          </td>
          <td
            data-testid="customer_order_details__
            element-order-details-label-delivery-status"
          >
            Entregue
          </td>

          <button
            data-testid="customer_order_details__button-delivery-check"
            type="button"
            disabled={ false }
          >
            Marcar como entregue
          </button>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Item</td>
          <td>Descrição</td>
          <td>Quantidade</td>
          <td>Valor Unitário</td>
          <td>Sub-total</td>
        </tr>

        <tr>
          <td
            data-testid="customer_order_details__
              element-order-table-item-number-<index>"
          >
            1
          </td>
          <td
            data-testid="customer_order_details__element-order-table-name-<index>"
          >
            Suquin de Laranja
          </td>
          <td
            data-testid="customer_order_details__element-order-table-quantity-<index>"
          >
            2
          </td>
          <td
            data-testid="customer_order_details__element-order-table-unit-price-<index>"
          >
            gratis
          </td>
          <td
            data-testid="customer_order_details__element-order-table-sub-total-<index>"
          >
            gratis
          </td>
        </tr>
      </tbody>

      <div data-testid="customer_order_details__element-order-total-price">
        Total: R$ 0,00
      </div>

    </>
  );
}

export default OrderDetails;
