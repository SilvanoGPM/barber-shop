import React from 'react';

import routes from 'routes';
import PageHeader from 'components/PageHeader';
import Price from 'components/Price';
import ZoomIn from 'components/ZoomIn';

const PricePage = () => (
  <>
    <PageHeader title="Price" link={routes.PRICE} />

    <ZoomIn>
      <Price />
    </ZoomIn>
  </>
);

export default PricePage;
