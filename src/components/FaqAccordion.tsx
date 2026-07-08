import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import type { FaqItem } from "../types";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="rounded-xl border border-line bg-panel-2">
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
            >
              <span className="text-[14px] font-medium text-cream">{item.question}</span>
              <ChevronDown
                size={16}
                className={`shrink-0 text-sage transition-transform ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4">
                <p className="text-[13px] leading-relaxed text-sage">{item.answer}</p>
                {item.actionHref && (
                  <a
                    href={item.actionHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-flex items-center gap-1.5 text-[13px] font-medium text-brass"
                  >
                    {item.actionLabel}
                    <ArrowRight size={13} aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
