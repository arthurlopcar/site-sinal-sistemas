<template>
  <section id="inicio" class="relative overflow-hidden border-b border-white/10 pt-24 sm:pt-28 scroll-mt-24">
    <!-- Grid overlay background -->
    <div class="grid-pattern absolute inset-0 -z-10 opacity-30 pointer-events-none"></div>
    <div class="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-sinal-lime/10 blur-[120px] pointer-events-none"></div>
    <div class="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-sinal-cyan/10 blur-[120px] pointer-events-none"></div>

    <div class="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
      <div>
        <h1 data-reveal class="max-w-4xl text-5xl font-extrabold leading-[0.93] tracking-[-0.05em] sm:text-7xl lg:text-8xl text-white">
          Nunca mais perca um cliente por <span class="text-sinal-lime">demora no atendimento</span>.
        </h1>

        <p data-reveal class="mt-7 max-w-3xl text-xl leading-relaxed text-sinal-muted sm:text-2xl font-normal">
          Criamos o seu <strong class="text-white">Site Profissional</strong> e um <strong class="text-sinal-lime">Agente de Inteligência Artificial</strong> que responde dúvidas, qualifica contatos e agenda horários pelo WhatsApp 24 horas por dia.
        </p>

        <div data-reveal class="mt-10 flex flex-wrap items-center gap-5">
          <ActionButton
            texto="Falar no WhatsApp"
            :href="whatsappLink"
            is-external
            variant="primary"
          />
          <ActionButton
            texto="Conhecer as soluções"
            href="#solucoes"
            variant="outline"
            icon="↓"
          />
        </div>

        <div data-reveal class="mt-14 flex flex-wrap gap-8 sm:gap-10 border-t border-white/10 pt-8 font-mono text-sm sm:text-base">
          <div>
            <span class="block text-sinal-muted uppercase text-xs sm:text-sm">DISPONIBILIDADE</span>
            <strong class="mt-1 block text-2xl sm:text-3xl font-bold text-sinal-lime">Atendimento 24/7</strong>
          </div>
          <div>
            <span class="block text-sinal-muted uppercase text-xs sm:text-sm">TREINAMENTO</span>
            <strong class="mt-1 block text-2xl sm:text-3xl font-bold text-sinal-cyan">Com seus dados reais</strong>
          </div>
          <div>
            <span class="block text-sinal-muted uppercase text-xs sm:text-sm">AGENDAMENTO</span>
            <strong class="mt-1 block text-2xl sm:text-3xl font-bold text-white">Integrado ao Cal.com</strong>
          </div>
        </div>
      </div>

      <!-- Terminal Agent Mockup -->
      <div data-reveal class="relative">
        <div class="terminal-box rounded-2xl overflow-hidden">
          <div class="flex items-center justify-between border-b border-white/10 bg-sinal-ink/90 px-5 py-4 font-mono text-xs uppercase tracking-[0.18em] text-sinal-muted">
            <div class="flex items-center gap-2">
              <span class="h-3 w-3 rounded-full bg-red-500/80 inline-block"></span>
              <span class="h-3 w-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span class="h-3 w-3 rounded-full bg-green-500/80 inline-block"></span>
              <span class="ml-2 font-bold text-white">sinal@agente-ia:~</span>
            </div>
            <span class="text-sinal-lime flex items-center gap-1.5 font-bold">
              <span class="h-2.5 w-2.5 rounded-full bg-sinal-lime animate-pulse"></span>
              AGENTE ATIVO 24H
            </span>
          </div>

          <div class="space-y-4 p-6 font-mono text-xs sm:text-sm leading-relaxed">
            <div class="text-sinal-muted">
              <span class="text-sinal-lime">01</span> &gt; agente.init(<span class="text-sinal-cyan">"whatsapp_negocio"</span>)
            </div>
            <div class="border-l-2 border-sinal-lime bg-sinal-lime/10 p-3.5 rounded-r-lg text-sinal-paper">
              <span class="text-sinal-lime font-bold">CLIENTE (23:40):</span> "Olá! Qual o valor do atendimento e tem horário para amanhã?"
            </div>
            <div class="border-l-2 border-sinal-cyan bg-sinal-cyan/10 p-3.5 rounded-r-lg text-sinal-paper">
              <span class="text-sinal-cyan font-bold">AGENTE DE IA:</span> "Olá! O valor é R$ 80. Temos horário disponível às 10h e 15h. Gostaria de confirmar seu agendamento?"
            </div>
            <div class="border-l-2 border-white/30 bg-white/5 p-3.5 rounded-r-lg text-sinal-paper">
              <span class="text-white font-bold">CAL.COM INTEGRADO:</span> Horário das 10h reservado na agenda do profissional.
            </div>
            <div class="pt-2 text-sinal-lime flex items-center gap-2 font-bold">
              <span>&gt; Reengajamento automático caso o lead não responda...</span>
              <span class="h-4 w-2 bg-sinal-lime animate-ping"></span>
            </div>
          </div>
        </div>

        <div class="absolute -bottom-5 -left-4 hidden rounded-lg bg-sinal-cyan p-4 font-mono text-xs font-bold uppercase tracking-[0.14em] text-sinal-ink sm:block shadow-2xl">
          [✓] Treinado com as regras do seu negócio
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ActionButton from '../ui/ActionButton.vue'

defineProps<{
  whatsappLink: string
}>()
</script>
