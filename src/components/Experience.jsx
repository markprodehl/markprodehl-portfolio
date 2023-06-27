import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { useMediaQuery } from 'react-responsive'
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[100%] h-[100%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const MobileExperienceCard = ({ experience }) => {
  return (
    <div
      style={{
        background: "#1d1836",
        color: "#fff",
        margin: '10px 0',
        padding: '20px',
        borderRadius: '5px'
      }}
    >
      <div>
        <div className='flex items-center'>
          <h3 className='text-white text-[24px] font-bold mr-4'>{experience.title}</h3>
          <img
              src={experience.mobileIcon}
              alt={experience.company_name}
              className='w-[8%] h-[8%] object-contain'
          />
        </div>

        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {`${experience.company_name} - ${experience.date}`}
          
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        {isMobile ? (
          experiences.map((experience, index) => (
            <MobileExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))
        ) : (
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
