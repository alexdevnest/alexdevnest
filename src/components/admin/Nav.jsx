import { Link } from "react-router-dom";
import { Button } from "@ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import ThemeToggle from "@components/ThemeToggle";


export default function Nav ({ logout }) {
  return (
    <nav>
      <section className="nav-section">
        
        <div className="flex_1">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="nav-to-home"
            aria-label="Go to Home Page"
          >
            <Link
              to="/"
            >
              <FaArrowLeft />
            </Link>
          </Button>

          <p>
            <span className="page-title">Admin Dashboard</span>
            <span className="owner">Alex Kimari</span>
          </p>
        </div>

        <div className="flex_2">
          <span
            className="hover:bg-background/50! px-1 rounded-sm"
            aria-label="Toggle theme"
          >
            <ThemeToggle className="block max-w-fit hover:bg-transparent!" />
          </span>

          <Button
            variant="ghost"
            className="logout__btn"
            aria-label="Logout"
            onClick={ logout }
          >
            <IoIosLogOut className="size-6" />
          </Button>
        </div>
      </section>
    </nav>
  )
}