import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
  const year = 2024;

  return (
    <footer className="border-t border-slate-800 bg-card/50 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-hero-gradient text-[10px] font-bold text-white">
            BY
          </span>
          <div>
            <p className="text-sm font-semibold">{personalInfo.name}</p>
            <p className="text-xs text-muted-foreground">Enterprise Data Solutions Architect</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-accent"
          >
            <Mail className="h-3.5 w-3.5" />
            {personalInfo.email}
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/[^\d+]/g, "")}`}
            className="hidden items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-accent sm:flex"
          >
            <Phone className="h-3.5 w-3.5" />
            {personalInfo.phone}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <Github className="h-4 w-4" />
          </a>
          <p className="text-xs text-muted-foreground">© {year}</p>
        </div>
      </div>
    </footer>
  );
}
