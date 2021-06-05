import React from 'react';
import { Link } from 'react-router-dom';

import routes from 'routes';

import styles from './styles.module.scss';

const Page404 = () => (
  <div className={styles.page404}>
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <Link to={routes.HOME}>Return to Home</Link>
  </div>
);

export default Page404;
