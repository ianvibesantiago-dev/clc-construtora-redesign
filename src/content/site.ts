// Conteúdo do site — conceito de redesign (não oficial) da CLC Construtora.
// Fotos: Unsplash (licença livre). Editar aqui atualiza todas as seções.

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80`;

export const company = {
  name: "CLC Construtora",
  legalName: "Construtora Luiz Costa Ltda",
  phones: ["(84) 3318-9500", "(84) 8118-6465"],
  email: "clc@clcconstrutora.com.br",
  address: "BR-110, 201, KM 52 — Mossoró, RN",
  instagram: "https://instagram.com/clcconstrutora",
} as const;

export const nav = [
  { href: "#sobre", label: "Institucional" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Como trabalhamos" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
] as const;

export const images = {
  hero: unsplash("1503708928676-1cb796a0891e"),
  heroDetail: unsplash("1595734939818-f4e0d44957df"),
  about1: unsplash("1591486085897-f433f05e7aed"),
  about2: unsplash("1529792083865-d23889753466"),
} as const;

export const stats = [
  { value: 225, suffix: "+", label: "Projetos executados" },
  { value: 30, suffix: "+", label: "Anos de experiência" },
  { value: 9, suffix: "", label: "Estados atendidos" },
] as const;

export const highlights = [
  "Mais de 225 clientes satisfeitos",
  "Controle tecnológico e testes precisos",
  "Materiais duradouros",
  "Soluções com menor impacto ambiental",
] as const;

export type ServiceIcon = "excavator" | "roller" | "cobble" | "dam" | "drain" | "mixer";
export type Service = { title: string; description: string; icon: ServiceIcon };

export const services: Service[] = [
  { title: "Terraplanagem", description: "Base para estradas, barragens e plataformas, com frota própria de máquinas pesadas.", icon: "excavator" },
  { title: "Pavimentação asfáltica", description: "Aplicação de asfalto em camadas para estradas e rodovias, do subleito ao revestimento.", icon: "roller" },
  { title: "Pavimentação a paralelepípedo", description: "Pavimentação urbana com paralelepípedos em diferentes métodos de execução.", icon: "cobble" },
  { title: "Barragens e açudes", description: "Barragens, açudes e obras hidráulicas seguindo rigorosos padrões de engenharia.", icon: "dam" },
  { title: "Drenagem pluvial", description: "Sistemas de drenagem urbana para captar e gerenciar as águas da chuva.", icon: "drain" },
  { title: "Concretagem", description: "Da mistura à cura, com controle tecnológico em todas as etapas.", icon: "mixer" },
];

export const process = [
  { step: "01", title: "Planejamento de projetos", description: "Estudo técnico, topografia e orçamento detalhado antes da primeira máquina entrar em campo." },
  { step: "02", title: "Contrato geral", description: "Escopo, prazos e responsabilidades definidos com transparência e segurança jurídica." },
  { step: "03", title: "Execução da obra", description: "Equipes próprias, frota moderna e acompanhamento diário até a entrega." },
] as const;

export type Project = { title: string; location: string; date: string; description: string; image: string };

export const projects: Project[] = [
  { title: "Recuperação e alargamento da RN 233", location: "Rio Grande do Norte", date: "Jul", description: "Topografia complexa, clima adverso e tráfego ativo: novas técnicas de pavimentação e gestão de tráfego.", image: unsplash("1536099629323-44806c1ea264") },
  { title: "Restauração da PE 275", location: "Pernambuco", date: "Dez", description: "Revitalização da rodovia para viagens mais seguras e eficientes.", image: unsplash("1595734939818-f4e0d44957df") },
  { title: "Duplicação da CE 155", location: "Ceará", date: "Set", description: "Mais capacidade e segurança para uma rodovia estratégica da região.", image: unsplash("1465447142348-e9952c393450") },
  { title: "Infraestrutura de São Luís", location: "Maranhão", date: "Out", description: "Obras urbanas para uma cidade mais moderna, eficiente e sustentável.", image: unsplash("1508916319692-80a99da75692") },
];

export const clients = ["Governos estaduais", "Prefeituras", "DNIT", "DERs", "Setor industrial", "Incorporadoras", "Consórcios de obras"] as const;
