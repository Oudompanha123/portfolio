"use client";

import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useLocale();

  return (
    <section id="about" className="section">
      <Reveal>
        <SectionHeading
          index="01"
          eyebrow={t.about.eyebrow}
          title={t.about.title}
        />
      </Reveal>

      <div className="max-w-2xl space-y-6">
        {t.about.paragraphs.map((paragraph, i) => (
          <Reveal key={i} delay={i * 80}>
            <p className="text-lg leading-relaxed text-muted">{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
