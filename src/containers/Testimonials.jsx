/* eslint-disable */
import React from 'react';
import { motion } from 'framer-motion';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonFirst,
  ButtonBack,
  ButtonNext,
  ButtonLast
} from 'pure-react-carousel';
import { BsDot } from 'react-icons/bs';
import 'pure-react-carousel/dist/react-carousel.es.css';

import images from '../constants/images';

const Testimonials = () => (
  <motion.section
    id="testimonials"
    className="testimonial-section mt-20"
    whileInView={{ x: [-100, 0] }}
    transition={{ duration: 0.5 }}
  >
    <div className="heading-group text-center mb-6">
      <h2 className="font-clash text-[#000f24] font-bold text-2xl leading-[29.5px] md:text-[56px] md:leading-[68px]">
        what our clients are saying
      </h2>
      <p className="text-neutral w-9/12 md:w-2/4 mx-auto">
        high-defination video is video of higher resolution and quality than
        standard definition. while there’s no standard meaning for high
        definition, generally any standard video image
      </p>
    </div>
    <CarouselProvider
      visibleSlides={2}
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={5}
    >
      <Slider className="max-h-72">
        {[1, 2, 3, 4, 5].map((item) => (
          <Slide index={0}>
            <article className="testimonial">
              <p>
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition. hbuild
                your future with our quality education. the best and largest
                all-in-one online tutoring platform in the worldd definition.
                high-defination video is video of higher resolution and quality
                than standard definition. build your future with our quality
                education. the best and largest all-in-one online tutoring
                platform in the world
              </p>
              <div className="flex gap-2 items-center mt-3">
                <img src={images.author} alt="author" />
                <div>
                  <p className="font-bold">Bella Moon</p>
                  <p className="text-neutral">Product Designer</p>
                </div>
              </div>
            </article>
          </Slide>
        ))}
      </Slider>
      <div className="flex justify-center">
        <ButtonFirst>
          <BsDot fontSize={32} />
        </ButtonFirst>
        <ButtonBack>
          <BsDot fontSize={32} />
        </ButtonBack>
        <ButtonNext>
          <BsDot fontSize={32} />
        </ButtonNext>
        <ButtonLast>
          <BsDot fontSize={32} />
        </ButtonLast>
      </div>
    </CarouselProvider>
  </motion.section>
);

export default Testimonials;
