import { MessageCircle, AtSign, MapPin, Clock, Copy, Navigation } from "lucide-react";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { profile } from "../data/profile";

export default function Contato() {
  const [copied, setCopied] = useState<"address" | null>(null);

  const copyAddress = async () => {
    await navigator.clipboard.writeText(profile.address);
    setCopied("address");
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <PageHeader eyebrow={profile.brand} title="Fale comigo" />
      <main className="mx-auto flex max-w-md flex-col gap-6 px-5 py-8">
        <Reveal className="flex flex-col gap-3">
          <PrimaryButton href={profile.whatsappUrl} icon={MessageCircle}>
            Chamar no WhatsApp
          </PrimaryButton>
          <SecondaryButton href={profile.instagramUrl} icon={AtSign}>
            Seguir no AtSign
          </SecondaryButton>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="rounded-xl border border-line bg-panel-2 p-4">
            <div className="flex items-start gap-3">
              <MapPin size={17} className="mt-0.5 shrink-0 text-brass" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-[13px] font-medium text-cream">{profile.bookingProvider}</p>
                <p className="mt-0.5 text-[13px] text-sage">{profile.address}</p>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <button
                onClick={copyAddress}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-line py-2 text-[12px] text-sage transition-colors hover:border-brass/60"
              >
                <Copy size={13} aria-hidden="true" />
                {copied === "address" ? "Copiado" : "Copiar endereço"}
              </button>
              <a
                href={profile.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-line py-2 text-[12px] text-sage transition-colors hover:border-brass/60"
              >
                <Navigation size={13} aria-hidden="true" />
                Como chegar
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-xl border border-line">
            <iframe
              title="Mapa da localização"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(profile.address)}&output=embed`}
              className="h-44 w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-xl border border-line bg-panel-2 p-4">
            <div className="mb-2 flex items-center gap-2 text-cream">
              <Clock size={15} className="text-brass" aria-hidden="true" />
              <span className="text-[13px] font-medium">Horário de atendimento</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {profile.hours.map((h) => (
                <div key={h.day} className="flex justify-between text-[13px] text-sage">
                  <span>{h.day}</span>
                  <span className="text-sage-dim">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </main>
    </>
  );
}
