import { motion } from "framer-motion";
import { CalendarCheck, Scissors, MessageCircle, AtSign, Share2 } from "lucide-react";
import HubCard from "../components/HubCard";
import ExternalHubCard from "../components/ExternalHubCard";
import Reveal from "../components/Reveal";
import QuickNav from "../components/QuickNav";
import { profile } from "../data/profile";
import lenonPhoto from "../assets/lenon-photo.jpg";

export default function Home() {
  const handleShare = async () => {
    const shareData = { title: profile.brand, url: window.location.href };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        /* usuário cancelou o compartilhamento — sem ação necessária */
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <main className="mx-auto flex min-h-svh max-w-md flex-col px-5 pb-10 pt-6">
      <div className="flex justify-end">
        <QuickNav />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-2 flex flex-col items-center text-center"
      >
        <p className="text-[11px] uppercase tracking-[0.25em] text-sage-dim">Barber</p>
        <h1 className="mt-1 font-display text-3xl font-medium text-cream">{profile.name}</h1>

        <div className="mt-5 h-24 w-24 overflow-hidden rounded-full border-2 border-brass/70">
          <img
            src={lenonPhoto}
            alt={`${profile.name}, barbeiro`}
            className="h-full w-full object-cover"
            width={96}
            height={96}
            loading="eager"
          />
        </div>

        <p className="mt-4 text-[13px] text-sage">
          {profile.specialty} · {profile.city}
        </p>
        <p className="mt-2 max-w-[26ch] text-[13px] leading-relaxed text-sage-dim">{profile.tagline}</p>

        <div className="mt-5 flex items-center gap-2.5">
          <a
            href={profile.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="AtSign"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-sage transition-colors hover:border-brass hover:text-brass"
          >
            <AtSign size={16} aria-hidden="true" />
          </a>
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-sage transition-colors hover:border-brass hover:text-brass"
          >
            <MessageCircle size={16} aria-hidden="true" />
          </a>
          <button
            onClick={handleShare}
            aria-label="Compartilhar perfil"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-sage transition-colors hover:border-brass hover:text-brass"
          >
            <Share2 size={16} aria-hidden="true" />
          </button>
        </div>
      </motion.div>

      <div className="mt-9 flex flex-col gap-3">
        <Reveal delay={0.05}>
          <ExternalHubCard
            href={profile.bookingUrl}
            icon={CalendarCheck}
            title="Agendar horário"
            subtitle="Direto no sistema oficial da barbearia"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <HubCard
            to="/trabalho"
            icon={Scissors}
            title="Conheça meu trabalho"
            subtitle="Sobre, serviços, galeria e avaliações"
          />
        </Reveal>
        <Reveal delay={0.15}>
          <HubCard to="/contato" icon={MessageCircle} title="Fale comigo" subtitle="WhatsApp, AtSign e localização" />
        </Reveal>
      </div>

      <p className="mt-10 text-center text-[11px] text-sage-dim">{profile.brand}</p>
    </main>
  );
}
