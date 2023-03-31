import React from 'react';
import { motion } from 'framer-motion';

import { Navbar } from '../components';
import images from '../constants/images';
import scaleVariants from '../constants/variant';

const Header = () => (
  <motion.div
    id="home"
    className="h-full max-w-full bg-primary px-4 md:px-20 md:pb-20 lg:pb-20 xl:pb-0"
  >
    <Navbar />
    <motion.header
      className="grid md:grid-cols-2 mt-8"
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="text-center md:text-left md:mt-[100px]">
        <h1 className="font-clash text-white text-[32px] font-bold md:text-[64px] leading-[46px] md:leading-[82px]">
          Grow your skills to advance your career path
        </h1>
        <p className="text-[#e7e7e7] mt-4">
          build your future with our quality education. the best and largest
          all-in-one online tutoring platform in the world
        </p>

        <div className="flex gap-4 mt-8 w-full justify-center md:justify-start">
          <button
            type="button"
            className="py-4 px-4 md:px-8 border-2 border-white text-white text-[10px] md:text-[16px] flex items-center gap-3 hover:bg-neutral hover:text-white rounded"
          >
            Get Started Now
            <img src={images.arrowOutward} alt="arrow outward" />
          </button>
          <button
            type="button"
            className="py-4 px-8 bg-white text-primary text-[10px] md:text-[16px] hover:bg-neutral hover:text-white hover:border-2 rounded"
          >
            Enroll Now
          </button>
        </div>

        <div className="previews relative mt-8">
          <div className="images flex">
            <img src={images.person1} alt="person" className="absolute" />
            <img
              src={images.person2}
              alt="person"
              className="absolute left-[20px] md:left-[40px]"
            />
            <img
              src={images.person3}
              alt="person"
              className="absolute left-[40px] md:left-[80px]"
            />
            <img
              src={images.person4}
              alt="person"
              className="absolute left-[60px] md:left-[120px]"
            />
            <img
              src={images.person5}
              alt="person"
              className="absolute left-[80px] md:left-[160px]"
            />
          </div>
          <div className="absolute left-[120px] md:left-[240px]">
            <p className="font-semibold leading-[21.6px] text-white font-clash">
              255k+
              <span className="block font-normal">Previews</span>
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="header-right relative mt-8 md:mt-0"
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
      >
        <div className="bg bg-no-repeat bg-contain bg-center">
          <img src={images.hero} alt="background" />
        </div>
        <img
          src={images.idea}
          width="180"
          className="absolute -top-4 -left-14"
          alt="bulb"
        />
        <img
          src={images.vscode}
          width="70"
          height="70"
          alt="bulb"
          className="absolute top-5 right-3"
        />
        <img
          src={images.figma}
          width="70"
          height="70"
          alt="figma"
          className="absolute top-[50%] left-0"
        />
        <img
          src={images.wordpress}
          width="70"
          height="70"
          alt="wordpress"
          className="absolute bottom-20 right-0"
        />
      </motion.div>
    </motion.header>
  </motion.div>
);

export default Header;
