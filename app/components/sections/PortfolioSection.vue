<template>
  <section id="portfolio" class="scroll-mt-24 border-b border-white/10 bg-sinal-navy py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div data-reveal class="mb-14">
        <SectionBadge texto="portfólio & projetos demonstrativos" />

        <h2 class="mt-6 text-4xl sm:text-6xl font-extrabold leading-[0.95] tracking-[-0.04em] text-white max-w-4xl">
          Veja como pode ficar a <span class="text-sinal-lime">presença digital</span> do seu negócio.
        </h2>

        <p class="mt-6 text-xl sm:text-2xl leading-relaxed text-sinal-muted max-w-3xl font-normal">
          Projetos desenvolvidos para diferentes segmentos locais. Abra cada link para ver a navegação real e imagine a sua empresa com esse padrão visual.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="projeto in projetos"
          :key="projeto.title"
          data-reveal
          class="group rounded-2xl border border-white/15 bg-sinal-ink overflow-hidden flex flex-col justify-between transition duration-300 hover:border-sinal-lime hover:shadow-[0_20px_50px_rgba(214,255,79,0.15)]"
        >
          <div>
            <!-- Imagem de Capa do Projeto -->
            <div class="relative h-56 overflow-hidden bg-sinal-surface">
              <img
                :src="projeto.image"
                :alt="projeto.title"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-90"
              />
              <div class="absolute bottom-4 left-4 rounded-md bg-sinal-lime px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-sinal-ink">
                {{ projeto.badge }}
              </div>
            </div>

            <div class="p-8">
              <h3 class="text-2xl font-bold tracking-tight text-white group-hover:text-sinal-lime">
                {{ projeto.title }}
              </h3>

              <p class="mt-3 text-base leading-relaxed text-sinal-muted">
                {{ projeto.description }}
              </p>
            </div>
          </div>

          <div class="p-8 pt-0">
            <a
              :href="projeto.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-full items-center justify-between rounded-lg border border-sinal-lime/50 bg-sinal-surface px-5 py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-sinal-lime transition duration-300 hover:bg-sinal-lime hover:text-sinal-ink"
            >
              <span>Abrir Projeto Demonstrativo</span>
              <span class="text-base font-bold">↗</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionBadge from '../ui/SectionBadge.vue'

const projetos = [
  {
    title: 'Atlas — Barbearia Premium',
    badge: 'Barbearia / Estética Masculina',
    description: 'Site institucional completo com tabela de serviços, apresentação dos profissionais, galeria e agendamento direto via WhatsApp.',
    url: 'https://barbearia-atlas-t1p8.vercel.app/',
    image: 'https://images.unsplash.com/photo-1503951458645-643d53bfd90f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Sorrio — Clínica Odontológica',
    badge: 'Saúde / Odontologia',
    description: 'Vitrine digital para clínica com apresentação de especialidades médicas, corpo clínico e fluxo automático de agendamento.',
    url: 'https://barbearia-atlas-t1p8.vercel.app/',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Mente & Equilíbrio — Consultório de Psicologia',
    badge: 'Psicologia / Saúde Mental',
    description: 'Página acolhedora com apresentação de abordagens terapêuticas, atendimento presencial/online e triagem inicial automática.',
    url: 'https://barbearia-atlas-t1p8.vercel.app/',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Juris & Associados — Escritório de Advocacia',
    badge: 'Direito / Advocacia',
    description: 'Site institucional para advogados com áreas de atuação, credibilidade corporativa e qualificação prévia de consultas jurídicas.',
    url: 'https://barbearia-atlas-t1p8.vercel.app/',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Lumière — Clínica Médica de Estética',
    badge: 'Estética Avançada / Medicina',
    description: 'Design sofisticado destacando tratamentos faciais/corporais, tecnologia utilizada, avaliação presencial e contato direto.',
    url: 'https://barbearia-atlas-t1p8.vercel.app/',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Prime — Imobiliária & Construtora',
    badge: 'Imóveis / Vendas',
    description: 'Página moderna para negócios imobiliários com destaque para lançamentos, galeria e direcionamento de leads qualificados.',
    url: 'https://barbearia-atlas-t1p8.vercel.app/',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80'
  }
]
</script>
