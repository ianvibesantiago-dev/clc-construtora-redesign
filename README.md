# CLC Construtora — Conceito de redesign

> Proposta de redesign **não oficial** para o site de uma construtora de obras pesadas do Nordeste: mais visual, animado e com cara de canteiro de obra.

**🔗 Demo:** [clc-construtora-redesign.vercel.app](https://clc-construtora-redesign.vercel.app) · **Nicho:** Construção pesada · Infraestrutura

> ⚠️ **Projeto conceitual de portfólio.** Não é o site oficial da CLC Construtora e não tem vínculo com a empresa. As fotos são do Unsplash e o logotipo foi recriado em texto. A página está marcada como `noindex` para não aparecer nos buscadores.

## ✨ Destaques

- Linguagem visual de obra: faixas zebradas, grade de planta técnica, cantos retos
- Mantém as cores de referência (vermelho `#DA251C`, azul petróleo `#207594`, grafite `#1A1A1A`) e a fonte Work Sans
- Ícones de serviço em SVG inline, sem imagens de terceiros
- Conteúdo centralizado em `src/content/site.ts`

## 🎬 Animações

- Hero com parallax, zoom lento e título revelado palavra por palavra
- Faixa de "estrada" amarela em movimento e contadores animados
- Linha do processo desenhada conforme a rolagem
- Cards de serviço com barra vermelha crescente e projetos com zoom no hover
- Todas respeitam a preferência de **"reduzir movimento"** do sistema

## 🧱 Stack

| | |
|---|---|
| Framework | [Next.js](https://nextjs.org) (App Router) + React + TypeScript |
| Estilo | [Tailwind CSS v4](https://tailwindcss.com) com design tokens (`@theme`) |
| Animações | [Motion](https://motion.dev) |
| Imagens | `next/image` |

## ✅ Boas práticas

- HTML semântico e acessível (listas válidas, `aria-*`, foco visível)
- Componentes pequenos e reutilizáveis (`src/components/ui`, `sections`, `motion`)
- Lint (ESLint) e checagem de tipos (TypeScript strict) sem erros

## 🚀 Rodando localmente

```bash
npm install
npm run dev
npm run build
```

## 📸 Créditos

Fotos de [Unsplash](https://unsplash.com) (Unsplash License).

---

Desenvolvido por **Ian Santiago** — sites e automações para pequenos negócios.
