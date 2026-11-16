const $=s=>document.querySelector(s),brl=n=>n.toLocaleString("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0});
const wa=t=>`https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent(t)}`;
$("#yr").textContent=new Date().getFullYear();
$("#wpp").href=wa("Olá! Vim pelo seu site e quero conversar sobre um projeto.");
$("#lnWa").href=wa("Olá! Vim pelo seu site.");$("#lnIg").href=CFG.instagram;

// menu
const mb=$("#menuBtn"),mn=$("#menu");
mb.onclick=()=>{const o=mn.classList.toggle("hidden");mb.setAttribute("aria-expanded",!o)};
mn.querySelectorAll("a").forEach(a=>a.onclick=()=>{mn.classList.add("hidden");mb.setAttribute("aria-expanded","false")});

// cursor glow (desktop)
const g=$("#glow");
if(matchMedia("(hover:hover)").matches)addEventListener("pointermove",e=>{g.style.left=e.clientX+"px";g.style.top=e.clientY+"px"});else g.style.display="none";

$("#slots").textContent=(3+Math.floor(Math.random()*3))+" vagas abertas para este mês";
// rotating word
const words=["dorme.","trabalha.","viaja.","descansa."];let wi=0;
setInterval(()=>{wi=(wi+1)%words.length;$("#rot").textContent=words[wi]},2400);

// hero live mock
const bars=$("#bars");
for(let i=0;i<14;i++){const b=document.createElement("div");b.className="flex-1 rounded-t-md bg-gradient-to-t from-violet to-lilac transition-all duration-700";b.style.height=(20+Math.random()*60)+"%";bars.appendChild(b)}
let leads=0;
const tick=()=>{if(document.hidden)return;leads+=Math.random()<.6?1:0;$("#leads").textContent=leads;$("#conv").textContent=(5+Math.random()*3).toFixed(1).replace(".",",")+"%";
 [...bars.children].forEach((b,i,a)=>{if(i<a.length-1)b.style.height=a[i+1].style.height});bars.lastChild.style.height=(25+Math.random()*70)+"%"};
leads=12;tick();setInterval(tick,1600);
const names=["Marina","Rafael","Camila","João","Beatriz","Lucas"];
setInterval(()=>{const n=names[Math.floor(Math.random()*names.length)];const p=$("#ago").parentElement;p.innerHTML=`<b>${n}</b> pediu um orçamento<br><span class="text-lilac/70 text-xs">agora mesmo</span>`;p.previousElementSibling.textContent=n[0]},4200);

// counters
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const el=e.target,end=+el.dataset.count;let s=null;
 const step=t=>{s??=t;const p=Math.min((t-s)/1400,1);el.textContent=Math.round(end*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)}),{threshold:.3});
document.querySelectorAll("[data-count]").forEach(el=>{const r=el.getBoundingClientRect();if(r.top>innerHeight)el.textContent="0";io.observe(el)});

