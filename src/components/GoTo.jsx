import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";


export const GoBack = () => {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };


  return (
    <section className="go-back-nav">
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