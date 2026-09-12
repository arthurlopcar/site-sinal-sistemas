<template>
  <div class="min-h-screen bg-sinal-ink text-sinal-paper antialiased">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'pt-BR'
  },
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
  ]
})
</script>
