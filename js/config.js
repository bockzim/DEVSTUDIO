/* ==========================================================
   DevStudio | configuração editável. Mexa somente aqui.
   ========================================================== */
const CFG={
  whatsapp:"5524999446503", // DDI + DDD + número
  instagram:"https://instagram.com/devstudio", // TROQUE pelo seu @ real
  previewImages:true, // true = usa assets/previews/<slug>.webp quando existir

  types:[{n:"Landing page",p:400},{n:"Site institucional",p:900},{n:"Loja virtual",p:1700},{n:"Sistema / painel",p:4000}],
  extras:[{n:"Blog com painel de edição",p:300},{n:"Integração com WhatsApp e CRM",p:600},{n:"Animações avançadas",p:300},{n:"SEO técnico completo",p:100},{n:"Multi-idioma",p:200}],

  /* k: "entregue" (cliente real) ou "demo". url vazia = card sem link.
     hero: réplica da tela inicial do site (aparece se não houver imagem em assets/previews). */
  projects:[
    {slug:"chanandry-arquitetura",t:"Chanandry Arquitetura",k:"entregue",host:"chanandryarquitetura.com.br",url:"https://chanandryarquitetura.com.br",
     d:"Portfólio com galeria de 26 projetos, comparador dia e noite, registro de obras e pedido de projeto via WhatsApp.",tags:["Galeria","SEO","WhatsApp"],a:"#C9A24B",b:"#241610",
     hero:{bg:"linear-gradient(160deg,#241610,#3b2518)",fg:"#F3E7D3",ac:"#C9A24B",on:"#241610",serif:true,tag:"Arquitetura & Interiores",title:"Projetos exclusivos e interiores sofisticados.",sub:"Residencial, comercial, interiores e construção.",cta:"Ver projetos",chips:["26 projetos","Todo o Brasil"]}},
    {slug:"chanandry-imobiliaria",t:"Chanandry Imobiliária",k:"entregue",host:"bockzim.github.io/CHANANDRY-Imobili-ria-",url:"https://bockzim.github.io/CHANANDRY-Imobili-ria-/",
     d:"Portal de imóveis com busca e filtros, simulador de financiamento (Price e SAC) e contato por WhatsApp.",tags:["Filtros","Simulador","JavaScript"],a:"#3B63D6",b:"#16244F",
     hero:{bg:"linear-gradient(160deg,#16244f,#22377a)",fg:"#FFFFFF",ac:"#F5B83D",on:"#16244f",tag:"Compra, venda e locação",title:"Seu próximo imóvel está aqui.",sub:"As melhores oportunidades em Macapá e região.",cta:"Buscar imóveis",chips:["Comprar","Alugar","Lançamentos"]}},
    {slug:"campero",t:"Refrigeração Campero",k:"demo",host:"bockzim.github.io/campero-refrigera-ao",url:"https://bockzim.github.io/campero-refrigera-ao/",
     d:"Demo para prestador de serviço, com tabela de preços interativa e pedido direto no WhatsApp.",tags:["Orçamento","WhatsApp","Mobile first"],a:"#38BDF8",b:"#030A1C",
     hero:{bg:"linear-gradient(160deg,#030a1c,#0b2347)",fg:"#EAF6FF",ac:"#38BDF8",on:"#030a1c",tag:"Ar-condicionado",title:"Seu ar gelando como novo.",sub:"Limpeza, instalação, manutenção, conserto e gás.",cta:"Pedir orçamento",chips:["Limpeza R$ 180","Instalação R$ 200"]}},
    {slug:"aurora-estetica",t:"Aurora Estética",k:"demo",host:"auroraestetica.com.br",url:"demos/aurora-estetica/index.html",
     d:"Demo de clínica de estética com orb interativo em WebGL, quiz de protocolo personalizado e jornada com rolagem horizontal.",tags:["WebGL","Quiz","Mobile first"],a:"#E8B7B0",b:"#FDF8F4",
     hero:{bg:"linear-gradient(160deg,#FDF8F4,#F6E6E1)",fg:"#4A3235",ac:"#C98F8A",on:"#FFFFFF",serif:true,tag:"Clínica de estética",title:"Luz que nasce da pele.",sub:"Protocolos faciais e corporais sob medida.",cta:"Avaliação gratuita",chips:["Facial","Corporal"]}},
    {slug:"forma-personal",t:"Forma Personal",k:"demo",host:"formapersonal.com.br",url:"demos/forma-personal/index.html",
     d:"Demo para personal trainer, com desafio interativo de 2 minutos, configurador de plano e jornada de 12 semanas.",tags:["Timer interativo","Configurador","Conversão"],a:"#19D97B",b:"#070807",
     hero:{bg:"linear-gradient(160deg,#070807,#0A2E1E)",fg:"#EAF3EE",ac:"#FF5A1F",on:"#160600",tag:"Personal trainer",title:"Treino que cabe na sua rotina.",sub:"Desafio de 2 minutos, planos online e presenciais.",cta:"Fazer o desafio",chips:["Online","Presencial"]}},
    {slug:"oliva-spa",t:"Oliva Spa",k:"demo",host:"bockzim.github.io/DEVSTUDIO/demos/oliva-spa",url:"demos/oliva-spa/index.html",
     d:"Demo de spa com luz que muda conforme o horário, cardápio de rituais e convite pessoal para postar e reservar pelo WhatsApp.",tags:["Interativo","Convite","WhatsApp"],a:"#6B7A3A",b:"#F8F5EE",
     hero:{bg:"linear-gradient(160deg,#F8F5EE,#E8DEC9)",fg:"#3C4A24",ac:"#6B7A3A",on:"#F8F5EE",serif:true,tag:"Spa urbano",title:"Oliva",sub:"Rituais de bem-estar com luz natural.",cta:"Garantir meu convite",chips:["Rituais","Day use"]}}
  ]
};
