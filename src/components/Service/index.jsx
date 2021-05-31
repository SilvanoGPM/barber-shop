import React from 'react';

import { services } from 'data/fakeData';
import Card from './components/Card';
import styles from './styles.module.scss';

const Service = () => (
  <section className={styles.service}>
    <span>Our Salon Services</span>
    <h2>Best Salon and Barber Services for You</h2>

    <div className={styles.cards}>
      {services.map(({ title, image, description }) => (
        <Card
          key={title}
          title={title}
          image={image}
          description={description}
        />
      ))}
    </div>
  </section>
);

export default Service;
