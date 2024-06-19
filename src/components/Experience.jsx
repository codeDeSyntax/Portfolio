import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    id: 1,
    date: "September, 2016 – May, 2017",
    title: "Junior Developer",
    description:
      "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    location: "Lobritsa / Chicago",
  },
  {
    id: 2,
    date: "May, 2018 – June, 2019",
    title: "Senior Developer",
    description:
      "Molestiae a iaculis at erat pellentesque adipiscing. Porttitor eget dolor morbi non arcu risus.",
    location: "Faciubase / Seattle",
  },
  {
    id: 3,
    date: "June, 2019 – December, 2020",
    title: "Senior Developer",
    description:
      "Etiam erat velit scelerisque in dictum non consectetur. Nisl purus in mollis nunc.",
    location: "Ressutrato / New York",
  },
];

const ExperienceSection = () => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div name='Experience' className="min-h-screen flex flex-col items-center bg-gradient-to-b from-dark via-[black] to-dark text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } },
        }}
        className="py-16"
      >
        <h1 className="text-4xl font-bold text-head text-center">
          Experiences
        </h1>
        <p className="mt-4 text-xl text-text text-center">
          Nunc sed blandit libero volutpat sed cras. Risus quis varius quam
          quisque id. Semper auctortempus quam pellentesque.
        </p>
      </motion.div>

      <div className="w-full max-w-4xl space-y-12 px-4 sm:px-6 lg:px-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            className="border-b border-text pb-8 flex flex-col items-center sm:items-start justify-center sm:justify-start"
          >
            <p className="text-head">{exp.date}</p>
            <h2 className="text-2xl font-bold text-head">{exp.title}</h2>
            <p className="mt-2 text-text text-center">{exp.description}</p>
            <p className="mt-4 text-blue">{exp.location}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
