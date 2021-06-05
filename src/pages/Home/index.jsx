import React from 'react';

import Hero from 'components/Hero';
import AboutUs from 'components/AboutUs';
import Service from 'components/Service';
import Price from 'components/Price';
import Testimonial from 'components/Testimonial';
import BarberTeam from 'components/BarberTeam';
import Contact from 'components/Contact';
import Spacer from 'components/Spacer';

const Home = () => (
  <main>
    <Hero />
    <AboutUs />
    <Service />
    <Price />
    <Testimonial />
    <BarberTeam />
    <Contact />
    <Spacer />
  </main>
);

export default Home;
