// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../assets/images/logo.png';
import styles from '../styles/header.module.scss';

const Header = () => (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__bar}>
          <img src={logo} alt="logo" className={styles.header__logo} />
          <ul className={styles.header__nav}>
            <li className={styles.header__item}>About</li>
            <li className={styles.header__item}>Services</li>
            <li className={styles.header__item}>Pricing</li>
            <li className={styles.header__item}>Blog</li>
          </ul>
          <button className={styles.header__btn}>Contact</button>
        </div>
        <div className={styles.header__main}>
          <div className={styles.header__title}>Portfolio</div>
          <p className={styles.header__text}>Agency provides a
            full service range including
            technical skills, design, business understanding.</p>
        </div>
      </div>
    </div>
);

export default Header;
