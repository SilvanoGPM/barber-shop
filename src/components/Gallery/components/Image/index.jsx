import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Image = ({ image, active }) => (
  <figure className={`${styles.image} ${active ? styles.active : ''}`}>
    <img src={image} alt="Gallery item" />
  </figure>
);

Image.propTypes = {
  image: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Image;
