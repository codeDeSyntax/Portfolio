import  { useState } from 'react';
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';

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
      href: "mailto:foo@gmail.com",
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
        className="bg-lighter text-primary p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleLinks}
      >
        <FaLinkedinIn size={25} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute bottom-16 left-0"
          >
            <ul>
              {socialLinks.map((eachLink) => (
                <motion.li
                  key={eachLink.id}
                  className={`flex justify-between items-center w-40 h-14 px-4 bg-lighter ml-[-100px] hover:rounded-md duration-300 hover:ml-[-20px] ${eachLink.style}`}
                  initial={{ opacity: 0, x: -70 }}
                  animate={{ opacity: 1, x: -30 }}
                  exit={{ opacity: 0, x: -70 }}
                  // transition={{ delay:  0 }}
                >
                  <a
                    href={eachLink.href}
                    className="flex justify-between items-center w-full text-head text-[16px]"
                    download={eachLink.download}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {eachLink.text}
                    {eachLink.icon}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sociallinks;