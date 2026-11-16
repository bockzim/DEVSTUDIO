/* Configuração */
const CFG={whatsapp:"5524999446503",instagram:"https://instagram.com/devstudio",endereco:"Rua Exemplo, 123, Centro"};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const wa=t=>`https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent(t)}`;
const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),lerp=(a,b,t)=>a+(b-a)*t;
const rm=matchMedia("(prefers-reduced-motion:reduce)").matches,fine=matchMedia("(hover:hover)").matches;
$("#wl").href=wa("Olá! Vim pelo site da Aurora.");$("#il").href=CFG.instagram;$("#maps").href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(CFG.endereco);
// menu mobile
const mb=$("#mb"),mm=$("#mm"),setMenu=o=>{mm.classList.toggle("open",o);mb.setAttribute("aria-expanded",o);document.body.style.overflow=o?"hidden":""};
mb.onclick=()=>setMenu(!mm.classList.contains("open"));$$("#mm a").forEach(a=>a.onclick=()=>setMenu(false));addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
// manifesto em palavras
const mt=$("#maniTxt");mt.innerHTML=mt.textContent.split(" ").map(w=>`<span class="w">${w} </span>`).join("");const W=$$(".w",mt);
// ===== Quiz =====
const PR=[{q:"Textura e poros",hue:0,p:"Peeling de diamante",s:3},{q:"Manchas e tom",hue:.33,p:"Laser para manchas",s:4},{q:"Firmeza e linhas",hue:.66,p:"Bioestimulador de colágeno",s:3},{q:"Corpo e retenção",hue:.15,p:"Drenagem modeladora",s:8}];
const RT=[{l:"Resultado já na primeira sessão",f:"semanais",m:"intensivo"},{l:"Gradual e natural",f:"quinzenais",m:"gradual"},{l:"Plano completo",f:"mensais, com manutenção",m:"completo"}];
const SN=[{l:"Sim, minha pele é sensível",n:"Faremos um teste de sensibilidade antes de começar."},{l:"Não",n:"Sem restrições aparentes. Confirmamos na avaliação."},{l:"Não sei",n:"Faremos um teste de sensibilidade antes de começar."}];
const Q={i:0,a:[]},qz=$("#qz"),T={qh:0,amp:.28};
const steps=[["Qual é a sua prioridade?",PR.map(x=>x.q)],["Que ritmo combina com você?",RT.map(x=>x.l)],["Sua pele costuma reagir com facilidade?",SN.map(x=>x.l)]];
function drawQ(){const i=Q.i;
 if(i>=steps.length){const p=PR[Q.a[0]],r=RT[Q.a[1]],s=SN[Q.a[2]];
  const msg=`Olá! Fiz o quiz no site. Protocolo indicado: ${p.p} (${p.s} sessões ${r.f}). Ritmo: ${r.m}. Pele sensível: ${s.l.toLowerCase()}. Quero agendar minha avaliação gratuita.`;
  qz.innerHTML=`<div class="res"><p class="kick">Seu protocolo</p><h3 class="f">${p.p}</h3><p class="sub">${s.n}</p><div class="meta"><span>${p.s} sessões</span><span>Sessões ${r.f}</span><span>Ritmo ${r.m}</span></div><div class="btns"><a class="btn mag" target="_blank" rel="noopener" href="${wa(msg)}">Receber meu plano</a><button class="btn o" id="redo">Refazer</button></div></div>`;
  $("#redo").onclick=()=>{Q.i=0;Q.a=[];T.qh=0;T.amp=.28;drawQ()};magnet();return}
 qz.innerHTML=`<div class="dots" aria-hidden="true">${steps.map((_,k)=>`<i class="${k<=i?"on":""}"></i>`).join("")}</div><p class="kick">Pergunta ${i+1} de ${steps.length}</p><h3 class="f qh">${steps[i][0]}</h3><div class="opts">${steps[i][1].map((o,k)=>`<button class="pill" data-k="${k}">${o}</button>`).join("")}</div>${i?'<button class="back" id="bk">Voltar</button>':""}`;
 if(i)$("#bk").onclick=()=>{Q.i--;Q.a.pop();drawQ()}}
