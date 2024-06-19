import { motion } from "framer-motion";
import { FaJs, FaReact, FaNode, FaCss3, FaHtml5 } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

const skills = [
  {
    id: 1,
    name: "JavaScript",
    level: 90,
    icon: <FaJs className="h-10 w-10" style={{ color: "#F7DF1E" }} />,
  },
  {
    id: 2,
    name: "React",
    level: 85,
    icon: <FaReact className="h-10 w-10" style={{ color: "#61DAFB" }} />,
  },
  {
    id: 3,
    name: "Node.js",
    level: 80,
    icon: <FaNode className="h-10 w-10" style={{ color: "#68A063" }} />,
  },
  {
    id: 4,
    name: "CSS",
    level: 70,
    icon: <FaCss3 className="h-10 w-10" style={{ color: "#1572B6" }} />,
  },
  {
    id: 5,
    name: "HTML",
    level: 95,
    icon: <FaHtml5 className="h-10 w-10" style={{ color: "#E34F26" }} />,
  },
];

const SkillBar = ({ skill }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="mb-4" ref={ref}>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {skill.icon}
          <span className="text-lg font-medium">{skill.name}</span>
        </div>
        <span>{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
        <motion.div
          className="bg-gradient-to-r from-[gray] to-primary h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  skill: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    icon: PropTypes.element.isRequired,
  }).isRequired,
};

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-[black] to-dark text-white flex flex-col items-center py-16 text-head">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold">My Skills</h1>
        <p className="mt-4 text-xl text-gray-300">
          Here are some of the technologies and tools I work with.
        </p>
      </motion.div>
      <div className="w-full max-w-3xl px-4">
        {skills.map((skill) => (
          <SkillBar key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
