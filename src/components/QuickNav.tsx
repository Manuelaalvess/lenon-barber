import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, User, Scissors, HelpCircle } from "lucide-react";

const SECTIONS = [
  { id: "sobre", label: "Sobre mim", icon: User },
  { id: "servicos", label: "Serviços", icon: Scissors },
  { id: "duvidas", label: "Dúvidas frequentes", icon: HelpCircle },
];

/**
 * Menu de 3 traços que leva direto para uma seção de /trabalho.
 * Usa navigate + state em vez de âncora nativa (#id) porque a seção pode estar
 * em outra rota (ex.: clicar em "Sobre mim" a partir da Home) — a âncora só
 * funciona depois que /trabalho já estiver montada.
 */
export default function QuickNav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goTo = (sectionId: string) => {
    setOpen(false);
    navigate("/trabalho", { state: { scrollTo: sectionId } });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir menu de navegação"
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-sage transition-colors hover:border-brass hover:text-brass"
      >
        {open ? <X size={17} aria-hidden="true" /> : <Menu size={17} aria-hidden="true" />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-11 z-40 w-52 overflow-hidden rounded-xl border border-line bg-panel-2 py-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
            >
              {SECTIONS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => goTo(id)}
                  className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] text-cream transition-colors hover:bg-ink"
                >
                  <Icon size={15} className="text-brass" aria-hidden="true" />
                  {label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
