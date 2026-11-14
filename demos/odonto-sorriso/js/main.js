/* Configuração da clínica (trocar aqui ao entregar para o cliente) */
const CFG={
 nome:"Odonto Sorriso",
 whatsapp:"5524999446503",
 telefone:"(24) 99944-6503",
 instagram:"https://instagram.com/devstudio",
 // 0=dom ... 6=sáb : [abre, fecha] em horas; null = fechado
 horario:{0:null,1:[8,19],2:[8,19],3:[8,19],4:[8,19],5:[8,19],6:[8,13]}
};
const TRAT=[
 {n:"Limpeza e prevenção",i:"✦",min:20,tempo:"40 min",desc:"Remoção de tártaro e placa, polimento e orientação de higiene. Ideal a cada 6 meses.",itens:["Raspagem e polimento","Aplicação de flúor","Orientação personalizada"]},
 {n:"Clareamento",i:"☀",min:590,tempo:"1 a 2 sessões",desc:"Dentes até 8 tons mais claros, com protetor de gengiva e acompanhamento profissional.",itens:["Avaliação do esmalte","Técnica de consultório ou caseira","Resultado já na 1ª sessão"]},
 {n:"Ortodontia",i:"◠",min:290,tempo:"12 a 24 meses",desc:"Aparelhos fixos, estéticos ou alinhadores transparentes, com planejamento digital.",itens:["Simulação do resultado","Manutenção mensal","Contenção ao final"]},
 {n:"Implantes",i:"⬡",min:2400,tempo:"3 a 6 meses",desc:"Reposição de dentes com implante de titânio e prótese que parece natural.",itens:["Tomografia e planejamento","Cirurgia com anestesia","Prótese sob medida"]},
 {n:"Facetas e lentes",i:"❖",min:1200,tempo:"2 a 3 consultas",desc:"Lâminas finas de porcelana ou resina para corrigir cor, forma e pequenos desalinhamentos.",itens:["Mock-up para aprovar antes","Mínimo desgaste","Acabamento artesanal"]},
 {n:"Odontopediatria",i:"☺",min:20,tempo:"30 a 40 min",desc:"Atendimento infantil com ambiente acolhedor, sem medo e com orientação aos pais.",itens:["A partir dos 2 anos","Prevenção e selantes","Primeira visita sem procedimentos"]}
];
const $=s=>document.querySelector(s);
const brl=v=>v.toLocaleString("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0});
const wa=t=>`https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent(t)}`;
const DIAS=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],DC=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
const MES=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
const pad=n=>String(n).padStart(2,"0");

/* links de contato */
const tel="tel:+"+CFG.whatsapp;
["tbTel","locTel","mbTel"].forEach(id=>{const e=$("#"+id);e.href=tel});
$("#tbTelTxt").textContent=CFG.telefone;$("#locTel").textContent=CFG.telefone;
$("#wpp").href=$("#mbWa").href=wa("Olá! Vim pelo site e quero marcar uma avaliação.");
$("#fWa").href=wa("Olá! Vim pelo site.");$("#fIg").href=CFG.instagram;
document.querySelectorAll("[data-wa]").forEach(a=>{a.href=wa(a.dataset.wa);a.target="_blank";a.rel="noopener"});

/* menu mobile */
const burger=$("#burger"),nav=$("#nav");
const setMenu=o=>{nav.classList.toggle("open",o);burger.setAttribute("aria-expanded",o)};
burger.onclick=()=>setMenu(!nav.classList.contains("open"));
nav.querySelectorAll("a").forEach(a=>a.onclick=()=>setMenu(false));
addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});

/* horários: aberto agora, tabela, próximo horário */
const slotsDoDia=d=>{const h=CFG.horario[d];if(!h)return[];const r=[];for(let x=h[0];x<h[1];x++){if(x===12&&h[1]>14)continue;r.push(x)}return r};
function statusAgora(){
 const n=new Date(),d=n.getDay(),h=n.getHours()+n.getMinutes()/60,t=CFG.horario[d];
 if(t&&h>=t[0]&&h<t[1])return{open:true,txt:`Aberto agora · fecha às ${t[1]}h`};
 for(let k=0;k<8;k++){const dd=(d+k)%7,tt=CFG.horario[dd];if(!tt)continue;if(k===0&&h>=tt[0])continue;
  return{open:false,txt:`Fechado · abre ${k===0?"hoje":k===1?"amanhã":DIAS[dd].toLowerCase()} às ${tt[0]}h`}}
 return{open:false,txt:"Fechado"};
}
function pintaStatus(){const s=statusAgora();$("#openNow").classList.toggle("on",s.open);$("#openTxt").textContent=s.txt;$("#hrsNow").textContent=s.open?"Estamos atendendo agora.":"Fora do horário? Deixe sua mensagem no WhatsApp e respondemos assim que abrirmos."}
pintaStatus();setInterval(pintaStatus,60000);
$("#hrs").innerHTML=[1,2,3,4,5,6,0].map(d=>{const h=CFG.horario[d];return`<li><span>${DIAS[d]}</span><b>${h?`${h[0]}h às ${h[1]}h`:"Fechado"}</b></li>`}).join("");
const hojeDia=new Date().getDay();[...$("#hrs").children].forEach((li,i)=>{if([1,2,3,4,5,6,0][i]===hojeDia)li.classList.add("hoje")});

