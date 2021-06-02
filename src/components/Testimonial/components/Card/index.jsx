import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Card = ({ image, description }) => (
  <div className={styles.card}>
    <figure>
      <img src={image} alt="Testimonial" />
    </figure>

    <p>{description}</p>

    <h3>Client Name</h3>
    <span>Profession</span>
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
