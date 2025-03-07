import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useSelector } from "react-redux";
import { DeveloperPlatforms } from "./hero-child-components/Index";
import {WhatIAMUpTo} from "./index";

const Hero = () => {
  const careerDuration = useSelector((state) => state.career.careerDuration);

  return (
    <section className={`relative w-full h-screen mx-auto pt-7`}>
      <DeveloperPlatforms />
      <WhatIAMUpTo />
      <div className={`absolute inset-0 top-[170px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Hari</span>
          </h1>
          <h5 className="text-xl tracking-wider">{careerDuration} years of experience</h5>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span className="text-[#915EFF]">Full-Stack Engineer at Keppel, Singapore</span>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
