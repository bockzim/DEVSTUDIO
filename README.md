# DevStudio - site de portfólio e conversão

Site estático (HTML + Tailwind via CDN + JS puro). Sem build, sem dependências.
Para publicar: envie a pasta inteira para Netlify, Vercel, GitHub Pages ou qualquer hospedagem.

## Catálogo de arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | Estrutura da página (cabeçalho, hero, trabalhos, serviços, orçamento, processo, depoimentos, FAQ, contato, rodapé) |
| `css/styles.css` | Estilos próprios: tema escuro, animações, cards, formulários, ajustes mobile |
| `js/tailwind.config.js` | Cores (roxo, preto, verde-limão) e fontes do Tailwind |
| `js/config.js` | **Único arquivo que você edita no dia a dia**: WhatsApp, Instagram, preços, extras e projetos |
| `js/main.js` | Comportamento: menu mobile, hero ao vivo, contadores, filtro de projetos, calculadora, formulário |
| `assets/favicon.svg` | Ícone da aba |
| `assets/previews/` | Prévias dos sites (veja abaixo) |
| `robots.txt` | Liberação para buscadores |

## Como editar
- **Preços e prazos:** `js/config.js`, campos `types` e `extras`. O prazo rápido (+30%) está em `index.html`, no `<select id="qRush">`, e a mensagem do WhatsApp em `js/main.js`, função `calc`.
- **Projetos:** `js/config.js`, lista `projects`. `url` vazia vira card de demo sem link.
- **Textos, depoimentos e FAQ:** `index.html`.

## Prévias dos sites (screenshots)
Cada card mostra uma réplica da tela inicial do site. Para usar um print real:
1. Tire um print da primeira dobra do site (1280x800 funciona bem).
2. Salve como `assets/previews/<slug>.webp`.

Já incluídos: `chanandry-arquitetura`, `chanandry-imobiliaria` e `campero`. Faltam as 3 demos.
Slugs de todos: `chanandry-arquitetura`, `chanandry-imobiliaria`, `campero`, `barbearia-navalha`, `odonto-sorriso`, `forma-personal`.
Se o arquivo existir, ele substitui a réplica automaticamente. Se não existir, a réplica continua aparecendo.

## Pendências
- Trocar o `instagram` em `js/config.js` pelo @ real.
- Enviar os prints das 3 demos restantes (`barbearia-navalha`, `odonto-sorriso`, `forma-personal`).
- Substituir os depoimentos fictícios e conferir o número de nota 98 do Lighthouse.

## Performance
O Tailwind vem pelo CDN. Para o máximo no celular, gere o CSS: `npx tailwindcss -o css/tailwind.css --minify` e troque o `<script>` do CDN por um `<link>`.
