import React from 'react';
import styles from './header.module.css';
import Navbar from '@/components/UI/Navbar';
import Button from '@/components/UI/Button';

const Header = () => {
  return (
    <header className={styles.main}>
        <img
          className={styles.logo}
          src="/img/logo3.png"
          alt=""
        />
        <div className={styles.nav}>
          <Navbar />
          <Button />
        </div>
    </header>
  );
};

export default Header;
