import React from 'react';

import styles from './styles.module.scss';

const AboutUs = () => (
  <section className={styles.aboutUs}>
    <figure>
      <img src="images/about.jpg" alt="AboutUs" />
    </figure>

    <div className={styles.info}>
      <span>Learn About Us</span>
      <h2>25 Years Experience</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam
        metus tortor, auctor id gravida condimentum, viverra quis sem.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam
        metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur
        non nisl nec nisi scelerisque maximus. Aenean consectetur convallis
        porttitor. Aliquam interdum at lacus non blandit.
      </p>

      <button type="button">Learn More</button>
    </div>
  </section>
);

export default AboutUs;
