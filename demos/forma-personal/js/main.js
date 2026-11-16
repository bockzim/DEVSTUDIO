/* Configuração */
const CFG={whatsapp:"5524999446503",instagram:"https://instagram.com/devstudio",vagas:{tot:10,used:7},
 challenge:{work:20,rest:10,ex:["Agachamento livre","Flexão de braço","Prancha","Polichinelo"]},
 paths:[
  {t:"Emagrecer",d:"Perder gordura sem perder força, com treino que você consegue manter.",freq:"3 a 5x",dur:"45 a 60 min",pts:["Força + cardio estratégico","Ajustes toda semana","Guia de hábitos e rotina"]},
  {t:"Ganhar massa",d:"Hipertrofia com progressão de carga e técnica sob supervisão.",freq:"4 a 6x",dur:"60 min",pts:["Divisão por grupo muscular","Periodização de cargas","Correção de execução por vídeo"]},
  {t:"Saúde e mobilidade",d:"Mais disposição e menos dor, no seu ritmo e com segurança.",freq:"2 a 4x",dur:"40 a 50 min",pts:["Mobilidade e postura","Fortalecimento seguro","Ideal para retomar a rotina"]}],
 journey:[{a:1,b:3,t:"Adaptação",d:"Aprendemos os movimentos, ajustamos cargas e criamos o hábito. O foco é consistência, não intensidade."},
  {a:4,b:6,t:"Evolução",d:"A rotina já encaixa. Subimos cargas e volume, e os primeiros resultados aparecem."},
  {a:7,b:9,t:"Intensificação",d:"Mais desafio, novas variações e metas ajustadas com base na sua reavaliação."},
  {a:10,b:12,t:"Consolidação",d:"Você domina o treino. Revisamos o ciclo e definimos o próximo objetivo."}],
 modes:[{n:"Online",d:"Treino no app e suporte no WhatsApp",base:119,step:15},{n:"Híbrido",d:"Online + sessões presenciais",base:199,step:25},{n:"Presencial",d:"Sessões individuais com o treinador",base:299,step:50}],
 split:{emag:["Full body","Cardio + core","Inferiores","Superiores","HIIT","Mobilidade"],massa:["Peito + tríceps","Costas + bíceps","Pernas","Ombros + core","Full body","Pernas 2"],saude:["Funcional","Força básica","Mobilidade","Cardio leve","Core + postura","Alongamento"]},
 pat:{2:[0,3],3:[0,2,4],4:[0,1,3,4],5:[0,1,2,3,4],6:[0,1,2,3,4,5]}};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],pad=n=>String(n).padStart(2,"0");
const wa=t=>`https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent(t)}`;const brl=n=>n.toLocaleString("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0});
$("#stk").href=wa("Olá! Quero marcar minha aula experimental grátis.");$("#fWa").href=wa("Olá! Vim pelo site.");$("#fIg").href=CFG.instagram;
const burger=$("#burger"),nav=$("#nav"),setMenu=o=>{nav.classList.toggle("open",o);burger.setAttribute("aria-expanded",o)};
burger.onclick=()=>setMenu(!nav.classList.contains("open"));$$("#nav a").forEach(a=>a.onclick=()=>setMenu(false));
$("#track").innerHTML+=$("#track").innerHTML;
// ===== Desafio de 2 minutos =====
const {work:W,rest:R,ex:EX}=CFG.challenge,C=339.3,seq=[];
EX.forEach((n,i)=>{seq.push({t:"w",n,i,d:W});if(i<EX.length-1)seq.push({t:"r",n:EX[i+1],i,d:R})});
$("#tSteps").innerHTML=EX.map((n,i)=>`<li>${pad(i+1)}</li>`).join("");
let k=0,left=seq[0].d*1000,run=false,last=0,iv=null,ac=null;
const beep=f=>{try{ac??=new (window.AudioContext||window.webkitAudioContext)();const o=ac.createOscillator(),g=ac.createGain();o.frequency.value=f;g.gain.value=.08;o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.14)}catch(e){}navigator.vibrate&&navigator.vibrate(60)};
function draw(){const s=seq[k],rp=$("#rp"),cur=s.t==="w"?s.i:s.i+1;
 $("#tNum").textContent=pad(Math.ceil(left/1000));$("#tPhase").textContent=s.t==="w"?"TRABALHE":"DESCANSE";$("#tName").textContent=s.t==="w"?s.n:"Próximo: "+s.n;
 rp.style.strokeDashoffset=C*(1-left/(s.d*1000));rp.classList.toggle("rest",s.t==="r");
 $$("#tSteps li").forEach((li,j)=>{li.className=j<cur?"done":(j===cur&&s.t==="w"?"on":"")})}
function stop(){clearInterval(iv);run=false}
function tick(){const now=Date.now();left-=now-last;last=now;if(left<=0){k++;if(k>=seq.length){finish();return}left=seq[k].d*1000;beep(seq[k].t==="w"?880:520)}draw()}
function finish(){stop();$("#tPhase").textContent="FIM";$("#tNum").textContent="00";$("#tName").textContent="Desafio concluído";$("#rp").style.strokeDashoffset=C;$$("#tSteps li").forEach(l=>l.className="done");
 $("#tGo").textContent="Refazer";$("#tDone").hidden=false;$("#tCta").href=wa("Olá! Fiz o desafio de 2 minutos no seu site e quero marcar minha aula grátis.");beep(880)}
