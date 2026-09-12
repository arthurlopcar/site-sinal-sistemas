import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,vue}',
    './components/**/*.{js,ts,vue}',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        sinal: {
          ink: '#07121E',
          navy: '#0C1F2E',
          surface: '#112838',
          paper: '#F1F3ED',
          lime: '#D6FF4F',
          cyan: '#74E6E8',
          muted: '#A7B4BA',
          olive: '#52625A'
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace']
      }
    }
  }
} satisfies Config
