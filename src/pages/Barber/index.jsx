import React from 'react';

import routes from 'routes';
import PageHeader from 'components/PageHeader';
import BarberTeam from 'components/BarberTeam';
import ZoomIn from 'components/ZoomIn';

const Barber = () => (
  <>
    <PageHeader title="Barber" link={routes.BARBER} />

    <ZoomIn>
      <BarberTeam />
    </ZoomIn>
  </>
);

export default Barber;
