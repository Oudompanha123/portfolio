import { site, socials } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-content px-6 py-12 sm:px-8">
      <div className="hairline" />
      <div className="flex flex-col items-center gap-6 pt-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="label">
          &copy; {year} {site.name}
        </p>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-start">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-label text-muted transition-colors hover:text-ink"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
