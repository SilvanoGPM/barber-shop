import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Card = ({ image, name, expert }) => (
  <div className={styles.card}>
    <figure>
      <img src={image} alt={`Barber - ${name}`} />
    </figure>

    <div className={styles.info}>
      <h3>{name}</h3>
      <span>{expert}</span>
    </div>
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  expert: PropTypes.string.isRequired,
};

export default Card;
