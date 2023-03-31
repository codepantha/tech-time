import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex justify-between items-start py-8 md:py-[55px]">
      <span className="logo">
        TechTime
      </span>
      <div className="flex flex-col items-end">
        <button
          type="button"
          aria-label="button"
          onClick={() => setToggle(!toggle)}
          className="md:hidden"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: '100%',
            }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >
            {toggle ? (
              <IoMdClose className="text-white" fontSize={24} />
            ) : (
              <BiMenu className="text-white" fontSize={24} />
            )}
          </motion.div>
        </button>
        <ul className="desktop-menu">
          <li className="text-white hover:text-white">
            <a href="/">Home</a>
          </li>
          <li className="text-primaryLight hover:text-white">
            <a href="#about">About Us</a>
          </li>
          <li className="text-primaryLight hover:text-white">
            <a href="#courses">Courses</a>
          </li>
          <li className="text-primaryLight hover:text-white">
            <a href="#testimonial">Testimonial</a>
          </li>
          <li className="text-primaryLight hover:text-white">
            <a href="#community">Community</a>
          </li>
          <li className="bg-white rounded">
            <button type="button" className="text-primary h-full py-4 px-8">
              Enroll Now
            </button>
          </li>
        </ul>

        {toggle && (
          <motion.ul
            animate={{ x: [300, 0] }}
            transition={{ duration: 0.50, ease: 'easeOut' }}
            className="mobile-menu"
          >
            <li className="text-white hover:text-white">
              <a href="/">Home</a>
            </li>
            <li className="text-primaryLight hover:text-white">
              <a href="#about">About Us</a>
            </li>
            <li className="text-primaryLight hover:text-white">
              <a href="#courses">Courses</a>
            </li>
            <li className="text-primaryLight hover:text-white">
              <a href="#testimonial">Testimonial</a>
            </li>
            <li className="text-primaryLight hover:text-white">
              <a href="#community">Community</a>
            </li>
            <li className="bg-white rounded">
              <button type="button" className="text-primary h-full py-4 px-8">
                Enroll Now
              </button>
            </li>
          </motion.ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
