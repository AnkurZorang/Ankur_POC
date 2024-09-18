import React from 'react';
import styles from './Newsletter.module.css';
import { assets } from '../assets/assets';
const Newsletter = () => {
  return (
    <section className={styles.policySection}>
      <div className={styles.policies}>
      
        <div className={styles.policyItem}>
          <img src={assets.exchange_icon.src} alt="Easy Exchange Policy" className={styles.policyIcon} />
          <h3>Easy Exchange Policy</h3>
          <p>We offer hassle-free exchange policy.</p>
        </div>

       
        <div className={styles.policyItem}>
          <img src={assets.quality_icon.src} alt="7 Days Return Policy" className={styles.policyIcon} />
          <h3>7 Days Return Policy</h3>
          <p>We provide 7 days free return policy.</p>
        </div>

      
        <div className={styles.policyItem}>
          <img src={assets.support_img.src} alt="Best Customer Support" className={styles.policyIcon} />
          <h3>Best Customer Support</h3>
          <p>We provide 24/7 customer support.</p>
        </div>
      </div>

      <div className={styles.subscribe}>
        <h2>Subscribe now & get 20% Off</h2>
        <p>Sign up for our newsletter and receive exclusive offers and promotions.</p>
        <div className={styles.subscribeForm}>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </section>
  );
};


export default Newsletter;
