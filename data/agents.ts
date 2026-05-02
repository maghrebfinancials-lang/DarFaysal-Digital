import type { Agent } from "@/types";

const t = (en: string, fr: string) => ({ en, fr });

export const agents: Agent[] = [
  {
    id: "agent-1",
    name: "Salma El Fassi",
    role: t("Senior Property Advisor", "Conseillere senior en immobilier"),
    phone: "+212 6 61 24 78 90",
    email: "salma@atlaskeys.ma",
    whatsapp: "+212661247890",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    bio: t(
      "Salma leads luxury residential acquisitions in Marrakech with a strong network across Hivernage, Palmeraie, and Route de Casa.",
      "Salma accompagne les acquisitions residentielles de luxe a Marrakech avec un reseau solide sur Hivernage, Palmeraie et Route de Casa."
    ),
  },
  {
    id: "agent-2",
    name: "Youssef Benjelloun",
    role: t("Investment Consultant", "Consultant en investissement"),
    phone: "+212 6 62 58 17 44",
    email: "youssef@atlaskeys.ma",
    whatsapp: "+212662581744",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    bio: t(
      "Youssef advises investors and owner-clients on positioning, pricing, and rental yield opportunities in Marrakech and Casablanca.",
      "Youssef conseille investisseurs et proprietaires sur le positionnement, le pricing et le rendement locatif a Marrakech et Casablanca."
    ),
  },
  {
    id: "agent-3",
    name: "Nora Ait Lahcen",
    role: t("Client Experience Manager", "Responsable experience client"),
    phone: "+212 6 70 88 43 19",
    email: "nora@atlaskeys.ma",
    whatsapp: "+212670884319",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
    bio: t(
      "Nora ensures every inquiry, visit request, and seller onboarding flow feels responsive, transparent, and premium.",
      "Nora veille a ce que chaque prise de contact, demande de visite et onboarding proprietaire soit reactif, transparent et premium."
    ),
  },
];
