import { agents } from "@/data/agents";
import type { Property } from "@/types";

const t = (en: string, fr: string) => ({ en, fr });
const list = (en: string[], fr: string[]) => ({ en, fr });

export const properties: Property[] = [
  {
    id: "prop-1",
    title: t(
      "Contemporary Villa with Atlas Mountain Views",
      "Villa contemporaine avec vue sur l'Atlas"
    ),
    slug: "contemporary-villa-atlas-mountain-views-marrakech",
    status: "sale",
    type: t("Villa", "Villa"),
    price: 8900000,
    currency: "MAD",
    city: t("Marrakech", "Marrakech"),
    neighborhood: t("Palmeraie", "Palmeraie"),
    address: t("Circuit de la Palmeraie, Marrakech", "Circuit de la Palmeraie, Marrakech"),
    bedrooms: 5,
    bathrooms: 5,
    area: 640,
    parking: 3,
    featured: true,
    furnished: true,
    hasPool: true,
    hasGarden: true,
    hasTerrace: true,
    shortDescription: t(
      "A gated luxury villa designed for refined family living and entertaining.",
      "Une villa de luxe securisee concue pour une vie familiale raffinee et la reception."
    ),
    description: t(
      "Set in a landscaped private domain, this villa combines expansive indoor-outdoor living, polished stone finishes, a heated pool, and serene garden lounges. It is positioned for discerning buyers seeking privacy, prestige, and immediate move-in quality in Marrakech.",
      "Situee dans un domaine prive paysager, cette villa combine vastes espaces dedans-dehors, finitions en pierre, piscine chauffee et salons de jardin paisibles. Elle s'adresse a une clientele en recherche d'intimite, de prestige et d'un bien pret a vivre a Marrakech."
    ),
    features: list(
      ["Gated residence", "Heated pool", "Home cinema", "Staff quarters", "Fireplace lounge"],
      ["Residence securisee", "Piscine chauffee", "Home cinema", "Logement personnel", "Salon avec cheminee"]
    ),
    amenities: list(
      ["Air conditioning", "Solar water heating", "CCTV", "Smart lighting", "Outdoor dining terrace"],
      ["Climatisation", "Chauffe-eau solaire", "Videosurveillance", "Eclairage intelligent", "Terrasse repas exterieure"]
    ),
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
    ],
    coordinates: { lat: 31.6574, lng: -7.9736 },
    agent: agents[0],
    createdAt: "2026-02-18",
  },
  {
    id: "prop-2",
    title: t(
      "Signature Apartment near Majorelle and Gueliz",
      "Appartement signature entre Majorelle et Gueliz"
    ),
    slug: "signature-apartment-majorelle-gueliz",
    status: "sale",
    type: t("Apartment", "Appartement"),
    price: 2650000,
    currency: "MAD",
    city: t("Marrakech", "Marrakech"),
    neighborhood: t("Gueliz", "Gueliz"),
    address: t("Avenue Hassan II, Gueliz", "Avenue Hassan II, Gueliz"),
    bedrooms: 3,
    bathrooms: 2,
    area: 168,
    parking: 1,
    featured: true,
    furnished: false,
    hasPool: false,
    hasGarden: false,
    hasTerrace: true,
    shortDescription: t(
      "Designer apartment with concierge service and a generous entertainer's terrace.",
      "Appartement de designer avec conciergerie et grande terrasse de reception."
    ),
    description: t(
      "This apartment delivers a polished city lifestyle with double exposure, a chef-grade kitchen, custom joinery, and a spacious terrace ideal for sunset dinners. It suits both owner-occupiers and investors targeting premium urban demand.",
      "Cet appartement offre un style de vie urbain raffine avec double exposition, cuisine haut de gamme, menuiseries sur mesure et vaste terrasse ideale pour des diners au coucher du soleil. Il convient aussi bien aux residents qu'aux investisseurs."
    ),
    features: list(
      ["Doorman", "Large terrace", "Open-plan kitchen", "Italian closets"],
      ["Gardien", "Grande terrasse", "Cuisine ouverte", "Dressings italiens"]
    ),
    amenities: list(
      ["Elevator", "Underground parking", "Fiber internet", "Concierge", "Central A/C"],
      ["Ascenseur", "Parking sous-sol", "Fibre", "Conciergerie", "Climatisation centralisee"]
    ),
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    ],
    coordinates: { lat: 31.6345, lng: -8.0098 },
    agent: agents[1],
    createdAt: "2026-01-30",
  },
  {
    id: "prop-3",
    title: t(
      "Boutique Riad Restored for Hospitality or Private Use",
      "Riad boutique restaure pour usage prive ou hospitality"
    ),
    slug: "boutique-riad-restored-medina-marrakech",
    status: "sale",
    type: t("Riad", "Riad"),
    price: 5400000,
    currency: "MAD",
    city: t("Marrakech", "Marrakech"),
    neighborhood: t("Medina", "Medina"),
    address: t("Derb Dabachi, Medina", "Derb Dabachi, Medina"),
    bedrooms: 6,
    bathrooms: 6,
    area: 420,
    parking: 0,
    featured: true,
    furnished: true,
    hasPool: true,
    hasGarden: false,
    hasTerrace: true,
    shortDescription: t(
      "An authentic yet hospitality-ready riad steps from the heart of the Medina.",
      "Un riad authentique et operationnel a deux pas du coeur de la Medina."
    ),
    description: t(
      "Restored with artisanal zellige, tadelakt, and carved cedar, this riad offers a courtyard plunge pool, rooftop dining, and turnkey operational quality. It is ideal for private buyers seeking soul and investors exploring boutique guesthouse potential.",
      "Restaure avec zellige artisanal, tadelakt et cedre sculpte, ce riad offre un bassin de cour, un rooftop repas et une qualite operationnelle cle en main. Ideal pour acheteurs prives ou investisseurs hospitality."
    ),
    features: list(
      ["Plunge pool", "Rooftop lounge", "Traditional hammam", "Reception patio"],
      ["Bassin", "Salon rooftop", "Hammam traditionnel", "Patio de reception"]
    ),
    amenities: list(
      ["Wi-Fi", "Chef kitchen", "Firepit terrace", "Laundry room", "Air conditioning"],
      ["Wi-Fi", "Cuisine chef", "Terrasse avec brasero", "Buanderie", "Climatisation"]
    ),
    images: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe86?auto=format&fit=crop&w=1400&q=80",
    ],
    coordinates: { lat: 31.6262, lng: -7.9891 },
    agent: agents[0],
    createdAt: "2026-03-07",
  },
  {
    id: "prop-4",
    title: t("Family Villa with Garden Residence in Targa", "Villa familiale avec jardin a Targa"),
    slug: "family-villa-garden-residence-targa",
    status: "sale",
    type: t("Villa", "Villa"),
    price: 4600000,
    currency: "MAD",
    city: t("Marrakech", "Marrakech"),
    neighborhood: t("Targa", "Targa"),
    address: t("Targa Extension, Marrakech", "Targa Extension, Marrakech"),
    bedrooms: 4,
    bathrooms: 4,
    area: 390,
    parking: 2,
    featured: false,
    furnished: false,
    hasPool: true,
    hasGarden: true,
    hasTerrace: true,
    shortDescription: t(
      "Bright, family-oriented villa with a private pool and excellent school access.",
      "Villa lumineuse et familiale avec piscine privee et excellent acces ecoles."
    ),
    description: t(
      "A smart choice for full-time living, this Targa residence blends large reception spaces, practical bedroom layouts, and strong value in a sought-after residential district with growing demand.",
      "Un excellent choix pour y vivre a l'annee, cette residence a Targa combine grands espaces de reception, distribution familiale et valeur solide dans un quartier residentiel recherche."
    ),
    features: list(
      ["Family layout", "Staff room", "Barbecue corner", "Two living rooms"],
      ["Plan familial", "Chambre personnel", "Coin barbecue", "Deux salons"]
    ),
    amenities: list(
      ["Pool", "Garden irrigation", "Garage", "Storage room", "Terrace pergola"],
      ["Piscine", "Arrosage jardin", "Garage", "Debarras", "Pergola terrasse"]
    ),
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
    ],
    coordinates: { lat: 31.655, lng: -8.0653 },
    agent: agents[2],
    createdAt: "2026-02-04",
  },
  {
    id: "prop-5",
    title: t(
      "Executive Rental Apartment on Boulevard Mohammed VI",
      "Appartement executive a louer sur le Boulevard Mohammed VI"
    ),
    slug: "executive-rental-apartment-boulevard-mohammed-vi",
    status: "rent",
    type: t("Apartment", "Appartement"),
    price: 22000,
    currency: "MAD",
    city: t("Marrakech", "Marrakech"),
    neighborhood: t("Hivernage", "Hivernage"),
    address: t("Boulevard Mohammed VI, Hivernage", "Boulevard Mohammed VI, Hivernage"),
    bedrooms: 2,
    bathrooms: 2,
    area: 132,
    parking: 1,
    featured: true,
    furnished: true,
    hasPool: true,
    hasGarden: false,
    hasTerrace: true,
    shortDescription: t(
      "Premium furnished rental with hotel-style amenities in central Hivernage.",
      "Location meublee premium avec prestations type hotel au coeur de l'Hivernage."
    ),
    description: t(
      "Designed for executive tenants and relocation clients, this furnished apartment pairs polished interiors with concierge support, secure parking, and immediate access to upscale dining and business addresses.",
      "Concu pour cadres et clients en relocation, cet appartement meuble associe interieurs soignes, conciergerie, parking securise et acces immediat aux meilleures adresses."
    ),
    features: list(
      ["Furnished", "Residence pool", "Secure access", "Balcony"],
      ["Meuble", "Piscine de residence", "Acces securise", "Balcon"]
    ),
    amenities: list(
      ["Concierge", "Gym access", "Parking", "Fiber", "Air conditioning"],
      ["Conciergerie", "Acces salle de sport", "Parking", "Fibre", "Climatisation"]
    ),
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe87?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
    ],
    coordinates: { lat: 31.6203, lng: -8.0152 },
    agent: agents[2],
    createdAt: "2026-03-22",
  },
  {
    id: "prop-6",
    title: t(
      "Commercial Showroom with Route de Casa Visibility",
      "Showroom commercial avec forte visibilite sur Route de Casa"
    ),
    slug: "commercial-showroom-route-de-casa",
    status: "rent",
    type: t("Commercial", "Commercial"),
    price: 48000,
    currency: "MAD",
    city: t("Marrakech", "Marrakech"),
    neighborhood: t("Route de Casa", "Route de Casa"),
    address: t("Route de Casablanca, Marrakech", "Route de Casablanca, Marrakech"),
    bedrooms: 0,
    bathrooms: 2,
    area: 310,
    parking: 6,
    featured: false,
    furnished: false,
    hasPool: false,
    hasGarden: false,
    hasTerrace: false,
    shortDescription: t(
      "High-visibility commercial frontage for retail, furniture, or showroom brands.",
      "Facade commerciale tres visible ideale pour retail, mobilier ou showroom."
    ),
    description: t(
      "With excellent road exposure, clean rectangular layout, and customer parking, this commercial asset is suited to ambitious operators seeking presence in one of Marrakech's busiest corridors.",
      "Avec une excellente exposition, un plan rectangulaire efficace et du stationnement clients, cet actif commercial convient aux enseignes ambitieuses souhaitant une vraie presence sur un axe majeur."
    ),
    features: list(
      ["Double-height glazing", "Back office", "Signage visibility"],
      ["Double hauteur vitree", "Back office", "Visibilite enseigne"]
    ),
    amenities: list(
      ["Parking", "Security shutters", "Storage", "Two washrooms"],
      ["Parking", "Rideaux de securite", "Stockage", "Deux sanitaires"]
    ),
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    ],
    coordinates: { lat: 31.6749, lng: -8.0144 },
    agent: agents[1],
    createdAt: "2026-01-14",
  },
  {
    id: "prop-7",
    title: t(
      "Rooftop Duplex with Private Jacuzzi in Casablanca Finance City",
      "Duplex rooftop avec jacuzzi prive a Casablanca Finance City"
    ),
    slug: "rooftop-duplex-casablanca-finance-city",
    status: "sale",
    type: t("Apartment", "Appartement"),
    price: 5100000,
    currency: "MAD",
    city: t("Casablanca", "Casablanca"),
    neighborhood: t("CFC", "CFC"),
    address: t("Casablanca Finance City", "Casablanca Finance City"),
    bedrooms: 3,
    bathrooms: 3,
    area: 240,
    parking: 2,
    featured: true,
    furnished: false,
    hasPool: false,
    hasGarden: false,
    hasTerrace: true,
    shortDescription: t(
      "Skyline duplex crafted for executives and investors seeking prestige in Casablanca.",
      "Un duplex skyline pense pour cadres et investisseurs recherchant une adresse prestigieuse a Casablanca."
    ),
    description: t(
      "A refined duplex with double-height living areas, panoramic terraces, and quick access to key business hubs. A strong fit for clients looking for design-led urban property with long-term value.",
      "Un duplex raffine avec sejour double hauteur, terrasses panoramiques et acces rapide aux poles d'affaires. Un bien ideal pour les clients recherchant design urbain et valeur long terme."
    ),
    features: list(
      ["Private jacuzzi", "Panoramic terrace", "Smart home controls"],
      ["Jacuzzi prive", "Terrasse panoramique", "Domotique"]
    ),
    amenities: list(
      ["Lift", "Two parking spaces", "24/7 security", "Central heating"],
      ["Ascenseur", "Deux places parking", "Securite 24/7", "Chauffage central"]
    ),
    images: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe88?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93689?auto=format&fit=crop&w=1400&q=80",
    ],
    coordinates: { lat: 33.5625, lng: -7.6512 },
    agent: agents[1],
    createdAt: "2026-03-11",
  },
  {
    id: "prop-8",
    title: t(
      "Serviced Land Plot for Boutique Development",
      "Terrain viabilise pour developpement boutique"
    ),
    slug: "serviced-land-plot-boutique-development-rabat",
    status: "sale",
    type: t("Land", "Terrain"),
    price: 3750000,
    currency: "MAD",
    city: t("Rabat", "Rabat"),
    neighborhood: t("Souissi", "Souissi"),
    address: t("Souissi, Rabat", "Souissi, Rabat"),
    bedrooms: 0,
    bathrooms: 0,
    area: 920,
    parking: 0,
    featured: false,
    furnished: false,
    hasPool: false,
    hasGarden: false,
    hasTerrace: false,
    shortDescription: t(
      "Strategic land opportunity in a premium Rabat district for bespoke residential delivery.",
      "Une opportunite fonciere strategique dans un quartier premium de Rabat pour un projet residentiel sur mesure."
    ),
    description: t(
      "An appealing opportunity for private builders and small-scale developers, with strong access, attractive frontage, and a highly desirable residential address.",
      "Une opportunite attractive pour particuliers et petits developpeurs avec bon acces, belle facade et adresse residentielle tres recherchee."
    ),
    features: list(
      ["Serviced access", "Flat topography", "Residential zoning"],
      ["Acces viabilise", "Topographie plane", "Zonage residentiel"]
    ),
    amenities: list(
      ["Road access", "Utilities nearby", "Clear title"],
      ["Acces route", "Reseaux a proximite", "Titre clair"]
    ),
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80",
    ],
    coordinates: { lat: 34.0026, lng: -6.8305 },
    agent: agents[0],
    createdAt: "2026-02-27",
  },
];
