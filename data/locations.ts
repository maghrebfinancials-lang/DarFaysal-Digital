import type { LocationHighlight } from "@/types";

const t = (en: string, fr: string) => ({ en, fr });

export const locations: LocationHighlight[] = [
  {
    id: "loc-1",
    name: t("Hivernage", "Hivernage"),
    city: t("Marrakech", "Marrakech"),
    description: t(
      "Luxury residences, hotels, nightlife, and premium rental demand close to Mohammed VI.",
      "Residences de luxe, hotels, vie nocturne et forte demande locative premium pres de Mohammed VI."
    ),
    image:
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1200&q=80",
    propertyCount: 28,
  },
  {
    id: "loc-2",
    name: t("Gueliz", "Gueliz"),
    city: t("Marrakech", "Marrakech"),
    description: t(
      "Contemporary urban living, boutique buildings, strong owner-occupier and investor appeal.",
      "Un style de vie urbain contemporain, des immeubles boutiques et un fort attrait pour occupants et investisseurs."
    ),
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    propertyCount: 34,
  },
  {
    id: "loc-3",
    name: t("Palmeraie", "Palmeraie"),
    city: t("Marrakech", "Marrakech"),
    description: t(
      "Private compounds, landscaped estates, and some of the city's most exclusive villas.",
      "Domaines prives, proprietes paysageres et certaines des villas les plus exclusives de la ville."
    ),
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    propertyCount: 17,
  },
  {
    id: "loc-4",
    name: t("Medina", "Medina"),
    city: t("Marrakech", "Marrakech"),
    description: t(
      "Authentic riads and heritage properties with hospitality and lifestyle appeal.",
      "Riads authentiques et biens de caractere avec un fort pouvoir d'attraction lifestyle et hospitality."
    ),
    image:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
    propertyCount: 21,
  },
];
