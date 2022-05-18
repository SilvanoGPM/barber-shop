import React from 'react';
import { useSprings, animated } from 'react-spring';
import propTypes from 'prop-types';

import { services } from 'data/fakeData';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import SlideIn from 'components/SlideIn';

import Card from './components/Card';
import styles from './styles.module.scss';

const animationIndexes = {
  0: 2,
  1: 0,
  2: 1,
};

const Service = ({ freezeOnceVisible = true, delay = 100 }) => {
  const [elementRef, dataRef] = useIntersectionObserver({
    freezeOnceVisible,
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
    services.length,
    services.map((t, i) => ({ ...base, delay: delay * animationIndexes[i] }))
  );

  const cardDelay = delay + 250;

  return (
    <section className={styles.service}>
      <SlideIn y={-50} delay={200}>
        <span className={styles.supTitle}>Our Salon Services</span>
        <h2>Best Salon and Barber Services for You</h2>
      </SlideIn>

      <div className={styles.cards}>
        <div ref={elementRef} />
        {springs.map((style, index) => {
          const { title, image, description } = services[index];

          return (
            <animated.div key={title} style={style}>
              <Card
                key={title}
                title={title}
                image={image}
                description={description}
                delay={animationIndexes[index] * cardDelay}
              />
            </animated.div>
          );
        })}
      </div>
    </section>
  );
};

Service.defaultProps = {
  delay: 100,
  freezeOnceVisible: true,
};

Service.propTypes = {
  delay: propTypes.number,
  freezeOnceVisible: propTypes.bool,
};

export default Service;
