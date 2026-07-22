<div align="center">

# Fatec-SP Bulldogs

**Site institucional da Atlética Fatec-SP Bulldogs.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

## Sobre o projeto

O projeto é o site oficial da **Atlética Fatec-SP Bulldogs**, reconstruído com Next.js e Tailwind CSS para apresentar a identidade da organização, seus esportes, conquistas e formas de participação.

A interface foi desenvolvida com foco em responsividade, identidade visual consistente e organização modular das seções da página.

## Seções

- apresentação e identidade da Atlética;
- números e estatísticas;
- modalidades esportivas;
- conquistas e histórico;
- chamada para participação;
- navegação e rodapé institucionais.

## Arquitetura

```text
app/                         rotas do Next.js
src/screens/home/            composição da página inicial
src/screens/home/sections/   hero, estatísticas, esportes e conquistas
src/components/              componentes compartilhados
public/                      imagens e elementos visuais
```

A página inicial é composta por seções independentes, permitindo manutenção e evolução visual sem concentrar toda a interface em um único componente.

## Stack

- Next.js 14;
- React 18;
- TypeScript;
- Tailwind CSS;
- Lucide React;
- ESLint.

## Executando localmente

### Requisitos

- Node.js 18 ou superior;
- npm.

```bash
git clone https://github.com/Lucasqc04/Bulldogs.git
cd Bulldogs
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | inicia o ambiente de desenvolvimento |
| `npm run build` | gera o build de produção |
| `npm run start` | executa o build gerado |
| `npm run lint` | executa o ESLint |

## Autor

Desenvolvido por **[Lucas Quinteiro Campos](https://github.com/Lucasqc04)** para a Atlética Fatec-SP Bulldogs.
