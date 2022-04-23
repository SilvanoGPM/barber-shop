import React from 'react';
import propTypes from 'prop-types';
import { useSprings, animated } from 'react-spring';

import { prices } from 'data/fakeData';
import SlideIn from 'components/SlideIn';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

import Card from './components/Card';
import styles from './styles.module.scss';

const Price = ({ delay = 100 }) => {
  const [elementRef, dataRef] = useIntersectionObserver({
    freezeOnceVisible: false,
  });

  const inView = dataRef?.isIntersecting;

  const from = { transform: 'translateY(300px)', opacity: 0 };
  const to = inView ? { transform: 'translateY(0)', opacity: 1 } : from;

  const base = {
    config: { mass: 5, tension: 2000, friction: 200 },
    from,
    to,
  };

  const springs = useSprings(
    prices.length,
    prices.map((t, i) => ({ ...base, delay: delay * i }))
  );

  return (
    <section className={styles.price}>
      <SlideIn y={-100} delay={500}>
        <span className={styles.supTitle}>Our Best Pricing</span>
        <h2>We Provide Best Price in the City</h2>
      </SlideIn>

      <div className={styles.cards}>
        <div ref={elementRef} />
        {springs.map((style, index) => {
          const { name, image, price } = prices[index];

          return (
            <animated.div style={style}>
              <Card key={name} name={name} image={image} price={price} />
            </animated.div>
          );
        })}
      </div>
    </section>
  );
};

Price.defaultProps = {
  delay: 100,
};

Price.propTypes = {
  delay: propTypes.number,
};

export default Price;
