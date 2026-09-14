// Verifica a Trilha Extrema: quatro blocos, cronômetro do sprint, exemplos e resumo.
const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

(async () => {
  const base = process.env.TEST_URL || 'http://127.0.0.1:8765';
  const url = base + '/trilha-extrema/index.html';
  const out = path.join(__dirname, '..', 'test-results');
  fs.mkdirSync(out, {recursive: true});
  const browser = await chromium.launch({headless: true});
  try {
    const context = await browser.newContext({viewport: {width: 1280, height: 1000}, reducedMotion: 'reduce'});
    const page = await context.newPage(), errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(url);
    await page.locator('.block').last().waitFor();

    // --- Estrutura: quatro blocos somando exatamente 50 minutos ---
    assert.equal(await page.locator('.block').count(), 4, 'quatro blocos');
    const minutos = await page.locator('.mins').allTextContents();
    assert.deepEqual(minutos, ['10 min', '15 min', '15 min', '10 min'], 'tempos por bloco');
    const soma = minutos.reduce((a, m) => a + parseInt(m, 10), 0);
    assert.equal(soma, 50, 'os blocos somam 50 minutos, uma aula');
    assert.equal(await page.locator('.block .check input').count(), 4);
    assert.equal(await page.locator('a.deep').count(), 4, 'cada bloco aponta para a etapa completa');

    // --- O aviso pedagógico precisa estar visível, não escondido ---
    const aviso = page.locator('.warn');
    assert.ok(await aviso.isVisible(), 'aviso sobre os limites aparece sem precisar clicar');
    assert.match(await aviso.textContent(), /não são evidência suficiente/i);
    assert.ok(await page.locator('.warn a[href*="trilha-rapida"]').count() > 0, 'aviso aponta para a Trilha Rápida');

    // --- Cronômetro: estado inicial ---
    assert.equal(await page.locator('#clock').textContent(), '10:00', 'começa com o bloco 1');
    assert.match(await page.locator('#now-name').textContent(), /^1 · O problema em uma frase$/);
    assert.match(await page.locator('#now-total').textContent(), /^50:00 restantes no sprint$/);
    assert.equal(await page.locator('#start-button').textContent(), 'Iniciar sprint');
    assert.equal(await page.locator('.block.active').count(), 0, 'nenhum bloco ativo antes de iniciar');

    // --- Iniciar: relógio anda e o bloco 1 fica destacado ---
    await page.getByRole('button', {name: 'Iniciar sprint'}).click();
    assert.equal(await page.locator('#start-button').textContent(), 'Pausar');
    await page.waitForTimeout(1400);
    const andando = await page.locator('#clock').textContent();
    assert.notEqual(andando, '10:00', 'o relógio corre');
    assert.equal(await page.locator('#bloco-1').getAttribute('class'), 'block active', 'bloco 1 destacado');
    assert.equal(await page.locator('.block.active').count(), 1, 'apenas um bloco ativo');
    assert.match(await page.locator('#sprint-note').textContent(), /Bloco 1 em andamento/);

    // --- Pausar congela o relógio ---
    await page.getByRole('button', {name: 'Pausar'}).click();
    const pausado = await page.locator('#clock').textContent();
    await page.waitForTimeout(1200);
    assert.equal(await page.locator('#clock').textContent(), pausado, 'pausado não avança');
    assert.equal(await page.locator('#start-button').textContent(), 'Continuar');
    assert.equal(await page.locator('.block.active').count(), 0, 'pausado não destaca bloco');

    // --- Próximo bloco avança e recarrega o tempo daquele bloco ---
    await page.getByRole('button', {name: 'Próximo bloco'}).click();
    assert.equal(await page.locator('#clock').textContent(), '15:00', 'bloco 2 tem 15 minutos');
    assert.match(await page.locator('#now-name').textContent(), /^2 · Três conversas de 3 minutos$/);
    await page.getByRole('button', {name: 'Próximo bloco'}).click();
    await page.getByRole('button', {name: 'Próximo bloco'}).click();
    assert.match(await page.locator('#now-name').textContent(), /^4 · Pitch de 60 segundos$/);
    assert.equal(await page.locator('#clock').textContent(), '10:00');
    // No último bloco, "próximo" encerra em vez de estourar o índice.
    await page.getByRole('button', {name: 'Próximo bloco'}).click();
    assert.match(await page.locator('#now-name').textContent(), /^4 · Pitch de 60 segundos$/, 'não passa do último bloco');
    assert.match(await page.locator('#sprint-note').textContent(), /último bloco/);

    // --- Zerar volta ao início sem apagar respostas ---
    await page.locator('#e1a').fill('Estudantes do 2º ano perdem metade do intervalo na fila.');
    await page.getByRole('button', {name: 'Zerar'}).click();
    assert.equal(await page.locator('#clock').textContent(), '10:00');
    assert.match(await page.locator('#now-total').textContent(), /^50:00 restantes/);
    assert.equal(await page.locator('#e1a').inputValue(), 'Estudantes do 2º ano perdem metade do intervalo na fila.', 'zerar não apaga respostas');

    // --- Respostas persistem e usam chave própria ---
    await page.locator('#e2a').fill('P1: terça, esperou 8 min. P2: desistiu ontem. P3: 10 min na quinta.');
    await page.locator('#done-1').check();
    await page.reload();
    await page.locator('.block').last().waitFor();
    assert.equal(await page.locator('#e2a').inputValue(), 'P1: terça, esperou 8 min. P2: desistiu ontem. P3: 10 min na quinta.');
    assert.ok(await page.locator('#done-1').isChecked(), 'bloco marcado persiste');
    assert.equal(await page.locator('#clock').textContent(), '10:00', 'o cronômetro reinicia ao recarregar');
    const chaves = await page.evaluate(() => Object.keys(localStorage));
    assert.ok(chaves.includes('startlab-extrema-v1'), 'usa chave própria');
    assert.ok(!chaves.includes('startlab-rapida-v1'), 'não escreve na chave da Trilha Rápida');
    assert.ok(!chaves.includes('startlab-project-v2'), 'não escreve na chave do caderno');

    // --- Exemplos ---
    assert.equal(await page.locator('.ex-toggle').count(), 4, 'exemplo em todos os blocos');
    const box = page.locator('#ex-1');
    assert.ok(await box.isHidden());
    await page.locator('[data-example="1"]').click();
    await box.waitFor({state: 'visible'});
    assert.match(await box.textContent(), /fila menor/i);
    assert.match(await box.textContent(), /ERRADO/, 'bloco 1 mostra também a frase errada');
    assert.match(await box.textContent(), /Copiar o exemplo não gera evidência/);
    await page.getByRole('button', {name: 'Ver exemplos'}).click();
    assert.equal(await page.locator('.example-box:visible').count(), 4, 'botão global abre todos');
    await page.getByRole('button', {name: 'Ocultar exemplos'}).click();
    assert.equal(await page.locator('.example-box:visible').count(), 0);

    // --- Resumo exportado carrega o aviso dos limites ---
    const dl = page.waitForEvent('download');
    await page.getByRole('button', {name: /Baixar meu resumo/}).click();
    const arquivo = await dl;
    await arquivo.saveAs(path.join(out, 'extrema-resumo.txt'));
    const texto = fs.readFileSync(path.join(out, 'extrema-resumo.txt'), 'utf8');
    assert.match(texto, /TRILHA EXTREMA/);
    assert.match(texto, /P1: terça, esperou 8 min/, 'resposta entra no resumo');
    assert.match(texto, /\[concluido\]/);
    assert.match(texto, /nao evidencia suficiente/i, 'resumo leva o aviso para o professor');

    // --- Navegação entre as três trilhas ---
    await page.locator('.next a[href*="trilha-rapida"]').click();
    await page.locator('.step').last().waitFor();
    assert.equal(await page.locator('.step').count(), 7, 'chega na Trilha Rápida');
    await page.locator('a[href*="trilha-extrema"]').first().click();
    await page.locator('.block').last().waitFor();
    assert.equal(await page.locator('.block').count(), 4, 'a Rápida aponta de volta para a Extrema');
    await page.locator('.back[href*="../index.html"]').click();
    await page.locator('.lesson-card').last().waitFor();
    assert.equal(await page.locator('.lesson-card').count(), 12, 'volta para as 12 etapas');
    assert.ok(await page.locator('.main-nav a[href="trilha-extrema/index.html"]').count() > 0, 'menu tem a Trilha Extrema');

    // --- Tema escuro ---
    await page.goto(url);
    await page.evaluate(() => localStorage.setItem('startlab-theme', 'dark'));
    await page.reload();
    assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark', 'tema escuro é herdado');
    await page.getByRole('button', {name: /Ver exemplos/}).click();
    await page.getByRole('button', {name: 'Iniciar sprint'}).click();
    await page.screenshot({path: path.join(out, 'extrema-escuro.png'), fullPage: true});
    await page.getByRole('button', {name: 'Pausar'}).click();
    await page.evaluate(() => localStorage.setItem('startlab-theme', 'light'));
    await page.reload();
    await page.locator('.block').last().waitFor();
    await page.getByRole('button', {name: /Ver exemplos/}).click();
    await page.screenshot({path: path.join(out, 'extrema-claro.png'), fullPage: true});

    // --- Avanço automático: relógio virtual adianta o sprint inteiro ---
    {
      const relogio = await browser.newContext({viewport: {width: 1280, height: 1000}, reducedMotion: 'reduce'});
      const p3 = await relogio.newPage();
      const errs = [];
      p3.on('pageerror', e => errs.push(e.message));
      await p3.clock.install();
      await p3.goto(url);
      await p3.locator('.block').last().waitFor();
      await p3.getByRole('button', {name: 'Iniciar sprint'}).click();

      await p3.clock.runFor(10 * 60 * 1000 + 500);
      assert.match(await p3.locator('#now-name').textContent(), /^2 · /, 'ao fim dos 10 min vai sozinho para o bloco 2');
      assert.equal(await p3.locator('#clock').textContent(), '15:00', 'bloco 2 começa cheio');
      assert.match(await p3.locator('#sprint-note').textContent(), /Bloco 2 começou/);
      assert.equal(await p3.locator('#bloco-2').getAttribute('class'), 'block active');

      await p3.clock.runFor(15 * 60 * 1000 + 500);
      assert.match(await p3.locator('#now-name').textContent(), /^3 · /, 'segue para o bloco 3');
      await p3.clock.runFor(15 * 60 * 1000 + 500);
      assert.match(await p3.locator('#now-name').textContent(), /^4 · /, 'segue para o bloco 4');
      // A folga de 500 ms somada a cada virada faz o total fechar em 09:5x.
      assert.match(await p3.locator('#now-total').textContent(), /^(10:00|09:5\d) restantes/, 'sobram os 10 min do último bloco');

      await p3.clock.runFor(10 * 60 * 1000 + 500);
      assert.equal(await p3.locator('#clock').textContent(), '00:00', 'o sprint termina zerado');
      assert.match(await p3.locator('#sprint-note').textContent(), /Sprint concluído/);
      assert.equal(await p3.locator('#start-button').textContent(), 'Continuar', 'o cronômetro para no fim');
      assert.equal(await p3.locator('.block.active').count(), 0, 'nenhum bloco fica ativo após o fim');
      const largura = await p3.locator('#sprint-bar').evaluate(el => el.style.width);
      assert.equal(largura, '100%', 'a barra chega a 100%');
      assert.deepEqual(errs, [], 'sem erros JavaScript durante o sprint completo');
      await relogio.close();
    }

    // --- Telas estreitas ---
    for (const width of [320, 390, 768]) {
      const small = await browser.newContext({viewport: {width, height: 900}, reducedMotion: 'reduce'});
      const p2 = await small.newPage();
      const errs = [];
      p2.on('pageerror', e => errs.push(e.message));
      await p2.goto(url);
      await p2.locator('.block').last().waitFor();
      await p2.evaluate(() => document.querySelectorAll('.ex-toggle').forEach(b => b.click()));
      await p2.getByRole('button', {name: 'Iniciar sprint'}).click();
      await p2.waitForTimeout(200);
      const over = await p2.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      assert.ok(over <= 1, `sem rolagem horizontal em ${width}px (sobra ${over}px)`);
      assert.deepEqual(errs, [], 'sem erros JavaScript em ' + width + 'px');
      await small.close();
    }

    assert.deepEqual(errors, [], 'sem erros JavaScript');
    console.log('PASS: 4 blocos somando 50 min, aviso dos limites visível, cronômetro (iniciar, pausar, avançar, zerar, fim do sprint), destaque do bloco ativo, respostas em chave própria, exemplos com a versão errada no bloco 1, resumo com o aviso, navegação entre as três trilhas, tema escuro e telas 320/390/768.');
  } finally {
    await browser.close();
  }
})().catch(e => { console.error(e); process.exit(1); });
