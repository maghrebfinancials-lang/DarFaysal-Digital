import type { BlogPost, Service } from "@/types";

const t = (en: string, fr: string) => ({ en, fr });
const list = (en: string[], fr: string[]) => ({ en, fr });

export const services: Service[] = [
  {
    id: "service-1",
    title: t("Buying Assistance", "Accompagnement achat"),
    description: t(
      "From shortlist to negotiation, we streamline every step for residential and investment buyers.",
      "De la selection a la negociation, nous fluidifions chaque etape pour les acheteurs residents et investisseurs."
    ),
    icon: "Building2",
    bullets: list(
      ["Tailored property sourcing", "Negotiation guidance", "Offer structuring"],
      ["Recherche ciblee de biens", "Conseil en negociation", "Structuration de l'offre"]
    ),
  },
  {
    id: "service-2",
    title: t("Renting Assistance", "Accompagnement location"),
    description: t(
      "Premium rental support for relocation clients, executives, and long-stay tenants.",
      "Accompagnement premium pour clients en relocation, cadres et locataires longue duree."
    ),
    icon: "KeyRound",
    bullets: list(
      ["Tenant qualification", "Fast scheduling", "Move-in coordination"],
      ["Qualification locataire", "Planification rapide", "Coordination entree dans les lieux"]
    ),
  },
  {
    id: "service-3",
    title: t("Property Valuation", "Estimation immobiliere"),
    description: t(
      "Data-informed pricing recommendations shaped by neighborhood demand and positioning.",
      "Recommandations de pricing basees sur la demande quartier par quartier et le positionnement du bien."
    ),
    icon: "BadgeDollarSign",
    bullets: list(
      ["Comparable market review", "Owner strategy call", "Sell or rent guidance"],
      ["Analyse comparative du marche", "Echange strategique proprietaire", "Conseil vente ou location"]
    ),
  },
  {
    id: "service-4",
    title: t("Investment Consulting", "Conseil investissement"),
    description: t(
      "We help clients evaluate yield, exit potential, and district-level opportunity.",
      "Nous aidons les clients a evaluer rendement, potentiel de sortie et opportunite par quartier."
    ),
    icon: "TrendingUp",
    bullets: list(["ROI lens", "Area benchmarking", "Product-market fit"], ["Vision ROI", "Benchmark quartier", "Adequation produit-marche"]),
  },
  {
    id: "service-5",
    title: t("Property Marketing", "Marketing immobilier"),
    description: t(
      "Luxury-grade presentation, persuasive copy, and channel strategy that attracts qualified leads.",
      "Presentation premium, copywriting persuasif et strategie de diffusion pour attirer des leads qualifies."
    ),
    icon: "Camera",
    bullets: list(["Listing strategy", "Creative direction", "Lead qualification"], ["Strategie de mise en marche", "Direction creative", "Qualification des leads"]),
  },
  {
    id: "service-6",
    title: t("Property Management", "Gestion immobiliere"),
    description: t(
      "Reliable post-acquisition support for owners who want peace of mind and smooth operations.",
      "Un accompagnement fiable post-acquisition pour les proprietaires qui veulent serenite et gestion fluide."
    ),
    icon: "ShieldCheck",
    bullets: list(["Tenant support", "Vendor coordination", "Reporting"], ["Support locataires", "Coordination prestataires", "Reporting"]),
  },
  {
    id: "service-7",
    title: t("Legal & Admin Support", "Support legal et administratif"),
    description: t(
      "Trusted coordination with notaries, title checks, and transaction administration partners.",
      "Coordination de confiance avec notaires, verification de titres et partenaires administratifs."
    ),
    icon: "FileCheck2",
    bullets: list(["Document prep", "Process guidance", "Stakeholder coordination"], ["Preparation documentaire", "Guidage process", "Coordination des parties prenantes"]),
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: t(
      "Where Luxury Buyers Are Looking in Marrakech Right Now",
      "Ou les acheteurs premium regardent a Marrakech en ce moment"
    ),
    slug: "where-luxury-buyers-are-looking-in-marrakech",
    excerpt: t(
      "A practical look at the neighborhoods, buyer profiles, and product types drawing the strongest premium demand.",
      "Un regard concret sur les quartiers, profils d'acheteurs et types de biens qui concentrent la plus forte demande premium."
    ),
    content: list(
      [
        "Marrakech's premium property market continues to attract both lifestyle buyers and investors who value privacy, design quality, and hospitality-led amenities.",
        "Palmeraie remains a benchmark for private compounds and estate-style villas, while Hivernage and Gueliz continue to appeal to buyers seeking a polished city address.",
        "For agencies, the commercial advantage comes from matching product type to intent quickly and communicating trust from the first interaction.",
      ],
      [
        "Le marche premium a Marrakech continue d'attirer acheteurs lifestyle et investisseurs qui privilegient intimite, qualite de design et prestations inspirees de l'hospitality.",
        "La Palmeraie reste une reference pour les domaines prives et villas d'exception, tandis que Hivernage et Gueliz seduisent les clients recherchant une adresse urbaine raffinee.",
        "Pour les agences, l'avantage commercial vient de la capacite a relier rapidement le bon produit a la bonne intention et a inspirer confiance des le premier contact.",
      ]
    ),
    coverImage:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=80",
    category: t("Market Insights", "Analyse de marche"),
    author: "Atlas Keys Editorial",
    publishedAt: "2026-03-18",
    readTime: t("5 min read", "5 min de lecture"),
  },
  {
    id: "blog-2",
    title: t(
      "How to Price a Property in Marrakech for Faster Qualified Inquiries",
      "Comment positionner un bien a Marrakech pour generer des demandes qualifiees plus vite"
    ),
    slug: "how-to-price-property-marrakech-qualified-inquiries",
    excerpt: t(
      "Owners often ask whether to anchor high or price to move. Here is the positioning framework we recommend.",
      "Les proprietaires hesitent souvent entre prix d'ancrage eleve et prix de fluidite. Voici le cadre de positionnement que nous recommandons."
    ),
    content: list(
      [
        "Pricing is not just a valuation exercise. It is a conversion decision that determines how much qualified demand a listing will generate.",
        "When a property is overpriced, agencies often attract low-intent messages and weak viewing volume. Strong presentation must be paired with realistic market positioning.",
        "A compelling launch combines benchmark analysis, visual quality, and a fast-response lead handling process.",
      ],
      [
        "Le pricing n'est pas seulement un exercice d'estimation. C'est une decision de conversion qui determine le volume de demande qualifiee qu'un bien va generer.",
        "Lorsqu'un bien est surpositionne, l'agence attire souvent des messages peu qualifies et un faible volume de visites. Une belle presentation doit s'accompagner d'un positionnement realiste.",
        "Un bon lancement combine benchmark, qualite visuelle et gestion rapide des leads.",
      ]
    ),
    coverImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
    category: t("Seller Advice", "Conseil vendeur"),
    author: "Salma El Fassi",
    publishedAt: "2026-02-28",
    readTime: t("4 min read", "4 min de lecture"),
  },
  {
    id: "blog-3",
    title: t(
      "What International Investors Need Before Buying in Morocco",
      "Ce dont les investisseurs internationaux ont besoin avant d'acheter au Maroc"
    ),
    slug: "international-investors-buying-property-morocco",
    excerpt: t(
      "From market research to admin support, here are the touchpoints that reduce friction for overseas buyers.",
      "De l'etude de marche au support administratif, voici les points de contact qui reduisent les frictions pour les acheteurs internationaux."
    ),
    content: list(
      [
        "International buyers value clarity, responsiveness, and dependable local guidance. Agencies that communicate process confidence tend to convert more inquiries into visits.",
        "The most effective advisory approach combines neighborhood education, transaction guidance, and clear next steps after each viewing.",
        "Trust-building content and transparent lead nurturing are essential for cross-border deals.",
      ],
      [
        "Les acheteurs internationaux valorisent la clarte, la reactivite et un accompagnement local fiable. Les agences qui rassurent sur le process convertissent davantage de demandes en visites.",
        "L'approche la plus efficace combine education quartier par quartier, guidage transactionnel et prochaine etape claire apres chaque visite.",
        "Les contenus de confiance et un nurturing transparent sont essentiels dans les transactions transfrontalieres.",
      ]
    ),
    coverImage:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
    category: t("Investment", "Investissement"),
    author: "Youssef Benjelloun",
    publishedAt: "2026-01-26",
    readTime: t("6 min read", "6 min de lecture"),
  },
];
