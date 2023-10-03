'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { items } from '../../../assets/Items.json';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import styles from './depoimentos.module.css';

const Depoimentos = () => {
  const { responsive } = items;
  return (
    <div className={styles.depoimentos}>
      <h2>Depoimentos</h2>
      <p></p>

      <Carousel
        showArrows={true}
        showIndicators={false}
        infiniteLoop={false}
        dynamicHeight={false}
        width={'100%'}
        className={styles.mySwiper}
      >
        {responsive.map((item) => (
          <div key={item.id} className={styles.swipItem}>
            <div className={styles.imgBox}>
              <img src={item.imageUrl} alt="slides" />
            </div>
            <div className={styles.detail}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <h3>{item.subTitle}</h3>
            </div>
          </div>
          
        ))}
      </Carousel>
    </div>
  );
};

export default Depoimentos;
