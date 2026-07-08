import About from "@components/About";
import Experience from "@components/Experience";
import Contact from "@components/Contact";
import ProjectsHighlights from "@components/ProjectsHighlight";
import Services from "@components/Services";
import Hero from "@components/Hero";


export default function Home () {
  return (
    <main className="mb-6">
      <Hero />
      <About />
      <Services />
      <ProjectsHighlights />
      <Experience />
      <Contact />
    </main>
  );
}