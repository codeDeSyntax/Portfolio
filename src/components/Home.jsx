import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sociallinks from './Sociallinks'
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const imageItem = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="flex flex-col items-center justify-center min-h-screen bg-background text-white pt-20 md:pt-24 lg:pt-28"
    >
      <header className="fixed top-0 w-full p-6 bg-primary z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl text-head">Logo</div>
          <nav className="hidden lg:flex space-x-6 text-text">
            <a href="#home" className="text-white">
              Home
            </a>
            <a href="#about" className="text-white">
              About
            </a>
            <a href="#projects" className="text-white">
              Projects
            </a>
            <a href="#contact" className="text-white">
              Contact
            </a>
          </nav>
          <button
            className="text-2xl lg:hidden text-head"
            onClick={toggleSidebar}
          >
            ☰
          </button>
        </div>
        <Sociallinks />
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-64 h-full bg-primary p-6 z-50 lg:hidden"
          >
            <button
              className="text-2xl text-white mb-6"
              onClick={toggleSidebar}
            >
              ✕
            </button>
            <ul className="space-y-4 text-text">
              <li>
                <a href="#home" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="w-full mx-auto flex flex-col lg:flex-row items-center py-10 px-6 space-y-10 lg:space-y-0 lg:space-x-10 justify-around mt-12 md:mt-0"
        variants={container}
      >
        <motion.div
          className="space-y-4 text-left flex justify-center flex-col text-head"
          variants={item}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-left ">
            Im a digital designer
          </h1>
          <h2 className="text-4xl md:text-5xl font-extrabold">Julian Mack</h2>
          <div className="space-y-2 text-sm md:text-base">
            <p>Address: Rosia Road 55, Gibraltar, UK</p>
            <p>E-mail: julian.mack@company.com</p>
            <p>Phone: +13 5266 22 345</p>
          </div>
          <button className="px-6 py-2 bg-accent text-head rounded-full">
            Download CV ↓
          </button>
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          variants={imageItem}
          draggable="true"
        >
          <img
            src="me2.png"
            alt="Julian Mack"
            className="rounded-full p-2 shadow-head shadow-md hover:animate-pulse hover:cursor-move duration-500 md:h-[25rem] md:w-[25rem] md:border border-head border-dashed"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
