import React from 'react';
import { motion } from 'framer-motion';

import images from '../constants/images';
import scaleVariants from '../constants/variant';

const Community = () => (
  <motion.section
    className="community-section"
    whileInView={{ x: [-100, 0] }}
    transition={{ duration: 0.5 }}
  >
    <p className="uppercase mb-3">Join our community</p>
    <h2>are you ready to connect with the future talent of the tech world</h2>
    <p className="leading-[21.6px] mt-3">
      meet up with other techstars and grow together
    </p>
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
    >
      <img src={images.community} alt="community" />
    </motion.div>
    <button type="button">Join Our Community</button>
  </motion.section>
);

export default Community;
