import React from 'react';

import routes from 'routes';
import AboutUs from 'components/AboutUs';
import BarberTeam from 'components/BarberTeam';
import PageHeader from 'components/PageHeader';
import ZoomIn from 'components/ZoomIn';

const About = () => (
  <>
    <PageHeader title="About Us" link={routes.ABOUT} />

    <ZoomIn>
      <AboutUs />
      <BarberTeam delay={500} />
    </ZoomIn>
  </>
);

export default About;
