import { TECH_STACK } from "@constants";
import { Badge } from "@ui/badge";


export default function StackList () {
  return (
    <article className="flex flex-wrap gap-3 mt-3">
      {
        TECH_STACK.map(
          (stack) => {
            const Icon = stack.icon

            return (
              <Badge
                key={ stack.id }
                variant="secondary"
                className="py-3 px-4 text-[.9rem] transition-all duration-500 opacity-75 hover:opacity-95"
              >
                {
                  Icon && <Icon className="size-5 mr-1" />
                }
                <span>
                  { stack.label }
                </span>
              </Badge>
            )
          }
        )
      }
    </article>
  );
}