import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

import { cn } from "@lib/utils"


export const GoBack = ({ className }) => {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };


  return (
    <section className={cn("go-back-nav", className)}>
      <span
        role="button"
        tabIndex={0}
        onClick={ handleGoBack }
        onKeyDown={
          (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              handleGoBack()
            }
          }
        }
        className="go-back-link cursor-pointer"
      >
        <GoArrowLeft className="icon" />
        Back
      </span>
    </section>
  )
}