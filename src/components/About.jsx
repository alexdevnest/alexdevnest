import { PiTerminalFill } from "react-icons/pi";
import { primaryColor } from "@constants";
import SectionIntro from "./SectionIntro";
import StackCloud from "./StackCloud";
import StackList from "./StackList";
import { useMediaQuery } from "@hooks/useMediaQuery";


export default function About () {
  const showStackCloud = useMediaQuery("(min-width: 900px)");


  return (
    <section className="page-section" id="about">
      <SectionIntro title="About" />

      <section className="about section">
        <article className="about-text">
          <p>
            <span
              className="float-left leading-none font-extrabold text-4xl bg-muted p-1 pb-2 pt-0 rounded-sm mr-0.5"
            >F</span>ull-stack web developer focused on building modern, responsive web applications that are both practical and polished. I create seamless digital experiences for individuals, brands, and growing businesses, with an emphasis on clean design, intuitive user experiences, and reliable functionality across devices.
          </p>

          <p>
            I specialize in developing user-friendly interfaces and robust backend systems that work together smoothly, while also paying attention to performance, scalability, and maintainable code. Beyond building applications, I’m interested in creating solutions that are efficient, accessible, and structured for long-term growth rather than just quick launches.
          </p>

          <p>
            My technical stack centers around JavaScript, TypeScript and Python, with tools like React, Vue, Next.js for frontend development and Node.js, Express.js, and Django for backend development. I work with both SQL and NoSQL databases, including PostgreSQL, MySQL and MongoDB, to build dynamic, data-driven applications.
          </p>

          <p className="last-p">
            I also integrate AWS cloud services into development workflows, using cloud infrastructure and deployment tools to improve scalability, hosting, storage, and overall application performance. This allows me to move beyond simply building websites and toward creating full-stack applications that are production-ready, flexible, and cloud-enabled.
          </p>
        </article>

        <div className="tech-stack">
          <div>
            <h3 className="text-2xl font-bold mb-1">
              <PiTerminalFill
                className="inline mr-2"
                fill={primaryColor()}
              />
              Stack
            </h3>

            <StackList />
          </div>

          {showStackCloud && (
            <section className="stack-cloud">
              <StackCloud />
            </section>
          )}
        </div>
      </section>
    </section>
  );
}