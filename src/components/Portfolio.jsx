import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  { id: 1, title: "Website Design", image: "/cth.jpg" },
  { id: 2, title: "Mobile Application", image: "/essel.png" },
  { id: 3, title: "Corporate Design", image: "/amazon.png" },
  { id: 4, title: "Mobile Application", image: "/mern.png" },
  { id: 5, title: "Responsive Design", image: "/github.png" },
  { id: 6, title: "Digital Product", image: "/combo.jpg" },
];

const scatterAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    x: () => Math.random() * 1000 - 500,
    y: () => Math.random() * 1000 - 500,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, delay: 0.3 },
  },
};

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col items-center bg-gradient-to-b from-dark via-[black] to-dark text-white "
      name='Portfolio'
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } },
        }}
        className="py-16"
      >
        <h1 className="text-4xl font-bold text-head text-center">Portfolio</h1>
        <p className="mt-4 text-xl text-gray-300 text-center text-text md:text-left">
          Quam quisque id diam vel quam elementum. Vestibulum lectus mauris
          ultrices eros in cursus turpis massa tincidunt.
        </p>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={scatterAnimation}
            className="relative group border border-gray-600 rounded-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-[black] bg-opacity-50 group-hover:bg-opacity-0 transition duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800">
              <h2 className="text-xl font-bold text-head">{project.title}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
