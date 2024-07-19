const AboutMe = () => {
  return (
    <section
      name="About"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-dark via-[black] to-dark text-head p-4"
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-head text-center md:text-left">
            About me
          </h2>
          <p className="text-lg mb-4 text-text text-center md:text-left">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="text-lg mb-4 text-text text-center md:text-left">
            Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Nunc
            lobortis mattis aliquam faucibus purus. Accumsan sit amet nulla
            facilisi morbi tempus iaculis urna. Ulna nunc id cursus metus.
          </p>
          <button className="bg-blue hover:bg-dark text-white font-bold py-2 px-4 rounded mt-4">
            Contact Me
          </button>
        </div>
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillPercentage skill="HTML5 & CSS3" percentage="97%" />
          <SkillPercentage skill="Web Design" percentage="75%" />
          <SkillPercentage skill="Java" percentage="80%" />
          <SkillPercentage skill="PHP" percentage="55%" />
        </div>
      </div>
    </section>
  );
};

import PropTypes from "prop-types";

const SkillPercentage = ({ skill, percentage }) => (
  <div className="relative flex flex-col items-center text-center">
    <div className="bg-blue text- text-2xl font-bold rounded-full w-24 h-24 flex items-center justify-center mb-2 bg-primary text-text-dark">
      {percentage}
    </div>
    <h3 className="text-lg font-semibold">{skill}</h3>
  </div>
);

SkillPercentage.propTypes = {
  skill: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};

export default AboutMe;
