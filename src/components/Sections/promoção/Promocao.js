'use client';
import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './promocao.module.css';

const Promocao = () => {
  return (
    <div className={styles.promocao}>
      <Fade left>
        <div className={styles.caixaimgpromocao}>
          <div className={styles.imgpromocao}>
            <img src="./img/img-indicacao.png" alt="" />
          </div>
        </div>
      </Fade>

      <div className={styles.textopromocao}>
        <Fade right>
          <h2>Promoção Exclusivo</h2>
          <p className={styles.ppromocao}>
            Indique um amigo e ganhe 10% do valor pago ao final do projeto!
          </p>

          <h3>Detalhes da Promoção:</h3>
          <ul className={styles.ulpromocao}>
            <li>
              <p className={styles.passospromocao}>Passo 1:</p>
              <p>Indique um amigo ou familiar para usar nossos serviços.</p>
            </li>
            <li>
              <p className={styles.passospromocao}>Passo 2:</p>
              <p>Se seu amigo/familiar contratar nossos serviços.</p>
            </li>
            <li>
              <p className={styles.passospromocao}>Passo 3:</p>
              <p>Você ganha 10% do valor pago como premiação.</p>
            </li>
          </ul>

          <h3>Termos e Condições:</h3>
          <p>
            Não há limite para o número de amigos que você pode indicar, então
            quanto mais amigos você indicar, mais você vai ganhar.
            Você só receberá o pagamento quando a pessoa que contratol fizer o pagamento!
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default Promocao;
