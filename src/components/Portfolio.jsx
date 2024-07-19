import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Crowdfunding App",
    image1: "./ct1.png",
    image2: "./ct2.png",
    type: "UI/UX Design",
    githubLink: "https://github.com/example/crowdfunding-app",
    liveDemo: "https://crowdfunding-app-demo.com",
    technologies: ["React", "Node.js", "MongoDB"],
    imgDouble: true,
  },
  {
    title: "Workout App",
    image: "./essel.png",
    type: "UI/UX Design",
    githubLink: "https://github.com/example/workout-app",
    liveDemo: "https://workout-app-demo.com",
    technologies: ["React Native", "Firebase"],
    imgDouble: false,
  },
  {
    title: "Workout App",
    image1: "./am1.png",
    image2: "./am2.png",
    type: "UI/UX Design",
    githubLink: "https://github.com/example/workout-app",
    liveDemo: "https://workout-app-demo.com",
    technologies: ["React Native", "Firebase"],
    imgDouble: true,
  },

  {
    title: "Workout App",
    image: "./android.webp",
    type: "UI/UX Design",
    githubLink: "https://github.com/example/workout-app",
    liveDemo: "https://workout-app-demo.com",
    technologies: ["React Native", "Firebase"],
    imgDouble: false,
  },
  {
    title: "Workout App",
    image: "./android.webp",
    type: "UI/UX Design",
    githubLink: "https://github.com/example/workout-app",
    liveDemo: "https://workout-app-demo.com",
    technologies: ["React Native", "Firebase"],
    imgDouble: false,
  },
  {
    title: "Workout App",
    image: "./android.webp",
    type: "UI/UX Design",
    githubLink: "https://github.com/example/workout-app",
    liveDemo: "https://workout-app-demo.com",
    technologies: ["React Native", "Firebase"],
    imgDouble: false,
  },
  {
    title: "Workout App",
    image: "./android.webp",
    type: "UI/UX Design",
    githubLink: "https://github.com/example/workout-app",
    liveDemo: "https://workout-app-demo.com",
    technologies: ["React Native", "Firebase"],
    imgDouble: false,
  },
];

const PortfolioSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-purple-800 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        ref={ref}
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          variants={textVariants}
          className="text-4xl sm:text-5xl font-bold text-center text-white mb-4"
        >
          My Portfolio
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="text-lg text-center text-purple-200 mb-12"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-lg overflow-hidden shadow-lg flex  flex-col justify-center items-center marker:"
            >
              {project.imgDouble ? (
                <div className="flex gap-2">
                  <img src={project.image1} alt="" className="h-[7rem] w-" />
                  <img src={project.image2} alt="" className="h-[7rem]" />
                </div>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-b-3xl"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.type}</p>
                <div className="flex space-x-4 mb-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-purple-600"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-purple-600"
                  >
                    <FaExternalLinkAlt size={24} className="text-primary" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-lighter text-purple-800 text-xs font-semibold px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PortfolioSection;
