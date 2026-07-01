import SectionIntro from "./SectionIntro";
import { Badge } from "@ui/badge";
import { TfiAngleRight } from "react-icons/tfi";
import { IoCheckmark } from "react-icons/io5";


export default function Services () {
  return (
    <section className="page-section" id="services">
      <SectionIntro title="Services" direction='reverse' />

      <h1 className="services-title">
        One developer, the <mark>whole system</mark> — or just the part you need.
      </h1>
      <p className="services-intro">
        Tailored development solutions for every stage of your product journey
      </p>
      <p className="services-intro mb-6">
        From a single interface to a fully wired, deployed product. Pick the scope that matches your project.
      </p>

      <section className="services section">
        <article className="card fullstack-card">
          <TfiAngleRight className="corner corner__tl" />
          <TfiAngleRight className="corner corner__br" />
          <div className="card-intro-div">
            <span className="card__tag">FULL</span>
            <Badge
              variant="secondary"
              className="p-3"
            >
              Most Popular
            </Badge>
          </div>
          <svg className="card__icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 5 L35 13 L20 21 L5 13 Z" />
            <path d="M5 20 L20 28 L35 20" />
            <path d="M5 27 L20 35 L35 27" />
          </svg>
          <div className="card-body">
            <h3>Fully Fullstack Web Service</h3>

            <p>
              End-to-end web applications from concept to deployment. I architect scalable systems, build robust APIs, craft responsive interfaces, and manage cloud infrastructure — delivering complete, production-ready solutions.
            </p>

            <div class="card__span">
              <span class="line"></span>
              Spans: Frontend &rarr; Backend &rarr; Cloud
              <span class="line"></span>
            </div>

            <ul className="service-card-list">
              <li>
                <IoCheckmark className="" />
                React / Next.js / Vue
              </li>
              <li>
                <IoCheckmark className="" />
                Node.js / Python
              </li>
              <li>
                <IoCheckmark className="" />
                REST APIs / Websockets
              </li>
              <li>
                <IoCheckmark className="" />
                Database Design & ORM
              </li>
              <li>
                <IoCheckmark className="" />
                Paymnents Integration
              </li>
              <li>
                <IoCheckmark className="" />
                AWS / Github Actions / Deployment
              </li>
            </ul>
          </div>
        </article>
      </section>
    </section>
  );
}