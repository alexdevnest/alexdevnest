import ThemeToggle from "./ThemeToggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Button } from "@ui/button";
import Tooltips from "./Tooltip";


export default function Navbar () {
  return (
    <header id="header">
      <section className="flex items-center justify-between h-full max-[280px]:gap-1">
        <div className="flex items-center gap-3 max-[297px]:gap-1">
          <Tooltips content="LinkedIn" side="left">
            <a
              href="https://www.linkedin.com/in/alex-kimari-80096027a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icons-sl" size={20} />
            </a>
          </Tooltips>
          
          <Tooltips content="Github">
            <a
              href="https://github.com/AlexkLearn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icons-sl" size={20} />
            </a>
          </Tooltips>

          <Tooltips content="Email" side="right">
            <a href="mailto:officialalex236@gmail.com">
              <FiMail className="icons-sl" size={20} />
            </a>
          </Tooltips>
        </div>

        <div className="">
            <Tooltips content="Open my CV" side="left">
              <Button
                asChild
                variant="outline"
                className="icons-s font-bold text-[1.1rem] p-3 tracking-[.11em]"
                aria-label="Open CV"
              >
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
              </Button>
            </Tooltips>
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
}