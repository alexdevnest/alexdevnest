import CardActions from "./CardActions";
import { primaryColor } from "@constants";
import { Star } from "lucide-react";


export default function ProjectsListCard ({
  id,
  name,
  img_preview,
  favorite,
  details,
  edit,
  onDelete
}) {

  async function handleEdit() {
    edit(id)
  }

  async function handleDelete() {
    onDelete(id)
  }
  
  return (
    <article className="project-list-card_admin">
      <section className="prev_img">
        <img
          src={ img_preview }
          alt={`Project ${ name } preview image.`}
        />
      </section>

      <section className="list-card-body">
        <h2>
          { name }
          {
            favorite
              && (
                <span>
                  <Star fill={primaryColor()} stroke="none" size={16} />
                </span>
              )
          }
        </h2>

        <p>{ details }</p>
      </section>

      <CardActions edit={ handleEdit } onDelete={ handleDelete } />
    </article>
  );
}