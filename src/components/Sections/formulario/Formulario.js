import React from 'react';
import styles from './formulario.module.css';

const formulario = () => {
  return (
    <div>
      <div className={styles.formulario}>
        <h2>Orçamento</h2>
        <p className={styles.pform}>
          Preencha o formulario para realizar um orçamento sem compromisso!
        </p>

        <div className={styles.conteudoform}>
          <div className={styles.textform}>
            <h3>Contato:</h3>

            <ul className={styles.ulform}>
              <li>ijcode.oficial@gmail.com</li>
              <li>Whats: (11)96650-2947</li>
              <li>Instagram: @ij.code</li>
            </ul>

            <p className={styles.pformcont}>
              Preencha o formulario ao lado e entraremos em contato para
              podermos lhe atender da melhor forma possivel!
            </p>

            <p>
              Nossos preços são competitivos, você pode solicitar um orçamento
              sem compromisso, e encontraremos o melhor projeto para você.
            </p>
          </div>

          <form
            className={styles.form}
            action="https://formsubmit.co/ijcode.oficial@gmail.com"
            method="post"
          >
            <input
              type="text"
              name="name"
              placeholder="Digite seu Nome..."
              required
            />

            <input
              type="e-mail"
              name="email"
              placeholder="Digite seu e-mail..."
              required
            />

            <textarea
              type="text"
              name="message"
              placeholder="Mensagem"
            ></textarea>

            <input
              type="hidden"
              name="_next"
              value=""
            />

            <input name='Enviar' className={styles.enviarform} type="submit" />

            <input type="hidden" name="_subject" value="Novo Contato!" />
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default formulario;
