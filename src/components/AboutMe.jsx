import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope } from "react-icons/fa";

const AboutSection = () => {
  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Companies Worked", value: "1" },
    { label: "Client Satisfaction", value: "100%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-background via-background to-primary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Image & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-5/12"
          >
            <div className="relative">
              {/* Background Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              
              {/* Profile Image Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="./Josiah.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-background/50 backdrop-blur p-4 rounded-xl"
                  >
                    <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
                    <div className="text-sm text-text/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-7/12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h2 className="text-lg font-light text-accent mb-2">ABOUT ME</h2>
              <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
                Crafting Digital Experiences with Passion and Purpose
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-text/80"
            >
              <p>
                As a passionate software engineer with over 5 years of experience, I specialize in creating innovative digital solutions that combine cutting-edge technology with intuitive user experiences. My journey in tech has been driven by a constant desire to learn and evolve with the rapidly changing digital landscape.
              </p>
              <p>
                I believe in writing clean, maintainable code and building scalable applications that make a real difference. Whether it's crafting responsive front-end interfaces or architecting robust back-end systems, I approach each project with creativity and attention to detail.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, mentoring aspiring developers, or exploring new technologies that can enhance my craft.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button className="flex items-center gap-2 px-6 py-3 bg-[#6b21a8] text-text rounded-full hover:bg-accent/90 transition-colors">
                <FaDownload className="text-sm" />
                Download CV
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-background/20 text-text rounded-full hover:bg-background/30 transition-colors">
                <FaEnvelope className="text-sm" />
                Contact Me
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;