/* próximo horário livre (exemplo) */
(function(){const n=new Date();let d=new Date(n);
 for(let k=0;k<8;k++){const sl=slotsDoDia(d.getDay()).filter(x=>k>0||x>n.getHours()+1);
  if(sl.length){const x=sl[Math.min(1,sl.length-1)];$("#nextSlot").textContent=(k===0?"Hoje":k===1?"Amanhã":DIAS[d.getDay()])+`, ${x}h`;return}
  d=new Date(d.getTime()+864e5)}})();

/* tratamentos: cards + detalhes */
const tgrid=$("#tgrid"),dlg=$("#tdlg");
tgrid.innerHTML=TRAT.map((t,i)=>`<button class="card trat" data-i="${i}" type="button"><span class="ico">${t.i}</span><h3>${t.n}</h3><p>${t.desc.split(".")[0]}.</p><small>a partir de ${brl(t.min)} <u>Ver detalhes</u></small></button>`).join("");
function abre(i){const t=TRAT[i];
 $("#tdBody").innerHTML=`<span class="ico">${t.i}</span><h3 id="tdT">${t.n}</h3><p>${t.desc}</p><ul class="ticks">${t.itens.map(x=>`<li>${x}</li>`).join("")}</ul><div class="td-meta"><span><small>Duração</small><b>${t.tempo}</b></span><span><small>A partir de</small><b>${brl(t.min)}</b></span></div><a class="btn btn-mint" href="#agendar" data-pick="${i}">Agendar este tratamento</a><a class="btn btn-line" href="#parcelas" data-pick="${i}">Simular parcelas</a>`;
 dlg.showModal();}
tgrid.addEventListener("click",e=>{const b=e.target.closest(".trat");if(b)abre(+b.dataset.i)});
$("#tdX").onclick=()=>dlg.close();
dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
$("#tdBody").addEventListener("click",e=>{const a=e.target.closest("[data-pick]");if(!a)return;$("#bT").value=$("#sT").value=TRAT[a.dataset.pick].n;sim();resumo();dlg.close()});

/* selects */
const opts=TRAT.map(t=>`<option>${t.n}</option>`).join("");
$("#bT").innerHTML=`<option>Avaliação geral</option>`+opts;$("#sT").innerHTML=opts;$("#sT").value="Ortodontia";

/* simulador de parcelas */
function sim(){
 const t=TRAT.find(x=>x.n===$("#sT").value),e=+$("#sE").value,p=+$("#sP").value;
 const total=t.min,ent=total*e/100,rest=total-ent;
 $("#sEv").textContent=e+"%";$("#sPv").textContent=p+"x";
 $("#sLbl").textContent=`${p}x de`;$("#sVal").textContent=brl(Math.ceil(rest/p));
 $("#sTot").textContent=(ent?`Entrada de ${brl(ent)} + `:"")+`total de ${brl(total)} (valor de exemplo, sem juros)`;
}
["sT","sE","sP"].forEach(id=>$("#"+id).addEventListener("input",sim));sim();
$("#sGo").addEventListener("click",()=>{$("#bT").value=$("#sT").value;resumo()});

/* agendamento: dia -> horário -> WhatsApp */
let dia=null,hora=null;
const bD=$("#bD"),bS=$("#bS");
(function(){const hoje=new Date();let html="",c=0;
 for(let k=0;k<21&&c<10;k++){const d=new Date(hoje.getTime()+k*864e5);if(!CFG.horario[d.getDay()])continue;
  const lista=slotsDoDia(d.getDay()).filter(x=>k>0||x>hoje.getHours()+0);if(!lista.length)continue;c++;
  html+=`<button type="button" class="day" role="radio" aria-checked="false" data-k="${k}"><small>${k===0?"Hoje":k===1?"Amanhã":DC[d.getDay()]}</small><b>${pad(d.getDate())}</b><small>${MES[d.getMonth()]}</small></button>`}
 bD.innerHTML=html})();
