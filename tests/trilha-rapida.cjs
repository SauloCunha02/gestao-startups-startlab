// Verifica a Trilha Rápida: 7 passos, exemplos, progresso, salvamento e resumo.
const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

(async () => {
  const base = process.env.TEST_URL || 'http://127.0.0.1:8765';
  const url = base + '/trilha-rapida/index.html';
  const out = path.join(__dirname, '..', 'test-results');
  fs.mkdirSync(out, {recursive: true});
  const browser = await chromium.launch({headless: true});
  try {
    const context = await browser.newContext({viewport: {width: 1280, height: 1000}, reducedMotion: 'reduce'});
    const page = await context.newPage(), errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(url);
    await page.locator('.step').last().waitFor();

    assert.equal(await page.locator('.step').count(), 7, 'sete passos');
    assert.equal(await page.locator('.step .check input').count(), 7, 'um marcador por passo');
    assert.equal(await page.locator('a.deep').count(), 7, 'cada passo aponta para a trilha completa');

    // --- Exemplos: um por passo, abrindo individualmente e em conjunto ---
    assert.equal(await page.locator('.ex-toggle').count(), 7, 'exemplo em todos os passos');
    const box = page.locator('#ex-1');
    assert.ok(await box.isHidden(), 'exemplo começa oculto');
    await page.locator('[data-example="1"]').click();
    await box.waitFor({state: 'visible'});
    assert.match(await box.textContent(), /fila menor/i);
    assert.match(await box.textContent(), /Copiar o exemplo não gera evidência/);
    assert.equal(await page.locator('#p1a').inputValue(), '', 'exemplo não preenche o campo do aluno');
    await page.locator('[data-example="1"]').click();
    assert.ok(await box.isHidden(), 'segundo clique fecha');
    await page.getByRole('button', {name: 'Ver exemplos'}).click();
    assert.equal(await page.locator('.example-box:visible').count(), 7, 'botão global abre todos');
    await page.getByRole('button', {name: 'Ocultar exemplos'}).click();
    assert.equal(await page.locator('.example-box:visible').count(), 0, 'botão global fecha todos');

    // --- Progresso e persistência ---
    assert.match(await page.locator('#progress-text').textContent(), /^0 de 7 passos$/);
    await page.locator('#p1a').fill('Estudantes do 2º ano enfrentam fila longa na cantina.');
    await page.locator('#done-1').check();
    await page.locator('#done-2').check();
    assert.match(await page.locator('#progress-text').textContent(), /^2 de 7 passos$/);
    await page.reload();
    await page.locator('.step').last().waitFor();
    assert.equal(await page.locator('#p1a').inputValue(), 'Estudantes do 2º ano enfrentam fila longa na cantina.', 'resposta persiste');
    assert.match(await page.locator('#progress-text').textContent(), /^2 de 7 passos$/, 'progresso persiste');

    // Chave de armazenamento separada da trilha completa.
    const chaves = await page.evaluate(() => Object.keys(localStorage));
    assert.ok(chaves.includes('startlab-rapida-v1'), 'usa chave própria');
    assert.ok(!chaves.includes('startlab-project-v2'), 'não escreve na chave do caderno das 12 etapas');

    // --- Resumo exportado ---
    const dl = page.waitForEvent('download');
    await page.getByRole('button', {name: /Baixar meu resumo/}).click();
    const arquivo = await dl;
    await arquivo.saveAs(path.join(out, 'rapida-resumo.txt'));
    const texto = fs.readFileSync(path.join(out, 'rapida-resumo.txt'), 'utf8');
    assert.match(texto, /TRILHA RAPIDA/);
    assert.match(texto, /Estudantes do 2º ano enfrentam fila longa na cantina\./, 'resposta entra no resumo');
    assert.match(texto, /\[concluido\]/, 'passo concluído é marcado');

    // --- Tema acompanha a escolha feita na trilha completa ---
    await page.evaluate(() => localStorage.setItem('startlab-theme', 'dark'));
    await page.reload();
    assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark', 'tema escuro é herdado');
    await page.getByRole('button', {name: /Ver exemplos/}).click();
    await page.screenshot({path: path.join(out, 'rapida-escuro.png'), fullPage: true});
    await page.evaluate(() => localStorage.setItem('startlab-theme', 'light'));

    // --- Liga as outras duas trilhas ---
    await page.reload();
    await page.locator('.step').last().waitFor();
    assert.ok(await page.locator('a[href*="trilha-extrema"]').count() > 0, 'aponta para a Trilha Extrema');
    await page.locator('.back[href*="../index.html"]').click();
    await page.locator('.lesson-card').last().waitFor();
    assert.equal(await page.locator('.lesson-card').count(), 12, 'o link volta para as 12 etapas');

    // --- Telas estreitas ---
    for (const width of [320, 390, 768]) {
      const small = await browser.newContext({viewport: {width, height: 900}, reducedMotion: 'reduce'});
      const p2 = await small.newPage();
      const errs = [];
      p2.on('pageerror', e => errs.push(e.message));
      await p2.goto(url);
      await p2.locator('.step').last().waitFor();
      await p2.evaluate(() => document.querySelectorAll('.ex-toggle').forEach(b => b.click()));
      await p2.waitForTimeout(150);
      const over = await p2.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      assert.ok(over <= 1, `sem rolagem horizontal em ${width}px (sobra ${over}px)`);
      assert.deepEqual(errs, [], 'sem erros JavaScript em ' + width + 'px');
      await small.close();
    }

    assert.deepEqual(errors, [], 'sem erros JavaScript');
    console.log('PASS: 7 passos, exemplos individuais e em conjunto, campo do aluno preservado, progresso, persistência em chave própria, resumo exportado, tema herdado, volta para a trilha completa e telas 320/390/768.');
  } finally {
    await browser.close();
  }
})().catch(e => { console.error(e); process.exit(1); });
