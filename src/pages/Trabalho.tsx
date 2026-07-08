import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Check } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import Gallery from "../components/Gallery";
import TestimonialCard from "../components/TestimonialCard";
import FaqAccordion from "../components/FaqAccordion";
import { profile, services, testimonials, faqs } from "../data/profile";
import lenonAtendimento from "../assets/gallery/g4-atendimento.webp";

function SectionTitle({ children }: { children: string }) {
  return <h2 className="mb-3 font-display text-lg font-medium text-cream">{children}</h2>;
}

/** Navega até a seção pedida pelo QuickNav (state.scrollTo), sem depender de hash nativo. */
function useScrollToSection() {
  const location = useLocation();
  const done = useRef(false);

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (scrollTo && !done.current) {
      done.current = true;
      requestAnimationFrame(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      window.history.replaceState({}, "");
    }
  }, [location.state]);
}

export default function Trabalho() {
  useScrollToSection();

  return (
    <>
      <PageHeader eyebrow={profile.brand} title="Conheça meu trabalho" />
      <main className="mx-auto flex max-w-md flex-col gap-10 px-5 py-8">
        <Reveal>
          <section id="sobre" className="scroll-mt-20">
            <SectionTitle>Sobre mim</SectionTitle>
            <div className="mb-4 overflow-hidden rounded-xl border border-line">
              <img
                src={lenonAtendimento}
                alt={`${profile.name} atendendo um cliente`}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-3">
              {profile.bio.map((paragraph, i) => (
                <p key={i} className="text-[14px] leading-relaxed text-sage">
                  {paragraph}
                </p>
              ))}
            </div>
            <blockquote className="mt-4 border-l-2 border-brass pl-3 font-display text-[15px] italic leading-relaxed text-brass-soft">
              {profile.philosophy}
            </blockquote>
            <ul className="mt-4 flex flex-col gap-2">
              {profile.differentials.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[13px] text-sage">
                  <Check size={14} className="mt-0.5 shrink-0 text-brass" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={0.05}>
          <section id="servicos" className="scroll-mt-20">
            <SectionTitle>Serviços</SectionTitle>
            <div className="flex flex-col gap-2.5">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.1}>
          <section id="galeria" className="scroll-mt-20">
            <SectionTitle>Galeria</SectionTitle>
            <Gallery />
          </section>
        </Reveal>

        <Reveal delay={0.15}>
          <section id="avaliacoes" className="scroll-mt-20">
            <SectionTitle>Avaliações</SectionTitle>
            <div className="flex flex-col gap-2.5">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.2}>
          <section id="duvidas" className="scroll-mt-20">
            <SectionTitle>Perguntas frequentes</SectionTitle>
            <FaqAccordion items={faqs} />
          </section>
        </Reveal>
      </main>
    </>
  );
}
