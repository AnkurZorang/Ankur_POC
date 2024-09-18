import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/logowhite.png';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        <div className={styles.footerIcon}>
          <img src={logo.src} alt="Logo Icon" className={styles.logoIcon} />
        </div>

       
        <div className={styles.footerLinks}>
          <ul>
            <li><Link href="../">Home</Link></li>
            <li><Link href="../routes/about">About Us</Link></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

       
        <div className={styles.footerContact}>
          <p>Contact Us:</p>
          <p>Email: contact@gspann.com</p>
          <p>Phone: +91 9336797434</p>
          <p>Address: sector 34, Gurugram, Harayana, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
