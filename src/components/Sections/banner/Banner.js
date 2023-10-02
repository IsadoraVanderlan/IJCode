import React from 'react';
import styles from './banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.textobanner}>
        <h1>IJ Code</h1>
        <p className={styles.typewriter}>Sua Empresa em Um Unico Lugar</p>
        <ul>
          <li>Inovação</li>
          <li>Agilidade</li>
          <li>Confiança</li>
        </ul>
      </div>

      <div className={styles.imgbanner}>
        <img src="/img/image-from-rawpixel-id-456067-deriv-1.webp" alt="" />
      </div>
    </div>
  );
};

export default Banner;
