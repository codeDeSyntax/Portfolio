import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import NavbarCard from "./Name";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Home", description: "Welcome to my portfolio" },
    { title: "About", description: "Learn about my journey" },
    { title: "Experience", description: "My professional background" },
    { title: "Projects", description: "View my work" },
    { title: "Contact", description: "Get in touch" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="flex flex-col bg-gradient-to-tr from-background via-background to-primary min-h-screen text-white"
      name="Home"
    >
      {/* Header */}
      <header className="fixed top-0 w-full p-6 z-50 bg-background backdrop-blur bg-opacity-30">
        <div className="w-full flex justify-end items-center">
          <NavbarCard />
          <nav className="hidden lg:flex space-x-6 text-text">
            {steps.map((step, index) => (
              <Link
                key={step.title}
                smooth
                duration={500}
                className="hover:cursor-pointer text-text hover:text-primary transition-colors"
                to={step.title}
                onClick={() => setActiveStep(index)}
              >
                {step.title}
              </Link>
            ))}
          </nav>
          <button
            className="text-2xl lg:hidden text-white"
            onClick={toggleSidebar}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-64 h-full bg-black bg-opacity-80 p-6 z-50 lg:hidden"
          >
            <button
              className="text-2xl text-white font-bold mb-6"
              onClick={toggleSidebar}
            >
              ✕
            </button>
            <ul className="space-y-4">
              {steps.map((step, index) => (
                <Link
                  key={step.title}
                  smooth
                  duration={500}
                  className="hover:cursor-pointer text-text block"
                  to={step.title}
                  onClick={() => {
                    setActiveStep(index);
                    toggleSidebar();
                  }}
                >
                  {step.title}
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        className="w-[90%] mx-auto flex flex-col lg:flex-row items-start justify-between px-6 lg:px-20 py-32 gap-12 lg:gap-24"
        variants={container}
      >
        {/* Left Side - Portfolio Info */}
        <motion.div className="w-full lg:w-1/2 space-y-8" variants={item}>
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-text">
              Front-end Developer
            </h1>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text">
              Josiah Okornoe
            </h2>
            <p className="text-lg text-text/80 mt-4">
              Passionate about creating beautiful, responsive, and user-friendly
              web experiences. Specializing in modern frontend technologies and
              interactive design.
            </p>
          </div>

          <div className="space-y-2 text-text text-sm md:text-base">
            <p>📍 Accra, Kasoa St.Mateo</p>
            <p>✉️ minwidth49@gmail.com</p>
            <p>📱 +233 549828492</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="./myCv-Josiah.pdf"
              className="px-6 py-3 bg-accent text-text rounded-full hover:bg-accent/90 transition-colors inline-flex items-center space-x-2"
              download={true}
            >
              <span>Download CV</span>
              <span>↓</span>
            </a>
            <Link
              to="Contact"
              smooth
              duration={500}
              className="px-6 py-3 border border-accent text-text rounded-full hover:bg-accent/10 transition-colors cursor-pointer"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Right Side - Wizard Tracker */}
        <motion.div
          className="w-full lg:w-1/2 bg-black/20 flex items-center justify-center rounded-2xl p-6"
          variants={item}
        >
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      index <= activeStep
                        ? "bg-accent text-background"
                        : "bg-background/20 text-text"
                    }`}
                  >
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-0.5 h-16 ${
                        index < activeStep ? "bg-accent" : "bg-background/20"
                      }`}
                    />
                  )}
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-lg font-semibold ${
                      index <= activeStep ? "text-accent" : "text-text/60"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-text/60 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
