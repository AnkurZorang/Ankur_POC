"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation"; 
import './Navbar.css';
import logo from '../assets/logo.png';
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); 
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Ensures this runs on the client
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if a route is active
  const isActive = (pathname) => isClient && router.pathname === pathname; // Only run if client-side

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
        <img
              src={logo.src}
              width="50"
              height="50"
              alt="logo"
            />
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link href="/" className={isActive('/') ? 'active-link' : ''}>
              Home
            </Link>
          </li>
          <li className="dropdown" onClick={toggleDropdown}>
            <span className={isActive('/service1') || isActive('/service2') || isActive('/service3') ? 'active-link' : ''}>
              Mens
            </span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link href="/service1" className="{isActive('/service1') ? 'active-link' : ''}">
                    TopWear
                  </Link>
                </li>
                <li>
                  <Link href="/service2" className={isActive('/service2') ? 'active-link' : ''}>
                    BottomWear
                  </Link>
                </li>
                <li>
                  <Link href="/service3" className={isActive('/service3') ? 'active-link' : ''}>
                    FootWear
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="dropdown" onClick={toggleDropdown}>
            <span className={isActive('/service1') || isActive('/service2') || isActive('/service3') ? 'active-link' : ''}>
              Womens
            </span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link href="/service1" className="{isActive('/service1') ? 'active-link' : ''}">
                    TopWear
                  </Link>
                </li>
                <li>
                  <Link href="/service2" className={isActive('/service2') ? 'active-link' : ''}>
                    BottomWear
                  </Link>
                </li>
                <li>
                  <Link href="/service3" className={isActive('/service3') ? 'active-link' : ''}>
                    FootWear
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/about" className={isActive('/about') ? 'active-link' : ''}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={isActive('/contact') ? 'active-link' : ''}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
