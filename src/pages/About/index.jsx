import React from 'react';

import routes from 'routes';
import AboutUs from 'components/AboutUs';
import BarberTeam from 'components/BarberTeam';
import PageHeader from 'components/PageHeader';

const About = () => (
  <main>
    <PageHeader title="About Us" link={routes.ABOUT} />
    <AboutUs />
    <BarberTeam />
  </main>
);

export default About;
