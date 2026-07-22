import { useParams } from "react-router-dom";
import { GoBack } from "@components/GoTo";
import Tooltips from "@components/Tooltip";
import { FaGithub } from "react-icons/fa";
import { RxExternalLink } from "react-icons/rx";
import Footer from "@components/Footer";


import { PROJECTS } from "@constants/mock-data";


export default function ProjectDetails () {
  const { id } = useParams()

  const project = PROJECTS.find(
    (p) => p.id === id
  )

  const formattedTags = project.tags
    .split(', ')
    .join(' - ')

  
  return (
    <>
      <main id="project-details-page">
        <GoBack 
          className="right-auto top-2 left-2 rounded p-2"
        />
        <section className="project-banner">
          <img
            src={ project.img_preview }
            alt={`Project ${project.name} preview image.`}
          />
        </section>

        <section className="project-data">
          <article className="project_meta">
            <h1>{ project.name }</h1>

            <p>
              { formattedTags }
            </p>
          </article>

          <article>
            { project.details }
          </article>

          <article className="project_links">
            <h2>
              Links
              <span className="text-primary">.</span>
            </h2>

            <div>
              <Tooltips content="Github Repo" side="left">
                <a
                  href={ project.github_link || null }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View project github repo"
                  className="cursor-pointer transition-all duration-300 text-primary/85 hover:text-primary"
                  tabIndex={0}
                >
                  <FaGithub
                    className="inline mr-1"
                    size={18}
                  />
                  Code
                </a>
              </Tooltips>

              <Tooltips content="Live Preview" side="right">
                <a
                  href={ project.live_link || null }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open deployed project link"
                  className="cursor-pointer transition-all duration-300 text-primary/85 hover:text-primary"
                  tabIndex={0}
                >
                  <RxExternalLink
                    className="inline mr-1"
                    size={18}
                  />
                  Demo
                </a>
              </Tooltips>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}