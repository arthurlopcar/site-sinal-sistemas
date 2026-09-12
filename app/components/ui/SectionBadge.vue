<template>
  <div class="inline-flex items-center gap-2.5 font-mono text-xs sm:text-sm uppercase tracking-[0.24em] font-bold text-sinal-lime">
    <span>/ {{ texto }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  texto: string
}>()
</script>
