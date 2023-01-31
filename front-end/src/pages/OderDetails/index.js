import { useContext, useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/NavBar';

import TableDefault from '../../components/TableDefault';
import CartContext from '../../context/Cart/CartContext';
import toMoneyType from '../../utils/toMoneyType';
// import useApi from '../../hooks/useApi';
// import AuthContext from '../../context/Auth/AuthContext';

export default function OrderDetails() {
  // const [saleFound, setSaleFound] = useState(false);
  const { cart, total, getSales, saleList, seller, createSale } = useContext(CartContext);
  console.log(cart);
  const [order, setOrder] = useState({});

  const getSaleById = () => {
    const saleById = saleList.filter((item) => {
      const id = window.location.pathname.match(/\d+/)[0];

      return item.id === Number(id);
    });
    setOrder(saleById[0]);
  };

  useEffect(() => {
    const populateSalesList = () => {
      getSales();
    };
    populateSalesList();
  }, []);

  useEffect(() => {
    getSaleById();
  }, []);

  const dIStatus = 'customer_order_details__element-order-details-label-delivery-status';

  return (
    <>
      <Navbar />
      <h1 data-testid="top-title">Detalhes do Pedido</h1>

      <p
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        PEDIDO
        { order ? order.id : '' }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        P.Vend:
        { seller ? seller.name : '' }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        data
      </p>
      <p
        data-testid={ dIStatus }
      >
        Status:
        { order ? order.status : 'Pendente' }
      </p>

      <button
        data-testid="customer_order_details__button-delivery-check"
        type="button"
        // disabled={ disabled }
        onClick={ async () => {
          createSale({
            orderId: user.response.id,
            //     sellerId: Number(seller),
            totalPrice: Number(total.toFixed(2)),
            status: 'Entregue',
            //     cartItems: cart,
          });
          //   setSaleCreated(true);
        } }
      >
        MARCAR COMO ENTREGUE
      </button>
      { cart
        && <TableDefault
          type="order"
          listItems={ cart }
        />}

      <span data-testid="customer_order_details__element-order-total-price">
        { `R$ ${toMoneyType(total)}` }
      </span>
    </>

  );
}
