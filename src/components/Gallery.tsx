import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import g1 from "../assets/gallery/g1-mullet.webp";
import g2 from "../assets/gallery/g2-curly.webp";
import g3 from "../assets/gallery/g3-design.webp";
import g5 from "../assets/gallery/g5-wavy.webp";
import g6 from "../assets/gallery/g6-extra.webp";
import g7 from "../assets/gallery/g7-extra.webp";
import g8 from "../assets/gallery/g8-extra.webp";
import g9 from "../assets/gallery/g9-extra.webp";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

const IMAGES: GalleryImage[] = [
  { id: "g3", src: g3, alt: "Desenho de risco na tesoura" },
  { id: "g1", src: g1, alt: "Corte com acabamento navalhado" },
  { id: "g2", src: g2, alt: "Cabelo cacheado, acabamento natural" },
  { id: "g6", src: g6, alt: "Trabalho realizado por Lenon" },
  { id: "g5", src: g5, alt: "Trabalho realizado por Lenon" },
  { id: "g7", src: g7, alt: "Trabalho realizado por Lenon" },
  { id: "g8", src: g8, alt: "Trabalho realizado por Lenon" },
  { id: "g9", src: g9, alt: "Trabalho realizado por Lenon" },
];

export default function Gallery() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = IMAGES.find((img) => img.id === openId);

  return (
    <>
      <div className="grid grid-cols-2 gap-2.5">
        {IMAGES.map((img) => (
          <button
            key={img.id}
            onClick={() => setOpenId(img.id)}
            className="aspect-square overflow-hidden rounded-xl border border-line"
            aria-label={`Ver imagem em tamanho maior: ${img.alt}`}
          >
            <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
            onClick={() => setOpenId(null)}
          >
            <button
              onClick={() => setOpenId(null)}
              aria-label="Fechar imagem"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-line text-cream"
            >
              <X size={18} aria-hidden="true" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              src={active.src}
              alt={active.alt}
              className="max-h-full w-full max-w-sm rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
