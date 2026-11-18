/* ==========================================================
   DevStudio | configuração editável. Mexa somente aqui.
   ========================================================== */
const CFG={
  whatsapp:"5524999446503", // DDI + DDD + número
  pixelId:"1117758200870771",
  clarityId:"",
  gaId:"G-1XYGD48M16",
  instagram:"https://www.instagram.com/devstudio_ofc/",
  previewImages:true, // true = usa assets/previews/<slug>.webp quando existir

  mostrarPrecos:false, // false = a calculadora mostra tudo que está incluso, mas sem valores (o cliente pede o valor pelo WhatsApp). true = mostra os valores
  promo:true, // true = faixa Black November, vagas, preço "de" cortado e selos de desconto. false = mostra só os preços atuais, sem promoção
  off:0.65, // desconto Black November (valores abaixo são os já com desconto; o "de" é calculado)
  promoFim:"30/11", // texto do fim da promoção (a contagem usa 30 de novembro)
  /* dias:[normal, expresso]. tiers: preço já com desconto; inc do 2º e 3º pacote = itens ADICIONAIS ao pacote anterior */
  types:[
    {n:"Landing page",dias:[7,3],tiers:[
      {n:"Essencial",p:400,inc:["Design sob medida, sem template","Layout 100% responsivo, pensado primeiro para o celular","Até 5 seções de conversão (oferta, benefícios, prova, perguntas e contato)","Botão flutuante de WhatsApp e formulário de contato","SEO básico e carregamento rápido","Certificado SSL (cadeado de segurança)","Domínio e hospedagem configurados","Código limpo e 100% seu","30 dias de suporte"]},
      {n:"Profissional",p:650,inc:["Até 8 seções com estrutura de alta conversão","Textos revisados para vender mais","Meta Pixel e Google Analytics instalados","Página de obrigado com rastreamento de conversão","E-mail profissional configurado (@seudominio)","2 rodadas extras de ajustes","Suporte estendido para 60 dias"]},
      {n:"Premium",p:950,inc:["Copywriting completo da página","Identidade visual aplicada (paleta, tipografia e ícones)","Mapa de calor para ver onde seus visitantes clicam","Relatório de velocidade e performance","1h de consultoria para tráfego pago","Prioridade na fila de entrega","Suporte estendido para 90 dias"]}]},
    {n:"Site institucional",dias:[7,3],tiers:[
      {n:"Essencial",p:900,inc:["Até 6 páginas com design exclusivo","Responsivo, com prioridade no celular","Menu e navegação pensados para conversão","WhatsApp, mapa e formulário de contato","SEO on-page básico em todas as páginas","Carregamento em menos de 2 segundos","Certificado SSL, domínio e hospedagem configurados","Código limpo e 100% seu","30 dias de suporte"]},
      {n:"Profissional",p:1400,inc:["Até 10 páginas","Galeria de fotos ou portfólio","Textos revisados para o Google","Orientação para o Google Meu Negócio","Meta Pixel e Google Analytics instalados","E-mail profissional configurado","Suporte estendido para 60 dias"]},
      {n:"Premium",p:2000,inc:["Até 15 páginas dentro do escopo combinado","Copywriting completo do site","Identidade visual aplicada (paleta, tipografia e ícones)","Mapa de calor para ver o comportamento dos visitantes","Relatório de performance por 3 meses","Prioridade na fila de entrega","Suporte estendido para 90 dias"]}]},
    {n:"Loja virtual",dias:[11,4],tiers:[
      {n:"Essencial",p:1700,inc:["Catálogo com busca, filtros e categorias","Até 50 produtos cadastrados por mim","Carrinho e checkout com Pix e cartão","Painel para gerenciar produtos e pedidos","Cálculo de frete","Design exclusivo e responsivo","SEO e velocidade pensados para loja","Certificado SSL, domínio e hospedagem configurados","30 dias de suporte"]},
      {n:"Profissional",p:2500,inc:["Até 150 produtos cadastrados","Cupons de desconto e promoções","Recuperação de carrinho abandonado","Meta Pixel e Google Analytics instalados","E-mails automáticos de pedido","Treinamento em vídeo para usar a loja","Suporte estendido para 60 dias"]},
      {n:"Premium",p:3600,inc:["Até 500 produtos cadastrados","Avaliações de clientes nos produtos","Feed de produtos para o Google Shopping","Identidade visual aplicada à loja","Mapa de calor para ver o comportamento de compra","Prioridade na fila de entrega","Suporte estendido para 90 dias"]}]},
    {n:"Sistema / painel",dias:[13,5],tiers:[
      {n:"Essencial",p:4000,inc:["Levantamento de requisitos em conversa","Protótipo das telas para sua aprovação","Área de login com níveis de acesso","Painel com cadastros, listas e busca","Banco de dados seguro","Design exclusivo e responsivo","Certificado SSL, domínio e hospedagem configurados","Código 100% seu, sem amarras","30 dias de suporte"]},
      {n:"Profissional",p:5800,inc:["Relatórios e gráficos","Exportação para Excel e PDF","Notificações por e-mail","Registro de atividades (quem fez o quê)","Treinamento da sua equipe","Suporte estendido para 60 dias"]},
      {n:"Premium",p:8000,inc:["Integrações com APIs (pagamento, WhatsApp e outras)","Automações sob medida","Backups automáticos diários","Documentação técnica","Prioridade na fila de entrega","Suporte estendido para 90 dias"]}]}
  ],
  extras:[{n:"Blog com painel de edição",p:300},{n:"Integração com WhatsApp e CRM",p:600},{n:"Animações avançadas",p:300},{n:"SEO técnico completo",p:100},{n:"Multi-idioma",p:200}],

  /* k: "entregue" (cliente real) ou "demo". url vazia = card sem link.
     hero: réplica da tela inicial do site (aparece se não houver imagem em assets/previews). */
  projects:[
    {slug:"chanandry-arquitetura",seg:"Arquitetura e interiores",desafio:"Mostrar o portfólio do escritório e receber pedidos de projeto de qualquer lugar do país.",solucao:"Galeria por categoria com “ver mais”, comparador dia e noite, registro de obras em execução e pedido de projeto direto no WhatsApp.",t:"Chanandry Arquitetura",k:"entregue",host:"chanandryarquitetura.com.br",url:"https://chanandryarquitetura.com.br",
     d:"Portfólio com galeria de 26 projetos, comparador dia e noite, registro de obras e pedido de projeto via WhatsApp.",tags:["Galeria","SEO","WhatsApp"],a:"#C9A24B",b:"#241610",
     hero:{bg:"linear-gradient(160deg,#241610,#3b2518)",fg:"#F3E7D3",ac:"#C9A24B",on:"#241610",serif:true,tag:"Arquitetura & Interiores",title:"Projetos exclusivos e interiores sofisticados.",sub:"Residencial, comercial, interiores e construção.",cta:"Ver projetos",chips:["26 projetos","Todo o Brasil"]}},
    {slug:"chanandry-imobiliaria",seg:"Imobiliária",desafio:"Atualizar imóveis e textos do site sem depender de programador nem de servidor.",solucao:"Catálogo com filtros, simulador de financiamento e painel de edição protegido por senha que publica as mudanças no próprio site.",t:"Chanandry Imobiliária",k:"entregue",host:"bockzim.github.io/CHANANDRY-Imobili-ria-",url:"https://bockzim.github.io/CHANANDRY-Imobili-ria-/",
     d:"Portal de imóveis com busca e filtros, simulador de financiamento (Price e SAC) e contato por WhatsApp.",tags:["Filtros","Simulador","JavaScript"],a:"#3B63D6",b:"#16244F",
     hero:{bg:"linear-gradient(160deg,#16244f,#22377a)",fg:"#FFFFFF",ac:"#F5B83D",on:"#16244f",tag:"Compra, venda e locação",title:"Seu próximo imóvel está aqui.",sub:"As melhores oportunidades em Macapá e região.",cta:"Buscar imóveis",chips:["Comprar","Alugar","Lançamentos"]}},
    {slug:"campero",seg:"Refrigeração",desafio:"Mostrar preços com clareza e levar o cliente direto ao pedido.",solucao:"Tabela de preços interativa e pedido pelo WhatsApp com a mensagem já montada.",t:"Refrigeração Campero",k:"demo",host:"bockzim.github.io/campero-refrigera-ao",url:"https://bockzim.github.io/campero-refrigera-ao/",
     d:"Demo para prestador de serviço, com tabela de preços interativa e pedido direto no WhatsApp.",tags:["Orçamento","WhatsApp","Mobile first"],a:"#38BDF8",b:"#030A1C",
     hero:{bg:"linear-gradient(160deg,#030a1c,#0b2347)",fg:"#EAF6FF",ac:"#38BDF8",on:"#030a1c",tag:"Ar-condicionado",title:"Seu ar gelando como novo.",sub:"Limpeza, instalação, manutenção, conserto e gás.",cta:"Pedir orçamento",chips:["Limpeza R$ 180","Instalação R$ 200"]}},
    {slug:"aurora-estetica",seg:"Clínica de estética",desafio:"Transmitir sofisticação e ajudar a paciente a escolher o protocolo certo.",solucao:"Orb interativo em WebGL, quiz de protocolo personalizado e jornada com rolagem horizontal.",t:"Aurora Estética",k:"demo",host:"auroraestetica.com.br",url:"demos/aurora-estetica/index.html",
     d:"Demo de clínica de estética com orb interativo em WebGL, quiz de protocolo personalizado e jornada com rolagem horizontal.",tags:["WebGL","Quiz","Mobile first"],a:"#E8B7B0",b:"#FDF8F4",
     hero:{bg:"linear-gradient(160deg,#FDF8F4,#F6E6E1)",fg:"#4A3235",ac:"#C98F8A",on:"#FFFFFF",serif:true,tag:"Clínica de estética",title:"Luz que nasce da pele.",sub:"Protocolos faciais e corporais sob medida.",cta:"Avaliação gratuita",chips:["Facial","Corporal"]}},
    {slug:"forma-personal",seg:"Personal trainer",desafio:"Fazer o aluno em potencial sentir o treino antes de contratar.",solucao:"Desafio interativo de 2 minutos, configurador de plano e jornada de 12 semanas.",t:"Forma Personal",k:"demo",host:"formapersonal.com.br",url:"demos/forma-personal/index.html",
     d:"Demo para personal trainer, com desafio interativo de 2 minutos, configurador de plano e jornada de 12 semanas.",tags:["Timer interativo","Configurador","Conversão"],a:"#19D97B",b:"#070807",
     hero:{bg:"linear-gradient(160deg,#070807,#0A2E1E)",fg:"#EAF3EE",ac:"#FF5A1F",on:"#160600",tag:"Personal trainer",title:"Treino que cabe na sua rotina.",sub:"Desafio de 2 minutos, planos online e presenciais.",cta:"Fazer o desafio",chips:["Online","Presencial"]}},
    {slug:"oliva-spa",seg:"Spa",desafio:"Despertar o desejo pela experiência e facilitar a reserva.",solucao:"Luz que muda conforme o horário, cardápio de rituais e convite pessoal para reservar pelo WhatsApp.",t:"Oliva Spa",k:"demo",host:"studiodev.site/demos/oliva-spa",url:"demos/oliva-spa/index.html",
     d:"Demo de spa com luz que muda conforme o horário, cardápio de rituais e convite pessoal para postar e reservar pelo WhatsApp.",tags:["Interativo","Convite","WhatsApp"],a:"#6B7A3A",b:"#F8F5EE",
     hero:{bg:"linear-gradient(160deg,#F8F5EE,#E8DEC9)",fg:"#3C4A24",ac:"#6B7A3A",on:"#F8F5EE",serif:true,tag:"Spa urbano",title:"Oliva",sub:"Rituais de bem-estar com luz natural.",cta:"Garantir meu convite",chips:["Rituais","Day use"]}}
  ]
};
