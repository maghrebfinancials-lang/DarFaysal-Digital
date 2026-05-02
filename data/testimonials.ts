import type { FAQItem, Testimonial } from "@/types";

const t = (en: string, fr: string) => ({ en, fr });

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Karim & Leila B.",
    role: t("Home Buyers", "Acheteurs"),
    quote: t(
      "We found our Palmeraie villa in under three weeks. The team handled viewings, negotiation, and paperwork with speed and total transparency.",
      "Nous avons trouve notre villa a la Palmeraie en moins de trois semaines. L'equipe a gere visites, negociation et administratif avec rapidite et transparence."
    ),
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "test-2",
    name: "Omar Tazi",
    role: t("Property Owner", "Proprietaire"),
    quote: t(
      "Their marketing made our listing feel like a luxury brand launch. We received qualified buyer interest almost immediately.",
      "Leur marketing a donne a notre annonce l'allure d'un lancement de marque de luxe. Nous avons recu des contacts qualifies presque immediatement."
    ),
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "test-3",
    name: "Sofia Rahmani",
    role: t("Investor", "Investisseuse"),
    quote: t(
      "What stood out was the local insight. They helped us compare yield, neighborhood demand, and positioning before we committed.",
      "Ce qui nous a marque, c'est la finesse de l'analyse locale. Ils nous ont aide a comparer rendement, demande quartier par quartier et positionnement avant de decider."
    ),
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
  },
];

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: t("How quickly can I book a property visit?", "En combien de temps puis-je reserver une visite ?"),
    answer: t(
      "Most visit requests are confirmed within the same day on WhatsApp. For premium listings, we can usually arrange viewings within 24 to 48 hours.",
      "La plupart des demandes de visite sont confirmees dans la journee via WhatsApp. Pour les biens premium, nous organisons souvent les visites sous 24 a 48 heures."
    ),
  },
  {
    id: "faq-2",
    question: t("Do you work with sellers and landlords too?", "Travaillez-vous aussi avec les vendeurs et bailleurs ?"),
    answer: t(
      "Yes. We support pricing, photography direction, listing strategy, lead qualification, and showing coordination for owners across sales and rentals.",
      "Oui. Nous accompagnons le pricing, la direction photo, la strategie de mise en marche, la qualification des leads et la coordination des visites pour la vente comme la location."
    ),
  },
  {
    id: "faq-3",
    question: t("Can this website be customized for another agency brand?", "Ce site peut-il etre adapte a une autre marque d'agence ?"),
    answer: t(
      "Absolutely. The structure, content files, brand tokens, and reusable components are designed so a digital agency can adapt them quickly for multiple clients.",
      "Absolument. La structure, les contenus, les tokens de marque et les composants reutilisables sont concus pour etre adaptes rapidement a plusieurs clients."
    ),
  },
];
