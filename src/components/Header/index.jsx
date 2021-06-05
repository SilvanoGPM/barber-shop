import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
          <NavLink to={routes.HOME} exact activeClassName={styles.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.ABOUT} activeClassName={styles.active}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.SERVICE} activeClassName={styles.active}>
            Service
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.PRICE} activeClassName={styles.active}>
            Price
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.BARBER} activeClassName={styles.active}>
            Barber
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.GALLERY} activeClassName={styles.active}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.CONTACT} activeClassName={styles.active}>
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
