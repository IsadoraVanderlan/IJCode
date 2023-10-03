"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./depoimentos.module.css";
import "swiper/css";
import "swiper/css/navigation";

const cards = [
  {
    id: 1,
    title: "João Carlos ",
    subTitle: "De&Fa Uniformes",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam.",
    imageUrl: "/img/persons/joao.svg",
  },
  {
    id: 2,
    title: "Swiper Carousel Example",
    subTitle: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    imageUrl: "/img/persons/joao.svg",
  },
  {
    id: 3,
    title: "Swiper Carousel Example",
    subTitle: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    imageUrl: "/img/persons/joao.svg",
  },
  {
    id: 4,
    title: "Swiper Carousel Example",
    subTitle: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    imageUrl: "/img/persons/joao.svg",
  },
  {
    id: 5,
    title: "Swiper Carousel Example",
    subTitle: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    imageUrl: "/img/persons/joao.svg",
  },
];

const Depoimentos = () => {
  return (
    <div className={styles.depoimentos}>
      <section className={styles.title}>
        <h2>Depoimentos</h2>
        <p></p>
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
                  <h3>{item.subTitle}</h3>
                  <p>{item.text}</p>
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
