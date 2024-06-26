import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Animated } from "react-animated-css";
import { fadeIn, slideIn } from "../utils/motion";
import { Profile } from "../assets";
const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-col items-start md:gap-5 lg:flex-row`}
      >
        <div className="flex w-full gap-4">
          <div className="mt-5 flex flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-[#915eff]" />
            <div className="violet-gradient sm:h-70 h-40 w-1" />
          </div>
          <div className="h-fit">
            <Animated animationIn="zoomInUp" isVisible={true}>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi I'm <span className="text-[#915eff]">Chirag</span>
              </h1>
            </Animated>
            <motion.p
              variants={fadeIn()}
              className={`${styles.heroSubText} mt-2 text-white-100`}
            >
              I am Frontend Developer
              <br className="sm:block" hidden />i can build website with all new
              technology
            </motion.p>
          </div>
        </div>
        <div className="flex h-[48vh] w-full items-center justify-center lg:h-full lg:w-[70%]">
          <Animated animationIn="zoomInRight" isVisible={true}>
            <img src={Profile} alt="Profile Image" />
          </Animated>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      <div className="absolute bottom-14 flex w-full items-center justify-center xs:bottom-10">
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-white p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-1 h-3 w-3 rounded-full bg-white"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
