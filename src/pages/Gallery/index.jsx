import React from 'react';

import routes from 'routes';
import PageHeader from 'components/PageHeader';
import Gallery from 'components/Gallery';
import ZoomIn from 'components/ZoomIn';

// import styles from './styles.module.scss';

const GalleryPage = () => (
  <>
    <PageHeader title="Gallery" link={routes.GALLERY} />
    <ZoomIn>
      <Gallery />
    </ZoomIn>
  </>
);

export default GalleryPage;
