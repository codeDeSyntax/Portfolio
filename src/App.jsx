import Home from "./components/Home";
import ExperienceSection from "./components/Experience";
import ProjectSection from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import ProjectsSection from "./components/Experience";
import ExpertiseSection from "./components/Expertise";
// import SkillsPage from "./components/Skills";
import Sociallinks from "./components/Sociallinks";
export default function App() {
  return (
    <>
      <div className="">
        <Home />
        <ExpertiseSection />
        <ProjectSection />
        {/* <SkillsPage /> */}
        {/* <ProjectSection /> */}
        <Sociallinks/>
        <ExperienceSection />
        <AboutMe />
        <Contact />
      </div>
    </>
  );
}
