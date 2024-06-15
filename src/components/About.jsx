import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ title, icon, index }) => {
  return (
    <div>
      <Tilt className="w-[250px] xs:w-[250px]">
        <motion.div
          variants={fadeIn("right", "spring", 0.7 * index, 0.75)}
          className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
        >
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5"
          >
            <img src={icon} alt={title} className="h-16 w-16 object-contain" />
            <h3 className="text-center text-[20px] font-bold text-white">
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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h1 className={styles.sectionHeadText}>Overview</h1>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", "0.1", 1)}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        I'm a skilled software developer with experience in JavaScript, and
        expertise in frameworks like React , Node.js , Express.js , MongoDb ,
        Tailwind CSS I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap justify-center gap-10 md:justify-normal">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <motion.div
        variants={fadeIn("left", "spring", 3, 1)}
        className="flex justify-end px-8"
      >
        <button
          className={`mt-20 w-fit rounded-xl bg-tertiary px-8 py-5 text-[18px] font-bold text-white-100 shadow-md shadow-primary outline-none hover:scale-105`}
        >
          <a href="/Cv.pdf" download="Chirag Cv">
            Download Cv
          </a>
        </button>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
