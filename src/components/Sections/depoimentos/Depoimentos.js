'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from './depoimentos.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

const cards = [
  {
    id: 1,
    title: 'João Carlos ',
    subTitle: 'De&Fa Uniformes',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod',
    imageUrl: '/img/persons/joao.svg',
  },
  {
    id: 2,
    title: 'Swiper Carousel',
    subTitle: 'Swiper Carousel Example',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod',
    imageUrl: '/img/persons/joao.svg',
  },
  {
    id: 3,
    title: 'Swiper Carousel',
    subTitle: 'Swiper Carousel Example',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod',
    imageUrl: '/img/persons/joao.svg',
  },
  {
    id: 4,
    title: 'Swiper Carousel',
    subTitle: 'Swiper Carousel Example',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod',
    imageUrl: '/img/persons/joao.svg',
  },
  {
    id: 5,
    title: 'Swiper Carousel',
    subTitle: 'Swiper Carousel Example',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod',
    imageUrl: '/img/persons/joao.svg',
  },
];

const Depoimentos = () => {
  return (
    <div className={styles.depoimentos}>
      <section className={styles.title}>
        <h2>Depoimentos</h2>
        <p>Veja abaixo o que nossos clientes tem a falar sobre a IJCode!  </p>
      </section>

      <section>
        <Swiper
          className={styles.mySwiper}
          navigation={true}
          modules={[Navigation]}
          spaceBetween={200}
          slidesPerView={3}
        >
          {cards.map((item) => (
            <SwiperSlide>
              <div className={styles.swipItem}>
                <div className={styles.imgBox}>
                  <img src={item.imageUrl} alt="slides" />
                </div>
                <div className={styles.detail}>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                  <h3>{item.subTitle}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Depoimentos;
