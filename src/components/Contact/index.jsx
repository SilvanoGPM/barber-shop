import SlideIn from 'components/SlideIn';
import React, { useState } from 'react';

import styles from './styles.module.scss';

const Contact = () => {
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleBlur = (setter, message) => (event) => {
    if (event.target.value === '') {
      setter(message);
    }
  };

  const handleFocus = (setter) => () => {
    setter('');
  };

  return (
    <section className={styles.contact}>
      <figure>
        <img src="images/contact.jpg" alt="Contact" />
      </figure>

      <form onSubmit={handleFormSubmit}>
        <SlideIn delay={50}>
          <div className={styles.formGroup}>
            <input
              onBlur={handleBlur(setNameError, 'Please enter your name')}
              onFocus={handleFocus(setNameError)}
              name="name"
              type="text"
              placeholder="Your Name"
            />
            <p>{nameError}</p>
          </div>
        </SlideIn>

        <SlideIn delay={150}>
          <div className={styles.formGroup} y={30}>
            <input
              onBlur={handleBlur(setEmailError, 'Please enter your email')}
              onFocus={handleFocus(setEmailError)}
              name="email"
              type="text"
              placeholder="Your Email"
            />
            <p>{emailError}</p>
          </div>
        </SlideIn>

        <SlideIn delay={250} y={30}>
          <div className={styles.formGroup}>
            <input
              onBlur={handleBlur(setSubjectError, 'Please enter a subject')}
              onFocus={handleFocus(setSubjectError)}
              name="subject"
              type="text"
              placeholder="Subject"
            />
            <p>{subjectError}</p>
          </div>
        </SlideIn>

        <SlideIn delay={350} y={30}>
          <div className={styles.formGroup}>
            <textarea
              onBlur={handleBlur(setMessageError, 'Please enter a message')}
              onFocus={handleFocus(setMessageError)}
              name="message"
              placeholder="Message"
            />
            <p>{messageError}</p>
          </div>
        </SlideIn>

        <SlideIn delay={500} x={50}>
          <button type="submit">Send Message</button>
        </SlideIn>
      </form>
    </section>
  );
};

export default Contact;
