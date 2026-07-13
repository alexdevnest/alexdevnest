import SearchAndFilter from "@projects/SearchAndFilter";
import ProjectCard from "@projects/ProjectCard";
import Footer from "@components/Footer";
import { PROJECTS } from "@constants/mock-data";


const projects_container = "mx-12 grid gap-8 min-[600px]:grid-cols-2 min-[835px]:grid-cols-3 min-[1024px]:grid-cols-4"


export default function Projects () {
  return (
    <section className="p-3" id="projects-page">
      <SearchAndFilter />

      <section className={projects_container}>
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