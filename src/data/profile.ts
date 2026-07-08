import type { BarberProfile, Service, Testimonial, FaqItem } from "../types";

export const profile: BarberProfile = {
  name: "Lenon",
  brand: "Lenon Barber",
  specialty: "Especialista em degradê e barba",
  city: "Nova Friburgo, RJ",
  tagline: "Cortes precisos, atendimento no seu tempo.",
  bio: [
    "Acredito que um bom corte vai além da técnica: ele deve valorizar a identidade e o estilo de cada pessoa.",
    "Por isso, cada corte é pensado para harmonizar com o formato do rosto e o estilo de vida de quem senta na cadeira.",
    "Anos de prática em degradês, acabamentos e desenho de barba me trouxeram até a Willian Castro Barber Shop, onde atendo com hora marcada para dar atenção total a cada cliente.",
  ],
  philosophy:
    "Sem pressa e sem fórmula pronta. Eu ouço o que você quer, alinho expectativa antes da tesoura encostar e só finalizo quando o corte fecha de verdade.",
  differentials: [
    "Hora marcada — sem fila, sem espera",
    "Avaliação do rosto antes de cada corte",
    "Acabamento com navalha em todos os serviços",
    "Ambiente reservado na Willian Castro Barber Shop",
  ],
  instagramUrl: "https://www.instagram.com/lenon_thebarber",
  whatsappUrl: "https://api.whatsapp.com/send/?phone=5522999931788&text&type=phone_number&app_absent=0",
  whatsappDisplay: "(22) 99993-1788",
  bookingUrl: "https://sites.appbarber.com.br/cutbarbershop-4tsh",
  bookingProvider: "Willian Castro Barber Shop",
  address: "Rua Portugal, 19 - Centro, Nova Friburgo - RJ, 28610-135",
  mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJfaGbeTuLlwARSflMFPRlEs8",
  hours: [
    { day: "Terça a sexta", time: "09:00 – 19:00" },
    { day: "Sábado", time: "09:00 – 17:00" },
    { day: "Domingo e segunda", time: "Fechado" },
  ],
};

export const services: Service[] = [
  { id: "corte-masculino", name: "Corte masculino", description: "Corte na tesoura e máquina, ajustado ao formato do rosto.", duration: "40 min", icon: "scissors" },
  { id: "degrade", name: "Degradê", description: "Transição de máquina com acabamento navalhado.", duration: "45 min", icon: "razor" },
  { id: "corte-social", name: "Corte social", description: "Clássico, alinhado para o dia a dia profissional.", duration: "35 min", icon: "shirt" },
  { id: "barba", name: "Barba", description: "Desenho, toalha quente e acabamento com navalha.", duration: "30 min", icon: "beard" },
  { id: "pigmentacao", name: "Pigmentação", description: "Correção de falhas e uniformização da barba.", duration: "40 min", icon: "droplet" },
  { id: "corte-infantil", name: "Corte infantil", description: "Atendimento paciente, pensado para crianças.", duration: "30 min", icon: "child" },
  { id: "acabamento", name: "Acabamento", description: "Contorno e navalha entre um corte e outro.", duration: "15 min", icon: "sparkles" },
];

export const testimonials: Testimonial[] = [
  { id: "t1", name: "Rafael M.", comment: "Melhor degradê que já fiz. Atenção total do início ao fim.", rating: 5, initials: "RM" },
  { id: "t2", name: "Bruno C.", comment: "Pontual, explica cada etapa e o acabamento é impecável.", rating: 5, initials: "BC" },
  { id: "t3", name: "Diego S.", comment: "Virei cliente fixo. Ambiente tranquilo e corte sempre certeiro.", rating: 5, initials: "DS" },
];

export const faqs: FaqItem[] = [
  {
    id: "f1",
    question: "Precisa agendar horário?",
    answer: "Sim. O atendimento é só com hora marcada, direto pelo sistema oficial da Willian Castro Barber Shop.",
    actionLabel: "Agendar agora",
    actionHref: profile.bookingUrl,
  },
  { id: "f2", question: "Quais as formas de pagamento?", answer: "Pix, cartão de débito e crédito. Os detalhes ficam disponíveis no momento do agendamento." },
  {
    id: "f3",
    question: "Onde fica o atendimento?",
    answer: `Na Willian Castro Barber Shop — ${profile.address}.`,
    actionLabel: "Ver no Google Maps",
    actionHref: profile.mapsUrl,
  },
  { id: "f4", question: "Quanto tempo dura um corte?", answer: "Entre 30 e 45 minutos, dependendo do serviço escolhido." },
];
