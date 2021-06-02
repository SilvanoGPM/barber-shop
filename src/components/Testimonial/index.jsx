import React from 'react';

import Carousel from './components/Carousel';

import styles from './styles.module.scss';

const Testimonial = () => (
  <section className={styles.testimonial}>
    <Carousel />
  </section>
);

export default Testimonial;
