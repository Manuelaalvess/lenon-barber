import { Scissors, Sparkles, Droplet, Shirt, Baby } from "lucide-react";
import type { Service } from "../types";

const ICONS: Record<string, typeof Scissors> = {
  scissors: Scissors,
  razor: Sparkles,
  shirt: Shirt,
  beard: Scissors,
  droplet: Droplet,
  child: Baby,
  sparkles: Sparkles,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = ICONS[service.icon] ?? Scissors;

  return (
    <div className="flex items-start gap-3 rounded-xl border border-line bg-panel-2 p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brass/15">
        <Icon size={17} className="text-brass" aria-hidden="true" />
      </div>
      <div>
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-[15px] font-medium text-cream">{service.name}</h3>
          {service.duration && <span className="text-xs text-sage-dim">{service.duration}</span>}
        </div>
        <p className="mt-1 text-[13px] leading-relaxed text-sage">{service.description}</p>
      </div>
    </div>
  );
}
