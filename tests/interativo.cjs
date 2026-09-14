// Verifica os recursos da versão 3: conteúdo em camadas, exemplos por campo e widgets que calculam.
const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

(async () => {
  const base = process.env.TEST_URL || 'http://127.0.0.1:8765';
  const out = path.join(__dirname, '..', 'test-results');
  fs.mkdirSync(out, {recursive: true});
  const browser = await chromium.launch({headless: true});
  try {
    const context = await browser.newContext({viewport: {width: 1440, height: 1100}, reducedMotion: 'reduce'});
    const page = await context.newPage(), errors = [];
    page.on('pageerror', e => errors.push(e.message));

    // --- Etapa: frase-chave, essencial, termos e aprofundamento ---
    await page.goto(base + '/#/etapa/1');
    await page.locator('.key-line').waitFor();
    assert.ok((await page.locator('.key-line').textContent()).length > 30, 'frase-chave presente');
    assert.equal(await page.locator('.essentials li').count(), 3, 'três pontos essenciais');
    const deep = page.locator('.deep-dive');
    assert.equal(await deep.getAttribute('open'), null, 'explicação completa começa recolhida');
    await deep.locator('summary').click();
    assert.notEqual(await deep.getAttribute('open'), null, 'explicação completa abre');

    // Termos: clique mostra a definição, novo clique esconde, só um fica ativo.
    const chips = page.locator('.term-chip');
    assert.ok(await chips.count() >= 2, 'há termos na etapa');
    await chips.first().click();
    await page.locator('#term-def').waitFor({state: 'visible'});
    const firstDef = await page.locator('#term-def').textContent();
    assert.ok(firstDef.includes(':'), 'definição traz o termo e o significado');
    await chips.nth(1).click();
    assert.notEqual(await page.locator('#term-def').textContent(), firstDef, 'definição troca ao clicar em outro termo');
    assert.equal(await page.locator('.term-chip[aria-expanded="true"]').count(), 1, 'apenas um termo ativo');
    await chips.nth(1).click();
    assert.ok(await page.locator('#term-def').isHidden(), 'segundo clique fecha a definição');

    // --- Checklist de tarefas da etapa, com contador e persistência ---
    assert.match(await page.locator('#tasks-count').textContent(), /^0 de 4 tarefas$/);
    await page.locator('.checklist input').first().check();
    await page.locator('.checklist input').nth(1).check();
    assert.match(await page.locator('#tasks-count').textContent(), /^2 de 4 tarefas$/);
    await page.reload();
    await page.locator('#tasks-count').waitFor();
    assert.match(await page.locator('#tasks-count').textContent(), /^2 de 4 tarefas$/, 'tarefas persistem após recarregar');
    await page.screenshot({path: path.join(out, 'v3-etapa.png'), fullPage: true});

    // --- Exemplo preenchido por campo, no caderno ---
    await page.goto(base + '/#/caderno/1');
    await page.locator('.worksheet').waitFor();
    const box = page.locator('#ex-f1_0');
    assert.ok(await box.isHidden(), 'exemplo começa oculto');
    await page.locator('[data-example="f1_0"]').click();
    await box.waitFor({state: 'visible'});
    assert.match(await box.textContent(), /Fila Menor/, 'exemplo identificado como fictício');
    assert.match(await box.textContent(), /Copiar o exemplo não gera evidência/, 'aviso pedagógico presente');
    assert.equal(await page.locator('[data-answer="f1_0"]').inputValue(), '', 'exemplo não preenche o campo do aluno');
    await page.locator('[data-example="f1_0"]').click();
    assert.ok(await box.isHidden(), 'exemplo fecha no segundo clique');

    // Exemplo em formato de tabela, com o mesmo número de colunas do campo.
    await page.locator('[data-example="f1_1"]').click();
    const exRows = page.locator('#ex-f1_1 .example-table tbody tr');
    assert.equal(await exRows.count(), 5, 'exemplo da tabela traz cinco linhas');
    assert.equal(await page.locator('#ex-f1_1 .example-table thead th').count(), 3);

    // Botão global abre e fecha todos os exemplos da ficha.
    await page.getByRole('button', {name: /Ver exemplos/}).click();
    assert.equal(await page.locator('.example-box:visible').count(), await page.locator('.example-box').count(), 'todos os exemplos abrem');
    await page.getByRole('button', {name: /Ocultar exemplos/}).click();
    assert.equal(await page.locator('.example-box:visible').count(), 0, 'todos os exemplos fecham');

    // Cobertura: toda ficha de 1 a 12 tem pelo menos um exemplo disponível.
    for (let n = 1; n <= 12; n++) {
      await page.goto(base + '/#/caderno/' + n);
      await page.locator('.worksheet').waitFor();
      assert.ok(await page.locator('.ex-toggle').count() > 0, 'ficha ' + n + ' tem exemplo');
    }
    // E o modelo de entrevista também.
    await page.goto(base + '/#/caderno/13');
    await page.locator('.worksheet').waitFor();
    assert.ok(await page.locator('.ex-toggle').count() > 0, 'entrevista tem exemplo');

    // --- Widget de médias (ficha 04) ---
    await page.goto(base + '/#/caderno/4');
    await page.locator('.widget').waitFor();
    const notas = [5, 4, 5, 4, 5], sat = [2, 2, 1, 3, 2];
    for (let r = 0; r < 5; r++) {
      await page.locator(`[data-answer="med_0_${r}_i"]`).fill(String(notas[r]));
      await page.locator(`[data-answer="med_0_${r}_s"]`).fill(String(sat[r]));
    }
    const saida = await page.locator('#med-out-0').textContent();
    assert.match(saida, /4,6/, 'média de importância 4,6');
    assert.match(saida, /2,0/, 'média de satisfação 2,0');
    assert.match(saida, /forte candidata a prioridade/, 'veredito de prioridade');
    await page.locator('#med-apply').click();
    assert.equal(await page.locator('[data-answer="f4_1_0_2"]').inputValue(), '4,6', 'média enviada para a matriz');
    assert.equal(await page.locator('[data-answer="f4_1_0_3"]').inputValue(), '2,0');
    assert.equal(await page.locator('[data-answer="f4_1_0_1"]').inputValue(), '5 / 5');
    // Ausência não vira zero: um branco reduz o número de respostas, não a média.
    await page.locator('[data-answer="med_0_4_i"]').fill('');
    assert.match(await page.locator('#med-out-0').textContent(), /4 \/ 5 respostas/, 'branco não conta como nota');
    await page.reload();
    await page.locator('.widget').waitFor();
    assert.equal(await page.locator('[data-answer="med_0_0_i"]').inputValue(), '5', 'notas persistem');

    // --- Notas das ideias somam sozinhas e destacam a melhor (ficha 06) ---
    await page.goto(base + '/#/caderno/6');
    await page.locator('#score-note').waitFor();
    assert.match(await page.locator('#score-note').textContent(), /Dê notas de 1 a 3/);
    const notasIdeias = [[3, 3, 3], [2, 3, 3], [2, 2, 3]];
    await page.locator('[data-answer="f6_2_0_0"]').fill('Pedido em papel antes do sinal');
    for (let r = 0; r < 3; r++) for (let c = 1; c <= 3; c++) {
      await page.locator(`[data-answer="f6_2_${r}_${c}"]`).fill(String(notasIdeias[r][c - 1]));
    }
    assert.equal(await page.locator('#score-total-0').textContent(), '9', 'total somado sozinho');
    assert.equal(await page.locator('#score-total-1').textContent(), '8');
    assert.equal(await page.locator('#score-total-2').textContent(), '7');
    assert.equal(await page.locator('tr.row-best').count(), 1, 'melhor linha destacada');
    assert.match(await page.locator('#score-note').textContent(), /Pedido em papel antes do sinal/, 'nota cita a opção vencedora');
    // Empate é comunicado em vez de escolhido no automático.
    await page.locator('[data-answer="f6_2_1_1"]').fill('3');
    assert.match(await page.locator('#score-note').textContent(), /Empate/, 'empate é sinalizado');
    assert.equal(await page.locator('tr.row-best').count(), 0, 'empate não elege vencedor');

    // --- Resultado do teste conta sozinho (ficha 10) ---
    await page.goto(base + '/#/caderno/10');
    await page.locator('#test-note').waitFor();
    await page.locator('[data-answer="f10_1_0_1"]').selectOption('Sim');
    await page.locator('[data-answer="f10_1_1_1"]').selectOption('Não');
    await page.locator('[data-answer="f10_1_1_3"]').selectOption('Sim');
    await page.locator('[data-answer="f10_1_2_1"]').selectOption('Não');
    const testNote = await page.locator('#test-note').textContent();
    assert.match(testNote, /1 de 3 concluíram/, 'contagem do teste');
    assert.match(testNote, /1 precisaram de ajuda/, 'contagem de ajuda');
    assert.match(testNote, /não mude o critério agora/, 'lembrete do critério prévio');

    // --- Calculadora com ponto de equilíbrio (ficha 08) ---
    await page.goto(base + '/#/caderno/8');
    await page.locator('#calc-balance').waitFor();
    // toLocaleString usa espaço não separável entre o símbolo e o valor.
    const dinheiro = s => s.replace(/\s/g, ' ');
    assert.equal(dinheiro(await page.locator('#calc-balance').textContent()), 'R$ 40,00');
    assert.match(await page.locator('#calc-warning').textContent(), /3 cliente\(s\) só para cobrir os gastos/, 'ponto de equilíbrio calculado');
    await page.locator('[data-calc="price"]').fill('4');
    assert.match(await page.locator('#calc-warning').textContent(), /nenhum número de clientes fecha a conta/, 'margem negativa é avisada');

    // --- Progresso por ficha aparece na navegação e acompanha o preenchimento ---
    await page.goto(base + '/#/caderno/2');
    await page.locator('.worksheet').waitFor();
    const pct = page.locator('.worksheet-nav a[href="#/caderno/2"] .sheet-pct');
    const antes = await pct.textContent();
    await page.locator('[data-answer="f2_0"]').fill('Necessidade: se alimentar no intervalo.');
    await page.goto(base + '/#/caderno/3');
    await page.locator('.worksheet').waitFor();
    const depois = await page.locator('.worksheet-nav a[href="#/caderno/2"] .sheet-pct').textContent();
    assert.notEqual(antes, depois, 'porcentagem da ficha acompanha o preenchimento');
    // A etapa mostra o mesmo progresso da ficha correspondente.
    await page.goto(base + '/#/etapa/2');
    await page.locator('.side-progress').waitFor();
    assert.match(await page.locator('.side-progress').textContent(), /de \d+ campos/);

    // --- Exportação continua íntegra com os campos novos ---
    const backupPromise = page.waitForEvent('download');
    await page.goto(base + '/#/caderno/1');
    await page.locator('#export-json').click();
    const backup = await backupPromise;
    await backup.saveAs(path.join(out, 'v3-backup.json'));
    const json = JSON.parse(fs.readFileSync(path.join(out, 'v3-backup.json'), 'utf8'));
    assert.equal(json.steps['1_0'], true, 'tarefas marcadas entram na cópia');
    assert.equal(json.answers['med_0_0_i'], '5', 'notas do widget entram na cópia');
    assert.equal(json.answers['f6_2_0_4'], '9', 'total calculado entra na cópia');
    const textPromise = page.waitForEvent('download');
    await page.locator('#export-text').click();
    const texto = await textPromise;
    await texto.saveAs(path.join(out, 'v3-respostas.txt'));
    const corpo = fs.readFileSync(path.join(out, 'v3-respostas.txt'), 'utf8');
    assert.match(corpo, /Pedido em papel antes do sinal/, 'respostas exportadas em texto');

    // A cópia restaurada reproduz tarefas e widgets.
    await page.evaluate(() => localStorage.removeItem('startlab-project-v2'));
    await page.goto(base + '/#/caderno/1');
    page.once('dialog', d => d.accept());
    await page.locator('#import-file').setInputFiles(path.join(out, 'v3-backup.json'));
    await page.waitForTimeout(400);
    await page.goto(base + '/#/etapa/1');
    await page.locator('#tasks-count').waitFor();
    assert.match(await page.locator('#tasks-count').textContent(), /^2 de 4 tarefas$/, 'tarefas restauradas da cópia');

    // Cópia antiga (sem o campo steps) continua válida.
    const antiga = {schema: 2, team: 'Equipe Antiga', completed: [1], answers: {f1_0: 'texto'}, quizzes: {}, last: 1};
    fs.writeFileSync(path.join(out, 'v3-antigo.json'), JSON.stringify(antiga));
    page.once('dialog', d => d.accept());
    await page.goto(base + '/#/caderno/1');
    await page.locator('#import-file').setInputFiles(path.join(out, 'v3-antigo.json'));
    await page.waitForTimeout(400);
    assert.equal(await page.locator('#team-name').inputValue(), 'Equipe Antiga', 'cópia da versão anterior é aceita');

    // --- Telas estreitas: nada de rolagem horizontal com os componentes novos ---
    for (const width of [320, 390, 768]) {
      const small = await browser.newContext({viewport: {width, height: 900}, reducedMotion: 'reduce'});
      const p2 = await small.newPage();
      const errs = [];
      p2.on('pageerror', e => errs.push(e.message));
      for (const rota of ['#/etapa/1', '#/caderno/4', '#/caderno/6', '#/caderno/10']) {
        await p2.goto(base + '/' + rota);
        await p2.locator('main').waitFor();
        await p2.waitForTimeout(150);
        const over = await p2.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        assert.ok(over <= 1, `sem rolagem horizontal em ${width}px na rota ${rota} (sobra ${over}px)`);
      }
      if (width === 390) await p2.screenshot({path: path.join(out, 'v3-mobile.png'), fullPage: true});
      assert.deepEqual(errs, [], 'sem erros JavaScript em ' + width + 'px');
      await small.close();
    }

    // --- Tema escuro nos componentes novos ---
    await page.goto(base + '/#/caderno/4');
    await page.getByRole('button', {name: 'Ativar tema escuro'}).click();
    await page.locator('.widget').waitFor();
    await page.getByRole('button', {name: /Ver exemplos/}).click();
    await page.screenshot({path: path.join(out, 'v3-escuro.png'), fullPage: true});
    await page.getByRole('button', {name: 'Ativar tema claro'}).click();

    assert.deepEqual(errors, [], 'sem erros JavaScript');
    console.log('PASS: frase-chave, essencial, termos, aprofundar, checklist de tarefas, exemplos por campo nas 12 fichas e na entrevista, botão global de exemplos, médias com envio para a matriz, soma de notas com empate, contagem do teste, ponto de equilíbrio, progresso por ficha, exportação/importação com os campos novos, compatibilidade com cópias antigas, telas 320/390/768 e tema escuro.');
  } finally {
    await browser.close();
  }
})().catch(e => { console.error(e); process.exit(1); });
