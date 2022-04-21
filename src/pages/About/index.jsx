import React from 'react';

import routes from 'routes';
import AboutUs from 'components/AboutUs';
import BarberTeam from 'components/BarberTeam';
import PageHeader from 'components/PageHeader';

const About = () => (
  <>
    <PageHeader title="About Us" link={routes.ABOUT} />

    <AboutUs />
    <BarberTeam delay={500} />
  </>
);

export default About;
