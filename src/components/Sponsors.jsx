import React from 'react';
import { motion } from 'framer-motion';

import images from '../constants/images';

const Sponsors = () => (
  <motion.div
    className="sponsors"
    whileInView={{ opacity: [0, 1] }}
    transition={{ duration: 0.5 }}
  >
    <motion.div className="w-[50px] md:sponsor">
      <img src={images.zoom} alt="zoom" />
    </motion.div>
    <div className="w-[50px] md:sponsor">
      <img src={images.stripe} alt="stripe" />
    </div>
    <div className="w-[50px] md:sponsor">
      <img src={images.monday} alt="monday" />
    </div>
    <div className="w-[50px] md:sponsor">
      <img src={images.slack} alt="slack" />
    </div>
    <div className="w-[50px] md:sponsor">
      <img src={images.dropbox} alt="dropbox" />
    </div>
  </motion.div>
);

export default Sponsors;
