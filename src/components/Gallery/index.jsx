import React, { useState } from 'react';

import { images } from 'data/fakeData';
import Image from './components/Image';

import styles from './styles.module.scss';
import Button from './components/Button';

const Gallery = () => {
  const [view, setView] = useState('all');

  const handleViewAll = () => {
    setView('all');
  };

  const handleViewHairCut = () => {
    setView('Hair Cut');
  };

  const handleViewBeardStyle = () => {
    setView('Beard Style');
  };

  const handleViewColorWash = () => {
    setView('Color & Wash');
  };

  return (
    <section className={styles.gallery}>
      <span>Barber Image Gallery</span>
      <h2>Some Images From Our Barber Gallery</h2>

      <div className={styles.buttons}>
        <Button onClick={handleViewAll} active={view === 'all'}>
          All
        </Button>
        <Button onClick={handleViewHairCut} active={view === 'Hair Cut'}>
          Hair Cut
        </Button>
        <Button onClick={handleViewBeardStyle} active={view === 'Beard Style'}>
          Beard Style
        </Button>
        <Button onClick={handleViewColorWash} active={view === 'Color & Wash'}>
          Color &amp; Wash
        </Button>
      </div>

      <div className={styles.images}>
        {images.map(({ image, id, category }) => (
          <Image
            key={id}
            image={image}
            active={view === 'all' || view === category}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
