// import React, { useState, useEffect } from 'react';
// import { number } from 'prop-types';
// import { useParams } from 'react-router-dom';
// // import toMoneyType from '../../utils/toMoneyType';
// // import CartContext from '../../context/Cart/CartContext';
// import createSale from '../../hooks/useApi';
// import { getByKey } from '../../utils/localStorage';
// // import useApi from '../../hooks/useApi'; // chamar a func getSellers

// export default function OrderDetailsComp({ totalPrice }) {
//   const params = useParams();
//   // const { setCart, total, getSellers } = useContext(CartContext);
//   const [saleList, setSaleList] = useState({});
//   const [seller, setSeller] = useState('');
//   const [disabled, setDisabled] = useState(true);

//   const month = saleDate.split('-');
//   const dateObj = new Date(saleDate);

//   const buttonDisabled = (salesStatus) => {
//     if (salesStatus === 'Em Trânsito') {
//       setDisabled(false);
//     }
//     setDisabled(true);
//   };

//   const handleDelivery = async () => {
//     // console.log('entregue');
//     setLoading(true);
//     const token = getByKey('user');
//     await createSale(token.token, params.id, { status: 'Entregue' });
//     setLoading(false);
//   };

//   const subTotalOrder = (sale) => sale.reduce((acc, { price, quantity }) => {
//     const total = price * quantity;
//     return acc + total;
//   }, 0);

//   // const verTotal = (quantity, price) => {
//   //   const total = quantity * price;
//   //   return total.toFixed(2);
//   // };

//   useEffect(() => {
//     const token = getByKey('user');
//     const { data } = createSale(token.token);
//     const sellerName = data.find((sellers) => sellers.id === saleList.sellerId);
//     setSaleList(sellerName);
//     setSeller(sellerName.name);
//     buttonDisabled(saleList.status);
//   }, []);

//   const deStatus = 'customer_order_details__element-order-details-label-delivery-status';

//   return (
//     <>
//       <h1>
//         Detalhes do Pedido
//       </h1>
//       <th
//         data-testid="customer_order_details__element-order-details-label-order-id"
//       >
//         Pedido
//         { saleList.id }
//       </th>
//       <th
//         data-testid="customer_order_details__element-order-details-label-seller-name"
//       >
//         P.Vend: fulana
//         { seller }
//       </th>
//       <th
//         data-testid="customer_order_details__element-order-details-label-order-date"
//       >
//         Data:
//         { `${dateObj.getDate()}/${month[1]}/${dateObj.getFullYear()}` }
//       </th>
//       <th
//         data-testid={ deStatus }
//       >
//         Status:
//         { saleList.status }
//       </th>

//       <button
//         data-testid="customer_order_details__button-delivery-check"
//         type="button"
//         disabled={ disabled }
//         onClick={ handleDelivery }
//       >
//         MARCAR COMO ENTREGUE
//       </button>

//       <tbody>
//         <tr>
//           <td>Item</td>
//           <td>Descrição</td>
//           <td>Quantidade</td>
//           <td>Valor Unitário</td>
//           <td>Sub-total</td>
//         </tr>

//         { saleList.map((order, i) => {
//           const item = `customer_order_details__element-order-table-item-number-${i}`;
//           const nameProduct = `customer_order_details__element-order-table-name-${i}`;
//           const quantity = `customer_order_details__element-order-table-quantity-${i}`;
//           const unPrice = `customer_order_details__element-order-table-unit-price-${i}`;
//           const subTotal = `customer_order_details__element-order-table-sub-total-${i}`;
//           return (
//             <tr key={ order.id }>
//               <td data-testid={ item }>
//                 { i + 1 }
//               </td>
//               <td data-testid={ nameProduct }>
//                 { order.nameProduct }
//               </td>
//               <td data-testid={ quantity }>
//                 { order.quantity }
//               </td>
//               <td data-testid={ unPrice }>
//                 {/* { toMoneyType(order.price)} */}
//               </td>
//               <td data-testid={ subTotal }>
//                 {/* { `R$ ${toMoneyType(verTotal(quantity, order.price))}` } */}
//               </td>
//             </tr>
//           );
//         })}

//       </tbody>

//       <div data-testid="customer_order_details__element-order-total-price">
//         { `Total: ${totalPrice.replace('.', ',')}` }
//       </div>

//     </>
//   );
// }

// OrderDetailsComp.propTypes = {
//   totalPrice: number,
// }.isRequired;
