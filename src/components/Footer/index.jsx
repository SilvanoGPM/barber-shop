import React from 'react';
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from 'react-icons/ai';
import { FaPhoneAlt, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { IoMdMail } from 'react-icons/io';

import styles from './styles.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div>
        <h2>Salon Address</h2>

        <div className={styles.addressGroup}>
          <GoLocation />
          <p>123 Street, New York, USA</p>
        </div>

        <div className={styles.addressGroup}>
          <FaPhoneAlt />
          <p>+012 345 67890</p>
        </div>

        <div className={styles.addressGroup}>
          <IoMdMail />
          <p>info@example.com</p>
        </div>

        <div className={styles.socialMedia}>
          <a href="/">
            <AiOutlineTwitter />
          </a>
          <a href="/">
            <FaFacebookF />
          </a>
          <a href="/">
            <AiFillYoutube />
          </a>
          <a href="/">
            <AiOutlineInstagram />
          </a>
          <a href="/">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className={styles.quickLinks}>
        <h2>Quick Links</h2>

        <a href="/">Terms of use</a>
        <a href="/">Privacy policy</a>
        <a href="/">Cookies</a>
        <a href="/">Help</a>
        <a href="/">FQAs</a>
      </div>

      <div className={styles.newsletter}>
        <h2>Newsletter</h2>

        <p>
          Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum nec
          non quam. Tortor eu placerat rhoncus, lorem quam iaculis felis, sed
          lacus neque id eros.
        </p>

        <div className={styles.inputGroup}>
          <input type="text" placeholder="Email goes here" />
          <button type="button">Submit</button>
        </div>
      </div>

      <div className={styles.developers}>
        <p>
          <span>© </span>
          <a href="https://github.com/SkyG0D">My Github</a>
          <span>, All Right Reserved</span>
        </p>
        <p>
          <span>Designed By </span>
          <a href="https://htmlcodex.com/">HTML Codex</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
