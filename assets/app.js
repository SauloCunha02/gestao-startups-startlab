'use strict';
(() => {
  const D = window.STARTLAB_DATA;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const pad = n => String(n).padStart(2, '0');
  const normalize = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const paths = {
    grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    notebook:'<path d="M7 3h13v18H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm0 0v18M10 8h6M10 12h6"/>',
    folder:'<path d="M3 7V5a2 2 0 0 1 2-2h5l3 3h6a2 2 0 0 1 2 2v11H3V7Z"/>',
    teacher:'<path d="m2 8 10-5 10 5-10 5L2 8Zm4 2v7c4 3 8 3 12 0v-7M22 8v8"/>',
    menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5"/>',
    moon:'<path d="M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10Z"/>',
    arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
    back:'<path d="M20 12H4m6-6-6 6 6 6"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    bulb:'<path d="M9 18h6M9 21h6M8 14a6 6 0 1 1 8 0l-1 2H9l-1-2ZM12 9v7"/>',
    users:'<circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5v2"/>',
    chat:'<path d="M21 11a8 8 0 0 1-8 8H7l-5 3 2-6a8 8 0 1 1 17-5ZM8 10h8M8 14h5"/>',
    tree:'<path d="M12 3v18M4 8h16M4 8V5M20 8V5M6 21v-5h12v5"/><circle cx="12" cy="3" r="1"/>',
    diamond:'<path d="m12 2 10 10-10 10L2 12 10 2ZM2 12h20M12 2l4 10-4 10-4-10 4-10"/>',
    chart:'<path d="M4 3v17h17M8 15v-4M13 15V6M18 15v-7"/>',
    wallet:'<path d="M3 6h18v14H3V6Zm0 0V3h15v3M16 11h5v5h-5Z"/>',
    box:'<path d="m12 2 9 5v10l-9 5-9-5V7l9-5ZM3 7l9 5 9-5M12 12v10M7 4l10 5"/>',
    flask:'<path d="M9 2h6M10 2v7L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3L14 9V2M7 15h10"/>',
    refresh:'<path d="M20 8A8 8 0 0 0 5 5L2 8m0-6v6h6M4 16a8 8 0 0 0 15 3l3-3m0 6v-6h-6"/>',
    mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',
    download:'<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
    upload:'<path d="M12 16V4m-5 5 5-5 5 5M4 16v5h16v-5"/>',
    print:'<path d="M7 8V2h10v6M7 17H3V8h18v9h-4M7 14h10v8H7v-8ZM17 11h1"/>',
    lock:'<rect x="5" y="10" width="14" height="12" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4M12 15v3"/>',
    spark:'<path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z"/>',
    rocket:'<path d="M8 15c-2-5 3-11 12-12 1 9-5 14-10 12ZM8 11l-4 1-2 5 6-2M13 16l-1 4-5 2 2-6M5 19l-3 3"/><circle cx="15" cy="8" r="2"/>'
  };
  const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.bulb}</svg>`;
  const phaseNames = ['Descobrir', 'Definir', 'Criar', 'Testar & apresentar'];
  const phase = i => i < 3 ? 0 : i < 5 ? 1 : i < 9 ? 2 : 3;
  const icons = ['target','bulb','chat','tree','users','diamond','chart','wallet','box','flask','refresh','mic'];
  const quizzes = [
    ['Qual é o melhor ponto de partida?', ['Criar um logotipo.', 'Investigar uma dificuldade de um público.', 'Programar um aplicativo completo.'], 1, 'Uma dificuldade real orienta a investigação. Marca e tecnologia vêm depois das primeiras descobertas.'],
    ['“Todos vão pagar pela ideia” sem pesquisa é…', ['Uma certeza.', 'Uma conclusão de teste.', 'Uma suposição.'], 2, 'Sem evidência, essa afirmação continua sendo uma suposição que precisa ser investigada.'],
    ['Qual pergunta ajuda a ouvir sem induzir?', ['Conte a última vez em que isso aconteceu.', 'Nossa ideia é ótima, não é?', 'Você compraria este aplicativo incrível?'], 0, 'Um episódio real revela contexto, comportamento e alternativas atuais.'],
    ['Importância 4,6 e satisfação 2,0 sugerem…', ['Negócio garantido.', 'Uma necessidade que merece investigação.', 'Que ninguém se importa.'], 1, 'É uma pista para investigar, junto dos relatos. Não comprova viabilidade comercial.'],
    ['A persona deve se apoiar em…', ['Características que a equipe inventou.', 'Um perfil que agrada à equipe.', 'Padrões encontrados na pesquisa.'], 2, 'O nome pode ser fictício. Os comportamentos e as necessidades precisam de evidência ou da marca de hipótese.'],
    ['Uma proposta de valor explica…', ['Para quem, qual benefício e como ajudar.', 'Só o nome e a cor da marca.', 'Quantos slides serão feitos.'], 0, 'Relacione o benefício com a dor identificada. A promessa ainda precisa ser testada.'],
    ['Levar lanche de casa, no exemplo, é…', ['Uma força interna da equipe.', 'Uma alternativa indireta.', 'Algo que deve ser ignorado.'], 1, 'A mesma necessidade pode ser atendida de formas diferentes. Compare também essas alternativas.'],
    ['Receita de R$ 120 e gastos de R$ 80 geram…', ['R$ 120 de lucro líquido.', 'R$ 80 de receita.', 'R$ 40 de saldo simplificado.'], 2, 'O saldo é 120 − 80. Gastos omitidos e trabalho da equipe ainda precisam ser considerados.'],
    ['Um fluxo de cartões pode testar…', ['Se a pessoa entende como fazer o pedido.', 'Se todas as cantinas vão comprar.', 'O lucro real do negócio.'], 0, 'Esse protótipo permite observar compreensão. Uma entrega real exige outro tipo de teste.'],
    ['O critério de sucesso deve ser definido…', ['Depois de ver quem conseguiu.', 'Antes de começar o teste.', 'Só se os usuários reclamarem.'], 1, 'Definir antes evita mudar a meta para fazer o resultado parecer melhor.'],
    ['A melhor justificativa para uma melhoria é…', ['A cor favorita da equipe.', 'Uma ideia escolhida ao acaso.', 'Uma dificuldade observada no teste.'], 2, 'Use os registros para priorizar a mudança e teste novamente.'],
    ['Um bom pitch distingue…', ['Evidências, estimativas e dúvidas.', 'Somente pontos positivos.', 'A equipe dos concorrentes por elogios.'], 0, 'Mostrar o que foi aprendido e o que falta investigar torna o projeto compreensível.']
  ];
  const KEY = 'startlab-project-v2';
  const defaults = () => ({schema:2, team:'', completed:[], answers:{}, quizzes:{}, steps:{}, last:1});
  let state = defaults(), storageOK = true, toastTimer, filter = 'all', query = '', timerId, timerDeadline = 0, timerSeconds = 900, showExamples = false;
  const validKey = k => /^(f\d{1,2}|p[1-5])_\d+(?:_\d+_\d+)?$/.test(k) || /^(contrib\d{1,2}|calc_(price|clients|variable|fixed)|med_[01]_[0-4]_[is])$/.test(k);
  function validate(raw) {
    if (!raw || raw.schema !== 2 || typeof raw.team !== 'string' || raw.team.length > 200 || !Array.isArray(raw.completed) || !raw.answers || typeof raw.answers !== 'object' || Array.isArray(raw.answers)) throw Error('Formato inválido.');
    if (raw.completed.some(n => !Number.isInteger(n) || n < 1 || n > 12) || Object.keys(raw.answers).length > 1500) throw Error('Conteúdo inválido.');
    const clean = defaults(); clean.team = raw.team; clean.completed = [...new Set(raw.completed)];
    for (const [k,v] of Object.entries(raw.answers)) { if (!validKey(k) || typeof v !== 'string' || v.length > 20000) throw Error('Resposta inválida.'); clean.answers[k] = v; }
    if (raw.quizzes && typeof raw.quizzes === 'object' && !Array.isArray(raw.quizzes)) for (const [k,v] of Object.entries(raw.quizzes)) if (/^([1-9]|1[0-2])$/.test(k) && [0,1,2].includes(v)) clean.quizzes[k] = v;
    // Tarefas marcadas na etapa. Cópias antigas não trazem este campo e continuam válidas.
    if (raw.steps && typeof raw.steps === 'object' && !Array.isArray(raw.steps)) for (const [k,v] of Object.entries(raw.steps)) if (/^([1-9]|1[0-2])_[0-3]$/.test(k) && v === true) clean.steps[k] = true;
    clean.last = Number.isInteger(raw.last) && raw.last >= 1 && raw.last <= 12 ? raw.last : 1;
    return clean;
  }
  try { const raw = localStorage.getItem(KEY); if (raw) state = validate(JSON.parse(raw)); } catch(e) { storageOK = false; }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); storageOK = true; } catch(e) { storageOK = false; }
    const el = $('#save-status'); if (el) el.textContent = storageOK ? 'Salvo neste navegador. Exporte uma cópia para guardar ou trocar de aparelho.' : 'O navegador não conseguiu salvar. Exporte uma cópia antes de sair.';
    if (!storageOK) toast('Não foi possível salvar no navegador. Exporte seu projeto para guardar as respostas.');
  }
  function toast(message) { clearTimeout(toastTimer); $('#toast').textContent = message; $('#toast').hidden = false; toastTimer = setTimeout(() => $('#toast').hidden = true, 5500); }
  const paragraphs = s => String(s).split('\n').filter(Boolean).map(p => `<p>${esc(p)}</p>`).join('');
  const button = (href,text,style='secondary',symbol='arrow') => `<a class="button ${style}" href="${href}">${esc(text)} ${icon(symbol)}</a>`;
  function header(kicker, title, description) { return `<div class="page-title"><span class="eyebrow">${esc(kicker)}</span><h1>${esc(title)}</h1><p>${esc(description)}</p></div>`; }
  function heroArt() { return `<div class="hero-art" aria-hidden="true"><div class="orbit"></div><div class="orbit inner"></div><div class="sketch-card"><span class="eyebrow">IDEIAS EM MOVIMENTO</span>${icon('rocket')}<div class="sketch-line"></div><div class="sketch-line short"></div></div><div class="art-badge idea"><span class="badge-icon">${icon('bulb')}</span><div><b>Uma boa pergunta.</b><small>O começo de tudo.</small></div></div><div class="art-badge test"><span class="badge-icon">${icon('check')}</span><div><b>Um primeiro teste.</b><small>Aprender na prática.</small></div></div><span class="art-spark">✦</span><span class="art-dot"></span><span class="art-arrow">↗</span></div>`; }
  // Números vivos da trilha: tarefas marcadas e campos preenchidos em todas as fichas.
  function overall() {
    const tasks=D.lessons.reduce((sum,l)=>sum+l.steps.length,0);
    const tasksDone=D.lessons.reduce((sum,l,i)=>sum+l.steps.filter((_,j)=>state.steps[(i+1)+'_'+j]).length,0);
    let fields=0, filled=0;
    for (let n=1;n<=12;n++) { const p=sheetProgress(n); fields+=p.total; filled+=p.filled; }
    return {tasks, tasksDone, fields, filled};
  }
  function trail() {
    const count = state.completed.length, totals = overall();
    const next = !state.completed.includes(state.last) ? state.last : D.lessons.findIndex((_,i) => !state.completed.includes(i+1)) + 1 || 12;
    $('#main').innerHTML = `<div class="intro-line"><p>Seu próximo projeto <strong>começa aqui.</strong></p><span class="small-label">CRIATIVIDADE + MÃO NA MASSA</span></div><section class="hero" aria-label="Apresentação da trilha"><div class="hero-copy"><div class="hero-kicker">${icon('spark')} PEQUENAS IDEIAS. NOVAS POSSIBILIDADES.</div><h1>Da ideia ao<br><em>primeiro teste.</em></h1><p>Descubra problemas reais, crie soluções e dê os primeiros passos na sua startup. Uma etapa de cada vez.</p><div class="hero-actions">${button('#/etapa/'+next, count || state.last > 1 ? 'Continuar minha trilha' : 'Começar minha trilha','primary')}<span class="hero-note">${icon('check')} Sem precisar programar</span></div></div>${heroArt()}</section><div class="stats-row"><div class="stat"><span class="stat-icon">${icon('notebook')}</span><div><b>12 etapas</b><p>Do problema à apresentação</p></div></div><div class="stat"><span class="stat-icon">${icon('check')}</span><div><b>${totals.tasksDone} de ${totals.tasks} tarefas</b><p>Marcadas nas etapas</p></div></div><div class="stat"><div class="stat-progress"><div class="progress-top"><b>Etapas concluídas</b><span>${count} de 12</span></div><progress value="${count}" max="12" aria-label="Etapas concluídas">${count}/12</progress><div class="progress-top"><b>Fichas preenchidas</b><span>${totals.filled} de ${totals.fields} campos</span></div><progress value="${totals.filled}" max="${totals.fields}" aria-label="Campos preenchidos nas fichas">${totals.filled}/${totals.fields}</progress></div></div></div><section aria-labelledby="trail-title"><div class="section-heading"><div><h2 id="trail-title">Explore sua trilha</h2><p>Aprenda um pouco. Coloque em prática. Siga em frente.</p></div><label class="search-box">${icon('search')}<input id="lesson-search" type="search" placeholder="Buscar uma etapa..." aria-label="Buscar etapas" value="${esc(query)}"></label></div><div class="filters" aria-label="Filtrar etapas">${[['all','Todas as etapas'],...phaseNames.map((n,i)=>[String(i),n]),['done','Concluídas']].map(([k,t])=>`<button class="filter" data-filter="${k}" aria-pressed="${filter===k}">${t}</button>`).join('')}</div><p id="search-count" class="save-note" role="status" hidden></p><div id="course-grid" class="course-grid"></div></section><section class="bottom-banner"><div><h3>O melhor jeito de aprender? Fazendo.</h3><p>Seu caderno acompanha cada descoberta, ideia e experimento.</p></div>${button('#/caderno','Abrir meu projeto','secondary','notebook')}</section>`;
    cards();
  }
  function cards() {
    const rows = D.lessons.map((l,i)=>({l,i})).filter(({l,i}) => (filter==='all' || filter==='done' && state.completed.includes(i+1) || filter===String(phase(i))) && normalize(l.title+' '+l.goal+' '+l.concept).includes(normalize(query)));
    $('#course-grid').innerHTML = rows.length ? rows.map(({l,i})=>`<article class="lesson-card phase-${phase(i)}"><div class="card-top"><span class="lesson-icon">${icon(icons[i])}</span><span class="step-label">ETAPA ${pad(i+1)}${state.completed.includes(i+1)?`<span class="completed-dot" aria-label="Concluída">${icon('check')}</span>`:''}</span></div><div class="card-phase">${phaseNames[phase(i)]}</div><h3>${esc(l.title)}</h3><p>${esc(l.goal)}</p><div class="card-footer"><span>${icon('clock')} 2 × 50 min</span><a href="#/etapa/${i+1}" aria-label="${state.completed.includes(i+1)?'Rever':'Explorar'} etapa ${i+1}: ${esc(l.title)}">${state.completed.includes(i+1)?'Rever':'Explorar'} ${icon('arrow')}</a></div></article>`).join('') : '<div class="empty-state"><h3>Nenhuma etapa por aqui.</h3><p>Tente outra palavra ou selecione “Todas as etapas”.</p></div>';
    $('#search-count').hidden = !(query || filter!=='all'); $('#search-count').textContent = `${rows.length} etapa(s) encontrada(s).`;
  }
  const stepsDone = n => D.lessons[n-1].steps.filter((_,i)=>state.steps[n+'_'+i]).length;
  function lesson(n) {
    const l=D.lessons[n-1], q=quizzes[n-1], completed=state.completed.includes(n), sheet=sheetProgress(n);
    state.last=n; save();
    $('#main').innerHTML = `<a class="back-link" href="#/trilha">${icon('back')} Voltar à trilha</a>${header(`ETAPA ${pad(n)} / 12 · ${phaseNames[phase(n-1)]}`,l.title,l.goal)}<div class="detail-layout"><div><section class="panel key-panel"><span class="eyebrow">${icon('spark')} EM UMA FRASE</span><p class="key-line">${esc(l.key)}</p></section><section class="panel"><div class="panel-label">${icon('notebook')} O ESSENCIAL</div><ul class="essentials">${l.bullets.map(b=>`<li>${esc(b)}</li>`).join('')}</ul><div class="terms"><span class="eyebrow">TERMOS DESTA ETAPA · toque para ver o significado</span><div class="term-chips">${l.terms.map((t,i)=>`<button class="term-chip" data-term="${i}" aria-expanded="false">${esc(t[0])}</button>`).join('')}</div><p class="term-def" id="term-def" role="status" hidden></p></div><details class="deep-dive"><summary>Aprofundar: explicação completa</summary>${paragraphs(l.concept)}</details></section><section class="panel example-panel"><div class="panel-label">${icon('bulb')} EXEMPLO FICTÍCIO · FILA MENOR</div>${paragraphs(l.example)}<p class="example-warn">Serve como referência do nível de detalhe esperado. Os dados da sua equipe precisam ser seus.</p></section><section class="panel"><div class="panel-label">${icon('users')} AGORA É COM A EQUIPE</div><div class="tasks-head"><h2>Hora de colocar em prática</h2><span class="tasks-count" id="tasks-count">${stepsDone(n)} de ${l.steps.length} tarefas</span></div><ol class="tasks checklist">${l.steps.map((s,i)=>`<li><label><input type="checkbox" data-step="${n}_${i}" ${state.steps[n+'_'+i]?'checked':''}><span>${esc(s)}</span></label></li>`).join('')}</ol></section><section class="panel quiz"><div class="panel-label">${icon('spark')} PAUSA PARA PENSAR</div><fieldset><legend>${esc(q[0])}</legend>${q[1].map((t,i)=>`<label class="quiz-option"><input type="radio" name="quiz" value="${i}" data-quiz="${n}" ${state.quizzes[n]===i?'checked':''}><span>${esc(t)}</span></label>`).join('')}</fieldset><div id="quiz-feedback" class="quiz-feedback" role="status" ${state.quizzes[n]===undefined?'hidden':''}>${quizMessage(n,state.quizzes[n])}</div></section><div class="lesson-pagination">${n>1?button('#/etapa/'+(n-1),'Etapa anterior','secondary','back'):'<span></span>'}${n<12?button('#/etapa/'+(n+1),'Próxima etapa','primary'):button('#/caderno/12','Preparar apresentação','primary')}</div></div><aside class="lesson-side" aria-label="Entrega e foco"><div class="panel"><span class="eyebrow">SUA ENTREGA</span><h3>Um passo concreto.</h3><p>${esc(l.delivery)}</p><div class="side-progress"><div class="progress-top"><span>Ficha ${pad(n)}</span><span>${sheet.filled} de ${sheet.total} campos</span></div><progress value="${sheet.filled}" max="${sheet.total}" aria-label="Campos preenchidos na ficha ${pad(n)}">${sheet.pct}%</progress></div>${button('#/caderno/'+n,'Preencher ficha '+pad(n),'lime','notebook')}<div class="side-divider"></div><h3>Antes de seguir</h3><p>${esc(l.check)}</p><button class="button ${completed?'secondary':'primary'}" id="complete-button" data-complete="${n}" aria-pressed="${completed}">${icon('check')} ${completed?'Etapa concluída':'Marcar como concluída'}</button><p style="margin-top:10px;font-size:10px">Marque depois de realizar a entrega. Você pode revisar quando quiser.</p></div><div class="panel"><span class="eyebrow">TEMPO PARA CRIAR</span><h3>Uma rodada de foco.</h3><p>15 minutos para começar uma tarefa em equipe.</p><output class="focus-time" id="focus-time" aria-label="Tempo restante">${formatTime(timerSeconds)}</output><div class="focus-controls"><button class="button secondary" id="timer-toggle">${timerId?'Pausar':'Iniciar'}</button><button class="button secondary" id="timer-reset" aria-label="Reiniciar cronômetro">${icon('refresh')}</button></div></div></aside></div>`;
  }
  function quizMessage(n,choice) { if (choice===undefined) return ''; const q=quizzes[n-1]; return `<strong>${choice===q[2]?'Isso mesmo.':'Vamos pensar mais um pouco.'}</strong> ${esc(q[3])}`; }
  const resources=[['01_Apostila_do_Aluno','Apostila do aluno','Explicações curtas, exemplos e desafios para acompanhar as 12 etapas.','13 páginas','notebook'],['02_Caderno_de_Atividades','Caderno de atividades','Fichas para imprimir e preencher. Inclui o modelo de entrevista individual.','13 páginas','folder'],['03_Guia_do_Professor','Guia do professor','Orientações, planejamento de aulas, avaliação e respostas de referência.','5 páginas','teacher']];
  function materials() {
    $('#main').innerHTML=header('SUA BIBLIOTECA','Tudo à mão. Mesmo no papel.','Baixe os materiais para estudar, imprimir ou adaptar. As atividades também funcionam sem computador.')+`<div class="resource-grid">${resources.map(([stem,title,desc,pages,symbol],i)=>`<article class="resource-card"><div class="resource-cover"><span>STARTLAB / ${pad(i+1)}</span><h2>${title}</h2>${icon(symbol)}</div><div class="resource-body"><p>${desc}</p><div class="download-links"><a class="button primary" href="${stem}.pdf" download>${icon('download')} PDF</a><a class="button secondary" href="${stem}.docx" download>${icon('download')} Word</a><a class="button secondary" href="${stem}.html">Ler HTML</a></div><span class="resource-meta">${pages} · PDF para imprimir · Word editável</span></div></article>`).join('')}</div><section class="bottom-banner"><div><h3>Uma ficha. Uma descoberta.</h3><p>Na etapa 03, imprima cinco cópias do modelo de entrevista por equipe.</p></div>${button('#/caderno','Usar caderno digital','secondary','notebook')}</section>`;
  }
  function teacher() {
    $('#main').innerHTML=header('PARA QUEM ENSINA','Menos exposição. Mais experimentação.','Uma sequência prática para apoiar estudantes que ainda não sabem como começar. Cada etapa termina com uma entrega.')+`<div class="teacher-intro"><div class="panel"><span class="eyebrow">PERCURSO ESSENCIAL</span><h2>24 aulas</h2><p>12 etapas × 2 aulas de 50 minutos.<br>20 horas de relógio, com pesquisa e produção.</p></div><div class="panel"><span class="eyebrow">PERCURSO AMPLIADO</span><h2>40 aulas</h2><p>Mais tempo para entrevistas, protótipos e revisão.<br>33 horas e 20 minutos de relógio.</p></div></div>${D.guide.map(([title,content],i)=>`<details class="guide-accordion" ${i===0?'open':''}><summary>${esc(title)}</summary><div class="guide-content">${paragraphs(content)}</div></details>`).join('')}<section class="bottom-banner"><div><h3>O processo também é resultado.</h3><p>Avalie a investigação, a participação e a capacidade de aprender com os testes.</p></div><a class="button secondary" href="03_Guia_do_Professor.pdf" download>${icon('download')} Baixar guia</a></section>`;
  }
  const modelFields=['Usuário','Pagador','Benefício','Canal de acesso','Atividades','Recursos e parceiros','Receita','Gastos'];
  const pitchFields=['Problema e público','Evidências','Solução e demonstração','Modelo de negócio','Testes e próximo passo'];
  const fixedCol=(n,index)=> n===8&&index===0 ? modelFields : n===12&&index===0 ? pitchFields : null;
  // Todas as respostas esperadas em uma ficha, para medir o preenchimento.
  function sheetKeys(n) {
    const keys=[];
    D.worksheets[n-1].forEach((item,i)=>{
      if (item.length===2) { if (item[1]!==0) keys.push('f'+n+'_'+i); return; }
      const fixed=fixedCol(n,i);
      item[1].forEach((h,c)=>{ if (fixed&&c===0) return; for (let r=0;r<item[2];r++) keys.push('f'+n+'_'+i+'_'+r+'_'+c); });
    });
    keys.push('contrib'+n);
    return keys;
  }
  function sheetProgress(n) {
    const keys=sheetKeys(n), filled=keys.filter(k=>(state.answers[k]||'').trim()).length;
    return {filled, total:keys.length, pct:Math.round(filled/keys.length*100)};
  }
  const exampleFor=(prefix,index)=> prefix[0]==='p' ? D.interview_examples[index] : (D.examples[prefix.slice(1)]||{})[index];
  function exampleBlock(key,example,headers) {
    if (example===undefined) return '';
    const body=Array.isArray(example)
      ? `<div class="table-wrap" tabindex="0" role="region" aria-label="Exemplo em tabela"><table class="example-table"><thead><tr>${headers.map(h=>`<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${example.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`
      : `<p class="example-text">${esc(example).replace(/\n/g,'<br>')}</p>`;
    return `<p class="example-row"><button class="ex-toggle" data-example="${key}" aria-expanded="${showExamples}" aria-controls="ex-${key}">${icon('bulb')} <span>${showExamples?'Ocultar exemplo':'Ver exemplo preenchido'}</span></button></p><div class="example-box" id="ex-${key}" ${showExamples?'':'hidden'}><span class="example-tag">EXEMPLO FICTÍCIO · FILA MENOR</span>${body}<p class="example-warn">Referência de detalhe, não resposta pronta. Copiar o exemplo não gera evidência: escreva com os registros da sua equipe.</p></div>`;
  }
  // Widget de médias da etapa 04: calcula importância e satisfação e envia o resultado para a matriz.
  function averages() {
    const note=(need,resp,kind)=>state.answers[`med_${need}_${resp}_${kind}`]??'';
    return `<section class="widget" aria-labelledby="med-title"><h3 id="med-title">${icon('chart')} Calculadora de médias</h3><p>Digite as notas de 1 a 5 que vocês coletaram. Deixe em branco quem não respondeu — ausência não vira zero.</p>${[0,1].map(need=>`<div class="med-need"><b>Necessidade ${need+1}</b><div class="med-grid">${[0,1,2,3,4].map(r=>`<div class="med-cell"><span>P${r+1}</span><input type="number" min="1" max="5" step="1" data-answer="med_${need}_${r}_i" data-med="${need}" aria-label="Necessidade ${need+1}, P${r+1}, importância" placeholder="I" value="${esc(note(need,r,'i'))}"><input type="number" min="1" max="5" step="1" data-answer="med_${need}_${r}_s" data-med="${need}" aria-label="Necessidade ${need+1}, P${r+1}, satisfação" placeholder="S" value="${esc(note(need,r,'s'))}"></div>`).join('')}</div><div class="med-out" id="med-out-${need}" aria-live="polite"></div></div>`).join('')}<button class="button secondary" id="med-apply">${icon('arrow')} Enviar médias para a matriz</button><p class="calc-warning">Importância alta com satisfação baixa indica onde investigar — não comprova que o negócio funciona.</p></section>`;
  }
  function updateAverages() {
    if (!$('#med-out-0')) return;
    const money=x=>x.toLocaleString('pt-BR',{minimumFractionDigits:1,maximumFractionDigits:1});
    [0,1].forEach(need=>{
      const read=kind=>[0,1,2,3,4].map(r=>Number(state.answers[`med_${need}_${r}_${kind}`])).filter(v=>Number.isFinite(v)&&v>=1&&v<=5);
      const imp=read('i'), sat=read('s');
      const avg=list=>list.length?list.reduce((a,b)=>a+b,0)/list.length:null;
      const ai=avg(imp), as=avg(sat), el=$('#med-out-'+need);
      if (ai===null&&as===null) { el.innerHTML='<span class="muted">Sem notas válidas ainda.</span>'; return; }
      const verdict = ai!==null&&as!==null ? (ai>=4&&as<=2.5 ? 'Importância alta e satisfação baixa: forte candidata a prioridade.' : ai-as>=1.5 ? 'Há uma distância relevante entre o que importa e o que é atendido hoje.' : 'A distância é pequena: procure outra necessidade ou mais evidências.') : 'Preencha os dois lados para comparar.';
      el.innerHTML=`<b>Média I: ${ai===null?'—':money(ai)}</b> <b>Média S: ${as===null?'—':money(as)}</b> <span>${imp.length} / ${sat.length} respostas</span><p>${verdict}</p>`;
    });
  }
  function fieldHTML(item,index,prefix,n) {
    const [title,body,count]=item, key=prefix+'_'+index, example=exampleFor(prefix,index);
    if (item.length===2 && body===0) return `<p class="worksheet-hint">${esc(title)}</p>`;
    if (item.length===2) return `<label class="field"><span>${esc(title)}</span><textarea data-answer="${key}" maxlength="20000" rows="${Math.max(3,body)}" placeholder="Registre as descobertas da equipe...">${esc(state.answers[key])}</textarea></label>${exampleBlock(key,example)}`;
    const fixed=fixedCol(n,index), scored=n===6&&index===2, tested=n===10&&index===1;
    const cell=(h,r,c)=>{
      if (fixed&&c===0) return `<span class="row-label">${fixed[r]}</span>`;
      const cellKey=key+'_'+r+'_'+c, value=esc(state.answers[cellKey]), label=`aria-label="${esc(title)}, linha ${r+1}, ${esc(h)}"`;
      if (scored&&c>=1&&c<=3) return `<input class="score-input" type="number" min="1" max="3" step="1" ${label} data-answer="${cellKey}" data-score="${r}" placeholder="1-3" value="${value}">`;
      if (scored&&c===4) return `<output class="score-total" id="score-total-${r}" ${label}>${value||'—'}</output>`;
      if (tested&&(c===1||c===3)) return `<select ${label} data-answer="${cellKey}" data-test="${c}">${['','Sim','Não'].map(o=>`<option value="${o}" ${state.answers[cellKey]===o?'selected':''}>${o||'—'}</option>`).join('')}</select>`;
      return `<textarea ${label} data-answer="${cellKey}" maxlength="20000" rows="2">${value}</textarea>`;
    };
    const table=`<h3 class="field-title">${esc(title)}</h3><div class="table-wrap" tabindex="0" role="region" aria-label="Tabela: ${esc(title)}"><table><thead><tr>${body.map(h=>`<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${Array.from({length:count},(_,r)=>`<tr id="row-${key}-${r}">${body.map((h,c)=>`<td>${cell(h,r,c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    const live = scored ? '<p class="live-note" id="score-note" role="status"></p>' : tested ? '<p class="live-note" id="test-note" role="status"></p>' : '';
    return (n===4&&index===1?averages():'')+table+live+exampleBlock(key,example,body);
  }
  // Etapa 06: soma as notas e destaca a opção mais bem avaliada.
  function updateScores() {
    const note=$('#score-note'); if (!note) return;
    let best=-1, bestRow=-1, ties=false;
    [0,1,2].forEach(r=>{
      const parts=[1,2,3].map(c=>Number(state.answers[`f6_2_${r}_${c}`]));
      const valid=parts.filter(v=>Number.isFinite(v)&&v>=1&&v<=3);
      const total=valid.length===3 ? parts.reduce((a,b)=>a+b,0) : null;
      if (total===null) delete state.answers[`f6_2_${r}_4`]; else state.answers[`f6_2_${r}_4`]=String(total);
      const out=$('#score-total-'+r); if (out) out.textContent=total===null?'—':String(total);
      const row=$(`#row-f6_2-${r}`); if (row) row.classList.remove('row-best');
      if (total!==null) { if (total>best) { best=total; bestRow=r; ties=false; } else if (total===best) ties=true; }
    });
    const label=(state.answers['f6_2_'+bestRow+'_0']||'').trim();
    note.textContent = bestRow<0 ? 'Dê notas de 1 a 3 nas três colunas para ver o total de cada opção.'
      : ties ? `Empate em ${best} pontos. Desempatem pela evidência: qual delas ataca a causa que vocês observaram?`
      : `Maior total: ${best} pontos${label?' — '+label:` (linha ${bestRow+1})`}. A nota é estimativa: escreva por que essa opção convence.`;
    if (!ties&&bestRow>=0) { const row=$(`#row-f6_2-${bestRow}`); if (row) row.classList.add('row-best'); }
  }
  // Etapa 10: conta quantos concluíram e quantos precisaram de ajuda.
  function updateTest() {
    const note=$('#test-note'); if (!note) return;
    const col=c=>[0,1,2].map(r=>state.answers[`f10_1_${r}_${c}`]||'');
    const answered=col(1).filter(Boolean).length, done=col(1).filter(v=>v==='Sim').length, helped=col(3).filter(v=>v==='Sim').length;
    note.textContent = !answered ? 'Marque “Concluiu?” e “Ajuda?” para ver o resultado somado.'
      : `${done} de ${answered} concluíram${helped?`; ${helped} precisaram de ajuda`:''}. Compare com o critério que vocês escreveram ANTES do teste — não mude o critério agora.`;
  }
  function calculator() { return `<section class="calculator" aria-labelledby="calc-title"><h3 id="calc-title">Experimente os números</h3><p>Simulação de um mês. Altere as hipóteses e observe o saldo. Os valores iniciais são fictícios.</p><div class="calculator-grid">${[['price','Preço por cliente (R$)',30],['clients','Quantidade de clientes',4],['variable','Gasto por cliente (R$)',5],['fixed','Outros gastos mensais (R$)',60]].map(([k,t,v])=>`<label class="field"><span>${t}</span><input type="number" data-answer="calc_${k}" data-calc="${k}" min="0" max="1000000000" step="${k==='clients'?'1':'0.01'}" value="${esc(state.answers['calc_'+k]??v)}"></label>`).join('')}</div><div class="calc-results" aria-live="polite"><div><small>Receita</small><b id="calc-revenue"></b></div><div><small>Gastos</small><b id="calc-cost"></b></div><div><small>Saldo simplificado</small><b id="calc-balance"></b></div></div><div class="calc-warning" id="calc-warning"></div><p class="calc-warning">O saldo não inclui gastos omitidos nem comprova lucro líquido. Transfira suas hipóteses e conclusões para a ficha.</p></section>`; }
  function updateCalc() {
    if (!$('#calc-revenue')) return;
    const inputs=$$('[data-calc]');
    if (inputs.some(el=>el.value===''||!el.checkValidity()||!Number.isFinite(Number(el.value)))) { ['revenue','cost','balance'].forEach(k=>$('#calc-'+k).textContent='—'); $('#calc-warning').textContent='Use valores não negativos e uma quantidade inteira de clientes.'; return; }
    const vals=Object.fromEntries(inputs.map(el=>[el.dataset.calc,Number(el.value)]));
    const revenue=vals.price*vals.clients, cost=vals.variable*vals.clients+vals.fixed, money=n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
    $('#calc-revenue').textContent=money(revenue); $('#calc-cost').textContent=money(cost); $('#calc-balance').textContent=money(revenue-cost);
    const half=Math.floor(vals.clients/2), margin=vals.price-vals.variable;
    const breakeven = margin<=0 ? 'Cada cliente custa mais do que paga: nenhum número de clientes fecha a conta. Revejam o preço ou o gasto por cliente.' : `Seriam necessários ${Math.ceil(vals.fixed/margin)} cliente(s) só para cobrir os gastos.`;
    $('#calc-warning').textContent=`Com ${half} cliente(s), o saldo seria ${money(half*margin-vals.fixed)}. ${breakeven}`;
  }
  function workbook(n=1, person=1) {
    const interview=n===13, title=interview?'Registros das entrevistas':D.lessons[n-1].title, items=interview?D.interview:D.worksheets[n-1], prefix=interview?'p'+person:'f'+n;
    $('#main').innerHTML=header('CADERNO DA EQUIPE','Seu projeto ganha forma aqui.','Transforme cada atividade em um registro. Volte quando quiser para completar, revisar e melhorar.')+`<div class="project-bar"><label class="field"><span>Nome da equipe ou projeto</span><input id="team-name" maxlength="200" placeholder="Como vamos chamar esta equipe?" value="${esc(state.team)}"></label><div class="project-actions"><button class="button secondary" id="export-json">${icon('download')} Salvar cópia</button><button class="button secondary" id="import-json">${icon('upload')} Restaurar cópia</button><button class="button primary" id="export-text">${icon('notebook')} Exportar respostas</button></div></div><p class="save-note">${icon('lock')}<span id="save-status">${storageOK?'Respostas ficam apenas neste navegador. Exporte uma cópia para guardar ou trocar de aparelho.':'O navegador não conseguiu salvar. Exporte uma cópia antes de sair.'}</span></p><div class="workbook-layout"><nav class="worksheet-nav" aria-label="Fichas do projeto">${D.lessons.map((l,i)=>{const p=sheetProgress(i+1);return `<a href="#/caderno/${i+1}" class="${n===i+1?'active':''}${p.pct===100?' sheet-full':''}" ${n===i+1?'aria-current="page"':''}><span>${pad(i+1)}</span>${esc(l.title)}<small class="sheet-pct" title="${p.filled} de ${p.total} campos preenchidos">${p.pct}%</small></a>`}).join('')}<a href="#/caderno/13" class="${interview?'active':''}" ${interview?'aria-current="page"':''}><span>+</span>5 entrevistas</a></nav><div><section class="panel worksheet"><div class="worksheet-header"><div><span class="eyebrow">${interview?'MODELO EXTRA':`FICHA ${pad(n)} / 12`}</span><h2>${esc(title)}</h2></div><div class="worksheet-tools"><button class="button secondary" id="toggle-examples" aria-pressed="${showExamples}">${icon('bulb')} ${showExamples?'Ocultar exemplos':'Ver exemplos'}</button><button class="icon-button" id="print-page" aria-label="Imprimir ficha atual" title="Imprimir ficha">${icon('print')}</button></div></div><p class="worksheet-hint">${interview?'Converse com pessoas do público escolhido. Use códigos P1 a P5; não é necessário registrar nomes, telefone, foto ou documento.':`Leia a <a href="#/etapa/${n}" style="text-decoration:underline">etapa ${pad(n)}</a>, combine as tarefas e preencha a ficha com a equipe.`}</p>${n===3?`<p class="worksheet-hint"><a href="#/caderno/13" style="text-decoration:underline">Abrir os cinco registros individuais de entrevista →</a></p>`:''}${interview?`<div class="interview-tabs" aria-label="Selecionar entrevista">${[1,2,3,4,5].map(p=>`<a class="button ${p===person?'primary':'secondary'}" href="#/caderno/13/${p}" ${p===person?'aria-current="page"':''}>P${p}</a>`).join('')}</div><label class="field"><span>Contexto e data da entrevista P${person}</span><textarea data-answer="p${person}_99" maxlength="20000" rows="2" placeholder="Data e contexto, sem identificar a pessoa">${esc(state.answers['p'+person+'_99'])}</textarea></label>`:''}${items.map((item,i)=>fieldHTML(item,i,prefix,n)).join('')}${!interview?`<label class="field"><span>Quem fez o quê nesta etapa?</span><textarea rows="2" maxlength="20000" data-answer="contrib${n}" placeholder="Registre a contribuição de cada integrante">${esc(state.answers['contrib'+n])}</textarea></label>`:''}</section>${n===8?calculator():''}<div class="lesson-pagination">${n>1?button('#/caderno/'+(n-1),'Ficha anterior','secondary','back'):'<span></span>'}${n<12?button('#/caderno/'+(n+1),'Próxima ficha','primary'):button('#/trilha','Voltar à trilha','secondary')}</div></div></div>`;
    updateCalc(); updateAverages(); updateScores(); updateTest();
  }
  function download(text,name,type) { const url=URL.createObjectURL(new Blob([text],{type})); const a=document.createElement('a'); a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000); }
  function exportAnswers() {
    const totals=overall();
    let out=`STARTLAB — PORTFÓLIO DA EQUIPE\nEquipe: ${state.team||'(não informada)'}\nExportado em: ${new Date().toLocaleString('pt-BR')}\nEtapas marcadas: ${state.completed.length}/12\nTarefas concluídas: ${totals.tasksDone}/${totals.tasks}\nCampos preenchidos: ${totals.filled}/${totals.fields}\n\n=== TAREFAS POR ETAPA ===\n`;
    D.lessons.forEach((l,i)=>{const n=i+1, feitas=l.steps.map((s,j)=>state.steps[n+'_'+j]?'[x] '+s:'[ ] '+s);out+=`\nEtapa ${pad(n)} — ${l.title}\n`+feitas.join('\n')+'\n';});
    function exportItems(items,prefix){
      return items.map((item,i)=>{
        if(item.length===2) return item[1] ? `${item[0]}\n${state.answers[prefix+'_'+i]||'(não preenchido)'}\n` : item[0]+'\n';
        const fixed=prefix==='f8'&&i===0?modelFields:prefix==='f12'&&i===0?pitchFields:null;
        return item[0]+'\n'+Array.from({length:item[2]},(_,r)=>item[1].map((h,c)=>`${h}: ${fixed&&c===0?fixed[r]:state.answers[prefix+'_'+i+'_'+r+'_'+c]||'—'}`).join(' | ')).join('\n')+'\n';
      }).join('\n');
    }
    D.lessons.forEach((l,i)=>{out+=`\n=== FICHA ${pad(i+1)} — ${l.title} ===\n\n`+exportItems(D.worksheets[i],'f'+(i+1))+`\nContribuições: ${state.answers['contrib'+(i+1)]||'(não preenchido)'}\n`;});
    for(let p=1;p<=5;p++)out+=`\n=== ENTREVISTA P${p} ===\nContexto e data: ${state.answers['p'+p+'_99']||'—'}\n`+exportItems(D.interview,'p'+p);
    out+='\n=== CALCULADORA — HIPÓTESES MENSAIS ===\n';
    for(const [k,label,v] of [['price','Preço',30],['clients','Clientes',4],['variable','Gasto por cliente',5],['fixed','Outros gastos',60]])out+=`${label}: ${state.answers['calc_'+k]??v} (valor inicial fictício se não alterado)\n`;
    download(out,'startlab-respostas.txt','text/plain;charset=utf-8');toast('Respostas exportadas para compartilhar com o professor.');
  }
  function formatTime(s){return pad(Math.floor(s/60))+':'+pad(s%60);}
  function tick(){timerSeconds=Math.max(0,Math.ceil((timerDeadline-Date.now())/1000));if($('#focus-time'))$('#focus-time').textContent=formatTime(timerSeconds);if(timerSeconds===0){clearInterval(timerId);timerId=null;if($('#timer-toggle'))$('#timer-toggle').textContent='Iniciar';toast('Rodada de foco concluída. Registrem o que conseguiram produzir.');}}
  function timerToggle(){if(timerId){tick();clearInterval(timerId);timerId=null;}else{if(!timerSeconds)timerSeconds=900;timerDeadline=Date.now()+timerSeconds*1000;timerId=setInterval(tick,250);}if($('#timer-toggle'))$('#timer-toggle').textContent=timerId?'Pausar':'Iniciar';}
  function themeUpdate(){const dark=document.documentElement.dataset.theme==='dark';$('#theme-button').innerHTML=icon(dark?'sun':'moon');$('#theme-button').setAttribute('aria-label',dark?'Ativar tema claro':'Ativar tema escuro');$('meta[name=theme-color]').content=dark?'#101b17':'#f6f7f2';}
  const mobile=matchMedia('(max-width: 740px)');
  function menu(open){$('#sidebar').classList.toggle('open',open);$('#shade').hidden=!open;$('#menu-button').setAttribute('aria-expanded',String(open));$('#menu-button').setAttribute('aria-label',open?'Fechar menu':'Abrir menu');$('#sidebar').inert=mobile.matches&&!open;$('.page-shell').inert=open;document.body.style.overflow=open?'hidden':'';if(open)$('.brand').focus();}
  mobile.addEventListener('change',()=>menu(false));
  function route(focus=true){
    const parts=location.hash.replace(/^#\/?/,'').split('/'), section=parts[0]||'trilha';
    const num=Number(parts[1]||1), person=Number(parts[2]||1);
    menu(false);
    const active=section==='etapa'?'trilha':section;
    $$('.main-nav a').forEach(a=>{a.classList.toggle('active',a.dataset.route===active);if(a.dataset.route===active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
    const names={trilha:'Minha trilha',etapa:'Minha trilha',caderno:'Meu projeto',materiais:'Materiais',professor:'Para o professor'};
    $('#route-name').textContent=names[section]||'Minha trilha';
    if(section==='etapa'&&Number.isInteger(num)&&num>=1&&num<=12)lesson(num);
    else if(section==='caderno'&&Number.isInteger(num)&&num>=1&&num<=13&&Number.isInteger(person)&&person>=1&&person<=5)workbook(num,person);
    else if(section==='materiais')materials();else if(section==='professor')teacher();else trail();
    document.title=(section==='etapa'&&D.lessons[num-1]?D.lessons[num-1].title:names[section]||'Minha trilha')+' — StartLab';
    if(focus){window.scrollTo({top:0,behavior:'instant'});$('#main').focus({preventScroll:true});}
  }
  function answerChanged(el) {
    state.answers[el.dataset.answer]=el.value;
    if(el.dataset.calc)updateCalc();
    if(el.dataset.med!==undefined)updateAverages();
    if(el.dataset.score!==undefined)updateScores();
    if(el.dataset.test!==undefined)updateTest();
    save();
  }
  document.addEventListener('input',e=>{
    const el=e.target;
    if(el.id==='lesson-search'){query=el.value;cards();}
    else if(el.id==='team-name'){state.team=el.value;save();}
    else if(el.dataset.answer)answerChanged(el);
  });
  document.addEventListener('change',e=>{
    const el=e.target;
    if(el.dataset.quiz){const n=Number(el.dataset.quiz);state.quizzes[n]=Number(el.value);save();$('#quiz-feedback').hidden=false;$('#quiz-feedback').innerHTML=quizMessage(n,Number(el.value));}
    else if(el.dataset.step){const n=Number(el.dataset.step.split('_')[0]);if(el.checked)state.steps[el.dataset.step]=true;else delete state.steps[el.dataset.step];save();const count=$('#tasks-count');if(count)count.textContent=`${stepsDone(n)} de ${D.lessons[n-1].steps.length} tarefas`;}
    else if(el.dataset.answer&&el.tagName==='SELECT')answerChanged(el);
  });
  document.addEventListener('click',e=>{
    const el=e.target.closest('button');if(!el)return;
    if(el.dataset.filter){filter=el.dataset.filter;$$('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===filter)));cards();}
    else if(el.id==='theme-button'){const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;try{localStorage.setItem('startlab-theme',theme);}catch(e){toast('Tema alterado para esta visita.');}themeUpdate();}
    else if(el.id==='menu-button')menu(!$('#sidebar').classList.contains('open'));
    else if(el.dataset.complete){const n=Number(el.dataset.complete),idx=state.completed.indexOf(n);if(idx>=0)state.completed.splice(idx,1);else state.completed.push(n);save();const done=state.completed.includes(n);el.setAttribute('aria-pressed',String(done));el.className='button '+(done?'secondary':'primary');el.innerHTML=icon('check')+' '+(done?'Etapa concluída':'Marcar como concluída');toast(done?(state.completed.length===12?'12 etapas concluídas. Hora de apresentar o que vocês aprenderam!':'Etapa concluída. Mais uma descoberta no caminho!'):'Etapa reaberta para revisão.');}
    else if(el.id==='export-json'){download(JSON.stringify(state,null,2),'startlab-projeto.json','application/json');toast('Cópia do projeto exportada. Guarde o arquivo para restaurar depois.');}
    else if(el.id==='import-json')$('#import-file').click();
    else if(el.id==='export-text')exportAnswers();
    else if(el.id==='print-page')window.print();
    else if(el.dataset.term!==undefined){const term=D.lessons[state.last-1].terms[Number(el.dataset.term)],box=$('#term-def'),open=el.getAttribute('aria-expanded')==='true';$$('.term-chip').forEach(c=>c.setAttribute('aria-expanded','false'));if(open){box.hidden=true;return;}el.setAttribute('aria-expanded','true');box.hidden=false;box.innerHTML=`<b>${esc(term[0])}:</b> ${esc(term[1])}`;}
    else if(el.dataset.example){const box=$('#ex-'+el.dataset.example),open=!box.hidden;box.hidden=open;el.setAttribute('aria-expanded',String(!open));$('span',el).textContent=open?'Ver exemplo preenchido':'Ocultar exemplo';}
    else if(el.id==='toggle-examples'){showExamples=!showExamples;$$('.example-box').forEach(b=>b.hidden=!showExamples);$$('.ex-toggle').forEach(b=>{b.setAttribute('aria-expanded',String(showExamples));$('span',b).textContent=showExamples?'Ocultar exemplo':'Ver exemplo preenchido';});el.setAttribute('aria-pressed',String(showExamples));el.innerHTML=icon('bulb')+' '+(showExamples?'Ocultar exemplos':'Ver exemplos');}
    else if(el.id==='med-apply'){[0,1].forEach(need=>{const read=kind=>[0,1,2,3,4].map(r=>Number(state.answers[`med_${need}_${r}_${kind}`])).filter(v=>Number.isFinite(v)&&v>=1&&v<=5);const imp=read('i'),sat=read('s');const avg=l=>l.length?(l.reduce((a,b)=>a+b,0)/l.length).toLocaleString('pt-BR',{minimumFractionDigits:1,maximumFractionDigits:1}):'';const set=(c,v)=>{const key=`f4_1_${need}_${c}`;state.answers[key]=v;const field=$(`[data-answer="${key}"]`);if(field)field.value=v;};if(!imp.length&&!sat.length)return;set(1,`${imp.length} / ${sat.length}`);set(2,avg(imp));set(3,avg(sat));});save();toast('Médias enviadas para a matriz. Revisem a justificativa com base nos relatos.');}
    else if(el.id==='timer-toggle')timerToggle();
    else if(el.id==='timer-reset'){clearInterval(timerId);timerId=null;timerSeconds=900;$('#focus-time').textContent='15:00';$('#timer-toggle').textContent='Iniciar';}
  });
  $('#shade').addEventListener('click',()=>{menu(false);$('#menu-button').focus();});
  document.addEventListener('keydown',e=>{if(!$('#sidebar').classList.contains('open'))return;if(e.key==='Escape'){menu(false);$('#menu-button').focus();}if(e.key==='Tab'){const list=$$('a,button',$('#sidebar'));const first=list[0],last=list.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
  $('#import-file').addEventListener('change',async e=>{
    const file=e.target.files[0];if(!file)return;
    try{if(file.size>4000000)throw Error('Arquivo muito grande.');const clean=validate(JSON.parse(await file.text()));if(confirm('Restaurar esta cópia substituirá as respostas e o progresso neste navegador. Deseja continuar?')){state=clean;save();route();toast('Cópia restaurada. Você pode continuar o projeto.');}}
    catch(error){toast('Não foi possível importar. Escolha uma cópia JSON válida exportada pelo StartLab.');}finally{e.target.value='';}
  });
  // Make all answer text visible when printing, including long table responses.
  let printNodes=[], printHeading;
  window.addEventListener('beforeprint',()=>{if(printNodes.length)return;const sheet=$('.worksheet');if(sheet){printHeading=document.createElement('p');printHeading.textContent='Equipe: '+(state.team||'________________________')+' · '+new Date().toLocaleDateString('pt-BR');printHeading.style.marginBottom='18px';sheet.prepend(printHeading);}$$('textarea').forEach(el=>{const p=document.createElement('div');p.textContent=el.value||' ';p.style.cssText='white-space:pre-wrap;overflow-wrap:anywhere;padding:10px;min-height:55px;font-size:10pt';el.after(p);el.hidden=true;printNodes.push([el,p]);});});
  window.addEventListener('afterprint',()=>{printNodes.forEach(([el,p])=>{el.hidden=false;p.remove();});printNodes=[];if(printHeading){printHeading.remove();printHeading=null;}});
  $$('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));themeUpdate();menu(false);route(false);window.addEventListener('hashchange',()=>route());
  if(!storageOK)toast('Os dados locais não puderam ser carregados. Você pode restaurar uma cópia em Meu projeto.');
})();
