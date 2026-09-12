<template>
  <section id="metodo" class="scroll-mt-24 border-b border-white/10 py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div data-reveal>
          <SectionBadge texto="como funciona o processo" />

          <h2 class="mt-6 text-4xl sm:text-6xl font-extrabold leading-[0.95] tracking-[-0.04em] text-white">
            Passos simples do primeiro contato ao <span class="text-sinal-lime">atendimento 24h no ar</span>.
          </h2>

          <p class="mt-6 text-xl sm:text-2xl leading-relaxed text-sinal-muted font-normal">
            Você não precisa se preocupar com nada técnico. Cuidamos de toda a implementação, treinamento do agente e testes.
          </p>

          <div class="mt-10 rounded-2xl border border-white/15 bg-sinal-surface p-6 font-mono text-sm sm:text-base">
            <p class="text-sinal-cyan font-bold uppercase tracking-wider">[ 💡 SEM COMPLICAÇÃO ]</p>
            <p class="mt-2 text-sinal-muted leading-relaxed font-normal">
              Entregamos a solução pronta e funcionando. Caso queira alterar um preço ou serviço no futuro, nosso suporte mensal já inclui essas atualizações.
            </p>
          </div>
        </div>

        <div class="space-y-5">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            data-reveal
            class="group rounded-2xl border border-white/15 bg-sinal-navy p-6 sm:p-8 transition duration-300 hover:border-sinal-lime/50 hover:bg-sinal-surface"
          >
            <div class="flex items-start gap-5">
              <span class="grid h-12 w-12 shrink-0 place-items-center rounded-xl border-2 border-sinal-lime/40 bg-sinal-lime/10 font-mono text-base sm:text-lg font-bold text-sinal-lime">
                0{{ index + 1 }}
              </span>

              <div>
                <h3 class="text-2xl font-bold text-white tracking-tight group-hover:text-sinal-lime">
                  {{ step.title }}
                </h3>
                <p class="mt-3 text-base sm:text-lg leading-relaxed text-sinal-muted font-normal">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionBadge from '../ui/SectionBadge.vue'

const steps = [
  {
    title: 'Levantamento de Informações',
    description: 'Coletamos os detalhes do seu negócio: serviços, tabela de preços, horários de atendimento, regras e perguntas mais frequentes dos clientes.'
  },
  {
    title: 'Criação do Site & Agendas (Cal.com)',
    description: 'Desenvolvemos sua vitrine digital com botão de WhatsApp e configuramos suas agendas de atendimento (individuais por profissional, se houver).'
  },
  {
    title: 'Treinamento e Testes Rigorosos do Agente',
    description: 'Treinamos o Agente de IA com seus dados e realizamos simulações reais de conversas para garantir que as respostas sejam perfeitas antes do lançamento.'
  },
  {
    title: 'Agente 24h no Ar & Suporte Mensal',
    description: 'Seu atendimento entra no ar operando 24h por dia. Garantimos suporte contínuo para ajustes no dia a dia e manutenção das ferramentas.'
  }
]
</script>
