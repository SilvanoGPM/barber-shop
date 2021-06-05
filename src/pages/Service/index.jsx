import React from 'react';

import routes from 'routes';
import PageHeader from 'components/PageHeader';
import Service from 'components/Service';

const ServicePage = () => (
  <>
    <PageHeader title="Service" link={routes.SERVICE} />
    <Service />
  </>
);

export default ServicePage;
