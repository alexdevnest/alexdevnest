import SectionIntro from "./SectionIntro";
import ExpCard from "./ExpCard";
import { EXP } from "@constants";


export default function Experience () {
  return (
    <section className="page-section" id="experience">
      <SectionIntro title="Experience" direction="reverse" />

      <section className="experience">
        {
          EXP.map(
            (exp) => (
              <ExpCard
                key={ exp.id }
                { ...exp }
              />
            )
          )
        }
      </section>
    </section>
  );
}