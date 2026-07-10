import { Link } from "react-router-dom";
import SectionIntro from "./SectionIntro";
import MessageDialog from "./MessageDialog";
import Tooltips from "./Tooltip";
import { AiFillMail } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FaCalendar,FaGithub, FaLinkedin } from "react-icons/fa";


export default function Contact () {
  return (
    <section className="page-section" id="contact">
      <SectionIntro title="Contact" />

      <article className="contact">
        <section className="text-foreground dark:text-foreground/85">
          <p>
            Have an idea you want to discuss, or a potential collaboration?
          </p>
          <p>
            Send me an email! &nbsp;
            <br className="min-[380px]:hidden" />
            Or you can also find me on <a href="https://www.linkedin.com/in/alex-kimari-80096027a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors duration-300">
            LinkedIn
            </a>.
          </p>
        </section>

        <section className="contact-links_1">
          <div>
            <a
              href="mailto:officialalex236@gmail.com"
              className="flex gap-1.5 transition-colors duration-300 text-foreground dark:text-foreground/85 items-center hover:text-primary dark:hover:text-primary"
            >
              <AiFillMail className="inline size-6 max-[351px]:size-4" />
              officialalex236@gmail.com
            </a>

            <Link
              to="/schedule-meeting"
              className="flex gap-1.5 items-center transition-colors duration-300 text-primary hover:text-primary/80 ml-3"
            >
              <FaCalendar className="inline size-5 max-[351px]:size-4" />
              Set up a meeting
            </Link>
          </div>
        </section>

        <section className="contact-links_2">
          <Tooltips content="View my LinkedIn Profile" side="left">
            <a
              href="https://www.linkedin.com/in/alex-kimari-80096027a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icons-sl size-6" />
            </a>
          </Tooltips>
          
          <Tooltips content="View my Github" side="bottom">
            <a
              href="https://github.com/AlexkLearn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icons-sl size-6" />
            </a>
          </Tooltips>

          <Tooltips content="Email Me" side="right">
            <a href="mailto:officialalex236@gmail.com">
              <FiMail className="icons-sl size-6" />
            </a>
          </Tooltips>
        </section>

        <span className="mt-3 text-foreground/40">or</span>

        <MessageDialog />
      </article>
    </section>
  );
}