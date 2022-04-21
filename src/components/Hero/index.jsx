import React, { useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

import Modal from 'components/Modal';
import SlideIn from 'components/SlideIn';

import styles from './styles.module.scss';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.heroWrapper}>
      <Modal show={showModal} handleCloseModal={handleCloseModal} />

      <section className={styles.hero}>
        <SlideIn x={-100} delay={500}>
          <h1>HTML5 Template for Salon Website</h1>
          <p>
            Lorem ipsum dolor sit amet elit. Phasell nec pretum mi. Curabi
            ornare velit non. Aliqua metus tortor auctor quis sem.
          </p>
        </SlideIn>

        <SlideIn x={-100} delay={1000} className={styles.btnDownloadContainer}>
          <button className={styles.btnDownload} type="button">
            Download Now
          </button>
        </SlideIn>

        <button
          className={styles.bntPlay}
          onClick={handleShowModal}
          type="button"
        >
          <BsFillPlayFill />
        </button>

        <figure>
          <img src="images/hero.png" alt="Hero" />
        </figure>
      </section>
    </div>
  );
};

export default Hero;
