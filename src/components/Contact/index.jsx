import React from 'react';

import styles from './styles.module.scss';

const Contact = () => (
  <section className={styles.contact}>
    <figure>
      <img src="images/contact.jpg" alt="Contact" />
    </figure>

    <form>
      <div className={styles.formGroup}>
        <input type="text" placeholder="Your Name" />
      </div>

      <div className={styles.formGroup}>
        <input type="text" placeholder="Your Email" />
      </div>

      <div className={styles.formGroup}>
        <input type="text" placeholder="Subject" />
      </div>

      <div className={styles.formGroup}>
        <textarea placeholder="Message" />
      </div>

      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default Contact;
