import { useContext, useEffect } from 'react';
import Navbar from '../../components/Navbar/NavBar';

import TableDefault from '../../components/TableDefault';
import CartContext from '../../context/Cart/CartContext';
import toMoneyType from '../../utils/toMoneyType';
// import useApi from '../../hooks/useApi';
// import AuthContext from '../../context/Auth/AuthContext';

export default function OrderDetails() {
  // const [saleFound, setSaleFound] = useState(false);
  const {
    cart, total, getSales, saleList, sellers, seller,
  } = useContext(CartContext);

  const idSale = window.location.pathname.match(/\d+/)[0];

  const saleById = saleList.length
  && saleList.filter((sale) => Number(sale.id) === Number(idSale))[0];

  const getSellerName = sellers.length
  && sellers.filter(({ id }) => Number(id) === Number(seller))[0];

  const dateArray = saleById && saleById.saleDate.split('-');

  // const disabledButton = () => {
  //   if (saleById) {
  //     return saleById.status === 'Pendente';
  //   }
  //   return true;
  // };

  useEffect(() => {
    const populateSalesList = () => {
      getSales();
    };
    populateSalesList();
  }, []);

  const dIStatus = 'customer_order_details__element-order-details-label-delivery-status';

  return (
    <>
      <Navbar />
      <h1 data-testid="top-title">Detalhes do Pedido</h1>

      <p
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        {`PEDIDO ${idSale}`}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        { `P.Vend: ${getSellerName && getSellerName.name}` }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {
          dateArray && `Data: ${
            dateArray[2].split('T')[0]
          }/${dateArray[1]}/${dateArray[0]}`
        }
      </p>
      <p
        data-testid={ dIStatus }
      >
        { `Status ${saleById && saleById.status}` }
      </p>

      <button
        data-testid="customer_order_details__button-delivery-check"
        type="button"
        disabled={
          saleById ? saleById.status === 'Pendente' : true
        }
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
