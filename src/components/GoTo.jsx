import { Link, useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";


const GoHome = () => (
  <section className="go-home-nav">
    <Link
      to="/"
      className="go-home-link"
    >
      <GoArrowLeft className="icon" />
      <span>Go to Home</span>
    </Link>
  </section>
)


const GoBack = () => {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <section className="go-back-nav">
      <span
        onClick={ handleGoBack }
        className="go-back-link cursor-pointer"
      >
        <GoArrowLeft className="icon" />
        Back
      </span>
    </section>
  )
}


export {
  GoHome,
  GoBack
}