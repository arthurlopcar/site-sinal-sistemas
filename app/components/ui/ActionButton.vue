<template>
  <a
    v-if="href"
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :class="buttonClasses"
  >
    <span>{{ texto }}</span>
    <span v-if="icon" aria-hidden="true" class="font-mono text-sm">{{ icon }}</span>
  </a>
  <button
    v-else
    :type="type || 'button'"
    :class="buttonClasses"
  >
    <span>{{ texto }}</span>
    <span v-if="icon" aria-hidden="true" class="font-mono text-sm">{{ icon }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    texto: string
    href?: string
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    icon?: string
    isExternal?: boolean
    type?: 'button' | 'submit'
  }>(),
  {
    variant: 'primary',
    isExternal: false,
    icon: '↗'
  }
)

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center gap-3.5 px-7 py-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.18em] transition-all duration-300 rounded-lg'
  
  switch (props.variant) {
    case 'primary':
      return `${base} bg-sinal-lime text-sinal-ink hover:bg-white hover:shadow-[0_0_30px_rgba(214,255,79,0.45)]`
    case 'secondary':
      return `${base} bg-sinal-surface border border-sinal-lime/50 text-sinal-lime hover:border-sinal-lime hover:bg-sinal-lime hover:text-sinal-ink`
    case 'outline':
      return `${base} border-2 border-white/25 text-sinal-paper hover:border-sinal-lime hover:text-sinal-lime hover:bg-sinal-lime/10`
    case 'ghost':
      return `${base} text-sinal-cyan hover:text-white`
    default:
      return `${base} bg-sinal-lime text-sinal-ink`
  }
})
</script>
