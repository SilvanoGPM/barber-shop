import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Button = ({ children, onClick, active }) => (
  <button
    type="button"
    onClick={onClick}
    className={`${styles.button} ${active ? styles.active : ''}`}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Button;
