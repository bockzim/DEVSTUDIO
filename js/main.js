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
 const step=t=>{s??=t;const p=Math.min((t-s)/1400,1);el.textContent=Math.round(end*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)}),{threshold:.6});
document.querySelectorAll("[data-count]").forEach(el=>io.observe(el));

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
const qt=$("#qType"),qe=$("#qExtras");
qt.innerHTML=CFG.types.map((t,i)=>`<option value="${i}">${t.n}</option>`).join("");
qe.innerHTML=CFG.extras.map((x,i)=>`<label class="flex items-center gap-3 text-sm cursor-pointer"><input type="checkbox" value="${i}"><span class="flex-1">${x.n}</span><span class="text-lilac/70">+${brl(x.p)}</span></label>`).join("");
function calc(){
 const t=CFG.types[qt.value],ex=[...qe.querySelectorAll(":checked")].map(c=>CFG.extras[c.value]),r=+$("#qRush").value;
 const total=Math.round((t.p+ex.reduce((s,x)=>s+x.p,0))*r);
 $("#qPrice").textContent=brl(total);
 $("#qSend").href=wa(`Olá! Montei um orçamento no seu site:\n• Projeto: ${t.n}\n• Extras: ${ex.length?ex.map(x=>x.n).join(", "):"nenhum"}\n• Prazo: ${r>1?"rápido (7 dias)":"normal (3 semanas)"}\n• Estimativa: ${brl(total)}\nPodemos conversar?`);
}
[qt,qe,$("#qRush")].forEach(e=>e.addEventListener("change",calc));calc();

// contact form -> WhatsApp
$("#fSend").onclick=()=>{
 const n=$("#fName").value.trim(),m=$("#fMsg").value.trim(),e=$("#fMail").value.trim();
 if(!n||!m){$("#fErr").classList.remove("hidden");return}
 $("#fErr").classList.add("hidden");
 window.open(wa(`Olá! Sou ${n}${e?` (${e})`:""}.\n${m}`),"_blank","noopener");
};
