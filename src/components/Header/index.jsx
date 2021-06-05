import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

import routes from 'routes';
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
      <Link to="/">
        <h1>
          Barber
          <span>X</span>
        </h1>
      </Link>

      <button type="button" onClick={handleNavbarOpen}>
        <AiOutlineMenu />
      </button>

      <ul className={navbarOpen ? styles.isOpen : ''}>
        <li>
          <Link to={routes.HOME}>Home</Link>
        </li>
        <li>
          <Link to={routes.ABOUT}>About</Link>
        </li>
        <li>
          <Link to={routes.SERVICE}>Service</Link>
        </li>
        <li>
          <Link to={routes.PRICE}>Price</Link>
        </li>
        <li>
          <Link to={routes.BARBER}>Barber</Link>
        </li>
        <li>
          <Link to={routes.GALLERY}>Gallery</Link>
        </li>
        <li>
          <Link to={routes.CONTACT}>Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
