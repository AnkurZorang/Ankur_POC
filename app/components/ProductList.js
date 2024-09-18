import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';
import { products } from '../assets/assets';

const sortedProducts = products
    .sort() 
    .slice(0, 15); 


const ProductList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Collections</h2>
      <div className={styles.productGrid}>
        {sortedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
