# Sinal Sistemas — Site Institucional & Landing Page

Site moderno de alta conversão desenvolvido para a **Sinal Sistemas** (Inteligência e Automação para Saúde), construído com **Nuxt 3**, **Vue 3** e **Tailwind CSS**.

Inspirado na estética tech/terminal dark de alta performance (Lucas Designer Web).

---

## 🛠️ Tecnologias Utilizadas

- **Nuxt 3** / **Vue 3** (Composition API, `script setup lang="ts"`)
- **Tailwind CSS** (Tema customizado com paleta Dark/Ink + Verde Limão / Ciano)
- **Space Mono & DM Sans** (Google Fonts)
- **IntersectionObserver** (`data-reveal` para animações suaves na rolagem)

---

## 🚀 Como Rodar o Projeto

1. **Instalar as dependências**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse: `http://localhost:3000`

3. **Gerar build de produção**:
   ```bash
   npm run build
   ```

4. **Testar preview da produção**:
   ```bash
   npm run preview
   ```

---

## 🌐 Como Apontar para o Domínio `sinalsistemas.com.br`

1. Faça o upload deste projeto para um repositório no **GitHub**.
2. Conecte sua conta na **Vercel** ou **Netlify** e importe o repositório.
3. No painel de DNS onde você gerencia o seu domínio `sinalsistemas.com.br` (ex: Registro.br, Cloudflare ou Hostinger):
   - Adicione o registro **A**: `@` ➔ `76.76.21.21` (IP da Vercel)
   - Adicione o registro **CNAME**: `www` ➔ `cname.vercel-dns.com`
4. A hospedagem irá gerar automaticamente o certificado SSL (HTTPS) gratuito.
