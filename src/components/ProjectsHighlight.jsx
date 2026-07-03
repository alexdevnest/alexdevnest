import { Link } from "react-router-dom";
import SectionIntro from "./SectionIntro";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/constants/mock-data";



export default function ProjectsHighlights () {
  return (
    <section className="page-section" id="projects">
      <SectionIntro title="Projects" />

      <article
        className="link-to-projects"
      >
        <Link to="/projects">
          <ArrowRight className="inline-block mr-2 animated-arrow" />
          View ALL Projects
        </Link>
      </article>

      <section className="projects-highlights">
        {
          PROJECTS.map(
            (project) => (
              <ProjectCard
                key={ project.id }
                { ...project }
              />
            )
          )
        }
      </section>

      <article
        className="link-to-projects"
      >
        <Link to="/projects">
          <ArrowRight className="inline-block mr-2 animated-arrow" />
          View ALL Projects
        </Link>
      </article>
    </section>
  );
}