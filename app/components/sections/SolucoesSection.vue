<template>
  <section id="solucoes" class="scroll-mt-24 border-b border-white/10 bg-sinal-paper text-sinal-ink py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div data-reveal class="mb-14">
        <div class="inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-[0.24em] text-sinal-olive font-bold">
          <span class="text-sinal-ink">[ 02 ]</span>
          <span>/ nossos produtos e serviços</span>
        </div>

        <h2 class="mt-6 text-4xl sm:text-6xl font-extrabold leading-[0.96] tracking-[-0.04em] text-sinal-ink max-w-4xl">
          Soluções certas para o tamanho do seu negócio.
        </h2>

        <p class="mt-6 text-xl sm:text-2xl leading-relaxed text-sinal-olive max-w-3xl font-normal">
          Escolha o que sua empresa precisa agora. Implementamos tudo do zero e deixamos pronto e testado para você.
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-3">
        <article
          v-for="(solucao, index) in solucoes"
          :key="solucao.title"
          data-reveal
          class="rounded-2xl border-2 border-sinal-ink/20 bg-white p-8 sm:p-10 shadow-xl flex flex-col justify-between transition duration-300 hover:border-sinal-ink hover:shadow-2xl"
        >
          <div>
            <div class="flex items-center justify-between font-mono text-xs sm:text-sm font-bold text-sinal-olive">
              <span class="text-sinal-ink">[ 0{{ index + 1 }} ]</span>
              <span class="uppercase tracking-widest text-xs rounded bg-sinal-ink/10 px-3 py-1 text-sinal-ink">{{ solucao.badge }}</span>
            </div>

            <h3 class="mt-6 text-3xl font-bold tracking-tight text-sinal-ink">
              {{ solucao.title }}
            </h3>

            <p class="mt-4 text-base sm:text-lg leading-relaxed text-sinal-olive font-medium">
              {{ solucao.description }}
            </p>

            <ul class="mt-8 space-y-3 border-t border-sinal-ink/15 pt-6 font-mono text-xs sm:text-sm text-sinal-ink font-semibold">
              <li v-for="feature in solucao.features" :key="feature" class="flex items-start gap-2.5">
                <span class="text-sinal-ink font-bold">✓</span>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>

          <div class="mt-10 pt-6 border-t border-sinal-ink/10">
            <a
              :href="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-full items-center justify-center gap-3 bg-sinal-ink px-6 py-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-sinal-lime rounded-lg transition hover:bg-sinal-olive hover:text-white"
            >
              Consultar Valores ↗
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  whatsappLink: string
}>()

const solucoes = [
  {
    title: 'Site Profissional',
    badge: 'Presença Digital',
    description: 'Sua vitrine profissional na internet com domínio próprio. Aparece no Google quando clientes buscam pelos seus serviços no seu bairro ou cidade.',
    features: [
      'Domínio próprio permanente (.com.br)',
      'Botão de contato direto no WhatsApp',
      'Layout otimizado para celular e Google (SEO)',
      'Design limpo sem depender só de rede social'
    ]
  },
  {
    title: 'Agente de IA 24h',
    badge: 'Atendimento WhatsApp',
    description: 'Atendimento automático no WhatsApp treinado exclusivamente com as informações reais do seu negócio (preços, serviços, horários e dúvidas).',
    features: [
      'Atendimento 24 horas por dia, 7 dias por semana',
      'Qualifica contatos e responde dúvidas frequentes',
      'Agendamento automático via Cal.com por profissional',
      'Reengajamento de clientes que somem na conversa'
    ]
  },
  {
    title: 'Combo (Site + Agente)',
    badge: 'Solução Completa',
    description: 'A combinação perfeita: o site atrai e transmite credibilidade, e o Agente de IA atende e conclui o agendamento no WhatsApp de imediato.',
    features: [
      'Site Profissional + Agente de IA integrados',
      'Implementação completa do zero sem complicação',
      'Agendas individuais por profissional da equipe',
      'Suporte mensal contínuo incluso'
    ]
  }
]
</script>
