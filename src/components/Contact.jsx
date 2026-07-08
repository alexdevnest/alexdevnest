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
        <section>
          <p>
            Have an idea you want to discuss, or a potential collaboration?
          </p>
          <p>
            Send me an email! Or you can also find me on LinkedIn.
          </p>
        </section>

        <section className="contact-links_1">
          <a
            href="mailto:officialalex236@gmail.com"
            className="flex gap-1.5 items-center hover:text-primary"
          >
            <AiFillMail className="inline size-6 max-[351px]:size-4" />
            officialalex236@gmail.com
          </a>
          <Link
            to="/schedule-meeting"
            className="flex gap-1.5 items-center transition-colors duration-300 text-primary hover:text-primary/80"
          >
            <FaCalendar className="inline size-5 max-[351px]:size-4" />
            Set up a meeting
          </Link>
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