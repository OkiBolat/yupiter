import React from 'react';
import logo from '../assets/images/logo.png';
import '../styles/header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__bar">
          <img src={logo} alt="logo" className="header__logo" />
          <ul className="header__nav">
            <li className="header__item">About</li>
            <li className="header__item">Services</li>
            <li className="header__item">Pricing</li>
            <li className="header__item">Blog</li>
          </ul>
          <button className="header__btn">Contact</button>
        </div>
        <div className="header__main">
          <div className="header__title">Portfolio</div>
          <p className="header__text">Agency provides a
            full service range including
            technical skills, design, business understanding.</p>
        </div>
      </div>
    </div>
  )
};

export default Header;