import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import Sociallinks from "./Sociallinks";

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

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="flex flex-col items-center justify-center min-h-screen px-20 text-white pt-20 bg-background md:pt-24 lg:pt-28"
      name="Home"
    >
      <header className="fixed top-0 w-full p-6 z-50 bg-background">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-signature text-head ml-2">Josiah-Ok</h1>
          <nav className="hidden lg:flex space-x-6 text-text items-center">
            <Link
              smooth
              duration={500}
              className="hover:cursor-pointer"
              to="Home"
            >
              Home
            </Link>
            <Link
              smooth
              duration={500}
              className="hover:cursor-pointer"
              to="About"
            >
              About
            </Link>
            <Link
              smooth
              duration={500}
              className="hover:cursor-pointer"
              to="Experience"
            >
              Experience
            </Link>
            <Link
              smooth
              duration={500}
              className="hover:cursor-pointer"
              to="Portfolio"
            >
              Projects
            </Link>
            <Link
              smooth
              duration={500}
              className="hover:cursor-pointer bg-primary text-text-dark p-2 rounded-full"
              to="Contact"
            >
              Contact
            </Link>
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
            className="fixed top-0 left-0 w-64 h-full  p-6 z-50 lg:hidden"
          >
            <button
              className="text-2xl text-head font-bold mb-6"
              onClick={toggleSidebar}
            >
              ✕
            </button>
            <ul className="space-y-4 text-text flex flex-col gap-4">
              <Link
                smooth
                duration={500}
                className="hover:cursor-pointer"
                to="Home"
                onClick={toggleSidebar}
              >
                Home
              </Link>
              <Link
                smooth
                duration={500}
                className="hover:cursor-pointer"
                onClick={toggleSidebar}
                to="About"
              >
                About
              </Link>
              <Link
                smooth
                duration={500}
                className="hover:cursor-pointer"
                onClick={toggleSidebar}
                to="Experience"
              >
                Experience
              </Link>
              <Link
                smooth
                duration={500}
                className="hover:cursor-pointer"
                onClick={toggleSidebar}
                to="Portfolio"
              >
                Projects
              </Link>
              <Link
                smooth
                duration={500}
                className="hover:cursor-pointer bg-primary text-text-dark"
                onClick={toggleSidebar}
                to="Contact"
              >
                Contact
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="w-full mx-auto flex flex-col lg:flex-row items-center py-10 px-6 space-y-10 lg:space-y-0 lg:space-x-10 gap-30 mt-12 md:mt-0 justify-center"
        variants={container}
      >
        <motion.div
          className="space-y-4 text-left flex justify-center flex-col text-head"
          variants={item}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-left ">
            Im a Front end Developer
          </h1>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Josiah Okornoe
          </h2>
          <div className="space-y-2 text-sm md:text-base">
            <p>Address: Accra, Kasoa St.Mateo</p>
            <p>E-mail: minwidth49@gmail.com</p>
            <p>Phone: +233 549828492</p>
          </div>
          <button className="px-6 py-2 bg-primary text-text-dark text-head rounded-full w-40">
            Download CV ↓
          </button>
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          variants={item}
        >
          <img
            src="./hero3.jpg"
            alt="Josiah Okornoe"
            className="rounded-lg shadow-sm w-full max-w-md h-auto"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
