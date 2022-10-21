import { useContext } from 'react';

import { ProductsContext } from '../../context/products.content'
import ProductCard from '../../compotents/product-card/product-card.compotent'

import './shop.styles.scss'

const Shop = () => {
  const {products} = useContext(ProductsContext);
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default Shop;
