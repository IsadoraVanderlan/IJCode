import React from 'react';
import styles from './formulario.module.css';

const formulario = () => {
  return (
    <div>
      <div className={styles.formulario}>
        <h2>Orçamento</h2>
        <p className={styles.pform}>Preencha o formulario para realizar um orçamento sem compromisso!</p>

        <div className={styles.conteudoform}>
          <div className={styles.textform}>
            <h3>Contato:</h3>

            <ul className={styles.ulform}>
              <li>Email: ijcode.oficial@gmail.com</li>
              <li>WhatsApp: (11)96650-2947</li>
              <li>Instagram: @ij.code</li>
            </ul>

            <p className={styles.pformcont}>
              Preencha o formulario ao lado e entraremos em contato para
              podermos lhe atender da melhor forma possivel!
            </p>

            <p>
              Nossos preços são competitivos, você pode solicitar um orçamento sem compromisso, e encontraremos o melhor projeto para você.
            </p>
          </div>

          <form className={styles.form} method="get" action="envio_dados.php">
            <input
              type="text"
              name="nome"
              placeholder="Digite seu Nome..."
            />
            <input
              type="e-mail"
              name="email"
              placeholder="Digite seu e-mail..."
            />
            <textarea placeholder="Mensagem"></textarea>
            <input className={styles.enviarform} type="submit" name="enviar" value="Enviar" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default formulario;
