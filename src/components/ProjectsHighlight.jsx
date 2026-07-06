import { Link } from "react-router-dom";
import SectionIntro from "./SectionIntro";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/constants/mock-data";


function ViewAllProjectsLink () {
  return (
    <article className="link-to-projects">
      <Link
        to="/projects"
        aria-label="Go to projects page"
      >
        <ArrowRight className="inline-block mr-2 animated-arrow" />
        View ALL Projects
      </Link>
    </article>
  );
}


export default function ProjectsHighlights () {
  return (
    <section className="page-section" id="projects">
      <SectionIntro title="Projects" />

      <ViewAllProjectsLink />

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

      <ViewAllProjectsLink />
    </section>
  );
}