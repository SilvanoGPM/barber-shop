import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Card = ({ title, image, description }) => (
  <div className={styles.card}>
    <figure>
      <img src={image} alt={`Service - ${title}`} />
    </figure>

    <h3>{title}</h3>
    <p>{description}</p>

    <button type="button">Learn More</button>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
