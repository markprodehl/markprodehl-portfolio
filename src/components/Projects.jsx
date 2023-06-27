import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, link, lockedIcon } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  projectLink,
  source_code_link,
  deployed_app_link,
  openSource
}) => {
  const isPrivate = openSource === false;
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:bg-indigo-950'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5 flex justify-between items-center'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <div className='flex'>
            {/* GitHub Repo Link */}
            {/* isPrivate conditionlly adds a source_code_link based on the codebase being open source or not */}
            {isPrivate ? 
              <div className='relative black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer ml-3 group'>
                <img
                  src={lockedIcon}
                  alt='private'
                  className='w-1/2 h-1/2 object-contain'
                />
                {/* Tooltip */}
                <div className='absolute p-2 -top-8 text-center bg-black text-white text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap'>
                  Private
                </div>
              </div>
              :
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='relative black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer ml-3 group'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-2/3 h-2/3 object-contain'
                />
                {/* Tooltip */}
                <div className='absolute p-2 -top-8 text-center bg-black text-white text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap'>
                  View source code
                </div>
              </div>
            }
            {/* Deployed App Link */}
            <div
              onClick={() => window.open(deployed_app_link, "_blank")}
              className='relative black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer ml-3 group'
            >
              <img
                src={link}
                alt='source code'
                className='w-3/4 h-3/4 object-contain'
              />
              <div className='absolute p-2 -top-8 -right-5 text-center bg-black text-white text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap'>
                Launch deployed app
              </div>
            </div>
          </div>
        </div>

        <p className='mt-2 text-secondary text-[14px]'>{description}</p>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} `}>My work</p> */}
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]'
        >
          The following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
