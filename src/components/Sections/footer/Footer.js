import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.imgfooter}>
        <img src="/img/logo3.png" alt="" />
      </div>

      <p>ijcode.oficial@gmail.com</p>
      
      <ul className={styles.ul_img_footer}>
        <li >
          <a href="">
            <img src="/img/icons/email.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/img/icons/whats.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/img/icons/insta.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
