"use client";

import { useCart } from '../components/CartContext';

import React from 'react';
import styles from './cart.module.css'; 
import { assets } from '../assets/assets';

export default function Page() {
  const { cartItems, removeFromCart } = useCart();

  const shippingFee = 100;
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + shippingFee;
  
   
    
  return (
<div className={styles.cartPage}>
      <div className={styles.cartContainer}>
        <div className={styles.cartHeader}>
          <h2>YOUR CART</h2>
        </div>

        <div className={styles.cartItems}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image[0].src} alt={item.name} className={styles.itemImage} />
              <div className={styles.itemDetails}>
                <p>{item.name}</p>
                <span className={styles.price}>₹{item.price}</span>
                <div className={styles.itemOptions}>
                  <span className={styles.sizeBox}>{item.size}</span>
                  <input
                    type="number"
                    value={item.quantity}
                    className={styles.quantityInput}
                    readOnly
                  />
                  <button className={styles.removeButton} onClick={() => removeFromCart(item._id, item.size)}><img src={assets.bin_icon.src} width='60%'></img></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cartTotalSection}>
          <h3 className={styles.cartTotalHeader}>Cart Total</h3>
          <div className={styles.cartTotalDetails}>
            <div className={styles.totalRow}>
              <span>Subtotal:</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.totalRow}>
              <span>Shipping Fee:</span>
              <span>₹{shippingFee.toFixed(2)}</span>
            </div>
            <div className={styles.totalRow}>
              <span>Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <button className={styles.checkoutButton}>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>



  );
}
