import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface HubCardProps {
  to: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export default function HubCard({ to, icon: Icon, title, subtitle }: HubCardProps) {
  return (
    <motion.div whileTap={{ scale: 0.98 }}>
      <Link
        to={to}
        className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-panel-2 px-5 py-4 transition-colors hover:border-brass/60"
      >
        <div className="flex flex-col gap-0.5">
          <span className="text-[15px] font-medium text-cream">{title}</span>
          <span className="text-xs text-sage">{subtitle}</span>
        </div>
        <Icon size={22} className="text-sage" aria-hidden="true" />
      </Link>
    </motion.div>
  );
}