// projects
const pj=$("#projects");
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function preview(p){
 const h=p.hero;
 const src=!CFG.previewImages?"":(typeof PREVIEWS!=="undefined"?(PREVIEWS[p.slug]||""):`assets/previews/${p.slug}.webp`);
 return `<div class="relative aspect-[16/9] overflow-hidden" style="background:linear-gradient(135deg,${p.a},${p.b})">
  <div class="absolute inset-3 sm:inset-4 rounded-lg overflow-hidden shadow-2xl flex flex-col" style="background:${h.bg};color:${h.fg}">
   <div class="flex items-center gap-1 px-2.5 py-2 bg-black/30 shrink-0"><i class="w-1.5 h-1.5 rounded-full bg-white/40"></i><i class="w-1.5 h-1.5 rounded-full bg-white/40"></i><i class="w-1.5 h-1.5 rounded-full bg-white/40"></i><span class="ml-2 flex-1 truncate rounded bg-white/10 px-2 py-0.5 text-[9px] opacity-70">${esc(p.host)}</span></div>
   <div class="flex-1 min-h-0 overflow-hidden px-3.5 sm:px-5 flex flex-col justify-center gap-1.5">
    <span class="text-[9px] font-semibold" style="color:${h.ac}">${esc(h.tag)}</span>
    <b class="leading-tight text-[15px] sm:text-[18px] ${h.serif?"font-serif font-semibold":"font-display"}">${esc(h.title)}</b>
    <span class="text-[10px] leading-snug opacity-75">${esc(h.sub)}</span>
    <div class="flex flex-wrap items-center gap-1.5 mt-1"><span class="rounded-full px-2.5 py-1 text-[10px] font-bold" style="background:${h.ac};color:${h.on}">${esc(h.cta)}</span>${h.chips.map(c=>`<span class="rounded-full border px-2 py-0.5 text-[9px] opacity-80" style="border-color:${h.fg}55">${esc(c)}</span>`).join("")}</div>
   </div>
  </div>
  ${src?`<img src="${src}" alt="Tela inicial do site ${esc(p.t)}" loading="lazy" onerror="this.remove()" class="absolute inset-0 w-full h-full object-cover object-top">`:""}
 </div>`;
}
function drawProjects(f){
 pj.innerHTML=CFG.projects.filter(p=>f==="all"||p.k===f).map(p=>`
 <${p.url?`a href="${p.url}" target="_blank" rel="noopener" aria-label="Abrir ${esc(p.t)}"`:"div"} class="card proj block overflow-hidden">
  <div class="relative">${preview(p)}<span class="absolute top-3 right-3 text-xs font-bold rounded-full px-3 py-1 ${p.k==="demo"?"bg-ink text-lilac":"bg-volt text-ink"}">${p.k==="demo"?"Demo":"Cliente real"}</span></div>
  <div class="p-6"><h3 class="font-display font-bold text-lg">${esc(p.t)}</h3><p class="text-sm text-lilac/90 mt-2">${esc(p.d)}</p>
   <div class="flex flex-wrap gap-2 mt-4">${p.tags.map(t=>`<span class="text-xs border border-line rounded-full px-3 py-1 text-lilac">${esc(t)}</span>`).join("")}</div>
   ${p.url?'<p class="mt-4 text-sm font-bold text-volt">Visitar site online</p>':'<p class="mt-4 text-sm text-lilac/60">Projeto demonstrativo</p>'}</div>
 </${p.url?"a":"div"}>`).join("");
}
drawProjects("all");
document.querySelectorAll("#filters .chip").forEach(c=>c.onclick=()=>{document.querySelectorAll("#filters .chip").forEach(x=>x.setAttribute("aria-pressed",x===c));drawProjects(c.dataset.f)});

