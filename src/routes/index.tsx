import { createFileRoute } from "@tanstack/react-router";
import {
  Star,
  Truck,
  Shirt,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Sparkles,
  Heart,
  Tag,
  Layers,
  Award,
  BadgeCheck,
  ShieldCheck,
  Trophy,
} from "lucide-react";

import { Header } from "@/components/site/header";
import { FloatingActions } from "@/components/site/floating";
import { MapaInterativo } from "@/components/site/mapa";
import { useReveal } from "@/hooks/use-reveal";
import { LOJA, MAPS_ROTA, NAV, whatsappLink } from "@/lib/dm";

import heroLoja from "@/assets/hero-loja.jpg";


const TITLE = "DM Modas | Prazer em vesti-los – Terenos MS";
const DESCRIPTION =
  "DM Modas em Terenos-MS. Roupas de qualidade, variedade, preços acessíveis e atendimento especial. Visite nossa loja ou fale conosco pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ClothingStore",
          name: "DM Modas",
          slogan: "Prazer em vesti-los",
          telephone: "+55 67 99268-8361",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Dr. Ari Coelho de Oliveira, 238",
            addressLocality: "Terenos",
            addressRegion: "MS",
            postalCode: "79190-000",
            addressCountry: "BR",
          },
          geo: { "@type": "GeoCoordinates", latitude: LOJA.lat, longitude: LOJA.lng },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "19",
          },
        }),
      },
    ],
  }),
  component: Home,
});

const diferenciais = [
  { icon: Sparkles, titulo: "Qualidade", texto: "Roupas selecionadas pensando em você." },
  { icon: Layers, titulo: "Variedade", texto: "Opções para diferentes estilos e momentos." },
  { icon: Tag, titulo: "Bom preço", texto: "Moda com preços acessíveis." },
  { icon: Heart, titulo: "Atendimento", texto: "Um atendimento próximo e especial." },
];

const anuncios = [
  {
    icon: Trophy,
    titulo: "Melhor loja de Terenos",
    texto: "Preferida da cidade em moda, atendimento e preço justo.",
  },
  {
    icon: BadgeCheck,
    titulo: "Vários certificados",
    texto: "Certificados de qualidade, confiança e excelência no atendimento.",
  },
  {
    icon: ShieldCheck,
    titulo: "Compra garantida",
    texto: "Peças conferidas uma a uma antes de chegarem até você.",
  },
  {
    icon: Star,
    titulo: "Nota 4,9",
    texto: "19 avaliações de clientes que recomendam a loja.",
  },
  {
    icon: Truck,
    titulo: "Entrega disponível",
    texto: "Levamos o seu pedido até você em Terenos.",
  },
  {
    icon: MessageCircle,
    titulo: "Atendimento no WhatsApp",
    texto: "Fale com a gente e receba as novidades em primeira mão.",
  },
];

const certificados = [
  "Certificado de melhor loja de roupas de Terenos",
  "Certificado de excelência em atendimento",
  "Certificado de qualidade das peças",
  "Certificado de confiança dos clientes",
  "Reconhecimento por avaliação 4,9 estrelas",
  "Certificado de loja parceira da comunidade",
];


const depoimentos = [
  "Vendedores atenciosos, loja com variedade, ambiente aconchegante!",
  "Roupas de qualidade e preço acessível para todos 🤩",
  "Ótimo atendimento, mercadorias de ótima qualidade.",
  "Minha loja preferida! Preço bom e as roupas de excelente qualidade.",
];

const infos = [
  {
    icon: MapPin,
    titulo: "Endereço",
    texto: "Av. Dr. Ari Coelho de Oliveira, 238 – Centro, Terenos-MS",
  },
  { icon: Phone, titulo: "Telefone", texto: LOJA.telefoneExibicao },
  { icon: MessageCircle, titulo: "WhatsApp", texto: "Atendimento pelo WhatsApp" },
  { icon: Truck, titulo: "Entrega", texto: "A loja possui serviço de entrega." },
  { icon: Star, titulo: "Avaliação", texto: "4,9 estrelas – 19 avaliações" },
];

function Estrelas() {
  return (
    <span className="inline-flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-gold text-gold" />
      ))}
    </span>
  );
}

