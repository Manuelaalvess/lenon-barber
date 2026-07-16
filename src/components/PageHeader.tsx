import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import QuickNav from "./QuickNav";

interface PageHeaderProps {
  title: string;
  eyebrow?: string;
}

export default function PageHeader({ title, eyebrow }: PageHeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-line bg-ink/95 px-4 py-4 backdrop-blur">
      <div className="flex items-center gap-3">
        <Link
          to="/"
          aria-label="Voltar para a home"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-sage transition-colors hover:border-brass hover:text-brass"
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </Link>
        <div>
          {eyebrow && (
            <p className="text-[11px] uppercase tracking-[0.12em] text-sage-dim">{eyebrow}</p>
          )}
          <h1 className="font-display text-lg font-medium text-cream">{title}</h1>
        </div>
      </div>
      <QuickNav />
    </header>
  );
}
