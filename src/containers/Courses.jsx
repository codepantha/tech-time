import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import coursesData from '../constants/data';
import { CourseCard } from '../components';

const Courses = () => {
  const categories = ['All Categories', 'Design', 'Development', 'Marketing'];

  const [active, setActive] = useState('All Categories');

  const [filteredCourses, setFilteredCourses] = useState(coursesData);

  const handleFilter = (category) => {
    if (category === 'All Categories') {
      setFilteredCourses(coursesData);
      return;
    }
    setFilteredCourses(coursesData.filter((course) => course.category === category));
  };

  return (
    <motion.section className="courses">
      <motion.div className="text-center">
        <h2>Browse our popular courses</h2>
        <p className="text-neutral text-[10px] md:text-[16px] md:leading-7 w-3/5 m-auto">
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>

        <motion.ul className="font-bold flex mt-4 justify-around w-11/12 md:w-3/5 m-auto">
          {categories.map((category) => (
            <li key={uuidv4()}>
              <button
                type="button"
                onClick={() => {
                  setActive(category);
                  handleFilter(category);
                }}
                onKeyDown={() => {
                  setActive(category);
                  handleFilter(category);
                }}
                className={`${
                  active === category ? 'text-primary bg-white' : 'text-neutral'
                } text-[10px] md:text-[16px] py-3 px-2 md:px-4`}
              >
                {category}
              </button>
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.section className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-14">
        {filteredCourses.map((course) => (
          <CourseCard key={uuidv4()} course={course} />
        ))}
      </motion.section>
    </motion.section>
  );
};

export default Courses;
