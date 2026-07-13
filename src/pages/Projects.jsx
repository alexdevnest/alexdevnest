import SearchAndFilter from "@projects/SearchAndFilter";
import ProjectCard from "@projects/ProjectCard";
import Footer from "@components/Footer";
import { PROJECTS } from "@constants/mock-data";
import { GoBack } from "@/components/GoTo";


export default function Projects () {
  return (
    <section id="projects-page">
      <GoBack />
      <SearchAndFilter />

      <section className="projects-grid">
        {
          PROJECTS.map(
            (project) => (
              <ProjectCard
                key={ project.id }
                { ...project }
                hideDetails={true}
              />
            )
          )
        }
      </section>

      <Footer />
    </section>
  );
}