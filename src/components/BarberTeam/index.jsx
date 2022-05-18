import React from 'react';
import { animated, useSprings } from 'react-spring';
import propTypes from 'prop-types';

import { barbers } from 'data/fakeData';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

import Card from './components/Card';

import styles from './styles.module.scss';

const BarberTeam = ({ delay = 0, freezeOnceVisible = false }) => {
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
    barbers.length,
    barbers.map((t, i) => ({ ...base, delay: delay * i }))
  );

  return (
    <section className={styles.barberTeam}>
      <span>Our Barber Team</span>
      <h2>Meet Our Hair Cut Expert Barber</h2>

      <div className={styles.barbers}>
        <div ref={elementRef} />
        {springs.map((style, index) => {
          const { image, name, expert } = barbers[index];

          return (
            <animated.div key={name} style={style}>
              <Card key={name} image={image} name={name} expert={expert} />
            </animated.div>
          );
        })}
      </div>
    </section>
  );
};

BarberTeam.defaultProps = {
  delay: 100,
  freezeOnceVisible: false,
};

BarberTeam.propTypes = {
  delay: propTypes.number,
  freezeOnceVisible: propTypes.bool,
};

export default BarberTeam;
