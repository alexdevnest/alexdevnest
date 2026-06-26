import { GoTerminal } from "react-icons/go";
import { primaryColor } from "@constants";
import SectionIntro from "./SectionIntro";
import StackCloud from "./StackCloud";
import StackList from "./StackList";


export default function About () {
  return (
    <section className="page-section" id="about">
      <SectionIntro title="About" />

      <section className="about section">
        <article className="about-text">
          <p>
            <span
              className="float-left leading-none font-extrabold text-3xl bg-muted p-1 pb-2 rounded-sm"
            >F</span>ull-stack web developer focused on building modern, responsive web applications that are both practical and polished. I create seamless digital experiences for individuals, brands, and growing businesses, with an emphasis on clean design, intuitive user experiences, and reliable functionality across devices.
          </p>

          <p>
            I specialize in developing user-friendly interfaces and robust backend systems that work together smoothly, while also paying attention to performance, scalability, and maintainable code. Beyond building applications, I’m interested in creating solutions that are efficient, accessible, and structured for long-term growth rather than just quick launches.
          </p>

          <p>
            My technical stack centers around JavaScript, TypeScript and Python, with tools like React, Vue, Next.js for frontend development and Node.js, Express.js, and Django for backend development. I work with both SQL and NoSQL databases, including PostgresQL, MySQL and MongoDB, to build dynamic, data-driven applications.
          </p>

          <p className="last-p">
            I also integrate AWS cloud services into development workflows, using cloud infrastructure and deployment tools to improve scalability, hosting, storage, and overall application performance. This allows me to move beyond simply building websites and toward creating full-stack applications that are production-ready, flexible, and cloud-enabled.
          </p>
        </article>

        <div className="tech-stack">
          <div>
            <h1 className="text-2xl font-bold mb-1">
              <GoTerminal className="inline mr-2" fill={primaryColor()} />
              Stack
            </h1>

            <StackList />
          </div>

          <section className="stack-cloud">
            <StackCloud />
          </section>
        </div>
      </section>
    </section>
  );
}