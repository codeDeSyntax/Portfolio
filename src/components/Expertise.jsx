import { motion } from "framer-motion";
import { FaFileDownload, FaCode, FaServer, FaMobile } from "react-icons/fa";

const skills = {
  "Frontend Development": {
    icon: <FaCode className="text-accent text-2xl" />,
    items: [
      "HTML5 & CSS3 with Modern Features",
      "JavaScript (ES6+) & TypeScript",
      "React.js with Hooks & Context API",
      "Next.js for Server-Side Rendering",
      "Redux for State Management",
      "Tailwind CSS & Styled Components",
      "Responsive Web Design",
      "Web Performance Optimization",
    ],
  },
  "Mobile Development": {
    icon: <FaMobile className="text-accent text-2xl" />,
    items: [
      "React Native Development",
      "Cross-Platform Mobile Apps",
      "Native UI Components",
      "Mobile-First Design Approach",
      "App State Management",
      "Mobile Navigation Patterns",
      "Gesture Handling",
      "Performance Optimization",
    ],
  },
  "Backend Development": {
    icon: <FaServer className="text-accent text-2xl" />,
    items: [
      "Node.js & Express.js",
      "MongoDB Database Design",
      "RESTful API Development",
      "API Authentication & Security",
      "Database Optimization",
      "Server-Side Performance",
      "Error Handling & Logging",
      "API Documentation",
    ],
  },
};

const ExpertiseSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-background via-background to-primary py-16 px-4 sm:px-6 lg:px-8 text-text">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl font-light mb-2 text-accent"
          >
            MY EXPERTISE
          </motion.h2>
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Technical Skills
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg mb-8 max-w-2xl mx-auto text-text/80"
          >
            Specializing in modern web development with a focus on creating
            responsive, performant applications using the latest technologies
            and best practices.
          </motion.p>

          <motion.a
            href="./myCv-Josiah.pdf"
            download
            variants={itemVariants}
            className="bg-accent text-background px-6 py-3 rounded-full inline-flex items-center space-x-3 hover:bg-accent/90 transition duration-300 shadow-lg hover:shadow-accent/20"
          >
            <span>Download Resume</span>
            <FaFileDownload />
          </motion.a>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {Object.entries(skills).map(([category, { icon, items }]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-background/50 backdrop-blur rounded-2xl p-6 shadow-xl hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                {icon}
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>
              <div className="space-y-4">
                {items.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-6 h-0.5 bg-accent/50 group-hover:bg-accent transition-colors duration-300"></div>
                    <p className="text-sm sm:text-base text-text/80 group-hover:text-text transition-colors duration-300">
                      {skill}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">
            Additional Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Git & GitHub",
              "VS Code",
              "npm/yarn",
              "REST APIs",
              "Webpack",
              "Jest",
              "Docker",
              "Postman",
              "Firebase",
              "Vercel",
            ].map((tool, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                className="px-4 py-2 bg-accent/10  border-dotted border-2 rounded-full text-sm hover:bg-accent/20 transition-colors duration-300"
                style={{
                  borderColor: `rgba(${Math.floor(
                    Math.random() * 255
                  )},${Math.floor(Math.random() * 255)},${Math.floor(
                    Math.random() * 255
                  )},0.6)`,
                }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExpertiseSection;
