import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const NavbarCard = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start(isScrolled ? "scrolled" : "normal");
  }, [isScrolled, controls]);

  const cardVariants = {
    normal: {
      y: 0,
      rotate: 0,
      scale: 1,
    },
    scrolled: {
      y: 10,
      rotate: -5,
      scale: 0.95,
    },
  };

  return (
    <motion.div
      className="absolute left-4 top-0 bg-white text-black p-2 rounded-lg shadow-lg flex items-center space-x-2 cursor-pointer"
      style={{ zIndex: 60 }}
      variants={cardVariants}
      initial="normal"
      animate={controls}
      whileHover={{ scale: 1.05, rotate: 20, top: 20 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src="./Josiah.png" alt="Josiah" className="h-10 w-10 rounded-full" />
      <span className="font-mono text-text font-bold text-sm">Josiah-Ok</span>
    </motion.div>
  );
};

export default NavbarCard;
