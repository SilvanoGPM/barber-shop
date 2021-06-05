import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import routes from 'routes';
import useTitle from 'hooks/useTitle';

import styles from './styles.module.scss';

const PageHeader = ({ title, link }) => {
  useTitle(`Barber Shop - ${title}`);

  return (
    <div className={styles.pageHeader}>
      <h1>{title}</h1>
      <div>
        <Link className={styles.home} to={routes.HOME}>
          Home
        </Link>
        <Link to={link}>{title}</Link>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default PageHeader;
