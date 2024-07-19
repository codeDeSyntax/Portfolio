import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import NavbarCard from "./Name";
// import AnimatedLogo from "./Name";
// import Sociallinks from "./Sociallinks";

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
      className="flex flex-col items-center md:justify-center min-h-screen md:px-20 text-white pt-20 bg-cover bg-center bg-no-repeat md:pt-24 lg:pt-28 rounded-br-[6rem]"
      style={{ backgroundImage: "url('./h2.png')" }}
      name="Home"
    >
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <header className="fixed top-0 w-full p-6 z-50 bg-background  backdrop-blur bg-opacity-30">
        <div className="w-full flex justify-end  items-center">
         <NavbarCard/>
          <nav className="hidden lg:flex space-x-6 text-white">
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
              className="hover:cursor-pointer"
              to="Contact"
            >
              Contact
            </Link>
          </nav>
          <button
            className="text-2xl lg:hidden text-white"
            onClick={toggleSidebar}
          >
            ☰
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-64 h-full bg-black bg-opacity-80 p-6 z-50 lg:hidden flex "
          >
            <button
              className="text-2xl text-white font-bold mb-6"
              onClick={toggleSidebar}
            >
              ✕
            </button>
            <ul className="space-y-4 text-white flex flex-col gap-4">
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
                className="hover:cursor-pointer"
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
        className="w-full mx-auto flex flex-col lg:flex-row md:items-center py-10 md:px-20 space-y-10 lg:space-y-0 lg:space-x-10 gap-40 mt-12 md:mt-0 relative"
        variants={container}
      >
        <motion.div
          className="space-y-4 text-left flex justify-center items-center flex-col text-white"
          variants={item}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-left">
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
          <a href="./myCv-Josiah.pdf" className="px-6 py-2 bg-white text-black rounded-full w-40 bg-primary text-text-dark w transition-colors" download={true}>
            Download CV ↓
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;