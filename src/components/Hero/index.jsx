import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

import styles from './styles.module.scss';

const Hero = () => (
  <div className={styles.heroWrapper}>
    <section className={styles.hero}>
      <h1>HTML5 Template for Salon Website</h1>
      <p>
        Lorem ipsum dolor sit amet elit. Phasell nec pretum mi. Curabi ornare
        velit non. Aliqua metus tortor auctor quis sem.
      </p>
      <button className={styles.btnDownload} type="button">
        Download Now
      </button>
      <button className={styles.bntPlay} type="button">
        <BsFillPlayFill />
      </button>

      <figure>
        <img src="images/hero.png" alt="Hero" />
      </figure>
    </section>
  </div>
);

export default Hero;
