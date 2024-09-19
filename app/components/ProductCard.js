import React from 'react';
import styles from './ProductCard.module.css';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <Link href={`../${product._id}`}>
        <img src={product.image[0].src} alt={product.name} className={styles.image} />
        <div className={styles.productName}>{product.name}</div>
        <div className={styles.category}>{product.category}</div>
        <div className={styles.subCategory}>{product.subCategory}</div>
        <div className={styles.price}>₹{product.price}</div>
      </Link>
    </div>
  );
};

export default ProductCard;

