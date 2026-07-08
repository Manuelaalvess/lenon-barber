import { Star } from "lucide-react";
import type { Testimonial } from "../types";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-xl border border-line bg-panel-2 p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brass/15 text-xs font-medium text-brass">
          {testimonial.initials}
        </div>
        <div>
          <p className="text-[14px] font-medium text-cream">{testimonial.name}</p>
          <div className="flex gap-0.5" aria-label={`${testimonial.rating} de 5 estrelas`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < testimonial.rating ? "fill-brass text-brass" : "text-line"}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-sage">{testimonial.comment}</p>
    </div>
  );
}
