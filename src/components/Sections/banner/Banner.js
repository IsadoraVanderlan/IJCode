import React from 'react';
import styles from './banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.textobanner}>
        <h1>IJCode</h1>
        <p className={styles.typewriter}>Inovação e tecnologia é sucesso.</p>
        <ul className={styles.iconbanner}>
          <li>
            <img src="/img/icons/ok.svg" alt="" />
            Inovação e responsividade;
            </li>
          <li>
            <img src="/img/icons/ok.svg" alt="" />
            Agilidade e responsabilidade;     
            </li>
          <li>
            <img src="/img/icons/ok.svg" alt="" />
            Confiança e segurança para sua empresa.
          </li>
        </ul>
      </div>

      <div className={styles.imgbanner}>
        <img src="/img/image-from-rawpixel-id-456067-deriv-1.webp" alt="" />
      </div>
    </div>
  );
};

export default Banner;
