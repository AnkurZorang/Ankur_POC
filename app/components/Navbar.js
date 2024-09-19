"use client";

import Link from 'next/link';
import { useState } from 'react';

import styles from './Navbar.module.css'; 
import logo from '../assets/logo.png';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      
        <button 
        className={styles.hamburger} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={styles.hamburgerIcon}></span>
      </button>
      <div className={styles.navLogo}>
          <Link href="/">
            <img src={logo.src} alt="Logo" className={styles.logo} />
          </Link>
        </div>
      <ul className={`${styles.navList} ${menuOpen ? styles.navListOpen : ''}`}>
    
      <li className={styles.navItem}>
          <Link href="../collections">COLLECTIONS</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="../about">ABOUT</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="../contactus">CONTACT</Link>
        </li>
        
      </ul>
      <><input
            type="text"
            placeholder="Search for product"
            className={styles.searchBar}
          /></>
  <div className={styles.navIcons}>
  <span className={styles.cartIcon}><Link href="../cart"><i className="fas fa-shopping-cart"></i></ Link></span>
    <span className={styles.profileIcon}><i className="fas fa-user-circle"></i></span>
  </div>
    </nav>
  );
};

export default Navbar;
     