// calculator
const OFF=CFG.off||.65,was=p=>Math.round(p/(1-OFF)/10)*10;
const qt=$("#qType"),qe=$("#qExtras"),qr=$("#qRush"),qT=$("#qTier");
qt.innerHTML=CFG.types.map((t,i)=>`<label class="opt"><input type="radio" name="qt" value="${i}" ${i===0?"checked":""}><span class="block font-semibold text-sm leading-tight">${t.n}</span><s class="block text-lilac/60 text-xs mt-2">${brl(was(t.tiers[0].p))}</s><span class="block font-display font-bold text-volt"><small class="font-body text-[10px] font-semibold text-lilac/70">a partir de </small>${brl(t.tiers[0].p)}</span></label>`).join("");
qe.innerHTML=CFG.extras.map((x,i)=>`<label class="flex items-center gap-3 text-sm cursor-pointer"><input type="checkbox" value="${i}"><span class="flex-1">${x.n}</span><span class="text-right leading-tight"><s class="block text-lilac/50 text-xs">${brl(was(x.p))}</s><span class="text-lilac/90">+${brl(x.p)}</span></span></label>`).join("");
let tier=0;
const dias=n=>n+(n===1?" dia":" dias");
const cum=(t,k)=>t.tiers.slice(0,k+1).flatMap((x,i)=>x.inc.map(v=>({v,up:i>0})));
function drawTiers(){
 const t=CFG.types[qt.querySelector(":checked").value];
 qT.innerHTML=t.tiers.map((x,i)=>`<label class="opt tier">${i===1?'<span class="absolute -top-3 left-4 bg-volt text-ink text-[10px] font-extrabold rounded-full px-2.5 py-0.5">MAIS ESCOLHIDO</span>':""}<input type="radio" name="qk" value="${i}" ${i===tier?"checked":""}>
  <span class="block font-display font-bold">${x.n}</span><s class="block text-lilac/60 text-xs mt-2">${brl(was(x.p))}</s><span class="block font-display font-extrabold text-2xl text-volt">${brl(x.p)}</span>
  <span class="block text-xs text-lilac/80 mt-3">${i===0?"O essencial para ir ao ar com qualidade":`Tudo do ${t.tiers[i-1].n}, mais:`}</span>
  <ul class="mt-2 space-y-1.5 text-xs text-lilac/95">${x.inc.slice(0,i===0?4:5).map(v=>`<li class="flex gap-2"><span class="text-volt font-bold">${i?"★":"✓"}</span><span>${v}</span></li>`).join("")}${x.inc.length>(i?5:4)?`<li class="text-lilac/60">e mais ${x.inc.length-(i?5:4)} item(ns)</li>`:""}</ul></label>`).join("");
}
function drawRush(){
 const t=CFG.types[qt.querySelector(":checked").value],cur=qr.value||"1";
 qr.innerHTML=`<option value="1">Normal (${dias(t.dias[0])})</option><option value="1.3">Expresso (${dias(t.dias[1])}, +30%)</option>`;qr.value=cur;
}
function calc(){
 const t=CFG.types[qt.querySelector(":checked").value],k=t.tiers[tier],ex=[...qe.querySelectorAll(":checked")].map(c=>CFG.extras[c.value]),r=+qr.value;
 const base=k.p+ex.reduce((s,x)=>s+x.p,0),old=was(k.p)+ex.reduce((s,x)=>s+was(x.p),0);
 const total=Math.round(base*r),oldT=Math.round(old*r),d=t.dias[r>1?1:0];
 $("#qPrice").textContent=brl(total);$("#qOld").textContent=brl(oldT);$("#qSave").textContent="Você economiza "+brl(oldT-total)+" · Pacote "+k.n+" · entrega em "+dias(d);
 $("#qInc").innerHTML=cum(t,tier).map(i=>`<li class="flex gap-2"><span class="text-volt font-bold">${i.up?"★":"✓"}</span><span>${i.v}</span></li>`).join("")+ex.map(x=>`<li class="flex gap-2"><span class="text-volt font-bold">+</span><span>${x.n}</span></li>`).join("")+(r>1?`<li class="flex gap-2"><span class="text-volt font-bold">⚡</span><span>Entrega expressa em ${dias(d)}</span></li>`:"");
 const link=wa(`Olá! Montei um orçamento no seu site (Black November):\n• Projeto: ${t.n} (pacote ${k.n})\n• Extras: ${ex.length?ex.map(x=>x.n).join(", "):"nenhum"}\n• Prazo: ${r>1?"expresso":"normal"} (${dias(d)})\n• De ${brl(oldT)} por ${brl(total)}\nQuero garantir esse valor!`);
 $("#qSend").href=link;$("#qSend2").href=link;
}
qt.addEventListener("change",()=>{drawTiers();drawRush();calc()});
qT.addEventListener("change",e=>{tier=+e.target.value;drawTiers();calc()});
qe.addEventListener("change",calc);qr.addEventListener("change",calc);
drawTiers();drawRush();calc();

// faixa Black November
(()=>{
 const bf=$("#bf"),end=new Date(new Date().getFullYear(),10,30,23,59,59);
 if(Date.now()>end){bf.remove();return}
 const lp=CFG.types[0].tiers[0];
 const left=()=>{const d=end-Date.now(),D=Math.floor(d/864e5),H=Math.floor(d%864e5/36e5),M=Math.floor(d%36e5/6e4);return `Termina em ${D}d ${String(H).padStart(2,"0")}h ${String(M).padStart(2,"0")}min`};
 const items=()=>["BLACK NOVEMBER","65% OFF em todos os sites",`Landing page de ${brl(was(lp.p))} por ${brl(lp.p)}`,"Extras também com 65% OFF","Entrega a partir de 3 dias no expresso","Poucas vagas neste mês",left()];
 const draw=()=>{const h=items().map((t,i)=>`<span class="${i===0?"bf-hot":""}">${t}</span>`).join('<i>✦</i>');$("#bfTrack").innerHTML=`<span class="bf-grp">${h}<i>✦</i></span><span class="bf-grp" aria-hidden="true">${h}<i>✦</i></span>`};
 draw();setInterval(draw,60000);
})();

// contact form -> WhatsApp
$("#fSend").onclick=()=>{
 const n=$("#fName").value.trim(),m=$("#fMsg").value.trim(),e=$("#fMail").value.trim();
 if(!n||!m){$("#fErr").classList.remove("hidden");return}
 $("#fErr").classList.add("hidden");
 window.open(wa(`Olá! Sou ${n}${e?` (${e})`:""}.\n${m}`),"_blank","noopener");
};
