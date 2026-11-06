"use client";

import { site } from "@/shared/config/site";
import { useLocale } from "@/shared/lib/i18n";
import SectionHeading from "@/shared/ui/SectionHeading";
import Reveal from "@/shared/ui/Reveal";
import ContactForm from "@/features/contact-form/ui/ContactForm";

export default function Contact() {
  const { t } = useLocale();
  const c = t.contact;

  return (
    <section id="contact" className="section">
      <div className="hairline" />
      <div className="pt-24 md:pt-32">
        <Reveal>
          <SectionHeading index="04" eyebrow={c.eyebrow} title={c.title} />
        </Reveal>

        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <Reveal>
            <div>
              <p className="text-lg leading-relaxed text-muted">{c.intro}</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-6 inline-block font-mono text-sm text-ink transition-colors hover:text-accent"
              >
                {site.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
