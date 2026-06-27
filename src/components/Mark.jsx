import { Highlighter } from "@ui/highlighter";
import { primaryColor } from "@constants";
import { useMediaQuery } from "@hooks/useMediaQuery";


const COLOR = primaryColor();


export default function Mark ({
  children, action,
  color=COLOR, padding=2,
  width
}) {
  const showMark = useMediaQuery("(min-width: 685px)")
  const hideRepeatedWords = useMediaQuery("(max-width: 685px)")

  return (
    <>
      {
        showMark && (
          <Highlighter 
            action={ action }
            color={ color }
            padding={ padding }
            strokeWidth={width}
            multiline={true}
          >{ children }</Highlighter>
        )
      }
      {
        hideRepeatedWords && children
      }
    </>
  )
}