function Home() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingActions />

      <main>
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 lg:pb-24">
          <div className="pointer-events-none absolute -top-32 -right-24 size-[28rem] rounded-full bg-accent/50 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div className="reveal">
              <span className="eyebrow">Terenos – Mato Grosso do Sul</span>
              <h1 className="mt-5 font-display text-5xl leading-[1.02] text-balance sm:text-6xl lg:text-7xl">
                Prazer em vestir você.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-foreground/80">
                Moda, qualidade e aquele preço que cabe no seu bolso.
              </p>
              <p className="mt-4 max-w-lg text-base text-muted-foreground">
                Encontre peças para o seu dia a dia com qualidade, estilo e um atendimento especial.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#sobre"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-primary/90"
                >
                  Conheça a loja
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/25 px-8 py-4 text-xs tracking-[0.2em] uppercase transition-colors hover:border-primary hover:text-primary"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Falar no WhatsApp
                </a>
              </div>

              <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Star className="size-4 fill-gold text-gold" aria-hidden="true" /> 4,9 de avaliação
                </li>
                <li className="flex items-center gap-2">
                  <Shirt className="size-4 text-primary" aria-hidden="true" /> Roupas de qualidade
                </li>
                <li className="flex items-center gap-2">
                  <Truck className="size-4 text-primary" aria-hidden="true" /> Entrega disponível
                </li>
              </ul>
            </div>

            <div className="reveal relative">
              <img
                src={heroLoja}
                alt="Interior elegante de uma loja de roupas com araras e peças em tons suaves"
                width={1200}
                height={1504}
                className="aspect-4/5 w-full rounded-lg object-cover shadow-lift"
              />
              <div className="absolute -bottom-6 left-4 hidden rounded-lg border border-border bg-background/95 px-6 py-4 shadow-soft backdrop-blur sm:block">
                <span className="eyebrow">Desde sempre em Terenos</span>
                <p className="mt-1 font-display text-2xl">Prazer em vesti-los</p>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="border-y border-border bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="reveal grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <span className="eyebrow">Sobre a DM Modas</span>
                <h2 className="mt-4 font-display text-4xl text-balance sm:text-5xl">
                  Uma loja feita para você
                </h2>
              </div>
              <p className="text-base leading-relaxed text-foreground/80 lg:pt-10">
                A DM Modas é uma loja de roupas localizada no centro de Terenos-MS. Nosso objetivo é
                oferecer roupas de qualidade, variedade e preços acessíveis, sempre com um
                atendimento próximo e acolhedor.
              </p>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {diferenciais.map((d) => (
                <article
                  key={d.titulo}
                  className="reveal rounded-lg border border-border bg-card p-7 transition-shadow hover:shadow-soft"
                >
                  <d.icon className="size-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-2xl">{d.titulo}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ANÚNCIOS */}
        <section id="produtos" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="reveal max-w-2xl">
              <span className="eyebrow">Anúncios</span>
              <h2 className="mt-4 font-display text-4xl text-balance sm:text-5xl">
                A melhor loja de Terenos
              </h2>
              <p className="mt-4 text-muted-foreground">
                Reconhecida pelos clientes e premiada com vários certificados de qualidade e
                atendimento.
              </p>
            </div>

            <div className="reveal mt-12 rounded-lg border border-primary/40 bg-card p-8 text-center sm:p-14">
              <Award className="mx-auto size-8 text-primary" aria-hidden="true" />
              <p className="mt-6 font-display text-4xl text-balance sm:text-6xl">
                Eleita a melhor loja de roupas de Terenos
              </p>
              <p className="mt-5 text-muted-foreground">
                Nota 4,9 com 19 avaliações — qualidade, variedade e preço acessível reconhecidos por
                quem compra aqui.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {anuncios.map((a) => (
                <article
                  key={a.titulo}
                  className="reveal rounded-lg border border-border bg-card p-7 transition-colors hover:border-primary/50"
                >
                  <a.icon className="size-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-2xl">{a.titulo}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.texto}</p>
                </article>
              ))}
            </div>

            <div className="reveal mt-12 flex justify-center">
              <a
                href={whatsappLink(
                  "Olá! Vim pelo site da DM Modas e gostaria de ver as novidades da loja.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whats px-8 py-4 text-xs tracking-[0.2em] text-whats-foreground uppercase transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Falar com a melhor loja de Terenos
              </a>
            </div>
          </div>
        </section>


        {/* AVALIAÇÕES */}
        <section id="avaliacoes" className="border-y border-border bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="reveal flex flex-col items-center text-center">
              <span className="eyebrow">Avaliações</span>
              <p className="mt-4 font-display text-6xl">4,9</p>
              <div className="mt-2">
                <Estrelas />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">19 avaliações</p>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              {depoimentos.map((d) => (
                <blockquote
                  key={d}
                  className="reveal rounded-lg border border-border bg-card p-7 text-base leading-relaxed text-foreground/85"
                >
                  <Estrelas />
                  <p className="mt-4">“{d}”</p>
                </blockquote>
              ))}
            </div>

            <p className="reveal mt-12 text-center font-display text-2xl text-balance sm:text-3xl">
              Venha conhecer a DM Modas e descubra por que nossos clientes recomendam a loja.
            </p>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section id="localizacao" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="reveal grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <span className="eyebrow">Localização</span>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl">Onde estamos</h2>
              </div>
              <address className="text-base leading-relaxed text-muted-foreground not-italic lg:text-right">
                Av. Dr. Ari Coelho de Oliveira, 238
                <br />
                Centro – Terenos/MS
                <br />
                CEP 79190-000
              </address>
            </div>

            <div className="reveal mt-10">
              <MapaInterativo />
            </div>

            <div className="reveal mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={MAPS_ROTA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-primary/90"
              >
                <MapPin className="size-4" aria-hidden="true" />
                Como chegar
              </a>
              <a
                href={`tel:${LOJA.telefoneLink}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/25 px-8 py-4 text-xs tracking-[0.2em] uppercase transition-colors hover:border-primary hover:text-primary"
              >
                <Phone className="size-4" aria-hidden="true" />
                Ligar agora
              </a>
            </div>
          </div>
        </section>

        {/* INFORMAÇÕES RÁPIDAS */}
        <section id="contato" className="border-y border-border bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="reveal max-w-2xl">
              <span className="eyebrow">Contato</span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">Informações rápidas</h2>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {infos.map((i) => (
                <article key={i.titulo} className="reveal rounded-lg border border-border bg-card p-7">
                  <i.icon className="size-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-2xl">{i.titulo}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{i.texto}</p>
                </article>
              ))}
            </div>

            {/* HORÁRIO */}
            <div className="reveal mt-14 rounded-lg border border-border bg-card p-8 text-center sm:p-12">
              <Clock className="mx-auto size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-5 font-display text-3xl">Horário de funcionamento</h3>
              <p className="mt-3 text-muted-foreground">
                Consulte os horários atualizados pelo WhatsApp ou telefone.
              </p>
              <a
                href={whatsappLink(
                  "Olá! Vim pelo site da DM Modas e gostaria de saber o horário de funcionamento.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-whats px-8 py-4 text-xs tracking-[0.2em] text-whats-foreground uppercase transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Consultar horário
              </a>
            </div>
          </div>
        </section>

        {/* CERTIFICADOS */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="reveal max-w-2xl">
              <span className="eyebrow">Certificados</span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">
                Vários certificados de reconhecimento
              </h2>
              <p className="mt-4 text-muted-foreground">
                A DM Modas possui vários certificados que comprovam a qualidade das peças, a
                excelência no atendimento e a confiança de quem compra na loja.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certificados.map((c) => (
                <article
                  key={c}
                  className="reveal flex items-start gap-4 rounded-lg border border-border bg-card p-7"
                >
                  <BadgeCheck className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
                  <p className="font-display text-2xl leading-snug">{c}</p>
                </article>
              ))}
            </div>
          </div>
        </section>


        {/* CTA FINAL */}
        <section className="bg-ink py-20 text-foreground lg:py-28">
          <div className="reveal mx-auto max-w-3xl px-5 text-center lg:px-8">
            <h2 className="font-display text-4xl text-balance sm:text-5xl">
              Seu próximo look pode estar aqui.
            </h2>
            <p className="mt-5 text-foreground/70">
              Venha conhecer a DM Modas em Terenos ou fale conosco pelo WhatsApp.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={MAPS_ROTA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-xs tracking-[0.2em] text-primary-foreground uppercase"
              >
                <MapPin className="size-4" aria-hidden="true" />
                Como chegar
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-whats px-8 py-4 text-xs tracking-[0.2em] text-whats-foreground uppercase"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="font-display text-2xl tracking-[0.18em] uppercase">DM Modas</p>
            <p className="mt-2 text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Prazer em vesti-los
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            <address className="not-italic">
              Av. Dr. Ari Coelho de Oliveira, 238 – Centro – Terenos/MS
            </address>
            <a href={`tel:${LOJA.telefoneLink}`} className="mt-2 inline-block hover:text-primary">
              {LOJA.telefoneExibicao}
            </a>
          </div>
          <nav className="grid grid-cols-2 gap-2 text-sm" aria-label="Navegação do rodapé">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="text-muted-foreground hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mx-auto mt-12 max-w-7xl px-5 text-xs text-muted-foreground lg:px-8">
          © 2026 DM Modas. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
