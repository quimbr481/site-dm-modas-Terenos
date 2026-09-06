export const LOJA = {
  nome: "DM Modas",
  slogan: "Prazer em vesti-los",
  telefoneExibicao: "(67) 99268-8361",
  telefoneLink: "+5567992688361",
  whatsapp: "5567992688361",
  endereco: "Av. Dr. Ari Coelho de Oliveira, 238",
  bairro: "Centro",
  cidade: "Terenos",
  estado: "MS",
  cep: "79190-000",
  nota: "4,9",
  avaliacoes: 19,
  lat: -20.4425,
  lng: -54.8607,
} as const;

export const ENDERECO_COMPLETO = `${LOJA.endereco} - ${LOJA.bairro}, ${LOJA.cidade}-${LOJA.estado}, ${LOJA.cep}`;

export const MAPS_ROTA = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${LOJA.endereco}, ${LOJA.bairro}, ${LOJA.cidade} - ${LOJA.estado}, ${LOJA.cep}`,
)}`;

export function whatsappLink(
  mensagem = "Olá! Vim pelo site da DM Modas e gostaria de saber mais sobre os produtos.",
) {
  return `https://wa.me/${LOJA.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];
