
import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";

const skills = [
  "Brand Development & Advertising",
  "Direct-Response Marketing",
  "Search Marketing: SEO & PPC",
  "Digital Video & TV, including Super Bowl",
  "Streaming & Radio",
  "Out-of-Home",
  "Influencer Marketing: Podcast & YouTube",
  "Email Marketing, Design & Dev",
  "Social Media (Paid & Organic)",
  "Website Design & Development",
  "Advertising Creative (All Mediums)",
  "Identity Design",
  "Conversion Rate Optimization",
  "Copywriting (Ad, Web, & Product)",
  "Media Planning & Buying (up to $100MM)",
  "Content Strategy & Execution",
  "Business Development",
];

const ExpertiseSection = () => {
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
    <div className="bg-purple-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-purple-100 flex items-center justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl w-full"
      >
        <div className="text-center mb-12">
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl font-light mb-2"
          >
            MY SKILLS
          </motion.h2>
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Expertise
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg mb-8 max-w-2xl mx-auto"
          >
            Two decades of hands-on experience and hundreds of millions in spend
            have yielded a diverse skillset that touches on most every function.
            This is a partial list.
          </motion.p>

          <motion.button
            variants={itemVariants}
            className="bg-primary text-text-dark px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center space-x-2 mx-auto hover:bg-pink-600 transition duration-300"
          >
            <span>RESUME</span>
            <FaFileDownload />
          </motion.button>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center"
            >
              <div className="w-6 h-0.5 bg-pink-500 mr-4 flex-shrink-0"></div>
              <p className="text-sm sm:text-base">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExpertiseSection;
