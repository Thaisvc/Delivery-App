import { useEffect, useState } from 'react';
import Navbar from './Navbar';

function ProdutctCard ( { products } ) {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch('http://localhost:3001/custum/products');
    const productsState = await response.json();

    setProducts(productsState);
  };

  useEffect(() => {
    getProducts();
  }, []);

    return (
      <div>
        <Navbar />
          <div className='productCard-page'>
            { products.map((product, index) => (
              <div className="card">
                <p data-testid={`customer_products__element-card-price-${index}`}>
                    Preço
                  </p>
                  <img 
                    className="card-img"
                    data-testid={`customer_products__img-card-bg-image-${index}`}
                    alt=''
                  />
                  <p 
                    data-testid={`customer_products__element-card-title-${index}`}
                  >
                    teste
                  </p>
                  <button 
                    data-testid={`customer_products__button-card-add-item-${index}`}
                    type="button"
                  >
                    +
                  </button>
                  <input 
                    data-testid={`customer_products__input-card-quantity-${index}`}
                    type="number" 
                    value="0"
                    className="input-quantity"
                  />
                  <button 
                    data-testid={`customer_products__button-card-rm-item-${product.id}`}
                    type="button"
                  >
                    -
                  </button>
              </div>
            )) }
          </div>
      </div>
    )
}

export default ProdutctCard;