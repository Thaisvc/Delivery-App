// import React, { useContext } from 'react';

// import RenderProdCard from './Card/ProdCard';
// import AppContext from '../../context/AppContext';

// function ProductCards() {
//   const { prodList } = useContext(AppContext);

//   function GenerateCards() {
//     const prodCardList = prodList
//       .map(({
//         name,
//         price,
//         urlImage,
//       }, index) => RenderProdCard(index, name, price, urlImage));
//     return prodCardList;
//   }
//   return (
//     <div className="productCard-page">
//       { prodList && GenerateCards() }
//     </div>
//   );
// }

// export default ProductCards;
