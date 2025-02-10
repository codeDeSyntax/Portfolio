import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaMobile,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedux,
} from "react-icons/si";

const projects = [
  {
    title: "Mowquery",
    description:
      "A student bases studey platform tooled with several platform to help students.",
    image:
      "https://res.cloudinary.com/dqidnnssq/image/upload/v1739198525/mowq1_jgqys5.png",
    category: "Full Stack",
    technologies: ["Nextjs", "node", "mongodb"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "UIforge",
    description:
      "Get code for prebuilt UI components.",
    image: "https://res.cloudinary.com/dqidnnssq/image/upload/v1739199771/mowq2_ca5iis.png",
    category: "Mobile",
    technologies: ["react"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Quickfix",
    description:
      "Gain access to wide range of laptop ,phones repair services.",
    image: "https://res.cloudinary.com/dqidnnssq/image/upload/v1739200167/mowq3_khexmr.png",
    category: "Frontend",
    technologies: ["react",  "tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Yield",
    description:
      "Farm business on chain",
    image: "https://res.cloudinary.com/dqidnnssq/image/upload/v1739200488/yield_sv4xcs.png",
    category: "Block-chain",
    technologies: ["next", "node", "mongodb"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

const technologyIcons = {
  react: <FaReact className="text-[#61DAFB]" />,
  "react-native": <FaMobile className="text-[#61DAFB]" />,
  next: <SiNextdotjs className="text-white" />,
  node: <FaNodeJs className="text-[#68A063]" />,
  mongodb: <SiMongodb className="text-[#4DB33D]" />,
  express: <SiExpress className="text-white" />,
  redux: <SiRedux className="text-[#764ABC]" />,
  tailwind: <SiTailwindcss className="text-[#38B2AC]" />,
};

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Frontend", "Full Stack", "Mobile"];
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-background via-background to-primary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg sm:text-xl font-light mb-2 text-accent"
          >
            MY WORK
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-text"
          >
            Featured Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base mb-8 max-w-xl mx-auto text-text/80"
          >
            A collection of projects that showcase my skills in web development,
            from responsive frontends to full-stack applications.
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300
                ${
                  selectedCategory === category
                    ? "bg-accent text-background"
                    : "bg-background/20 text-text hover:bg-accent/20"
                }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {currentProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="group relative bg-background/50 backdrop-blur rounded-lg overflow-hidden shadow-lg hover:shadow-accent/20 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-text">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-0.5 text-xs bg-accent/20 text-accent rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-text/70 mb-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-1 text-xs bg-background/40 px-2 py-0.5 rounded-full"
                      >
                        {technologyIcons[tech]}
                        <span className="text-text/80 capitalize">{tech}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-accent text-background rounded-full hover:bg-accent/90 transition-colors"
                    >
                      <FaGithub className="text-xs" /> Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-background/20 text-text rounded-full hover:bg-background/30 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 gap-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-background/20 text-text disabled:opacity-50 disabled:cursor-not-allowed hover:bg-background/30 transition-colors"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-colors
                  ${
                    currentPage === index + 1
                      ? "bg-accent text-background"
                      : "bg-background/20 text-text hover:bg-accent/20"
                  }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-background/20 text-text disabled:opacity-50 disabled:cursor-not-allowed hover:bg-background/30 transition-colors"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
