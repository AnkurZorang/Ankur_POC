

import React from 'react';
import styles from './ProductDetails.module.css';

export default function ProductDetails({ product }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <div className={styles.thumbnailList}>
          {product.image.map((imag) => (
            <img key={imag} src={imag.src} alt={`Thumbnail`} className={styles.thumbnail} />
          ))}
        </div>
        <img src={product.image[0].src} alt={product.name} className={styles.mainImage} />
      </div>
      
      <div className={styles.detailsSection}>
        <h3>{product.name}</h3>
        <p className={styles.rating}>⭐⭐⭐⭐⭐ ({product.reviewsCount})</p>
        <h2>₹{product.price}</h2>
        <p>{product.description}</p>
        
        <div className={styles.sizeSelection}>
          <h4>Select Size</h4>
          <div className={styles.sizes}>
            {product.sizes.map((size, index) => (
              <button key={index} className={styles.sizeButton}>{size}</button>
            ))}
          </div>
        </div>
        
        <button className={styles.addToCartButton}>ADD TO CART</button>

        <p className={styles.extraInfo}>
          100% Original product. <br />
          Cash on delivery is available on this product. <br />
          Easy return and exchange policy within 7 days.
        </p>
      </div>
    </div>
  );
}
