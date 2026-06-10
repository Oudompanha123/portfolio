import { skillGroups } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="hairline" />
      <div className="pt-24 md:pt-32">
        <Reveal>
          <SectionHeading index="02" eyebrow="skills" title="What I work with" />
        </Reveal>

        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent">
                <h3 className="label mb-4">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-bg px-3 py-1 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
