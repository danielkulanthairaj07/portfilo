import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ExperienceWith from "./components/ExperienceWith/ExperienceWith";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExperienceWith />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
