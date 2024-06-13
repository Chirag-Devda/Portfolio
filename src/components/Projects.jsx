import { github, Link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Tilt } from "react-tilt";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  index,
  project_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="w-full rounded-2xl bg-tertiary p-5 sm:min-h-[552px] sm:w-[300px]"
      >
        <div className="relative h-[230px] w-full">
          <img src={image} alt={name} className="h-full w-full rounded-2xl" />
          <div className="card-img_hover absolute inset-0 m-3 flex justify-end gap-2">
            <div
              onClick={() => {
                window.open(project_link, "_blank");
              }}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
            >
              <img
                src={Link}
                alt="project"
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => {
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
            >
              <img
                src={github}
                alt="github"
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p className="text-[14px] text-secondary">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color} `}>
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
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.3, 1)}
          className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
