import React, { useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useDispatch, useSelector } from "react-redux";
import { myAIVideo } from "../assets";
import { VideoPlayer } from "./VideoPlayer";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { fetchMyAppLikeCount, updateMyAppLikeCount } from "../store/slices/githubSlice";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{max: 45,scale: 1,speed: 450}}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt='web-development' className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const dispatch = useDispatch();
  const careerDuration = useSelector((state) => state.career.careerDuration);
  const {isLiked,likeCount,status} = useSelector((state) => state.github);

  useEffect(() => {
    dispatch(fetchMyAppLikeCount()); // Fetch like count from GitHub on component mount
  }, [dispatch]);

  const handleLike = async(count) => {
    const newLikeCount = count;
    dispatch(updateMyAppLikeCount(newLikeCount));
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <ul className="list-disc marker:text-[#915EFF] pl-5">
          <li>
            👋 Hi, I’m Mani Gandhi, a dedicated 🏢 Facilities Manager at Amazon SIN100 in Singapore. I specialize in ensuring seamless facility operations, safety, and efficiency.
          </li>
          <li>
            ✅ <strong>Experienced Leader ({careerDuration} years)</strong> – Managing large-scale facilities with a focus on operational excellence and team leadership.
          </li>
          <li>
            🔧 <strong>Problem-Solver</strong> – Implementing cost-effective solutions to optimize workplace infrastructure and processes.          
          </li>
          <li>
            💡 <strong>Tech-Driven Approach</strong> – Leveraging smart technologies and data-driven strategies for efficient facility management.          
          </li>
          <li>
            🤝 <strong>Collaborative Mindset</strong> – Building strong cross-functional relationships to drive success and business growth.          
          </li>
          <li>
            📚 <strong>Continuous Learner</strong> – Passionate about staying updated with industry best practices and innovations.
          </li>
        </ul>
      </motion.p>

      <div className="w-full mt-20 flex flex-col justify-center items-center gap-y-10">
        <VideoPlayer file={myAIVideo} />
        <div className="relative flex items-center">
          <button className="mr-5 flex items-center">
              {
                isLiked
                ? <HeartSolid className="w-16 h-16 text-red-600" onClick={() => handleLike(likeCount - 1)}/>
                : <HeartOutline className="w-16 h-16 text-gray-400 animate-pulse" onClick={() => handleLike(likeCount + 1)}/>
              }
              { 
                (status.getLikeCount === "loading" || status.updateLikeCount === "loading")
                ? <div class="absolute top-[-4px] right-0 flex justify-center items-center">
                    <div class="w-5 h-5 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
                </div>
                : <span className="absolute top-[-4px] right-0 text-lg">{likeCount}</span>
              }
          </button>
        </div>
      </div>

      <div className='mt-20 flex justify-center overflow-x-auto overflow-y-hidden gap-10 p-6'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
