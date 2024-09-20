import React from 'react';
import styles from './RelatedProducts.module.css';
import ProductCard from './ProductCard';

export default function RelatedProducts({ mainProduct, products }) {
  const relatedProducts = products.filter(
    (product) =>
      product.category === mainProduct.category &&
      product.subCategory === mainProduct.subCategory &&
      product._id !== mainProduct._id 
  ).slice(0, 5);

  return (
    <div className={styles.relatedProductsSection}>
      <h2 className={styles.header}>Related Products</h2>
      <div className={styles.productGrid}>
      {relatedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
