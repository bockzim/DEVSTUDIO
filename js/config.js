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
    {slug:"barbearia-navalha",t:"Barbearia Navalha",k:"demo",host:"barbearianavalha.com.br",url:"",
     d:"Demo de site com serviços, tabela de preços e agendamento pelo WhatsApp.",tags:["Agendamento","Landing"],a:"#8B3DFF",b:"#07040D",
     hero:{bg:"linear-gradient(160deg,#141016,#2b1d3d)",fg:"#F4EEFA",ac:"#E8B04B",on:"#141016",tag:"Barbearia",title:"Corte que vale o horário.",sub:"Cabelo, barba e sobrancelha. Agende em segundos.",cta:"Agendar agora",chips:["Corte","Barba"]}},
    {slug:"odonto-sorriso",t:"Odonto Sorriso",k:"demo",host:"odontosorriso.com.br",url:"",
     d:"Demo de clínica com tratamentos, equipe, dúvidas frequentes e contato rápido.",tags:["Institucional","SEO"],a:"#2DD4BF",b:"#0B2A33",
     hero:{bg:"linear-gradient(160deg,#0b2a33,#0f4350)",fg:"#EAFBF8",ac:"#2DD4BF",on:"#0b2a33",tag:"Odontologia",title:"Seu sorriso em boas mãos.",sub:"Limpeza, clareamento e ortodontia perto de você.",cta:"Marcar avaliação",chips:["Clareamento","Ortodontia"]}},
    {slug:"forma-personal",t:"Forma Personal",k:"demo",host:"bockzim.github.io/DEVSTUDIO/demos/forma-personal",url:"demos/forma-personal/",
     d:"Demo de landing para personal trainer, com quiz que indica o plano ideal, planos mensal e trimestral e contato por WhatsApp.",tags:["Quiz","Planos","WhatsApp"],a:"#D4FF3A",b:"#3B1A7A",
     hero:{bg:"linear-gradient(160deg,#2a1158,#4a1fa0)",fg:"#FFFFFF",ac:"#D4FF3A",on:"#1a0a3a",tag:"Personal trainer",title:"Treino que cabe na sua rotina.",sub:"Planos online e presenciais com acompanhamento.",cta:"Quero começar",chips:["Plano online","Presencial"]}}
  ]
};
