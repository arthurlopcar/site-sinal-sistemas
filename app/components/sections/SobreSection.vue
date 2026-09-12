<template>
  <section id="sobre" class="scroll-mt-24 border-b border-white/10 bg-sinal-navy py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div data-reveal>
          <SectionBadge texto="a sinal sistemas" />

          <h2 class="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-6xl text-white">
            Solução simples e honesta para o <span class="text-sinal-cyan">atendimento do seu negócio</span>.
          </h2>

          <p class="mt-6 text-xl leading-relaxed text-sinal-muted font-normal sm:text-2xl">
            A Sinal Sistemas foi criada para ajudar pequenos negócios locais no Brasil a nunca mais perderem clientes potenciais no WhatsApp por falta de resposta rápida.
          </p>

          <p class="mt-5 text-lg leading-relaxed text-sinal-muted">
            Sabemos como é a rotina: quando você está atendendo um cliente, o WhatsApp toca. Se a resposta demora minutos ou horas, esse cliente vai direto para o concorrente. Nós resolvemos esse atrito unindo um <strong class="text-white font-bold">Site Profissional</strong> a um <strong class="text-sinal-lime font-bold">Agente de Inteligência Artificial</strong> que responde de imediato, 24 horas por dia.
          </p>

          <div class="mt-10 grid gap-4 sm:grid-cols-2 font-mono text-sm">
            <div class="rounded-xl border border-white/15 bg-sinal-surface p-5">
              <span class="block text-sinal-muted text-xs uppercase">PÚBLICO FOCO</span>
              <strong class="mt-1 block text-base text-white">Barbearias, Clínicas & Imobiliárias</strong>
            </div>
            <div class="rounded-xl border border-white/15 bg-sinal-surface p-5">
              <span class="block text-sinal-muted text-xs uppercase">AGENDAMENTO</span>
              <strong class="mt-1 block text-base text-sinal-lime">Cal.com Self-Hosted</strong>
            </div>
          </div>
        </div>

        <div data-reveal class="relative">
          <div class="rounded-2xl border border-white/15 bg-sinal-ink p-8 sm:p-10 shadow-2xl">
            <div class="flex items-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-widest text-sinal-lime font-bold">
              <span class="h-2.5 w-2.5 rounded-full bg-sinal-lime"></span>
              <span>Nosso Compromisso com Você</span>
            </div>

            <h3 class="mt-6 text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              "Expectativa precisa vale mais que promessa exagerada. Não vendemos fórmulas mágicas, entregamos tecnologia e tempo livre."
            </h3>

            <div class="mt-8 space-y-4 border-t border-white/10 pt-6 font-mono text-sm">
              <div class="flex items-center justify-between">
                <span class="text-sinal-muted">Velocidade de Resposta</span>
                <span class="text-sinal-lime font-bold">Imediata (24/7)</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sinal-muted">Presença Digital Própria</span>
                <span class="text-sinal-cyan font-bold">Domínio Próprio</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sinal-muted">Suporte e Atualizações</span>
                <span class="text-white font-bold">Incluso na Mensalidade</span>
              </div>
            </div>

            <div class="mt-8 pt-2">
              <ActionButton
                texto="Conversar com a Sinal Sistemas"
                :href="whatsappLink"
                is-external
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ActionButton from '../ui/ActionButton.vue'
import SectionBadge from '../ui/SectionBadge.vue'

defineProps<{
  whatsappLink: string
}>()
</script>
