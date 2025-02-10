import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "Junior develooper (Intern)",
    company: "Central Tech Hub",
    location: "Millenium city, Kasoa",
    period: "2024 - Present",
    description:
      "Designed an Intern Registeration platform using reactjs and,restApis which improved efficieny by 40%.",
    skills: ["React", "Node.js"],
    achievements: [
      "Increased system performance by 60%",
      "Led team of 8 developers",
      "Implemented CI/CD pipeline",
    ],
  },
  {
    id: 2,
    role: "Junior mobile developer",
    company: "Circa Ai",
    location: "Accra ,Legon",
    period: "2024",
    description:
      "Developed mobile interface for Artificial intelligence agent",
    skills: ["React native"],
    achievements: [
      "Reduced loading time by 45%",
      "Implemented real-time features",
      "Mentored junior developers",
    ],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "",
    location: "",
    period: "",
    description:
      "Created interactive user interfaces for enterprise clients. Focused on accessibility and performance optimization.",
    skills: ["React", "Redux", "SASS", "Jest", "Webpack"],
    achievements: [
      "Improved accessibility score to 98%",
      "Built component library",
      "Optimized build process",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-background via-background to-primary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg sm:text-xl font-light mb-2 text-accent"
          >
            MY JOURNEY
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-text"
          >
            Professional Experience
          </motion.h1>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/20" />

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 lg:mb-16 ${
                index % 2 === 0 ? "lg:pr-16" : "lg:pl-16 lg:ml-auto"
              } lg:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="hidden lg:block absolute top-0 w-10 h-10 rounded-full bg-accent shadow-lg shadow-accent/30">
                <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-25" />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="relative bg-background/50 backdrop-blur p-6 rounded-lg shadow-lg hover:shadow-accent/20 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-text mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-text/70 mb-2">
                      <FaBriefcase className="text-accent" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-text/70">
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-accent" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-accent" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-text/80 mb-4">{exp.description}</p>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-text/80"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
