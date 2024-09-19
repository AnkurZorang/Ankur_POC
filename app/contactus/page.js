
import React from 'react';
import styles from './ContactUs.module.css';
import Newsletter from '@/app/components/Newsletter';
import { assets } from '@/app/assets/assets';

export default function page() {
    return (
        <secton>
        <section className={styles.contactUsSection}>
          <div className={styles.container}>
            <div className={styles.imageWrapper}>
              <img
                src={assets.contact_img.src}
                alt="Office desk with laptop and plants"
                className={styles.image}
              />
            </div>
            <div className={styles.contentWrapper}>
              <h2 className={styles.title}>
                CONTACT <span className={styles.highlight}>US</span>
              </h2>
              <div className={styles.info}>
                <h3 className={styles.subtitle}>Our Store</h3>
                <p>54709 Willms Station</p>
                <p>Suite 350, Washington, USA</p>
                <p>Tel: (415) 555-0132</p>
                <p>Email: admin@forever.com</p>
              </div>
              <div className={styles.info}>
                <h3 className={styles.subtitle}>Careers at Forever</h3>
                <p>Learn more about our teams and job openings.</p>
              </div>
              <button className={styles.exploreButton}>Explore Jobs</button>
            </div>
          </div>
        </section>
        <section>
         <Newsletter />
        </section>
        </secton>
      )
}











