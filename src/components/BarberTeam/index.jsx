import React from 'react';

import { barbers } from 'data/fakeData';
import Card from './components/Card';

import styles from './styles.module.scss';

const BarberTeam = () => (
  <section className={styles.barberTeam}>
    <span>Our Barber Team</span>
    <h2>Meet Our Hair Cut Expert Barber</h2>

    <div className={styles.barbers}>
      {barbers.map(({ image, name, expert }) => (
        <Card key={name} image={image} name={name} expert={expert} />
      ))}
    </div>
  </section>
);

export default BarberTeam;
