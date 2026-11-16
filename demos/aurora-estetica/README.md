# Aurora Estética (site demonstrativo)
HTML, CSS e JS puros, sem bibliotecas e sem build. Publique a pasta no GitHub Pages, Netlify ou Vercel.

| Arquivo | Função |
|---|---|
| `index.html` | Conteúdo, SEO (meta, Open Graph, JSON-LD) e estrutura |
| `css/styles.css` | Visual (paleta em `:root`) e responsivo |
| `js/orb.js` | Orb perolado em WebGL puro (shader). Renderiza em baixa resolução e pausa com a aba oculta |
| `js/main.js` | Menu, quiz, formulário, efeitos de rolagem. Em `CFG`: WhatsApp, Instagram e endereço |
| `assets/img/*.webp` | Fotos do espaço (rosto, velas, cabine, sala) |
| `assets/favicon.svg` | Ícone da aba |

## O que mudou em relação à versão original
- Sem React, Tailwind CDN, three.js e GSAP: de ~1 MB de JavaScript para ~9 KB. O conteúdo aparece na hora e é lido pelo Google sem precisar executar JS.
- Orb refeito em shader leve (antes: 80 mil triângulos recalculados por quadro). Fica ligado em celular sem esquentar o aparelho.
- Imagens em arquivos .webp com dimensões, em vez de base64 dentro do código (e uma delas não era usada: agora entrou na seção "Primeira visita").
- Parallax corrigido (antes aparecia uma faixa vazia no topo das fotos).
- Contraste do texto secundário ajustado para leitura confortável.
- Menu no celular, barra fixa de "Avaliação gratuita" e prova social.
- Quiz de 3 perguntas, com progresso, botão voltar, número de sessões e cuidado com pele sensível. Antes, a 2ª resposta era ignorada.
- Formulário com dia preferido, validação e confirmação. Seção com endereço, horário, mapa e Instagram.
- Dados estruturados (JSON-LD) com horário e telefone.

Atenção: avaliações, depoimentos, endereço, responsável técnico, número de sessões e prazos são de exemplo.
