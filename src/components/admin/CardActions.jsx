import { Pencil } from "lucide-react";
import { Trash2 } from "lucide-react";


const CardActions = ({ edit, onDelete }) => (
  <section className="card-actions">
    <button
      onClick={ edit }
      aria-label="edit item"
    >
      <Pencil className="action-edit" />
    </button>

    <button
      onClick={ onDelete }
      aria-label="delete item"
    >
      <Trash2 className="action-del" />
    </button>
  </section>
);


export default CardActions;