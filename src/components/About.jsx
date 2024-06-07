import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ title, icon, index }) => {
  return (
    <div>
      <Tilt className="xs:w-[250px] w-[250px]">
        <motion.div
          variants={fadeIn("right", "spring", 0.7 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
          >
            <img
              src={icon}
              alt={title}
              className="w-16 h-16 object-contain
            "
            />
            <h3 className="text-white text-[20px] text-center font-bold">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
};
const About = () => {
  return (
    <>
      <motion.div
        variants={() => {
          textVariant();
        }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h1 className={styles.sectionHeadText}>Overview</h1>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", "0.1", 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in JavaScript, and
        expertise in frameworks like React , Node.js , Express.js , Tailwind CSS
        , BootStrap I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      <div className="mt-20 flex md:justify-normal justify-center flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
