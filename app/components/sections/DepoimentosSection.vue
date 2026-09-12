<template>
  <section id="resultados" class="scroll-mt-24 border-b border-white/10 py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div data-reveal class="text-center max-w-4xl mx-auto">
        <SectionBadge texto="garantias & transparência" />

        <h2 class="mt-6 text-4xl sm:text-6xl font-extrabold leading-[0.95] tracking-[-0.04em] text-white">
          O que a Sinal Sistemas <span class="text-sinal-lime">garante</span> para seu negócio.
        </h2>

        <p class="mt-6 text-xl sm:text-2xl leading-relaxed text-sinal-muted font-normal">
          Transparência total desde o primeiro dia. Preferimos alinhar expectativas reais a fazer promessas exageradas que a tecnologia não pode cumprir sozinha.
        </p>
      </div>

      <div class="mt-16 grid gap-8 md:grid-cols-2">
        <!-- Garantias Oficiais -->
        <div data-reveal class="terminal-box rounded-2xl p-8 sm:p-10 border-2 border-sinal-lime/40">
          <div class="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-sinal-lime font-bold">
            <span class="text-lg">[✓]</span>
            <span>Nossas Garantias de Entrega</span>
          </div>

          <ul class="mt-8 space-y-4 font-mono text-xs sm:text-sm text-sinal-paper font-medium">
            <li class="flex items-start gap-3">
              <span class="text-sinal-lime font-bold text-base">✓</span>
              <span><strong>Site no ar e testado:</strong> entregamos sua vitrine digital funcionando perfeitamente em celulares e computadores.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-sinal-lime font-bold text-base">✓</span>
              <span><strong>Agente treinado com seus dados:</strong> respostas alinhadas com seus preços, horários e regras operacionais.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-sinal-lime font-bold text-base">✓</span>
              <span><strong>Prazo de entrega combinado:</strong> cronograma prévio para o projeto entrar no ar sem surpresas.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-sinal-lime font-bold text-base">✓</span>
              <span><strong>Período de ajustes sem custo:</strong> refinamos as respostas do agente após os primeiros testes reais.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-sinal-lime font-bold text-base">✓</span>
              <span><strong>Conformidade com a LGPD:</strong> segurança e privacidade no tratamento de contatos do seu negócio.</span>
            </li>
          </ul>
        </div>

        <!-- O que não prometemos (Honestidade) -->
        <div data-reveal class="terminal-box rounded-2xl p-8 sm:p-10 border-2 border-sinal-cyan/40">
          <div class="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-sinal-cyan font-bold">
            <span class="text-lg">[ℹ]</span>
            <span>Comunicação Honesta e Sem Ilusão</span>
          </div>

          <p class="mt-6 text-base sm:text-lg leading-relaxed text-sinal-muted">
            O Agente de IA reduz atrito, economiza horas do seu dia e impede que clientes fiquem sem resposta à noite ou em fins de semana. Porém, por honestidade comercial:
          </p>

          <ul class="mt-6 space-y-4 font-mono text-xs sm:text-sm text-sinal-muted font-medium">
            <li class="flex items-start gap-3">
              <span class="text-sinal-cyan font-bold text-base">ℹ</span>
              <span><strong>Não prometemos fórmulas mágicas:</strong> o volume final de clientes depende da demanda e do seu fluxo de atração (Instagram, anúncios, indicação).</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-sinal-cyan font-bold text-base">ℹ</span>
              <span><strong>Compromisso com correção rápida:</strong> caso o agente encontre alguma dúvida atípica, nosso suporte atua de imediato para ajustar a base de conhecimento.</span>
            </li>
          </ul>

          <div class="mt-8 pt-6 border-t border-white/10 font-mono text-xs text-sinal-lime">
            💡 Comparativo simples: um funcionário humano para cobrir 24h/7d custaria milhares de reais por mês. O Agente de IA custa uma fração por dia.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionBadge from '../ui/SectionBadge.vue'
</script>
