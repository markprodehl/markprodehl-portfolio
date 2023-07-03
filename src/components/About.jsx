import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useMediaQuery } from 'react-responsive'

const ServiceCard = ({ index, title, icon }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 580px)' })

  return (
    <Tilt className={isMobile ? 'flex-grow w-32 h-32' : 'xs:w-[250px] w-full'}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className={isMobile ? 'w-full h-full green-pink-gradient p-[1px] rounded-xl shadow-card' : 'w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={isMobile ? 'w-full h-full bg-tertiary rounded-xl py-4 px-6 flex justify-evenly items-center flex-col hover:bg-indigo-950' : 'bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:bg-indigo-950'}
        >
          <img
            src={icon}
            alt='web-development'
            className={isMobile ? 'w-8 h-8 object-contain' : 'w-16 h-16 object-contain'}
          />

          <h3 className={isMobile ? 'text-white text-sm font-bold text-center' : 'text-white text-[20px] font-bold text-center'}>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]'
      >
        I am a proficient Full Stack Engineer, boasting expertise in JavaScript, TypeScript, 
        and Ruby programming languages. My specialized skill set extends to using frameworks 
        such as React, Node.js, and Ruby on Rails. I am recognized for being a quick learner 
        and an effective collaborator, with a strong drive and open-minded approach that allows 
        me to adapt to changing environments. I thrive in agile team settings where I can 
        apply my adeptness in version control to develop scalable, user-friendly web applications. 
        I am passionate about leveraging my skills to solve real-world problems, consistently 
        delivering solutions that address user needs effectively.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
