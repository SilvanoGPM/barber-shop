import React from 'react';
import PropTypes from 'prop-types';

import SlideIn from 'components/SlideIn';

import styles from './styles.module.scss';

const Card = ({ title, image, description, delay = 0 }) => (
  <div className={styles.card}>
    <figure>
      <img src={image} alt={`Service - ${title}`} />
    </figure>

    <SlideIn y={100} delay={delay}>
      <h3>{title}</h3>
      <p>{description}</p>

      <button type="button">Learn More</button>
    </SlideIn>
  </div>
);

Card.defaultProps = {
  delay: 0,
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

export default Card;
