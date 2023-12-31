import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import "./styles.css"
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })

  return (
    <section className={`relative w-full h-screen mx-auto bg-gradient-to-r from-gray-900 to-gray-700`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* Display the Side bar with dot if !isMobile*/}
          { isMobile ? null : 
            <>
              <div className='w-5 h-5 rounded-full bg-[#915EFF]' /> 
              <div className='w-1 sm:h-80 h-40 violet-gradient' /> 
            </>
          }
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Mark</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I specialize in the development of comprehensive Full Stack web applications, 
            creating stunning visuals, and crafting intuitive user interfaces for 
            both front-end and back-end systems. My expertise spans across the entire 
            spectrum of application development, assuring seamless integration and performance.
          </p>
          <div>
            <ComputersCanvas />
          </div>
        </div>
      </div>

      <div className='absolute xs:bottom-50 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='absolute w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0], 
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero
