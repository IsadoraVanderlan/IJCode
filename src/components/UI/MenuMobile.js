'use client';
import React, { useState } from 'react';
import styles from './MenuMobile.module.css';

const MenuMobile = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className={styles.container}>
      <button
        className={styles.mobileMenuIcon}
        onClick={() => setMobileMenu(!mobileMenu)}
      ></button>

      <nav
        className={`${styles.listMobile}  ${
          mobileMenu ? styles.listMobileActive : styles.listMobile
        }`}
      >
        <a href="">Home</a>
        <a href="">Vantagens</a>
        <a href="">Beneficíos</a>
        <a href="">Orçamento</a>
      </nav>
    </div>
  );
};

export default MenuMobile;
