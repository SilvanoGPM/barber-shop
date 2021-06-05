import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Modal = ({ show, handleCloseModal }) => (
  <div className={`${styles.modal} ${show ? styles.show : ''}`}>
    <div className={styles.content}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Jn6-TItCazo"
        title="Modal"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />

      <button onClick={handleCloseModal} type="button">
        <AiOutlineClose />
      </button>
    </div>
  </div>
);

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default Modal;
