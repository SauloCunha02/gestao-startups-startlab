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
    await page.locator('.passo').last().waitFor();

    // --- Estrutura: quatro blocos somando exatamente 50 minutos ---
    assert.equal(await page.locator('.passo').count(), 4, 'quatro blocos');
    const minutos = await page.locator('.tempo').allTextContents();
    assert.deepEqual(minutos, ['10 min', '8 min', '14 min', '18 min'], 'tempos por bloco');
    const soma = minutos.reduce((a, m) => a + parseInt(m, 10), 0);
    assert.equal(soma, 50, 'os blocos somam 50 minutos, uma aula');
    assert.equal(await page.locator('.passo .check input').count(), 4);
    assert.equal(await page.locator('a.deep').count(), 4, 'cada bloco aponta para a etapa completa');

    // A entrega é uma startup montada, não um problema investigado.
    assert.match(await page.locator('h1').textContent(), /Monte sua startup em 50 minutos/);
    const titulos = await page.locator('.passo-head h3').allTextContents();
    assert.deepEqual(titulos, [
      'Para quem é a sua startup',
      'A startup: nome e proposta',
      'Como a startup ganha dinheiro',
      'A prova e o pitch de 2 minutos'
    ], 'os blocos constroem a startup e fecham com pitch de 2 minutos');

    // O pitch é de 2 minutos, com teto de 3, e o roteiro traz as cinco partes cronometradas.
    assert.match(await page.locator('#bloco-4 .goal').textContent(), /2 minutos \(no máximo 3\)/);
    assert.match(await page.locator('#bloco-4 .ready').textContent(), /2 minutos \(3 no máximo\)/);
    assert.match(await page.locator('#bloco-4 .acts').textContent(), /Passou de 3 minutos, corte/);
    const roteiro = await page.locator('#e4c').getAttribute('placeholder');
    ['(25s)', '(35s)', '(25s)', '(25s)', '(10s)'].forEach((s, i) => assert.ok(roteiro.includes(s), 'parte ' + (i + 1) + ' do roteiro tem tempo'));
    const segundos = [...roteiro.matchAll(/\((\d+)s\)/g)].reduce((a, m) => a + Number(m[1]), 0);
    assert.equal(segundos, 120, 'as partes do roteiro somam exatamente 2 minutos');

    // --- O aviso pedagógico precisa estar visível, não escondido ---
    const aviso = page.locator('.warn');
    assert.ok(await aviso.isVisible(), 'aviso sobre os limites aparece sem precisar clicar');
    assert.match(await aviso.textContent(), /não é um negócio comprovado|não é um negocio comprovado|ponto de partida, não um negócio comprovado/i);
    assert.ok(await page.locator('.warn a[href*="trilha-rapida"]').count() > 0, 'aviso aponta para a Trilha Rápida');

    // --- Cronômetro: estado inicial ---
    assert.equal(await page.locator('#clock').textContent(), '10:00', 'começa com o bloco 1');
    assert.match(await page.locator('#now-name').textContent(), /^1 · Para quem é a sua startup$/);
    assert.match(await page.locator('#now-total').textContent(), /^50:00 restantes no sprint$/);
    assert.equal(await page.locator('#start-button').textContent(), 'Iniciar sprint');
    assert.equal(await page.locator('.passo.active').count(), 0, 'nenhum bloco ativo antes de iniciar');

    // --- Iniciar: relógio anda e o bloco 1 fica destacado ---
    await page.getByRole('button', {name: 'Iniciar sprint'}).click();
    assert.equal(await page.locator('#start-button').textContent(), 'Pausar');
    await page.waitForTimeout(1400);
    const andando = await page.locator('#clock').textContent();
    assert.notEqual(andando, '10:00', 'o relógio corre');
    assert.equal(await page.locator('#bloco-1').getAttribute('class'), 'passo active', 'bloco 1 destacado');
    assert.equal(await page.locator('.passo.active').count(), 1, 'apenas um bloco ativo');
    assert.match(await page.locator('#sprint-note').textContent(), /Bloco 1 em andamento/);

    // --- Pausar congela o relógio ---
    await page.getByRole('button', {name: 'Pausar'}).click();
    const pausado = await page.locator('#clock').textContent();
    await page.waitForTimeout(1200);
    assert.equal(await page.locator('#clock').textContent(), pausado, 'pausado não avança');
    assert.equal(await page.locator('#start-button').textContent(), 'Continuar');
    assert.equal(await page.locator('.passo.active').count(), 0, 'pausado não destaca bloco');

    // --- Próximo bloco avança e recarrega o tempo daquele bloco ---
    await page.getByRole('button', {name: 'Próximo bloco'}).click();
    assert.equal(await page.locator('#clock').textContent(), '08:00', 'bloco 2 tem 8 minutos');
    assert.match(await page.locator('#now-name').textContent(), /^2 · A startup: nome e proposta$/);
    await page.getByRole('button', {name: 'Próximo bloco'}).click();
    assert.equal(await page.locator('#clock').textContent(), '14:00', 'bloco 3 tem 14 minutos');
    await page.getByRole('button', {name: 'Próximo bloco'}).click();
    assert.match(await page.locator('#now-name').textContent(), /^4 · A prova e o pitch de 2 minutos$/);
    assert.equal(await page.locator('#clock').textContent(), '18:00', 'bloco 4 tem 18 minutos para testar e ensaiar');
    // No último bloco, "próximo" encerra em vez de estourar o índice.
    await page.getByRole('button', {name: 'Próximo bloco'}).click();
    assert.match(await page.locator('#now-name').textContent(), /^4 · A prova e o pitch de 2 minutos$/, 'não passa do último bloco');
    assert.match(await page.locator('#sprint-note').textContent(), /último bloco/);

    // --- Zerar volta ao início sem apagar respostas ---
    await page.locator('#e1a').fill('Estudantes do 2º ano que compram na cantina no primeiro intervalo.');
    await page.getByRole('button', {name: 'Zerar'}).click();
    assert.equal(await page.locator('#clock').textContent(), '10:00');
    assert.match(await page.locator('#now-total').textContent(), /^50:00 restantes/);
    assert.equal(await page.locator('#e1a').inputValue(), 'Estudantes do 2º ano que compram na cantina no primeiro intervalo.', 'zerar não apaga respostas');

    // --- A conta do mês calcula e alimenta a ficha ---
    const dinheiro = s => s.replace(/\s/g, ' ');
    assert.equal(dinheiro(await page.locator('#out-receita').textContent()), 'R$ 120,00');
    assert.equal(dinheiro(await page.locator('#out-gastos').textContent()), 'R$ 80,00');
    assert.equal(dinheiro(await page.locator('#out-saldo').textContent()), 'R$ 40,00');
    assert.match(await page.locator('#out-note').textContent(), /3 cliente\(s\) só para cobrir os gastos/);
    assert.match(await page.locator('#out-note').textContent(), /saldo não é lucro/);
    await page.locator('#m_price').fill('4');
    assert.match(await page.locator('#out-note').textContent(), /nenhuma quantidade de clientes fecha a conta/, 'margem negativa avisada');
    await page.locator('#m_price').fill('30');
    await page.locator('#m_clients').fill('');
    assert.equal(await page.locator('#out-saldo').textContent(), '—', 'campo vazio não inventa número');
    await page.locator('#m_clients').fill('4');

    // --- A ficha da startup se monta sozinha ---
    const ficha = page.locator('.card');
    assert.match(await page.locator('#card-name').textContent(), /^—$/, 'sem nome ainda');
    assert.match(await page.locator('#card-missing').textContent(), /Ainda falta:.*o nome/);
    await page.locator('#e2a').fill('Troca Justa');
    assert.equal(await page.locator('#card-name').textContent(), 'Troca Justa', 'o nome aparece na ficha ao digitar');
    await page.locator('#e2c').fill('A Troca Justa ajuda estudantes a aproveitar material escolar parado, organizando trocas na entrada da escola.');
    assert.match(await page.locator('#card-pitch').textContent(), /^A Troca Justa ajuda estudantes/);
    assert.match(await page.locator('#card-publico').textContent(), /^Estudantes do 2º ano/, 'o público do bloco 1 chega na ficha');
    assert.match(await page.locator('#card-money').textContent(), /Saldo do primeiro mês: R\$\s?40,00/, 'a conta entra na ficha');
    assert.match(await page.locator('#card-money').textContent(), /hipóteses da equipe/);
    const antes = await page.locator('#card-fill').textContent();
    await page.locator('#e2b').fill('O estudante deixa o material parado e leva outro de que precisa.');
    await page.locator('#e3a').fill('Usa: estudante. Paga: grêmio (hipótese). Autoriza: direção.');
    await page.locator('#e3b').fill('Mesa na entrada da escola, na segunda de manhã.');
    await page.locator('#e4b').fill('T1 concluiu em 50 s. T2 não achou a confirmação.');
    assert.notEqual(await page.locator('#card-fill').textContent(), antes, 'a porcentagem montada acompanha o preenchimento');
    await page.locator('#e4d').fill('Se o grêmio pagaria. Falamos com estudantes, não com quem assina.');
    assert.equal(await page.locator('#card-fill').textContent(), '100% montada', 'ficha completa');
    assert.match(await page.locator('#card-missing').textContent(), /Ficha completa/);
    assert.match(await page.locator('#card-duvida').textContent(), /Se o grêmio pagaria/);
    assert.ok(await ficha.isVisible());

    // --- Respostas persistem e usam chave própria ---
    await page.locator('#done-1').check();
    await page.reload();
    await page.locator('.passo').last().waitFor();
    assert.equal(await page.locator('#e2a').inputValue(), 'Troca Justa');
    assert.equal(await page.locator('#card-name').textContent(), 'Troca Justa', 'a ficha remonta ao recarregar');
    assert.equal(await page.locator('#card-fill').textContent(), '100% montada');
    assert.ok(await page.locator('#done-1').isChecked(), 'bloco marcado persiste');
    assert.equal(await page.locator('#clock').textContent(), '10:00', 'o cronômetro reinicia ao recarregar');
    const chaves = await page.evaluate(() => Object.keys(localStorage));
    assert.ok(chaves.includes('startlab-extrema-v2'), 'usa chave própria');
    assert.ok(!chaves.includes('startlab-rapida-v1'), 'não escreve na chave da Trilha Rápida');
    assert.ok(!chaves.includes('startlab-project-v2'), 'não escreve na chave do caderno');

    // --- Exemplos ---
    assert.equal(await page.locator('.ex-toggle').count(), 4, 'exemplo em todos os blocos');
    const box = page.locator('#ex-1');
    assert.ok(await box.isHidden());
    await page.locator('[data-example="1"]').click();
    await box.waitFor({state: 'visible'});
    // O exemplo agora é uma empresa real e conhecida, identificada como tal.
    assert.equal(await page.locator('#bloco-1 .example-tag').textContent(), 'EXEMPLO REAL · NUBANK');
    assert.match(await box.textContent(), /nubank/i);
    assert.match(await box.textContent(), /referência de raciocínio, não de tamanho/i, 'avisa que o tamanho não é a meta');
    assert.match(await box.textContent(), /Copiar o exemplo não cria a sua startup/);
    // Nenhum resquício do exemplo fictício antigo nesta trilha.
    assert.doesNotMatch(await page.locator('main').textContent(), /Fila Menor/i, 'a Extrema não usa mais o caso fictício');
    // Cada bloco mostra a parte correspondente do caso: identidade, receita e pitch.
    await page.locator('[data-example="2"]').click();
    assert.match(await page.locator('#ex-2').textContent(), /NOME: Nubank/);
    await page.locator('[data-example="3"]').click();
    const ex3 = await page.locator('#ex-3').textContent();
    assert.match(ex3, /se a Nubank não cobra anuidade, de onde vem o dinheiro\?/i, 'bloco 3 faz a pergunta do modelo de receita');
    assert.match(ex3, /nem sempre quem usa é quem paga/i, 'ensina a separar usuário de pagador');
    assert.match(ex3, /NÃO são os números reais da Nubank/, 'a conta é declarada como simplificada');
    await page.locator('[data-example="4"]').click();
    const ex4 = await page.locator('#ex-4').textContent();
    assert.match(ex4, /PITCH DE 2 MINUTOS/);
    ['(25s)', '(35s)', '(10s)'].forEach(s => assert.ok(ex4.includes(s), 'o pitch do exemplo é cronometrado: ' + s));
    await page.locator('[data-example="2"]').click();
    await page.locator('[data-example="3"]').click();
    await page.locator('[data-example="4"]').click();
    await page.getByRole('button', {name: 'Ver exemplos'}).click();
    assert.equal(await page.locator('.example-box:visible').count(), 4, 'botão global abre todos');
    await page.getByRole('button', {name: 'Ocultar exemplos'}).click();
    assert.equal(await page.locator('.example-box:visible').count(), 0);

    // --- Ficha exportada traz a startup inteira e o aviso dos limites ---
    const dl = page.waitForEvent('download');
    await page.getByRole('button', {name: /Baixar a ficha \(\.txt\)/}).click();
    const arquivo = await dl;
    await arquivo.saveAs(path.join(out, 'ficha-da-startup.txt'));
    const texto = fs.readFileSync(path.join(out, 'ficha-da-startup.txt'), 'utf8');
    assert.match(texto, /FICHA DA STARTUP/);
    assert.match(texto, /NOME: Troca Justa/, 'nome da startup');
    assert.match(texto, /PROPOSTA: A Troca Justa ajuda/, 'proposta');
    assert.match(texto, /Quem usa \/ paga \/ autoriza: Usa: estudante/, 'papéis');
    assert.match(texto, /Saldo: R\$\s?40,00/, 'a conta do mês entra na ficha');
    assert.match(texto, /O PITCH DE 2 MINUTOS \(maximo 3\)/, 'a ficha traz o pitch de 2 minutos');
    assert.match(texto, /O QUE AINDA NAO SABEMOS/, 'a dúvida tem seção própria');
    assert.match(texto, /Se o grêmio pagaria/);
    assert.match(texto, /hipoteses da equipe/i, 'ficha leva o aviso para o professor');

    // --- Navegação entre as três trilhas ---
    await page.locator('.next a[href*="trilha-rapida"]').click();
    await page.locator('.passo').last().waitFor();
    assert.equal(await page.locator('.passo').count(), 7, 'chega na Trilha Rápida');
    await page.locator('a[href*="trilha-extrema"]').first().click();
    await page.locator('.passo').last().waitFor();
    assert.equal(await page.locator('.passo').count(), 4, 'a Rápida aponta de volta para a Extrema');
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
    await page.locator('.passo').last().waitFor();
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
      await p3.locator('.passo').last().waitFor();
      await p3.getByRole('button', {name: 'Iniciar sprint'}).click();

      await p3.clock.runFor(10 * 60 * 1000 + 500);
      assert.match(await p3.locator('#now-name').textContent(), /^2 · /, 'ao fim dos 10 min vai sozinho para o bloco 2');
      assert.equal(await p3.locator('#clock').textContent(), '08:00', 'bloco 2 começa cheio');
      assert.match(await p3.locator('#sprint-note').textContent(), /Bloco 2 começou/);
      assert.equal(await p3.locator('#bloco-2').getAttribute('class'), 'passo active');

      await p3.clock.runFor(8 * 60 * 1000 + 500);
      assert.match(await p3.locator('#now-name').textContent(), /^3 · /, 'segue para o bloco 3');
      await p3.clock.runFor(14 * 60 * 1000 + 500);
      assert.match(await p3.locator('#now-name').textContent(), /^4 · /, 'segue para o bloco 4');
      // A folga de 500 ms somada a cada virada faz o total fechar em 17:5x.
      assert.match(await p3.locator('#now-total').textContent(), /^(18:00|17:5\d) restantes/, 'sobram os 18 min do último bloco');

      await p3.clock.runFor(18 * 60 * 1000 + 500);
      assert.equal(await p3.locator('#clock').textContent(), '00:00', 'o sprint termina zerado');
      assert.match(await p3.locator('#sprint-note').textContent(), /Sprint concluído/);
      assert.equal(await p3.locator('#start-button').textContent(), 'Continuar', 'o cronômetro para no fim');
      assert.equal(await p3.locator('.passo.active').count(), 0, 'nenhum bloco fica ativo após o fim');
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
      await p2.locator('.passo').last().waitFor();
      await p2.evaluate(() => document.querySelectorAll('.ex-toggle').forEach(b => b.click()));
      await p2.getByRole('button', {name: 'Iniciar sprint'}).click();
      await p2.waitForTimeout(200);
      const over = await p2.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      assert.ok(over <= 1, `sem rolagem horizontal em ${width}px (sobra ${over}px)`);
      assert.deepEqual(errs, [], 'sem erros JavaScript em ' + width + 'px');
      await small.close();
    }

    assert.deepEqual(errors, [], 'sem erros JavaScript');
    console.log('PASS: 4 blocos que montam a startup somando 50 min (10/8/14/18), pitch de 2 minutos com roteiro somando 120s e teto de 3 min, exemplo real da Nubank em todos os blocos com aviso de raciocínio e não de tamanho, conta do mês com ponto de equilíbrio e campo vazio tratado, ficha da startup montada sozinha com porcentagem, aviso dos limites visível, cronômetro (iniciar, pausar, avançar, zerar, avanço automático pelo sprint inteiro), respostas em chave própria, ficha exportada com nome/proposta/conta/pitch/dúvida, navegação entre as três trilhas, tema escuro e telas 320/390/768.');
  } finally {
    await browser.close();
  }
})().catch(e => { console.error(e); process.exit(1); });
