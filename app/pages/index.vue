<template>
  <main class="relative min-h-screen bg-sinal-ink text-sinal-paper">
    <!-- Header sticky -->
    <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-sinal-ink/90 backdrop-blur-md">
      <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" @click.prevent="scrollToSection('inicio')" class="flex shrink-0 items-center gap-3 transition hover:opacity-90">
          <div class="grid h-10 w-10 shrink-0 place-items-center rounded bg-sinal-lime text-sinal-ink font-mono font-bold text-lg">
            S/
          </div>
          <div class="whitespace-nowrap">
            <p class="font-mono text-sm font-bold uppercase tracking-[0.2em] text-white">Sinal Sistemas</p>
            <p class="text-[10px] font-mono uppercase tracking-[0.22em] text-sinal-lime">Agentes de IA & Sites</p>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden items-center gap-7 font-mono text-sm font-bold uppercase tracking-[0.16em] text-sinal-muted lg:flex">
          <a class="whitespace-nowrap transition hover:text-sinal-lime" href="#sobre" @click.prevent="scrollToSection('sobre')">A Sinal</a>
          <a class="whitespace-nowrap transition hover:text-sinal-lime" href="#solucoes" @click.prevent="scrollToSection('solucoes')">Soluções</a>
          <a class="whitespace-nowrap transition hover:text-sinal-lime" href="#portfolio" @click.prevent="scrollToSection('portfolio')">Portfólio</a>
          <a class="whitespace-nowrap transition hover:text-sinal-lime" href="#metodo" @click.prevent="scrollToSection('metodo')">Como Funciona</a>
          <a class="whitespace-nowrap transition hover:text-sinal-lime" href="#resultados" @click.prevent="scrollToSection('resultados')">Garantias</a>
          <a class="whitespace-nowrap transition hover:text-sinal-lime" href="#contato" @click.prevent="scrollToSection('contato')">Contato</a>
        </nav>

        <!-- Mobile menu toggle -->
        <button
          class="grid h-11 w-11 shrink-0 place-items-center rounded border border-white/20 text-white lg:hidden"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Menu"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span class="font-mono text-2xl">{{ isMobileMenuOpen ? '✕' : '☰' }}</span>
        </button>
      </div>

      <!-- Mobile dropdown nav -->
      <nav v-if="isMobileMenuOpen" class="border-t border-white/10 bg-sinal-ink px-5 py-6 lg:hidden font-mono text-sm font-bold uppercase tracking-wider space-y-3">
        <a class="block rounded border border-white/10 px-4 py-3 text-sinal-muted hover:text-sinal-lime" href="#sobre" @click.prevent="scrollToSection('sobre')">A Sinal</a>
        <a class="block rounded border border-white/10 px-4 py-3 text-sinal-muted hover:text-sinal-lime" href="#solucoes" @click.prevent="scrollToSection('solucoes')">Soluções</a>
        <a class="block rounded border border-white/10 px-4 py-3 text-sinal-muted hover:text-sinal-lime" href="#portfolio" @click.prevent="scrollToSection('portfolio')">Portfólio</a>
        <a class="block rounded border border-white/10 px-4 py-3 text-sinal-muted hover:text-sinal-lime" href="#metodo" @click.prevent="scrollToSection('metodo')">Como Funciona</a>
        <a class="block rounded border border-white/10 px-4 py-3 text-sinal-muted hover:text-sinal-lime" href="#resultados" @click.prevent="scrollToSection('resultados')">Garantias</a>
        <a class="block rounded border border-white/10 px-4 py-3 text-sinal-muted hover:text-sinal-lime" href="#contato" @click.prevent="scrollToSection('contato')">Contato</a>
        <a :href="whatsappLink" target="_blank" class="block rounded bg-sinal-lime px-4 py-3 font-bold text-center text-sinal-ink">Falar no WhatsApp ↗</a>
      </nav>
    </header>

    <HeroSection :whatsapp-link="whatsappLink" />

    <!-- Exact Section Order requested by founder -->
    <SobreSection :whatsapp-link="whatsappLink" />
    <SolucoesSection :whatsapp-link="whatsappLink" />
    <PortfolioSection />
    <MetodoSection />
    <DepoimentosSection />
    <ContatoSection :whatsapp-link="whatsappLink" />
  </main>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import ContatoSection from '~/components/sections/ContatoSection.vue'
import DepoimentosSection from '~/components/sections/DepoimentosSection.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import MetodoSection from '~/components/sections/MetodoSection.vue'
import PortfolioSection from '~/components/sections/PortfolioSection.vue'
import SolucoesSection from '~/components/sections/SolucoesSection.vue'
import SobreSection from '~/components/sections/SobreSection.vue'

const isMobileMenuOpen = ref(false)
const whatsappLink = 'https://wa.me/5531996907206?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Sinal%20Sistemas.'

let revealObserver: IntersectionObserver | null = null

const setupRevealAnimations = () => {
  if (typeof window === 'undefined') return

  revealObserver?.disconnect()
  const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        revealObserver?.unobserve(entry.target)
      })
    },
    { threshold: 0.12 }
  )

  elements.forEach((el) => revealObserver?.observe(el))
}

const scrollToSection = (id: string) => {
  isMobileMenuOpen.value = false
  const target = document.getElementById(id)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(() => {
  nextTick(() => {
    setupRevealAnimations()
  })
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
})
</script>
