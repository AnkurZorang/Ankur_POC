import React from 'react';
import { assets } from '@/app/assets/assets';
import styles from './AboutUs.module.css';
import Newsletter from '@/app/components/Newsletter';

export default function page() {
  return (
    <div>
    <div className={styles.aboutUsSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src={assets.about_img.src}
            alt="Fashion and accessories"
            className={styles.image}
          />
        </div>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>
            ABOUT <span className={styles.highlight}>US</span>
          </h2>
          <p className={styles.paragraph}>
            Forever was born out of a passion for innovation and a desire to revolutionize the way
            people shop online. Our journey began with a simple idea: to provide a platform where
            customers can easily discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p className={styles.paragraph}>
            Since our inception, we’ve worked tirelessly to curate a diverse selection of
            high-quality products that cater to every taste and preference. From fashion and beauty
            to electronics and home essentials, we offer an extensive collection sourced from
            trusted brands and suppliers.
          </p>
          <h3 className={styles.subTitle}>Our Mission</h3>
          <p className={styles.paragraph}>
            Our mission at Forever is to empower customers with choice, convenience, and
            confidence. We’re dedicated to providing a seamless shopping experience that exceeds
            expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div> 
      </div>
    </div>
    
    <div className={styles.whyChooseUsSection}>
      <h2 className={styles.title}>
        WHY <span className={styles.highlight}>CHOOSE US</span>
      </h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Quality Assurance:</h3>
          <p className={styles.cardText}>
            We meticulously select and vet each product to ensure it meets our stringent quality
            standards.
          </p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Convenience:</h3>
          <p className={styles.cardText}>
            With our user-friendly interface and hassle-free ordering process, shopping has never
            been easier.
          </p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Exceptional Customer Service:</h3>
          <p className={styles.cardText}>
            Our team of dedicated professionals is here to assist you the way, ensuring your
            satisfaction is our top priority.
          </p>
        </div>
      </div>
    
    </div>
   <div> <Newsletter /></div>
   </div>
  )
}
