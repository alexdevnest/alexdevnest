import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { RxExternalLink } from "react-icons/rx";
import Tooltips from "./Tooltip";


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
          <Tooltips content="Github Repo" side="left">
            <a
              href={ github_link || null }
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View project github repo"
            >
              <FaGithub
                className="icons-s project__ext__link"
                size={24}
              />
            </a>
          </Tooltips>

          <Tooltips content="Live Preview">
            <a
              href={ live_link || null }
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open deployed project link"
            >
              <RxExternalLink
                className="icons-s project__ext__link"
                size={24}
              />
            </a>
          </Tooltips>
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
            aria-label="View project details"
          >
            Details <span className="link-deco">&gt;</span>
          </Link>
        </div>
      </section>
    </article>
  );
}