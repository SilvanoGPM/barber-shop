import React from 'react';
import PropTypes from 'prop-types';

import formatNumberToCurrency from 'utils/formatNumberToCurrency';
import SlideIn from 'components/SlideIn';

import styles from './styles.module.scss';

const Card = ({ name, image, price, delay }) => (
  <div className={styles.card}>
    <figure>
      <img src={image} alt={`Price - ${name}`} />
    </figure>

    <SlideIn
      x={100}
      delay={delay}
      className={styles.content}
      freezeOnceVisible={false}
    >
      <h3>{name}</h3>
      <span>{formatNumberToCurrency(price)}</span>
    </SlideIn>
  </div>
);

Card.defaultProps = {
  delay: 0,
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  delay: PropTypes.number,
};

export default Card;