function reset(){stop();k=0;left=seq[0].d*1000;$("#tDone").hidden=true;$("#tGo").textContent="Iniciar";draw();$("#tPhase").textContent="PRONTO?";$("#tName").textContent="Toque em iniciar"}
$("#tGo").onclick=()=>{if(!$("#tDone").hidden||k>=seq.length)reset();
 if(run){stop();$("#tGo").textContent="Continuar";return}run=true;last=Date.now();iv=setInterval(tick,100);$("#tGo").textContent="Pausar";if(k===0&&left===seq[0].d*1000)beep(880);draw()};
$("#tReset").onclick=reset;reset();
// ===== Caminhos (painéis) =====
const pw=$("#paths");
pw.innerHTML=CFG.paths.map((p,i)=>`<article class="path${i===0?" on":""}"><button aria-expanded="${i===0}" data-i="${i}"><h3>${p.t}</h3></button><div class="body"><h3>${p.t}</h3><p>${p.d}</p><div class="meta"><div><small>FREQUÊNCIA</small><b>${p.freq} por semana</b></div><div><small>DURAÇÃO</small><b>${p.dur}</b></div></div><ul>${p.pts.map(x=>`<li>${x}</li>`).join("")}</ul><a class="btn btn-green" target="_blank" rel="noopener" href="${wa(`Olá! Meu objetivo é: ${p.t.toLowerCase()}. Quero saber como funciona.`)}">Quero esse caminho</a></div></article>`).join("");
pw.addEventListener("click",e=>{const b=e.target.closest("button[data-i]");if(!b)return;$$(".path").forEach((x,i)=>x.classList.toggle("on",i===+b.dataset.i))});
// ===== Jornada de 12 semanas =====
const wk=$("#wk");function jour(){const w=+wk.value,p=CFG.journey.find(x=>w>=x.a&&w<=x.b);
 $("#wkN").textContent=pad(w);$("#phN").textContent=`SEMANAS ${pad(p.a)} A ${pad(p.b)}`;$("#phT").textContent=p.t;$("#phD").textContent=p.d;
 $("#m1").style.width=Math.min(100,18+w*7)+"%";$("#m2").style.width=Math.min(100,14+w*6.5)+"%";$("#m3").style.width=Math.min(100,22+w*6)+"%"}
wk.addEventListener("input",jour);jour();
// ===== Monte seu plano =====
const st={m:1,d:3};const DN=["SEG","TER","QUA","QUI","SEX","SÁB","DOM"];
$("#modes").innerHTML=CFG.modes.map((m,i)=>`<button class="mode" aria-pressed="${i===st.m}" data-i="${i}"><span>${m.n}<small>${m.d}</small></span></button>`).join("");
$("#days").innerHTML=[2,3,4,5,6].map(n=>`<button aria-pressed="${n===st.d}" data-n="${n}">${n}</button>`).join("");
function plan(){const m=CFG.modes[st.m],price=m.base+(st.d-2)*m.step,g=$("#goal").value,on=CFG.pat[st.d];let c=0;
 $("#week").innerHTML=DN.map((d,i)=>on.includes(i)?`<li class="on"><b>${d}</b><span>${CFG.split[g][c++]}</span></li>`:`<li><b>${d}</b><span>Descanso</span></li>`).join("");
 $("#pr").textContent=brl(price);const gn=$("#goal").selectedOptions[0].text.toLowerCase();
 $("#planGo").href=wa(`Olá! Montei meu plano no site: ${m.n}, ${st.d} dias por semana, objetivo ${gn}. Estimativa ${brl(price)}/mês. Quero começar.`)}
$("#modes").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;st.m=+b.dataset.i;$$("#modes button").forEach(x=>x.setAttribute("aria-pressed",x===b));plan()});
$("#days").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;st.d=+b.dataset.n;$$("#days button").forEach(x=>x.setAttribute("aria-pressed",x===b));plan()});
$("#goal").addEventListener("change",plan);plan();
// ===== Vagas e formulário =====
const v=CFG.vagas;$("#vTxt").textContent=`${v.used} DE ${v.tot} VAGAS DO MÊS PREENCHIDAS`;setTimeout(()=>$("#vBar").style.width=(v.used/v.tot*100)+"%",400);
$("#fGo").onclick=()=>{const n=$("#fN").value.trim();if(!n){$("#fE").hidden=false;$("#fN").focus();return}$("#fE").hidden=true;
 window.open(wa(`Olá! Sou ${n}. Quero agendar a aula experimental. Objetivo: ${$("#fO").value}. Melhor período: ${$("#fH").value}.`),"_blank","noopener")};
// revelar
$$(".path,.phase,.out,.tile,.snap figure,.portrait").forEach(e=>e.classList.add("reveal"));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){io.unobserve(e.target);e.target.classList.add("in")}}),{threshold:.12});$$(".reveal").forEach(e=>io.observe(e));
