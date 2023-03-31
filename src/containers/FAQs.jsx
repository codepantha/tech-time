import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMinus } from 'react-icons/fi';
import { HiPlus } from 'react-icons/hi';

import images from '../constants/images';

const FAQs = () => {
  const faqs = [
    {
      id: '1',
      question: 'is there a free trial available?',
      ans: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.',
    },
    {
      id: '2',
      question: 'can i change my plan later?',
      ans: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.',
    },
    {
      id: '3',
      question: 'are the courses lifetime?',
      ans: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.',
    },
    {
      id: '4',
      question: 'do i get certified after taking courses?',
      ans: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.',
    },
    {
      id: '5',
      question: 'how do i reach out to mentors?',
      ans: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.',
    },
    {
      id: '6',
      question: 'do we get job ready after taking courses?',
      ans: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.',
    },
  ];

  const [reading, setReading] = useState('1');

  return (
    <motion.section
      className="faq-section"
      whileInView={{ x: [-100, 0] }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <h2 className="font-clash capitalize">Frequently Asked Questions</h2>
        <p className="text-neutral text-sm w-5/6 md:w-2/3 py-4 px-6 mx-auto">
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
        <img src={images.dot} alt="dot" className="absolute right-10 top-0" />
      </div>

      <motion.div className="relative">
        <img src={images.redSquiggly} alt="red line" className="absolute -top-7 left-0 h-4 w-4" />
        <ul>
          {faqs.map((faq) => (
            <li
              key={faq.id}
              className="px-3 cursor-pointer"
            >
              <article>
                <div className="flex justify-between items-center">
                  <h4
                    className={`${
                      faq.id === reading ? 'text-primary py-4' : 'py-8'
                    } font-black text-lg md:text-2xl`}
                  >
                    {faq.question}
                  </h4>
                  {reading === faq.id ? (
                    <FiMinus className="cursor-pointer" />
                  ) : (
                    <HiPlus
                      className="cursor-pointer"
                      onClick={() => setReading(faq.id)}
                    />
                  )}
                </div>
                {reading === faq.id && (
                  <motion.p
                    whileInView={{ y: [-20, 0] }}
                    transition={{ duration: 0.5 }}
                    className="text-secondaryText text-left my-3"
                  >
                    {faq.ans}
                  </motion.p>
                )}
                <hr className="text-[#eaeaea]" />
              </article>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  );
};
export default FAQs;
