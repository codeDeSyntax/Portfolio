import Home from "./components/Home";
import ExperienceSection from "./components/Experience";
import PortfolioSection from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
// import SkillsPage from "./components/Skills";
// import Sociallinks from "./components/Sociallinks";
export default function App() {
  return (
    <>
      <div className="">
        <Home />
        <ExperienceSection />
        {/* <SkillsPage /> */}
        <PortfolioSection />
        <AboutMe />
        <Contact />
      </div>
    </>
  );
}
