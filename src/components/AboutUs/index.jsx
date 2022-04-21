import React from 'react';

import SlideIn from 'components/SlideIn';

import styles from './styles.module.scss';

const AboutUs = () => (
  <section className={styles.aboutUs}>
    <SlideIn x={-100} className={styles.figureContainer}>
      <figure>
        <img src="images/about.jpg" alt="AboutUs" />
      </figure>
    </SlideIn>

    <div className={styles.info}>
      <SlideIn y={-100}>
        <span>Learn About Us</span>
        <h2>25 Years Experience</h2>
      </SlideIn>

      <SlideIn x={100}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam
          metus tortor, auctor id gravida condimentum, viverra quis sem.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam
          metus tortor, auctor id gravida condimentum, viverra quis sem.
          Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur
          convallis porttitor. Aliquam interdum at lacus non blandit.
        </p>
      </SlideIn>

      <SlideIn x={0} y={100} delay={250}>
        <button type="button">Learn More</button>
      </SlideIn>
    </div>
  </section>
);

export default AboutUs;
