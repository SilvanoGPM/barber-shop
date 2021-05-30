import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

import styles from './styles.module.scss';

const BackTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleGoToTop = () => {
    window.scroll(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <button
      type="button"
      className={`${styles.backTop} ${showButton ? styles.active : ''}`}
      onClick={handleGoToTop}
    >
      <MdKeyboardArrowUp />
    </button>
  );
};

export default BackTop;
