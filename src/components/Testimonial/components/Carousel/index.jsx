import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

import { testimonials } from 'data/fakeData';
import Card from '../Card';

import styles from './styles.module.scss';

const Carousel = () => (
  <div className={styles.container}>
    <CarouselProvider
      totalSlides={testimonials.length}
      infinite
      className={styles.carousel}
      interval={3000}
      isPlaying
    >
      <Slider>
        {testimonials.map((testimonial) => (
          <Slide className={styles.slide} key={testimonial.image}>
            <Card
              image={testimonial.image}
              description={testimonial.description}
            />
          </Slide>
        ))}
      </Slider>
      <ButtonBack className={styles.backBtn}>
        <IoIosArrowBack />
      </ButtonBack>
      <ButtonNext className={styles.nextBtn}>
        <IoIosArrowForward />
      </ButtonNext>
    </CarouselProvider>
  </div>
);

export default Carousel;
