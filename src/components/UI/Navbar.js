import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
      <li><a href="">Home</a></li>
        <li><a href="">Vantagens</a></li>
        <li><a href="">Beneficíos</a></li>
        <li><a href="">Orçamento</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
