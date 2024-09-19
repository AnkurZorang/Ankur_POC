
"use client";
import React, { useState } from 'react';
import { useCart } from './CartContext';
import styles from './ProductDetails.module.css'; 
import Newsletter from './Newsletter';



export default function ProductDetails({ product }) {
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState(null); 
    const sizes = product.sizes; 
  
   
    const handleSizeSelect = (size) => {
      setSelectedSize(size);
    };
  
    const handleAddToCart = () => {
      if (selectedSize) {
        addToCart(product, selectedSize);
        alert(`Added ${product.name} (Size: ${selectedSize}) to cart!`);
      } else {
        alert('Please select a size before adding to the cart.');
      }
    };

  return (
    <div>
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <div className={styles.thumbnailList}>
          {product.image.map((imag) => (
            <img key={imag.src} src={imag.src} alt={`Thumbnail`} className={styles.thumbnail} />
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
            {sizes.map((size, index) => (
              <button
                key={index}
                className={`${styles.sizeButton} ${selectedSize === size ? styles.selected : ''}`}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        <button className={styles.addToCartButton} onClick={handleAddToCart}
          disabled={!selectedSize} >
          {selectedSize ? 'Add to Cart' : 'Select a Size'}
        </button>

        <p className={styles.extraInfo}>
          100% Original product. <br />
          Cash on delivery is available on this product. <br />
          Easy return and exchange policy within 7 days.
        </p>
      </div>
    </div>
    <div><Newsletter /></div>
    </div>
  );
}
