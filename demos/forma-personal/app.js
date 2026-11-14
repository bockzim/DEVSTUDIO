/* Forma Personal | demo. JavaScript puro, sem dependências. */
(function () {
  'use strict';
  var WHATS = '5524999446503'; /* DDI + DDD + número. Troque pelo número do personal. */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var brl = function (n) { return 'R$ ' + Math.round(n).toLocaleString('pt-BR'); };
  var wa = function (msg) { return 'https://wa.me/' + WHATS + '?text=' + encodeURIComponent(msg); };
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var CHK = '<svg><use href="#i-check"/></svg>';

  /* links de WhatsApp */
  $$('[data-wa]').forEach(function (a) { a.href = wa(a.getAttribute('data-wa')); a.target = '_blank'; a.rel = 'noopener'; });

  /* cabeçalho e menu */
  var hdr = $('#hdr'), bar = $('#bar'), burger = $('#burger'), nav = $('#nav');
  function onScroll() { var y = window.scrollY; hdr.classList.toggle('stuck', y > 24); bar.classList.toggle('on', y > 520); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  function menu(open) { nav.classList.toggle('open', open); burger.setAttribute('aria-expanded', open); burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); }
  burger.addEventListener('click', function () { menu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) menu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') menu(false); });

  /* contadores */
  function count(el) {
    var to = parseFloat(el.getAttribute('data-count')), dec = +el.getAttribute('data-dec') || 0, suf = el.getAttribute('data-suf') || '';
    var fmt = function (v) { return v.toFixed(dec).replace('.', ',') + suf; };
    if (reduce) { el.textContent = fmt(to); return; }
    var t0 = performance.now(), d = 1400;
    (function step(t) { var p = Math.min(1, (t - t0) / d), e = 1 - Math.pow(1 - p, 3); el.textContent = fmt(to * e); if (p < 1) requestAnimationFrame(step); })(t0);
  }
  /* aparece ao rolar */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('shown'); io.unobserve(e.target); } }); }, { threshold: .12 });
    $$('.rv').forEach(function (n) { io.observe(n); });
    var io2 = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { count(e.target); io2.unobserve(e.target); } }); }, { threshold: .5 });
    $$('[data-count]').forEach(function (n) { io2.observe(n); });
  } else { $$('.rv').forEach(function (n) { n.classList.add('shown'); }); $$('[data-count]').forEach(count); }

  /* treino do dia (anel de progresso) */
  var exBtns = $$('#exList button'), C = 2 * Math.PI * 52;
  function ring() {
    var done = exBtns.filter(function (b) { return b.getAttribute('aria-pressed') === 'true'; }).length, tot = exBtns.length, p = done / tot;
    $('#ringFg').style.strokeDashoffset = String(C * (1 - p));
    $('#ringPct').textContent = Math.round(p * 100) + '%';
    $('#ringTxt').textContent = done + ' de ' + tot;
    $('#exHint').textContent = done === tot ? 'Treino concluído! Bom trabalho 💪' : done ? 'Falta pouco, continue!' : 'Toque nos exercícios para marcar';
  }
  exBtns.forEach(function (b) { b.addEventListener('click', function () { b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') !== 'true'); ring(); }); });
  $('#ringFg').style.strokeDasharray = String(C); $('#ringFg').style.strokeDashoffset = String(C);

  /* planos */
  var PLANS = [
    { id: 'online', n: 'Online', p: 149, sub: 'Treine onde quiser, com plano e acompanhamento.', f: ['Treino individual no celular', 'Vídeo de cada exercício', 'Check-in semanal no WhatsApp', 'Ajuste de carga todo mês'] },
    { id: 'presencial', n: 'Presencial', p: 390, hot: true, sub: 'Eu ao seu lado, corrigindo cada movimento.', f: ['2 sessões por semana', 'Treino 100% individual', 'Avaliação física todo mês', 'Plano para os dias sem sessão'] },
    { id: 'hibrido', n: 'Híbrido', p: 590, sub: 'O melhor dos dois: presença e rotina diária.', f: ['2 sessões presenciais + treino online', 'Acompanhamento diário no WhatsApp', 'Orientação alimentar básica', 'Reavaliação a cada 15 dias'] }
  ];
  var per = 1;
  function renderPlans() {
    $('#plans').innerHTML = PLANS.map(function (pl) {
      var m = per === 3 ? pl.p * .85 : pl.p;
      return '<article class="plan' + (pl.hot ? ' hot' : '') + '">' + (pl.hot ? '<span class="badge">Mais escolhido</span>' : '') +
        '<h3>' + pl.n + '</h3><p class="sub">' + pl.sub + '</p>' +
        '<p class="pr">' + brl(m) + ' <small>/mês</small></p>' +
        '<p class="eco">' + (per === 3 ? 'Economize ' + brl(pl.p * 3 * .15) + ' no trimestre' : '') + '</p>' +
        '<ul>' + pl.f.map(function (x) { return '<li>' + CHK + x + '</li>'; }).join('') + '</ul>' +
        '<a class="btn ' + (pl.hot ? 'btn-volt' : 'btn-line') + '" target="_blank" rel="noopener" href="' + wa('Olá! Quero o plano ' + pl.n + ' (' + (per === 3 ? 'trimestral' : 'mensal') + ', ' + brl(m) + '/mês).') + '">Quero o plano ' + pl.n + '</a></article>';
    }).join('');
    $$('#plans .plan').forEach(function (n) { n.style.opacity = 1; n.style.transform = 'none'; });
  }
  $$('.switch button').forEach(function (b) {
    b.addEventListener('click', function () {
      per = +b.getAttribute('data-per');
      $$('.switch button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
      renderPlans();
    });
  });
  renderPlans();

  /* quiz */
  var Q = [
    { k: 'obj', t: 'Qual é o seu objetivo agora?', o: [['🔥', 'Emagrecer', 'Perder gordura e ganhar disposição'], ['💪', 'Ganhar massa', 'Ficar mais forte e definido'], ['❤️', 'Saúde e condicionamento', 'Mais fôlego, menos dor, mais energia']] },
    { k: 'dias', t: 'Quantos dias por semana você consegue treinar?', o: [['2', '2 dias', 'Rotina bem corrida'], ['3', '3 dias', 'Dá para organizar'], ['4', '4 dias', 'Tenho um bom tempo'], ['5', '5 dias ou mais', 'Quero ir fundo']] },
    { k: 'onde', t: 'Onde você prefere treinar?', o: [['🏠', 'Em casa', 'Com pouco ou nenhum equipamento'], ['🏋️', 'Na academia', 'Tenho acesso a aparelhos'], ['🔀', 'Tanto faz', 'Me adapto ao que for melhor']] }
  ];
  var ans = {}, step = 0, qb = $('#qBody'), back = $('#qBack');
  function recommend() {
    var d = nd(), home = ans.onde === 'Em casa', gym = ans.onde === 'Na academia', id;
    if (home) id = 'online';
    else if (d >= 4 || ans.obj === 'Ganhar massa' && d >= 3 && gym) id = 'hibrido';
    else if (gym && d <= 3) id = 'presencial';
    else id = d >= 4 ? 'hibrido' : 'online';
    return PLANS.filter(function (p) { return p.id === id; })[0];
  }
  function nd() { return parseInt(ans.dias, 10) || 3; }
  function why(pl) {
    var out = [];
    if (pl.id === 'online') out.push('Você treina onde e quando puder, sem deslocamento.', 'O treino é ' + nd() + 'x por semana, montado para ' + ans.onde.toLowerCase() + '.');
    if (pl.id === 'presencial') out.push('Com ' + nd() + ' dias por semana, as sessões ao vivo rendem mais que treino solto.', 'Correção de movimento ao vivo previne lesão e acelera o resultado.');
    if (pl.id === 'hibrido') out.push('Para ' + nd() + ' dias por semana, o ideal é unir sessões presenciais e treino online.', 'Acompanhamento diário mantém a constância no seu objetivo.');
    out.push('Meta principal: ' + ans.obj.toLowerCase() + ', com reavaliação a cada 4 semanas.');
    return out;
  }
  function renderQ() {
    $('#qStep').textContent = step < 3 ? 'Passo ' + (step + 1) + ' de 3' : 'Seu plano';
    $('#qBar').style.width = (step < 3 ? (step + 1) * 33.3 : 100) + '%';
    back.hidden = step === 0;
    if (step < 3) {
      var q = Q[step];
      qb.innerHTML = '<h3 class="q-title">' + q.t + '</h3><div class="opts">' + q.o.map(function (o) {
        return '<button type="button" class="opt" aria-pressed="' + (ans[q.k] === o[1] ? 'true' : 'false') + '" data-v="' + o[1] + '"><span class="em">' + (/^\d/.test(o[0]) ? o[0] : o[0]) + '</span><span>' + o[1] + '<small>' + o[2] + '</small></span></button>';
      }).join('') + '</div>';
      $$('.opt', qb).forEach(function (b) { b.addEventListener('click', function () { ans[q.k] = b.getAttribute('data-v'); step++; setTimeout(renderQ, 140); }); });
    } else {
      var pl = recommend();
      var msg = 'Olá! Fiz o quiz no site. Meu objetivo é ' + ans.obj.toLowerCase() + ', posso treinar ' + nd() + ' dias por semana, prefiro ' + ans.onde.toLowerCase() + '. O plano indicado foi o ' + pl.n + '. Podemos conversar?';
      qb.innerHTML = '<div class="res"><span class="res-tag">Plano ideal para você</span><h3>' + pl.n + '</h3><p class="price">' + brl(pl.p) + ' <small>/mês</small></p><p>' + pl.sub + '</p><ul class="why">' + why(pl).map(function (w) { return '<li>' + CHK + '<span>' + w + '</span></li>'; }).join('') + '</ul><div class="res-act"><a class="btn btn-volt btn-lg" target="_blank" rel="noopener" href="' + wa(msg) + '">Quero esse plano</a><button type="button" class="btn btn-line btn-lg" id="qAgain">Refazer</button></div></div>';
      $('#qAgain').addEventListener('click', function () { ans = {}; step = 0; renderQ(); });
    }
  }
  back.addEventListener('click', function () { if (step > 0) { step--; renderQ(); } });
  renderQ();

  /* treino da semana */
  var T = [
    { n: 'Treino A', t: 'Peito e tríceps', d: '50 min', l: 'Todos os níveis', e: [['Supino reto', '4 x 10'], ['Supino inclinado', '3 x 12'], ['Crucifixo', '3 x 12'], ['Tríceps corda', '4 x 12'], ['Tríceps testa', '3 x 10']] },
    { n: 'Treino B', t: 'Costas e bíceps', d: '50 min', l: 'Todos os níveis', e: [['Puxada frontal', '4 x 10'], ['Remada baixa', '3 x 12'], ['Remada curvada', '3 x 10'], ['Rosca direta', '4 x 12'], ['Rosca martelo', '3 x 12']] },
    { n: 'Treino C', t: 'Pernas e glúteos', d: '55 min', l: 'Intermediário', e: [['Agachamento', '4 x 10'], ['Leg press', '4 x 12'], ['Stiff', '3 x 10'], ['Cadeira extensora', '3 x 15'], ['Elevação pélvica', '4 x 12']] },
    { n: 'Treino D', t: 'Ombros e core', d: '45 min', l: 'Todos os níveis', e: [['Desenvolvimento', '4 x 10'], ['Elevação lateral', '3 x 15'], ['Remada alta', '3 x 12'], ['Prancha', '3 x 40s'], ['Abdominal infra', '3 x 15']] },
    { n: 'Funcional', t: 'Cardio e mobilidade', d: '40 min', l: 'Em casa ou na rua', e: [['Aquecimento articular', '5 min'], ['Circuito de 4 estações', '4 voltas'], ['Corrida leve ou bike', '15 min'], ['Mobilidade de quadril', '3 x 8'], ['Alongamento final', '5 min']] }
  ];
  var tabs = $('#tabs'), panel = $('#tabPanel');
  tabs.innerHTML = T.map(function (x, i) { return '<button type="button" role="tab" aria-selected="' + (i === 0) + '" data-i="' + i + '">' + x.n + '</button>'; }).join('');
  function showTab(i) {
    var x = T[i];
    $$('button', tabs).forEach(function (b, k) { b.setAttribute('aria-selected', k === i); });
    panel.innerHTML = '<h3>' + x.t + '</h3><div class="meta"><span><svg><use href="#i-clock"/></svg>' + x.d + '</span><span><svg><use href="#i-chart"/></svg>' + x.l + '</span></div><ul class="tp-list">' + x.e.map(function (e) { return '<li><span>' + e[0] + '</span><span>' + e[1] + '</span></li>'; }).join('') + '</ul>';
  }
  tabs.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) showTab(+b.getAttribute('data-i')); });
  showTab(0);
})();
