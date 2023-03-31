import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import images from '../constants/images';

const CourseCard = ({ course }) => (
  <motion.article className="course-card">
    <img src={course.thumbnail} alt="course" />
    <div className="flex justify-between items-center mt-4">
      <span className="badge">{course.category}</span>
      <span className="text-neutral font-bold text-[8px] md:text-xs">
        {course.ratings}
        ⭐
        {`(${course.numberReviewed})`}
      </span>
    </div>
    <div className="course-title">
      <h3>{course.name}</h3>
      <div className="flex justify-between items-center">
        <span className="lesson-duration">
          <img src={images.clock} className="w-3 h-3 md:w-5 md:h-5" alt="duration" />
          {course.duration}
        </span>
        <span className="lesson-duration">
          <img src={images.menu} className="w-3 h-3 md:w-5 md:h-5" alt="menu" />
          {course.lessons}
        </span>
      </div>
    </div>
    <div className="flex justify-between mt-8">
      <div className="flex items-center gap-3">
        <img src={images.author} alt="author" className="w-6 h-6" />
        <p className="font-bold text-sm md:text-[16px]">{course.author}</p>
      </div>

      <p className="font-clash text-[#004db3] font-semibold text-sm md:text-[16px]">
        $
        {course.price}
      </p>
    </div>
  </motion.article>
);

CourseCard.propTypes = {
  course: PropTypes.shape({
    thumbnail: PropTypes.string,
    category: PropTypes.string,
    ratings: PropTypes.number,
    numberReviewed: PropTypes.string,
    name: PropTypes.string,
    duration: PropTypes.string,
    price: PropTypes.string,
    author: PropTypes.string,
    lessons: PropTypes.number,
  }).isRequired,
};

export default CourseCard;
