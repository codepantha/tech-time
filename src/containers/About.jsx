import React from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import images from '../constants/images';

const About = () => {
  const cardImages = [images.audio, images.live, images.recorded, images.notes];
  const gridCardImages = [
    images.mentor,
    images.meeting1,
    images.meeting2,
    images.affordable,
  ];

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <>
      <motion.section
        className="about-section"
        whileInView={{ x: [-100, 0] }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative text-center md:text-left">
          <h2 className="font-clash font-bold text-[56px] leading-[70px] text-[#000f24] md:pt-8">
            high quality video, audio & live classes
          </h2>
          <p className="text-[#a2a2a2] mt-4">
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <div className="crown">
            <img src={images.crown} alt="crown" />
          </div>

          <button
            type="button"
            className="blue-button"
          >
            View Courses
          </button>

          <div className="w-1/12 absolute bottom-52 md:-top-6 right-0 md:-right-[390px] lg:-right-[500px]">
            <img src={images.squiggly} alt="squiggly" className="w-full" />
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[
              'Audio Classes',
              'Live Classes',
              'Recorded Classes',
              '50+ Notes',
            ].map((item, i) => (
              <div className="card" key={uuidv4()}>
                <img src={cardImages[i]} alt="audio" />
                <p className="text-xs md:text-[16px] font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="about-section-right relative mt-4"
          whileInView={{ y: [-100, 20], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="relative">
            <div className="md:w-3/4 ml-auto relative z-10">
              <img
                src={images.img1}
                alt="person"
                className="w-[70%] md:w-full object-contain ml-auto mr-4"
              />
            </div>
            <div className="md:w-3/4 absolute -bottom-12 md:-bottom-16 left-2">
              <img
                src={images.img2}
                alt="person"
                className="w-[50%] md:w-[70%] relative z-20"
              />
            </div>
            <div className="md:w-1/6 absolute -bottom-8 right-0">
              <img src={images.droplets} alt="droplets" className="w-[91px]" />
            </div>
            <div className="absolute md:-bottom-16 -bottom-10 right-32">
              <img src={images.dot} alt="dot" />
            </div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="about-section gap-24"
        whileInView={{ x: [-100, 0] }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center md:text-left">
          <h2 className="about-subhead">
            this is why we are best from others
          </h2>
          <p className="text-secondaryText leading-[28px] mb-4">
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <div>
            <img src={images.boy} alt="boy" className="w-full object-contain" />
          </div>
        </div>

        <motion.div
          className="right grid grid-cols-2 md:mt-12 gap-3 md:gap-6"
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
        >
          {[
            'Experienced Mentors',
            'One-on-One Meetings',
            'One-on-One Meetings',
            'Affordable Prices',
          ].map((item, i) => (
            <div key={uuidv4()} className="bg-white shadow-md px-6 py-8">
              <img src={gridCardImages[i]} alt="icon" />
              <h3 className="font-bold mt-3">{item}</h3>
              <p className="text-secondaryText text-[12px] md:text-xs leading-4 md:leading-7">
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </p>
            </div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
};

export default About;
