import { Badge } from "@ui/badge";
import { Separator } from "@ui/separator";


export default function ExpCard ({
  title,
  since,
  company,
  location,
  description,
  tags,
}) {
  return (
    <article className="exp-card">
      <section className="exp-card-header">
        <div className="exp-meta">
          <h3 className="text">{ title }</h3>
          <span className="text">
            Since&nbsp;{ since }
          </span>
        </div>
        <div className="exp-meta">
          <h4>{ company }</h4>
          <span className="text">{ location }</span>
        </div>
      </section>

      <section>
        <p className="text">{ description }</p>
      </section>

      <section className="exp-tags">
        {
          (Array.isArray(tags) ? tags : []).map(
            (tag) => (
              <Badge
                key={ tag }
                variant="secondary"
                className="py-3 px-4 text-[.9rem] transition-all duration-500 opacity-75 hover:opacity-100"
              >
                { tag }
              </Badge>
            )
          )
        }
      </section>

      <Separator />
    </article>
  );
}