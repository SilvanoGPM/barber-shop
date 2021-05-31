import React from 'react';

import { prices } from 'data/fakeData';
import Card from './components/Card';
import styles from './styles.module.scss';

const Price = () => (
  <section className={styles.price}>
    <span>Our Best Pricing</span>

    <h2>We Provide Best Price in the City</h2>

    <div className={styles.cards}>
      {prices.map(({ name, image, price }) => (
        <Card key={name} name={name} image={image} price={price} />
      ))}
    </div>
  </section>
);

export default Price;
