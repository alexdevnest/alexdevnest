import { Navigate, useParams } from "react-router-dom";
import { GoBack } from "@components/GoTo";
import { FaGithub } from "react-icons/fa";
import { RxExternalLink } from "react-icons/rx";
import Footer from "@components/Footer";
import LinkButton from "@components/projects/LinkButton";


import { PROJECTS } from "@constants/mock-data";


export default function ProjectDetails () {
  const { id } = useParams()

  const project = PROJECTS.find(
    (p) => p.id === id
  )

  if (!project)
    return <Navigate to="/projects" replace />


  const formattedTags = project.tags
    .split(', ')
    .join(' - ')
  
  
  return (
    <>
      <main id="project-details-page">
        <GoBack className="right-auto top-2 left-2 rounded p-2" />
        <section className="project-banner">
          <img
            src={project.img_preview}
            alt={`Project ${project.name} preview image.`}
          />
        </section>

        <section className="project-data">
          <article className="project_meta">
            <h1>{project.name}</h1>

            <p>{formattedTags}</p>
          </article>

          <article>{project.details}</article>

          <article className="project_links">
            <h2>
              Links
              <span className="text-primary">.</span>
            </h2>

            <div>
              <LinkButton
                href={project.github_link}
                icon={FaGithub}
                ariaLabel="View project GitHub repository"
                unavailableLabel="GitHub repository unavailable"
              >
                Code
              </LinkButton>

              <LinkButton
                href={project.live_link}
                icon={RxExternalLink}
                ariaLabel="Open deployed project"
                unavailableLabel="Live demo unavailable"
              >
                Demo
              </LinkButton>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}