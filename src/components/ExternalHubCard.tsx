import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ExternalHubCardProps {
  href: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export default function ExternalHubCard({
  href,
  icon: Icon,
  title,
  subtitle,
}: ExternalHubCardProps) {
  return (
    <motion.div whileTap={{ scale: 0.98 }}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-4 rounded-2xl bg-brass px-5 py-5 shadow-[0_0_0_1px_rgba(0,0,0,0.04)] transition-colors hover:bg-brass-soft"
      >
        <div className="flex flex-col gap-0.5">
          <span className="text-[15px] font-medium text-brass-deep">{title}</span>
          <span className="text-xs text-brass-deep/70">{subtitle}</span>
        </div>
        <Icon size={22} className="text-brass-deep" aria-hidden="true" />
      </a>
    </motion.div>
  );
}
