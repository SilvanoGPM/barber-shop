import React from 'react';

import useTitle from 'hooks/useTitle';
import Hero from 'components/Hero';
import AboutUs from 'components/AboutUs';
import Service from 'components/Service';
import Price from 'components/Price';
import Testimonial from 'components/Testimonial';
import BarberTeam from 'components/BarberTeam';
import Contact from 'components/Contact';
import Spacer from 'components/Spacer';

import SlideIn from 'components/SlideIn';
import ZoomIn from 'components/ZoomIn';

const Home = () => {
  useTitle('Barber Shop');

  return (
    <>
      <Hero />
      <AboutUs />

      <ZoomIn>
        <Service />
      </ZoomIn>

      <SlideIn x={500}>
        <Price />
      </SlideIn>

      <SlideIn x={-500}>
        <Testimonial />
      </SlideIn>

      <SlideIn x={500}>
        <BarberTeam />
      </SlideIn>

      <SlideIn x={-500}>
        <Contact />
      </SlideIn>

      <Spacer />
    </>
  );
};

export default Home;
