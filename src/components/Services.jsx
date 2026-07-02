import SectionIntro from "./SectionIntro";
import { Badge } from "@ui/badge";
import { TfiAngleRight } from "react-icons/tfi";
import { IoCheckmark } from "react-icons/io5";
import { ArrowRight } from "lucide-react";


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
          <div>
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
            <svg
              className="card__icon"
              viewBox="0 0 40 40" fill="none"
              stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M20 5 L35 13 L20 21 L5 13 Z" />
              <path d="M5 20 L20 28 L35 20" />
              <path d="M5 27 L20 35 L35 27" />
            </svg>
          </div>

          <div className="card-body">
            <h3>Fully Fullstack Web Service</h3>

            <p>
              End-to-end web applications from concept to deployment. I architect scalable systems, build robust APIs, craft responsive interfaces, and manage cloud infrastructure — delivering complete, production-ready solutions.
            </p>

            <div className="card__span">
              <span className="line"></span>
              Spans: Frontend &rarr; Backend &rarr; Cloud
              <span className="line"></span>
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

          <div className="card__cta">
            <a 
              href="#contact"
              className="cta__link"
            >
              Discuss Project
              <ArrowRight className="cta__arrow" />
            </a>
          </div>
        </article>

        <div className="group">
          <article className="card frontend-card">
            <div>
              <TfiAngleRight className="corner corner__tl" />
              <TfiAngleRight className="corner corner__br" />
              <span className="card__tag">FE</span>
              <svg
                className="card__icon"
                viewBox="0 0 40 40" fill="none"
                stroke="currentColor" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <rect x="5" y="8" width="30" height="24" rx="2" />
                <line x1="5" y1="15" x2="35" y2="15" />
                <circle cx="10" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
                <circle cx="14" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
                <circle cx="18" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
              </svg>
            </div>

            <div className="card-body">
              <h3>Frontend Development</h3>

              <p>
                Pixel-perfect, responsive user interfaces with modern frameworks. I focus on performance accessibility, and smooth interactions that keep users engaged.
              </p>

              <ul className="service-card-list">
                <li>
                  <IoCheckmark className="" />
                  Typescript / Javascript
                </li>
                <li>
                  <IoCheckmark className="" />
                  React / Next.js / Vue
                </li>
                <li>
                  <IoCheckmark className="" />
                  Tailwindcss / Bootstrap / Shadcn UI
                </li>
                <li>
                  <IoCheckmark className="" />
                  GSAP / Motion / Zustand
                </li>
                <li>
                  <IoCheckmark className="" />
                  SEO & Accessibility
                </li>
                <li>
                  <IoCheckmark className="" />
                  Responsive Design
                </li>
              </ul>
            </div>

            <div className="card__cta">
              <a 
                href="#contact"
                className="cta__link"
              >
                Discuss Project
                <ArrowRight className="cta__arrow" />
              </a>
            </div>
          </article>

          <article className="card backend-card">
            <div>
              <TfiAngleRight className="corner corner__tl" />
              <TfiAngleRight className="corner corner__br" />
              <span className="card__tag">BE</span>
              <svg
                className="card__icon"
                viewBox="0 0 40 40" fill="none" stroke="currentColor"
                strokeWidth="1.6"strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="8" y="6" width="24" height="9" rx="2" />
                <rect x="8" y="17" width="24" height="9" rx="2" />
                <rect x="8" y="28" width="24" height="6" rx="2" />
                <circle cx="13" cy="10.5" r="0.9" fill="currentColor" stroke="none" />
                <circle cx="13" cy="21.5" r="0.9" fill="currentColor" stroke="none" />
              </svg>
            </div>

            <div className="card-body">
              <h3>Backend Development</h3>

              <p>
                Scalable server-side architecture and APIs designed for reliability and performance. From RESTful services to real-time systems, I build the engines that power applications.
              </p>

              <ul className="service-card-list">
                <li>
                  <IoCheckmark className="" />
                  REST APIs / Websockets
                </li>
                <li>
                  <IoCheckmark className="" />
                  Authentication & Authorization
                </li>
                <li>
                  <IoCheckmark className="" />
                  Database Design & Optimization
                </li>
                <li>
                  <IoCheckmark className="" />
                  Security & Monitoring
                </li>
                <li>
                  <IoCheckmark className="" />
                  Payment Integrations
                </li>
                <li>
                  <IoCheckmark className="" />
                  <span>3<sup>rd</sup></span> Party APIs Integration
                </li>
              </ul>
            </div>

            <div className="card__cta">
              <a 
                href="#contact"
                className="cta__link"
              >
                Discuss Project
                <ArrowRight className="cta__arrow" />
              </a>
            </div>
          </article>
        </div>

        <article className="card aws-card">
          <div>
            <TfiAngleRight className="corner corner__tl" />
            <TfiAngleRight className="corner corner__br" />
            <span className="card__tag">AWS</span>
            <svg
              className="card__icon"
              viewBox="0 0 40 40" fill="none"
              stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <path
                d="M13 27c-3.3 0-6-2.5-6-5.6 0-2.7 2-5 4.7-5.5.7-3.2 3.6-5.6 7-5.6 3.2 0 6 2.1 6.9 5 .3-.1.6-.1 1-.1 2.9 0 5.2 2.3 5.2 5.1 0 .5-.1 1-.2 1.5 1.8.7 3.1 2.5 3.1 4.5 0 2.7-2.2 5-5 5.2H13z" />
              <line x1="13" y1="29" x2="13" y2="32.5" />
              <line x1="20" y1="29" x2="20" y2="34" />
              <line x1="27" y1="29" x2="27" y2="32.5" />
              <circle cx="13" cy="34" r="1.3" fill="currentColor" stroke="none" />
              <circle cx="20" cy="35.5" r="1.3" fill="currentColor" stroke="none" />
              <circle cx="27" cy="34" r="1.3" fill="currentColor" stroke="none" />
            </svg>
          </div>

          <div className="card-body">
            <h3>AWS Cloud Integration</h3>

            <p>
              Cloud-native infrastructure design and deployment on AwS. I help businesses leverage the cloud for scalability, security, and cost efficiency.
            </p>

            <ul className="service-card-list">
              <li>
                <IoCheckmark className="" />
                EC2, Lambda, ECS/Fargate
              </li>
              <li>
                <IoCheckmark className="" />
                S3, RDS & DynamoDB
              </li>
              <li>
                <IoCheckmark className="" />
                Cloudfront & Route 53
              </li>
              <li>
                <IoCheckmark className="" />
                VPCs
              </li>
            </ul>
          </div>

          <div className="card__cta">
            <a 
              href="#contact"
              className="cta__link"
            >
              Discuss Project
              <ArrowRight className="cta__arrow" />
            </a>
          </div>
        </article>
      </section>
    </section>
  );
}