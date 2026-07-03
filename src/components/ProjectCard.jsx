import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { RxExternalLink } from "react-icons/rx";


export default function ProjectCard ({
  id,
  name,
  github_link,
  live_link,
  details,
  tags,
  img_preview,
}) {
  const formattedTags = tags?.split(", ").join(" - ") ?? ""

  return (
    <article className="project-card">
    <section className="card-header">
          <img
            src={ img_preview || null }
            alt={`An image of the ${name || ''} project`}
            className="project-img"
            width="1920" height="1080"
          />
        </section>

        <section className="card-body">
          <div className="project-meta">
            <h4>{ name || 'Project' }</h4>
            <span className="inline-block flex-1">
              <hr className="h-1" />
            </span>
            <a
              href={ github_link || null }
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icons-sl" size={6} />
            </a>
            <a
              href={ live_link || null }
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxExternalLink className="icons-sl" size={6} />
            </a>
          </div>

          <p className="project-tags">
            <span className="tags">
              { formattedTags }
            </span>
          </p>

          <div className="project-details">
            <p className="details">
              { details || '' }
            </p>

            <Link
              to={
                id
                  ? `/projects/:${id}`
                  : '/projects'
              }
              className="details-link"
            >
              Details {'>'}
            </Link>
          </div>
        </section>
    </article>
  );
}