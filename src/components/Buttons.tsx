import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface ButtonProps {
  href: string;
  icon?: LucideIcon;
  children: ReactNode;
  external?: boolean;
}

export function PrimaryButton({ href, icon: Icon, children, external = true }: ButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-brass px-5 py-4 text-[15px] font-medium text-brass-deep transition-transform active:scale-[0.98]"
    >
      {Icon && <Icon size={18} aria-hidden="true" />}
      {children}
    </a>
  );
}

export function SecondaryButton({ href, icon: Icon, children, external = true }: ButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-panel-2 px-5 py-4 text-[15px] font-medium text-cream transition-colors active:scale-[0.98] hover:border-brass/60"
    >
      {Icon && <Icon size={18} aria-hidden="true" />}
      {children}
    </a>
  );
}
