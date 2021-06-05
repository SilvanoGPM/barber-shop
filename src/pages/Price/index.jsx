import React from 'react';

import routes from 'routes';
import PageHeader from 'components/PageHeader';
import Price from 'components/Price';

const PricePage = () => (
  <>
    <PageHeader title="Price" link={routes.PRICE} />
    <Price />
  </>
);

export default PricePage;
