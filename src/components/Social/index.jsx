import React from 'react';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import styles from './styles.module.scss';

const Social = () => (
  <div className={styles.container}>
    <div className={styles.infos}>
      <div>
        <span>8:00 - 9:00</span>
        <small>Opening Hour Mon - Fri</small>
      </div>

      <div>
        <span>+123 456 7890</span>
        <small>Call Us For Appointment</small>
      </div>
    </div>

    <div className={styles.socialMedia}>
      <div>
        <AiOutlineTwitter />
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <FaLinkedinIn />
      </div>
      <div>
        <AiOutlineInstagram />
      </div>
    </div>
  </div>
);

export default Social;
