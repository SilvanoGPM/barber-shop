import React from 'react';

import Card from './components/Card';
import styles from './styles.module.scss';

const services = [
  {
    title: 'Hair Cut',
    image: 'images/service-1.jpg',
    description:
      'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non',
  },
  {
    title: 'Beard Style',
    image: 'images/service-2.jpg',
    description:
      'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non',
  },
  {
    title: 'Color & Wash',
    image: 'images/service-3.jpg',
    description:
      'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non',
  },
];

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
