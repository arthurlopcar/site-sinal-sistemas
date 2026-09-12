// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Sinal Sistemas | Sites Profissionais e Agentes de IA 24h para Negócios Locais',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'A Sinal Sistemas cria sites profissionais e agentes de inteligência artificial que atendem, qualificam e agendam clientes no WhatsApp 24 horas por dia.'
        },
        {
          name: 'keywords',
          content: 'sinal sistemas, agente de ia whatsapp, site profissional, agendamento 24h, cal.com, atendimento automatico, clinicas, barbearias, imobiliarias'
        },
        {
          property: 'og:title',
          content: 'Sinal Sistemas | Atendimento 24h no WhatsApp & Sites Profissionais'
        },
        {
          property: 'og:description',
          content: 'Nunca mais perca um cliente por demora no atendimento. Sites modernos + Agentes de IA treinados com os dados da sua empresa.'
        },
        { property: 'og:type', content: 'website' },
        { name: 'theme-color', content: '#07121E' }
      ],
      link: [
        { rel: 'canonical', href: 'https://sinalsistemas.com.br/' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      businessName: 'Sinal Sistemas',
      whatsappNumber: '5531996907206',
      contactEmail: 'contato@sinalsistemas.com.br'
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  }
})
