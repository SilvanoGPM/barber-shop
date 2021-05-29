import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import styles from './styles.module.scss';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [headerInTop, setHeaderInTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderInTop(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavbarOpen = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header
      className={`${styles.header} ${headerInTop ? styles.isScrolled : ''}`}
    >
      <a href="/">
        <h1>
          Barber
          <span>X</span>
        </h1>
      </a>

      <button type="button" onClick={handleNavbarOpen}>
        <AiOutlineMenu />
      </button>

      <ul className={navbarOpen ? styles.isOpen : ''}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#price">Price</a>
        </li>
        <li>
          <a href="#barber">Barber</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
