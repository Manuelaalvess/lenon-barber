import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface HubCardProps {
  to: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  variant?: "primary" | "secondary";
  trailing?: ReactNode;
}

export default function HubCard({ to, icon: Icon, title, subtitle, variant = "secondary", trailing }: HubCardProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.div whileTap={{ scale: 0.98 }}>
      <Link
        to={to}
        className={
          isPrimary
            ? "flex items-center justify-between gap-4 rounded-2xl bg-brass px-5 py-5 shadow-[0_0_0_1px_rgba(0,0,0,0.04)] transition-colors hover:bg-brass-soft"
            : "flex items-center justify-between gap-4 rounded-2xl border border-line bg-panel-2 px-5 py-4 transition-colors hover:border-brass/60"
        }
      >
        <div className="flex flex-col gap-0.5">
          <span className={isPrimary ? "text-[15px] font-medium text-brass-deep" : "text-[15px] font-medium text-cream"}>
            {title}
          </span>
          <span className={isPrimary ? "text-xs text-brass-deep/70" : "text-xs text-sage"}>{subtitle}</span>
        </div>
        <div className="flex items-center gap-2">
          {trailing}
          <Icon size={22} className={isPrimary ? "text-brass-deep" : "text-sage"} aria-hidden="true" />
        </div>
      </Link>
    </motion.div>
  );
}
