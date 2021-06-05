import React from 'react';

import routes from 'routes';
import PageHeader from 'components/PageHeader';
import BarberTeam from 'components/BarberTeam';

const Barber = () => (
  <>
    <PageHeader title="Barber" link={routes.BARBER} />
    <BarberTeam />
  </>
);

export default Barber;
