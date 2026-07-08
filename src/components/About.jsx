import { PiTerminalFill } from "react-icons/pi";
import { primaryColor } from "@constants";
import SectionIntro from "./SectionIntro";
import StackCloud from "./StackCloud";
import StackList from "./StackList";
import { useMediaQuery } from "@hooks/useMediaQuery";
import Mark from "./Mark";
import { accentColor } from "@/constants";

import { SiCredly } from "@icons-pack/react-simple-icons";
import { Button } from "@ui/button";


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
            >F</span>ull-stack web developer focused on building <Mark>modern</Mark>, responsive web applications that are both <Mark action={'underline'} color="#FF9800" width={2}>practical and polished</Mark>. I create seamless digital experiences for individuals, <Mark color={'#51a2ff'} action={'underline'}>brands, and growing businesses</Mark>, with an emphasis on clean design, intuitive user experiences, and reliable functionality across devices.
          </p>

          <p>
            I specialize in developing <Mark>user-friendly interfaces</Mark> and <Mark color={accentColor()}>robust backend systems</Mark> that work together smoothly, while also paying attention to <Mark action={'underline'} color="#FF9800">performance</Mark>, <Mark action={'underline'}>scalability</Mark>, and <Mark action={'underline'} color={'#51a2ff'}>maintainable</Mark> code. Beyond building applications, I’m interested in creating solutions that are efficient, accessible, and structured for long-term growth rather than just quick launches.
          </p>

          <p>
            My technical stack centers around <Mark action={'underline'} color={'#51a2ff'}>JavaScript</Mark>, <Mark action={'underline'} color={'#51a2ff'}>TypeScript</Mark> and <Mark action={'underline'} color="#FF9800">Python</Mark>, with tools like React, Vue, Next.js for frontend development and Node.js, Express.js, and Django for backend development. I work with both <Mark color={'#51a2ff80'}>SQL</Mark> and <Mark color={'#00ff004d'}>NoSQL</Mark> databases, including PostgreSQL, MySQL and MongoDB, to build dynamic, data-driven applications.
          </p>

          <p className="last-p">
            I also integrate <Mark color={'#0000ff33'}>AWS cloud services</Mark> into development workflows, using cloud infrastructure and deployment tools to improve scalability, <Mark color={'#00ffff66'}>hosting</Mark>, <Mark color={'#51a2ff80'}>storage</Mark>, and overall <Mark color={accentColor()}>application performance</Mark>. This allows me to move beyond simply building websites and toward creating full-stack applications that are production-ready, flexible, and cloud-enabled.
          </p>
         
          <section className="flex items-center justify-center mt-4">
            <Button
              asChild
              variant="outline"
              className="rounded-lg transition-all duration-500 hover:-translate-y-1"
            >
              <a
                href="https://www.credly.com/users/alex-kimari-kirundi/badges/credly"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCredly className="inline mr-2 size-8"  />
                <span className="text-sm">View my Credly Badges</span>
              </a>
            </Button>
          </section>
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