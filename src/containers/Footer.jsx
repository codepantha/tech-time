import React from 'react';
import { motion } from 'framer-motion';
import images from '../constants/images';
import scaleVariants from '../constants/variant';

const Footer = () => (
  <motion.footer
    variants={scaleVariants}
    whileInView={scaleVariants.whileInView}
    className="footer grid md:grid-cols-4 gap-6"
  >
    <div>
      <span className="logo">
        TechTime
      </span>
      <p className="leading-[21.6px] mt-6 w-4/6 md:w-[100%]">
        reach out to us on any of our social media networks
      </p>
      <div className="flex gap-8 mt-8">
        <img src={images.fb} alt="facebook" className="w-6 h-6" />
        <img src={images.twi} alt="twi" className="w-6 h-6" />
        <img src={images.youtube} alt="youtube" className="w-6 h-6" />
        <img src={images.insta} alt="insta" className="w-6 h-6" />
        <img src={images.discord} alt="discord" className="w-6 h-6" />
      </div>
    </div>

    <div className="mt-20 md:mt-0">
      <h3 className="footer__heading">useful links</h3>
      <ul>
        <li className="footer__nav-item"><a href="#home">Home</a></li>
        <li className="footer__nav-item"><a href="#about">About Us</a></li>
        <li className="footer__nav-item"><a href="#courses">Our Courses</a></li>
        <li className="footer__nav-item"><a href="#testimonials">Testimonials</a></li>
        <li className="footer__nav-item"><a href="#community">Our Community</a></li>
      </ul>
    </div>

    <div className="md:mt-0">
      <h3 className="footer__heading">community</h3>
      <ul>
        <li className="footer__nav-item"><button type="button">Help Centers</button></li>
        <li className="footer__nav-item"><button type="button">Connections</button></li>
        <li className="footer__nav-item"><button type="button">Suggestion</button></li>
        <li className="footer__nav-item"><button type="button">Blog</button></li>
        <li className="footer__nav-item"><button type="button">Newsletter</button></li>
      </ul>
    </div>

    <div>
      <h3 className="footer__heading">Subscribe Us</h3>
      <form>
        <div className="flex justify-start items-center">
          <input type="text" placeholder="janedoe@gmail.com" className="h-12 flex-1 bg-[#2a2a2b] pl-2 outline-primary" />
          <button className="h-12 my-0 w-5/12 px-1 bg-primary rounded-sm text-sm" type="submit">Send Message</button>
        </div>
      </form>
    </div>
  </motion.footer>
);

export default Footer;
