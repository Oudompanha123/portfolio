type SectionHeadingProps = {
  /** Two-digit section marker, e.g. "01" */
  index: string;
  /** Short lowercase label shown in the eyebrow, e.g. "about" */
  eyebrow: string;
  /** The human-readable heading */
  title: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="label flex items-center gap-2">
        <span className="text-accent">{index}</span>
        <span aria-hidden className="text-border">
          /
        </span>
        <span>{eyebrow}</span>
      </p>
      <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
