# 🩺 Massahud Diagnósticos | Dr. Paulo Massahud

> **Ultrassonografia Humanizada e Diagnóstico Preciso em Belo Horizonte.**

Este projeto é uma Landing Page de alta performance desenvolvida para a clínica **Massahud Diagnósticos**, sob a liderança do **Dr. Paulo Massahud**. O objetivo central é unir autoridade médica, tecnologia de ponta e um design que transmite acolhimento e segurança para pacientes obstétricos e diagnósticos.

---

## 💎 O Conceito (Brand Soul)

A identidade visual e a experiência do usuário foram projetadas para refletir o equilíbrio entre a frieza da precisão técnica e o calor do atendimento humano.
- **Design System:** Baseado em tons de Azul Naval (Autoridade) e Ouro Acetinado (Otimismo/Vida).
- **UX Premium:** Interface fluida com animações de "Liquid Mesh" que simbolizam o ambiente uterino e a fluidez diagnóstica.

---

## 🚀 Stack Tecnológica

O projeto utiliza o que há de mais moderno no ecossistema Frontend para garantir velocidade (Core Web Vitals) e indexação (SEO):

- **Core:** [Next.js 14+](https://nextjs.org/) (App Router).
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) para segurança de tipos.
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) com design system customizado.
- **Animações:** [Framer Motion](https://www.framer.com/motion/) para interações e transições suaves.
- **SEO/AEO:** Implementação completa de Metadados, `robots.ts`, `sitemap.ts` e dados estruturados (JSON-LD) para alta performance em motores de busca e assistentes de IA.

---

## 📊 Inteligência de Dados & Marketing (Tracking)

A arquitetura foi preparada para campanhas de tráfego pago (Google Ads e Meta) de alta conversão:

### 1. Central de Analytics Segura
Os IDs de rastreamento são gerenciados via **variáveis de ambiente** (`.env.local`), evitando exposição de chaves no repositório.
- **Google Tag Manager (GTM)**
- **Google Analytics 4 (GA4)**
- **Google Ads Tracking**
- **Meta Pixel (Facebook)**

### 2. Mapeamento de Cliques (Tagging)
Todos os pontos de conversão possuem IDs exclusivos para facilitar a criação de gatilhos no GTM/Ads:
- `cta-nav-button`: Agendamentos via menu superior.
- `cta-hero-whatsapp`: Conversão direta no topo da página.
- `cta-hero-google`: Engajamento com prova social (avaliações).
- `cta-exames-agendar`: Interesse gerado na grade de exames.
- `cta-faq-whatsapp`: Conversão após sanar dúvidas.
- `cta-footer-whatsapp`: Contato no encerramento da jornada.

---

## 🛠️ Configuração e Instalação

1. **Clonar o projeto:**
   ```bash
   git clone https://github.com/gpereira12/lp-massahud.git
   ```

2. **Instalar dependências:**
   ```bash
   npm install
   ```

3. **Configurar Variáveis de Ambiente:**
   Crie um arquivo `.env.local` na raiz e adicione seus IDs:
   ```env
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_ADS_ID=AW-XXXXXXXXXXX
   NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXX
   ```

4. **Rodar em desenvolvimento:**
   ```bash
   npm run dev
   ```

---

## 👤 Créditos

- **Projeto:** [Massahud Diagnósticos](https://massahuddiagnosticos.com.br)
- **Desenvolvimento:** [Gabriel Pereira](https://dev-gabriel-pereira-gp.web.app/)
