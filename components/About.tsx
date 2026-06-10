import { about } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <SectionHeading index="01" eyebrow="about" title="A bit about me" />
      </Reveal>

      <div className="max-w-2xl space-y-6">
        {about.map((paragraph, i) => (
          <Reveal key={i} delay={i * 80}>
            <p className="text-lg leading-relaxed text-muted">{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
