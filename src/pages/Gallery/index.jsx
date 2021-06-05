import React from 'react';

import routes from 'routes';
import PageHeader from 'components/PageHeader';
import Gallery from 'components/Gallery';

// import styles from './styles.module.scss';

const GalleryPage = () => (
  <>
    <PageHeader title="Gallery" link={routes.GALLERY} />
    <Gallery />
  </>
);

export default GalleryPage;
