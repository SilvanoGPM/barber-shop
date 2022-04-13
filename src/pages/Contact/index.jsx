import React from 'react';

import routes from 'routes';
import PageHeader from 'components/PageHeader';
import Contact from 'components/Contact';
import Spacer from 'components/Spacer';
import ZoomIn from 'components/ZoomIn';

import styles from './styles.module.scss';

const ContactPage = () => (
  <>
    <PageHeader title="Contact" link={routes.CONTACT} />
    <div className={styles.contact}>
      <span>Get In Touch</span>
      <h2>If You Have Any Query, Please Contact Us</h2>
    </div>

    <ZoomIn>
      <Contact />
    </ZoomIn>

    <Spacer />
  </>
);

export default ContactPage;
