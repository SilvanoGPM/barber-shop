import React from 'react';
import PropTypes from 'prop-types';

import formatNumberToCurrency from 'utils/formatNumberToCurrency';
import styles from './styles.module.scss';

const Card = ({ name, image, price }) => (
  <div className={styles.card}>
    <figure>
      <img src={image} alt={`Price - ${name}`} />
    </figure>

    <div className={styles.content}>
      <h3>{name}</h3>
      <span>{formatNumberToCurrency(price)}</span>
    </div>
  </div>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