qz.addEventListener("click",e=>{const b=e.target.closest(".pill");if(!b)return;const k=+b.dataset.k;Q.a[Q.i]=k;if(Q.i===0){T.qh=PR[k].hue;T.amp=.4}Q.i++;drawQ()});drawQ();
// ===== Formulário =====
$("#form").addEventListener("submit",e=>{e.preventDefault();const f=new FormData(e.target),n=(f.get("n")||"").trim();
 if(!n){$("#err").hidden=false;e.target.n.focus();return}$("#err").hidden=true;
 open(wa(`Olá! Sou ${n}. Quero agendar: ${f.get("t")}. Período: ${f.get("p")}. Dia preferido: ${f.get("d")}.`),"_blank","noopener");$("#ok").hidden=false});
// magnético (só com mouse)
function magnet(){if(!fine||rm)return;$$(".mag").forEach(b=>{if(b._m)return;b._m=1;b.addEventListener("pointermove",e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.25}px)`});b.addEventListener("pointerleave",()=>{b.style.transition="transform .6s cubic-bezier(.34,1.56,.64,1)";b.style.transform="";setTimeout(()=>b.style.transition="",600)})})}magnet();
// revelar imagens e barra fixa
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});$$(".rv").forEach(e=>io.observe(e));
new IntersectionObserver(es=>es.forEach(e=>$("#stk").classList.toggle("hide",e.isIntersecting)),{threshold:.15}).observe($("#agendar"));
// ===== Orb + efeitos de rolagem (um único loop, sem bibliotecas) =====
const KF=[[.55,1,0],[-.55,1.25,.2],[.5,.8,.5],[-.4,1.1,.8],[0,1.5,1]];
const kf=p=>{const n=KF.length-1,f=clamp(p)*n,i=Math.min(Math.floor(f),n-1),t=f-i;return KF[i].map((v,k)=>lerp(v,KF[i+1][k],t))};
const S={x:.55,s:1,hue:0,amp:.28,mx:0,my:0,rot:0};let qh=0;
const orb=(typeof makeOrb==="function")?makeOrb($("#gl")):null;if(!orb)document.body.classList.add("nogl");
addEventListener("pointermove",e=>{S.mx=e.clientX/innerWidth-.5;S.my=e.clientY/innerHeight-.5},{passive:true});
const jor=$("#jor"),trk=$("#trk"),mani=$("#mani"),PX=$$(".px");let dist=0,pin=false;
function layout(){pin=innerWidth>=768;if(pin){dist=Math.max(0,trk.scrollWidth-innerWidth+80);jor.style.height=(innerHeight+dist)+"px"}else{jor.style.height="";trk.style.transform=""}}
layout();addEventListener("resize",layout);addEventListener("load",layout);
function fx(){const vh=innerHeight,y=scrollY,doc=document.documentElement.scrollHeight-vh,p=doc>0?y/doc:0;
 const [tx,ts,th]=kf(p);qh+=(T.qh-qh)*.05;S.amp+=(T.amp-S.amp)*.05;
 S.x+=(tx-S.x)*.08;S.s+=(ts-S.s)*.08;S.hue+=((th+qh)-S.hue)*.08;S.rot+=.002+S.mx*.01;
 const r=mani.getBoundingClientRect(),mp=(vh*.7-r.top)/(vh*.1+r.height);W.forEach((w,i)=>w.style.opacity=.14+.86*clamp(mp*W.length-i));
 if(pin){const jr=jor.getBoundingClientRect(),q=clamp(-jr.top/Math.max(1,jor.offsetHeight-vh));trk.style.transform=`translate3d(${-q*dist}px,0,0)`}
 PX.forEach(im=>{const b=im.parentElement.getBoundingClientRect();if(b.bottom<-50||b.top>vh+50)return;const t=clamp((vh-b.top)/(vh+b.height));im.style.transform=`translate3d(0,${(-8+16*t).toFixed(2)}%,0)`})}
function frame(t){if(!document.hidden){fx();orb&&orb.render(S,t)}requestAnimationFrame(frame)}
if(rm){W.forEach(w=>w.style.opacity=1);orb&&orb.render(S,0);addEventListener("resize",()=>orb&&orb.render(S,0))}else requestAnimationFrame(frame);
