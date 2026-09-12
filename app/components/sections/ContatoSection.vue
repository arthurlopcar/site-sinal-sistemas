<template>
  <footer id="contato" class="scroll-mt-24 bg-sinal-ink text-sinal-paper border-t border-white/10">
    <div class="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div data-reveal>
          <SectionBadge texto="vamos conversar" index="06" />

          <h2 class="mt-6 text-4xl sm:text-6xl font-extrabold leading-[0.95] tracking-[-0.05em] text-white">
            Pronto para colocar um <span class="text-sinal-lime">Atendimento 24h</span> no seu negócio?
          </h2>

          <p class="mt-6 text-xl sm:text-2xl leading-relaxed text-sinal-muted font-normal">
            Fale diretamente com o Arthur Carrijo, fundador da Sinal Sistemas. Analisamos o seu momento e apresentamos a melhor opção (Site, Agente de IA ou Combo) com condição especial de lançamento.
          </p>

          <div class="mt-10 space-y-4 font-mono text-sm sm:text-base">
            <div class="flex items-center gap-3 text-sinal-muted">
              <span class="text-sinal-lime font-bold">💬 WhatsApp Comercial:</span>
              <a :href="whatsappLink" target="_blank" class="text-white font-bold hover:text-sinal-lime transition">
                +55 (31) 99690-7206
              </a>
            </div>

            <div class="flex items-center gap-3 text-sinal-muted">
              <span class="text-sinal-lime font-bold">✉ E-mail Direto:</span>
              <a href="mailto:contato@sinalsistemas.com.br" class="text-white font-bold hover:text-sinal-lime transition">
                contato@sinalsistemas.com.br
              </a>
            </div>

            <div class="flex items-center gap-3 text-sinal-muted">
              <span class="text-sinal-lime font-bold">📅 Agendamento de Reunião:</span>
              <a href="https://cal.sinalsistemas.com.br" target="_blank" rel="noopener noreferrer" class="text-sinal-cyan font-bold hover:underline">
                cal.sinalsistemas.com.br ↗
              </a>
            </div>
          </div>

          <div class="mt-10">
            <ActionButton
              texto="Iniciar Conversa no WhatsApp"
              :href="whatsappLink"
              is-external
              variant="primary"
            />
          </div>
        </div>

        <div data-reveal class="terminal-box rounded-2xl p-8 sm:p-10">
          <h3 class="font-mono text-sm sm:text-base font-bold uppercase tracking-widest text-sinal-lime">
            &gt; Solicite uma proposta rápida
          </h3>
          <p class="mt-2 text-xs sm:text-sm text-sinal-muted">
            Preencha abaixo para abrirmos o WhatsApp já com os seus dados pré-preenchidos.
          </p>

          <form @submit.prevent="handleSubmit" class="mt-6 space-y-5 font-mono text-xs sm:text-sm">
            <div>
              <label class="block text-sinal-muted uppercase font-bold mb-1.5">Seu Nome / Nome da Empresa</label>
              <input
                v-model="form.nome"
                type="text"
                placeholder="Ex: Arthur / Barbearia Silva"
                required
                class="w-full rounded-lg border-2 border-white/20 bg-sinal-navy px-4 py-3.5 text-white text-sm sm:text-base placeholder-sinal-muted/50 focus:border-sinal-lime focus:outline-none"
              />
            </div>

            <div>
              <label class="block text-sinal-muted uppercase font-bold mb-1.5">Tipo do seu Negócio</label>
              <select
                v-model="form.segmento"
                class="w-full rounded-lg border-2 border-white/20 bg-sinal-navy px-4 py-3.5 text-white text-sm sm:text-base focus:border-sinal-lime focus:outline-none"
              >
                <option value="Barbearia">Barbearia</option>
                <option value="Clínica Odontológica">Clínica Odontológica</option>
                <option value="Clínica de Estética">Clínica de Estética</option>
                <option value="Imobiliária / Construtora">Imobiliária / Construtora</option>
                <option value="Outro Pequeno Negócio">Outro Pequeno Negócio</option>
              </select>
            </div>

            <div>
              <label class="block text-sinal-muted uppercase font-bold mb-1.5">Seu WhatsApp</label>
              <input
                v-model="form.telefone"
                type="tel"
                placeholder="(31) 99999-9999"
                required
                class="w-full rounded-lg border-2 border-white/20 bg-sinal-navy px-4 py-3.5 text-white text-sm sm:text-base placeholder-sinal-muted/50 focus:border-sinal-lime focus:outline-none"
              />
            </div>

            <div>
              <label class="block text-sinal-muted uppercase font-bold mb-1.5">Qual produto tem interesse?</label>
              <select
                v-model="form.produto"
                class="w-full rounded-lg border-2 border-white/20 bg-sinal-navy px-4 py-3.5 text-white text-sm sm:text-base focus:border-sinal-lime focus:outline-none"
              >
                <option value="Combo (Site + Agente de IA 24h)">Combo (Site + Agente de IA 24h)</option>
                <option value="Apenas Agente de IA 24h">Apenas Agente de IA 24h</option>
                <option value="Apenas Site Profissional">Apenas Site Profissional</option>
              </select>
            </div>

            <button
              type="submit"
              class="w-full rounded-lg bg-sinal-lime py-4 font-bold uppercase tracking-wider text-sinal-ink text-sm sm:text-base hover:bg-white transition"
            >
              Falar no WhatsApp Agora ↗
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom footer bar -->
      <div class="mt-20 border-t border-white/10 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between font-mono text-xs sm:text-sm text-sinal-muted">
        <p>© 2026 Sinal Sistemas — Arthur Carrijo. Todos os direitos reservados.</p>
        <div class="flex items-center gap-6 font-bold">
          <NuxtLink to="/privacidade" class="hover:text-sinal-lime transition">Política de Privacidade</NuxtLink>
          <NuxtLink to="/termos" class="hover:text-sinal-lime transition">Termos de Uso</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ActionButton from '../ui/ActionButton.vue'
import SectionBadge from '../ui/SectionBadge.vue'

const props = defineProps<{
  whatsappLink: string
}>()

const form = ref({
  nome: '',
  segmento: 'Barbearia',
  telefone: '',
  produto: 'Combo (Site + Agente de IA 24h)'
})

const handleSubmit = () => {
  const text = encodeURIComponent(
    `Olá Arthur! Vim pelo site da Sinal Sistemas.\n\nNome/Empresa: ${form.value.nome}\nSegmento: ${form.value.segmento}\nTelefone: ${form.value.telefone}\nInteresse: ${form.value.produto}`
  )
  window.open(`https://wa.me/5531996907206?text=${text}`, '_blank', 'noopener,noreferrer')
}
</script>
