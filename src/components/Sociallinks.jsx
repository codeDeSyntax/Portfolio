import { useState } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Sociallinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub size={25} className="text-primary" />,
      text: "Github",
      href: "https://Github.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      icon: <FaLinkedinIn size={25} className="text-primary" />,
      text: "LinkedIn",
      href: "https://Linkedin.com",
    },
    {
      id: 3,
      icon: <MdMailOutline size={25} className="text-primary" />,
      text: "Mail",
      href: "mailto:minwidth49@gmail.com",
    },
    {
      id: 4,
      icon: <BsFillPersonLinesFill className="text-primary" />,
      text: "contact",
      href: "./myCv.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  const toggleLinks = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-10 md:bottom-[8rem] left-10 z-50">
      <motion.button
        className="bg-lighter text-primary p-4 rounded-full shadow-lg hover:bg-primary hover:text-lighter transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleLinks}
      >
        <FaLinkedinIn size={25} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute bottom-16 -left-10 space-y-2"
          >
            {socialLinks.map((eachLink, index) => (
              <motion.a
                key={eachLink.id}
                href={eachLink.href}
                className={`flex justify-between items-center w-40 h-14 px-4 bg-lighter hover:bg-primary hover:text-lighter text-head text-[16px] transition-colors rounded-r-lg duration-300 ${eachLink.style}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                download={eachLink.download}
                target="_blank"
                rel="noreferrer"
              >
                {eachLink.text}
                {eachLink.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sociallinks;
