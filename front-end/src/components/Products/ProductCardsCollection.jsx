import React from 'react';

import RenderProdCard from './Card/ProdCard';

function ProductCards() {
  function GenerateCards() {
    const listQuant = 12;
    const prodCardList = [];
    let counter = 1;
    while (counter < listQuant) {
      prodCardList.push(RenderProdCard(counter));
      counter += 1;
    }
    return prodCardList;
  }
  return (
    <div className="productCard-page">
      { GenerateCards() }
    </div>
  );
}

export default ProductCards;
