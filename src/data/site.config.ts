export const siteConfig = {
  businessName: "Alexandre Massoterapeuta",
  ownerBrand: "Charles",
  segment: "Massoterapia Tântrica",
  mainCity: "Campinas",
  serviceAreas: ["Cambuí", "Campinas"],
  mainService: "Massagem Tântrica",
  secondaryServices: ["massagem relaxante", "nuru mix relaxante", "massagem tântrica mútua"],
  yearsExperience: "",
  clientsServed: "200",
  googleRating: "",
  googleReviews: "",
  whatsapp: "5519999803939",
  phone: "(19) 99980-3939",
  email: "",
  address: "Cambuí, Campinas - SP",
  openingHours: "Somente com horário agendado",
  instagram: "",
  primaryCta: "Agendar sua massagem agora",
  valuePerception: "Atendimento exclusivo para homens, privativo e discreto no Cambuí.",
  mainDifferential: "privativo, discreto e confortável",
  mainBenefit: "relaxamento, presença e saída da rotina",
  generalBenefit: "uma experiência individual com conforto e discrição",
  serviceType: "massagens para homens",
  differentials: ["privacidade desde a chegada", "ambiente climatizado", "atendimento individual"],
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cambu%C3%AD%20Campinas%20SP",
  canonicalUrl: "https://www.seusite.com.br",
  heroImage: "/images/alexandre-massoterapeuta-hero.webp",
  colors: {
    ink: "#222838",
    gold: "#dfb83e",
    green: "#22b51f",
    cream: "#f7f0e8",
    paper: "#fffaf4"
  },
  seo: {
    title: "Massagem Tântrica para Homens em Campinas | Alexandre Massoterapeuta",
    description:
      "Alexandre Massoterapeuta oferece atendimento exclusivo para homens no Cambuí, Campinas, com ambiente privativo, climatizado e discreto.",
    ogImage: "/images/alexandre-massoterapeuta-hero.webp",
    robots: "index, follow"
  }
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=Ola,%20quero%20saber%20mais%20sobre%20${encodeURIComponent(siteConfig.mainService)}%20em%20${encodeURIComponent(siteConfig.mainCity)}`;