bD.addEventListener("click",e=>{const b=e.target.closest(".day");if(!b)return;
 bD.querySelectorAll(".day").forEach(x=>{x.classList.remove("sel");x.setAttribute("aria-checked","false")});b.classList.add("sel");b.setAttribute("aria-checked","true");
 const d=new Date(Date.now()+ +b.dataset.k*864e5);dia={k:+b.dataset.k,d};hora=null;
 const lista=slotsDoDia(d.getDay()).filter(x=>dia.k>0||x>new Date().getHours());
 const ocupados=new Set(lista.filter((x,i)=>(x*7+d.getDate()*3+i)%5===0));// só para parecer agenda real
 bS.innerHTML=lista.map(x=>`<button type="button" class="slot" role="radio" aria-checked="false" data-h="${x}" ${ocupados.has(x)?"disabled":""}>${x}h</button>`).join("");
 $("#bHint").textContent=`${DIAS[d.getDay()]}, ${pad(d.getDate())}/${pad(d.getMonth()+1)}`;resumo()});
bS.addEventListener("click",e=>{const b=e.target.closest(".slot");if(!b||b.disabled)return;
 bS.querySelectorAll(".slot").forEach(x=>{x.classList.remove("sel");x.setAttribute("aria-checked","false")});b.classList.add("sel");b.setAttribute("aria-checked","true");hora=+b.dataset.h;resumo()});
const quando=()=>dia&&hora!=null?`${DIAS[dia.d.getDay()]}, ${pad(dia.d.getDate())}/${pad(dia.d.getMonth()+1)} às ${hora}h`:"";
function resumo(){const q=quando();$("#bR").textContent=q?`${$("#bT").value} · ${q}`:""}
$("#bT").addEventListener("input",resumo);
$("#bW").addEventListener("input",e=>{let v=e.target.value.replace(/\D/g,"").slice(0,11);
 e.target.value=v.length>6?`(${v.slice(0,2)}) ${v.slice(2,v.length>10?7:6)}-${v.slice(v.length>10?7:6)}`:v.length>2?`(${v.slice(0,2)}) ${v.slice(2)}`:v});
$("#bGo").onclick=()=>{
 const n=$("#bN").value.trim(),E=$("#bE");
 if(!dia||hora==null){E.textContent="Escolha o dia e o horário.";E.hidden=false;(dia?bS:bD).scrollIntoView({block:"center",behavior:"smooth"});return}
 if(!n){E.textContent="Diga seu nome para a gente te atender.";E.hidden=false;$("#bN").focus();return}
 E.hidden=true;const w=$("#bW").value.trim();
 window.open(wa(`Olá! Sou ${n}. Quero agendar: ${$("#bT").value}, ${quando()}.${w?` Meu contato: ${w}.`:""} Pode confirmar?`),"_blank","noopener");
};

/* revelar ao rolar + contadores */
document.querySelectorAll(".card,.stats div,.ticks,.cmp,.steps li,.rating").forEach(e=>e.classList.add("reveal"));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);e.target.classList.add("in");
 const n=e.target.querySelector("[data-n]");if(n){const end=+n.dataset.n;let s=null;const st=t=>{s??=t;const p=Math.min((t-s)/1300,1);n.textContent=Math.round(end*(1-Math.pow(1-p,3))).toLocaleString("pt-BR");if(p<1)requestAnimationFrame(st)};requestAnimationFrame(st)}}),{threshold:.2});
document.querySelectorAll(".reveal").forEach(e=>io.observe(e));

/* comparador antes/depois */
const cmp=$("#cmp");$("#rng").addEventListener("input",e=>cmp.style.setProperty("--pos",e.target.value+"%"));

/* barra fixa no mobile: some perto do formulário */
const mbar=$("#mbar");
new IntersectionObserver(es=>es.forEach(e=>mbar.classList.toggle("hide",e.isIntersecting)),{threshold:.15}).observe($("#agendar"));
addEventListener("scroll",()=>$("#hdr").classList.toggle("scrolled",scrollY>10),{passive:true});

/* bolhas flutuando no hero */
if(!matchMedia("(prefers-reduced-motion:reduce)").matches){
 const box=$("#bubbles"),n=innerWidth<700?8:14;
 for(let i=0;i<n;i++){const b=document.createElement("i"),s=8+Math.random()*30;b.className="bub";
  b.style.cssText=`width:${s}px;height:${s}px;left:${Math.random()*100}%;--dx:${(Math.random()*80-40).toFixed(0)}px;animation-duration:${(11+Math.random()*12).toFixed(1)}s;animation-delay:-${(Math.random()*20).toFixed(1)}s`;box.appendChild(b)}
}
/* foto opcional de fundo (assets/hero.webp): só ativa se o arquivo existir */
{const im=new Image();im.onload=()=>document.querySelector(".bg").classList.add("has-photo");im.src="assets/hero.webp"}
