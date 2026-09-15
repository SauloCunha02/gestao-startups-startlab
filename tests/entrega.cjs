// Verifica as três formas de levar a startup embora:
// ficha em PDF, página de pitch autocontida e cópia .json para continuar depois.
const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const STARTUP = {
  nome: 'Troca Justa',
  proposta: 'A Troca Justa ajuda estudantes a aproveitar material escolar parado, organizando trocas na entrada da escola.',
  publico: 'Estudantes do 2º ano que compram material todo início de ano.',
  trava: 'Sobra material do ano anterior e falta dinheiro para o novo.',
  entrega: 'O estudante deixa o material parado e leva outro de que precisa.',
  papeis: 'Usa: estudante. Paga: grêmio (hipótese). Autoriza: direção.',
  canal: 'Mesa na entrada da escola, na segunda de manhã.',
  prova: 'Três quadros em papel. Critério: 2 de 2 concluem sozinhos em 1 minuto.',
  resultado: 'T1 concluiu em 40 s. T2 não entendeu onde deixar o material.',
  duvida: 'Se o grêmio pagaria. Falamos com estudantes, não com quem assina.'
};

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

    // Preenche a startup inteira, como faria uma equipe.
    const campos = {
      e1a: STARTUP.publico, e1b: STARTUP.trava,
      e2a: STARTUP.nome, e2b: STARTUP.entrega, e2c: STARTUP.proposta,
      e3a: STARTUP.papeis, e3b: STARTUP.canal, e3c: 'Preço é estimativa nossa.',
      e4a: STARTUP.prova, e4b: STARTUP.resultado,
      e4c: '1. Problema... 2. A startup... 3. Dinheiro... 4. Teste... 5. Dúvida...',
      e4d: STARTUP.duvida
    };
    for (const [id, texto] of Object.entries(campos)) await page.locator('#' + id).fill(texto);
    await page.locator('#done-1').check();
    assert.equal(await page.locator('#card-fill').textContent(), '100% montada', 'ficha completa antes de exportar');

    // --- 1. Ficha em PDF: imprime só o cartão ---
    let pediuImpressao = false;
    await page.exposeFunction('registrarImpressao', () => { pediuImpressao = true; });
    await page.evaluate(() => { window.print = () => window.registrarImpressao(); });
    await page.getByRole('button', {name: 'Baixar a ficha em PDF'}).click();
    assert.ok(pediuImpressao, 'o botão aciona a impressão do navegador');
    assert.ok(await page.evaluate(() => document.body.classList.contains('so-ficha')),
      'o modo de impressão isola a ficha');
    // O modo sai sozinho quando a impressão termina.
    await page.evaluate(() => window.dispatchEvent(new Event('afterprint')));
    assert.ok(!await page.evaluate(() => document.body.classList.contains('so-ficha')),
      'a página volta ao normal depois de imprimir');
    // Na impressão da ficha, só o cartão fica visível.
    const escondidos = await page.evaluate(() => {
      document.body.classList.add('so-ficha');
      const irmaos = [...document.querySelectorAll('.wrap > *')];
      const regra = [...document.styleSheets]
        .flatMap(s => { try { return [...s.cssRules]; } catch (e) { return []; } })
        .some(r => r.cssText.includes('so-ficha') && r.cssText.includes('.wrap'));
      document.body.classList.remove('so-ficha');
      return {irmaos: irmaos.length, temRegra: regra};
    });
    assert.ok(escondidos.temRegra, 'existe regra de impressão que esconde o resto da página');
    assert.ok(escondidos.irmaos > 3, 'a página tem outras seções além da ficha');

    // --- 2. Página do pitch: um arquivo só, com os dados dentro ---
    const dl = page.waitForEvent('download');
    await page.getByRole('button', {name: 'Gerar a página do pitch'}).click();
    const arquivo = await dl;
    assert.match(arquivo.suggestedFilename(), /^pitch-troca-justa\.html$/, 'nome do arquivo usa a startup');
    const destino = path.join(out, 'pitch-gerado.html');
    await arquivo.saveAs(destino);
    const html = fs.readFileSync(destino, 'utf8');

    assert.match(html, /^<!doctype html>/i, 'é uma página completa');
    assert.ok(!/<script src=/i.test(html), 'não depende de arquivo externo');
    assert.ok(!/https?:\/\//i.test(html), 'não depende da internet');
    assert.ok(html.includes('<style>') && html.includes('<script>'), 'traz CSS e JS dentro');
    for (const [campo, valor] of Object.entries(STARTUP)) {
      assert.ok(html.includes(valor.slice(0, 40)), `o pitch leva o campo "${campo}"`);
    }
    assert.match(html, /R\$/, 'a conta do mês entra no pitch');
    assert.match(html, /não um negócio comprovado/i, 'o pitch leva a ressalva do sprint');
    assert.match(html, /sprint de 50 minutos/i, 'o pitch diz em quanto tempo foi montado');

    // --- 3. A página gerada funciona sozinha ---
    const pitch = await browser.newContext({viewport: {width: 1280, height: 900}, reducedMotion: 'reduce'});
    const p2 = await pitch.newPage();
    const errosPitch = [];
    p2.on('pageerror', e => errosPitch.push(e.message));
    await p2.goto('file://' + destino.replace(/\\/g, '/'));
    await p2.locator('#slide').waitFor();

    assert.match(await p2.locator('#slide h1').textContent(), /^Troca Justa$/, 'capa traz o nome');
    assert.equal(await p2.locator('#relogio').textContent(), '02:00', 'começa em 2 minutos');

    // Duração escolhível: 2, 3 ou 5 minutos.
    assert.equal(await p2.locator('.minutos button').count(), 3);
    await p2.getByRole('button', {name: '5 min'}).click();
    assert.equal(await p2.locator('#relogio').textContent(), '05:00', 'muda para 5 minutos');
    assert.equal(await p2.locator('.minutos button[aria-pressed="true"]').textContent(), '5 min');
    await p2.getByRole('button', {name: '3 min'}).click();
    assert.equal(await p2.locator('#relogio').textContent(), '03:00', 'muda para 3 minutos');

    // Navegação pelas cinco partes do roteiro.
    await p2.getByRole('button', {name: 'Avançar →'}).click();
    assert.match(await p2.locator('#slide h2').textContent(), /O problema e o cliente/);
    assert.match(await p2.locator('#slide .etiqueta').textContent(), /Parte 1 de 5/);
    for (let i = 0; i < 4; i++) await p2.getByRole('button', {name: 'Avançar →'}).click();
    assert.match(await p2.locator('#slide h2').textContent(), /O que ainda não sabemos/);
    assert.match(await p2.locator('#slide .etiqueta').textContent(), /Parte 5 de 5/);
    await p2.getByRole('button', {name: 'Avançar →'}).click();
    assert.match(await p2.locator('#slide .etiqueta').textContent(), /Parte 5 de 5/, 'não passa da última parte');
    await p2.keyboard.press('ArrowLeft');
    assert.match(await p2.locator('#slide .etiqueta').textContent(), /Parte 4 de 5/, 'seta esquerda volta');

    // Em 3 minutos, as partes somam exatamente 180 segundos.
    const orcamentos = [];
    await p2.getByRole('button', {name: 'Zerar'}).click();
    await p2.getByRole('button', {name: 'Avançar →'}).click();
    for (let i = 0; i < 5; i++) {
      const etiqueta = await p2.locator('#slide .etiqueta').textContent();
      orcamentos.push(Number(etiqueta.match(/(\d+) segundos/)[1]));
      if (i < 4) await p2.getByRole('button', {name: 'Avançar →'}).click();
    }
    assert.equal(orcamentos.reduce((a, b) => a + b, 0), 180, 'as partes somam os 3 minutos escolhidos');
    assert.ok(orcamentos[1] > orcamentos[0], 'a parte da solução tem mais tempo, como no roteiro');
    // Maior resto: cada parte fica a no máximo 1 segundo da sua proporção exata.
    const pesos = [25, 35, 25, 25, 10];
    orcamentos.forEach((s, i) => {
      const exato = 180 * pesos[i] / 120;
      assert.ok(Math.abs(s - exato) < 1, `parte ${i + 1}: ${s}s contra ${exato}s previstos`);
    });

    // O relógio corre.
    await p2.getByRole('button', {name: 'Iniciar'}).click();
    await p2.waitForTimeout(1400);
    assert.notEqual(await p2.locator('#relogio').textContent(), '03:00', 'o relógio anda');
    assert.equal(await p2.locator('#iniciar').textContent(), 'Pausar');
    await p2.screenshot({path: path.join(out, 'pitch-gerado.png'), fullPage: true});
    assert.deepEqual(errosPitch, [], 'a página do pitch não tem erro de JavaScript');
    await pitch.close();

    // --- 4. Salvar cópia e subir de volta ---
    const copia = page.waitForEvent('download');
    await page.getByRole('button', {name: 'Salvar cópia (.json)'}).click();
    const arquivoCopia = await copia;
    const caminhoCopia = path.join(out, 'copia-extrema.json');
    await arquivoCopia.saveAs(caminhoCopia);
    const pacote = JSON.parse(fs.readFileSync(caminhoCopia, 'utf8'));
    assert.equal(pacote.startlab, 'trilha-extrema', 'a cópia diz de qual trilha é');
    assert.equal(pacote.dados.e2a, STARTUP.nome);
    assert.equal(pacote.dados['done-1'], true, 'bloco marcado entra na cópia');
    assert.ok(pacote.salvoEm, 'a cópia registra quando foi salva');

    // Apaga tudo e restaura a partir do arquivo.
    page.once('dialog', d => d.accept());
    await page.getByRole('button', {name: 'Apagar respostas'}).click();
    assert.equal(await page.locator('#e2a').inputValue(), '', 'apagou');
    page.once('dialog', d => d.accept());
    await page.locator('#copy-file').setInputFiles(caminhoCopia);
    await page.waitForTimeout(500);
    assert.equal(await page.locator('#e2a').inputValue(), STARTUP.nome, 'a cópia restaurou o nome');
    assert.equal(await page.locator('#card-fill').textContent(), '100% montada', 'a ficha volta inteira');
    assert.ok(await page.locator('#done-1').isChecked(), 'o bloco marcado volta');

    // A restauração sobrevive a recarregar: foi gravada no navegador.
    await page.reload();
    await page.locator('.passo').last().waitFor();
    assert.equal(await page.locator('#e2a').inputValue(), STARTUP.nome, 'a cópia ficou salva');

    // --- 5. Cópias inválidas são recusadas ---
    const lixo = path.join(out, 'copia-invalida.json');
    fs.writeFileSync(lixo, JSON.stringify({startlab: 'trilha-extrema', dados: {campo_desconhecido: 'x'}}));
    await page.locator('#copy-file').setInputFiles(lixo);
    await page.waitForTimeout(400);
    assert.match(await page.locator('#toast').textContent(), /Não foi possível ler esta cópia/, 'recusa campo desconhecido');
    assert.equal(await page.locator('#e2a').inputValue(), STARTUP.nome, 'nada foi sobrescrito');

    const outraTrilha = path.join(out, 'copia-outra-trilha.json');
    fs.writeFileSync(outraTrilha, JSON.stringify({startlab: 'trilha-rapida', dados: {p1a: 'texto'}}));
    await page.locator('#copy-file').setInputFiles(outraTrilha);
    await page.waitForTimeout(400);
    assert.match(await page.locator('#toast').textContent(), /Não foi possível ler esta cópia/, 'recusa cópia de outra trilha');

    // --- 6. A Trilha Rápida também salva e sobe ---
    const rapida = await browser.newContext({viewport: {width: 1280, height: 1000}, reducedMotion: 'reduce'});
    const p3 = await rapida.newPage();
    const errosRapida = [];
    p3.on('pageerror', e => errosRapida.push(e.message));
    await p3.goto(base + '/trilha-rapida/index.html');
    await p3.locator('.passo').last().waitFor();
    await p3.locator('#p1a').fill('Estudantes que compram material todo ano.');
    await p3.locator('#done-1').check();
    const copiaRapida = p3.waitForEvent('download');
    await p3.getByRole('button', {name: 'Salvar cópia (.json)'}).click();
    const arqRapida = await copiaRapida;
    const caminhoRapida = path.join(out, 'copia-rapida.json');
    await arqRapida.saveAs(caminhoRapida);
    assert.equal(JSON.parse(fs.readFileSync(caminhoRapida, 'utf8')).startlab, 'trilha-rapida');
    p3.once('dialog', d => d.accept());
    await p3.getByRole('button', {name: 'Apagar respostas'}).click();
    assert.equal(await p3.locator('#p1a').inputValue(), '');
    p3.once('dialog', d => d.accept());
    await p3.locator('#copy-file').setInputFiles(caminhoRapida);
    await p3.waitForTimeout(500);
    assert.equal(await p3.locator('#p1a').inputValue(), 'Estudantes que compram material todo ano.', 'a Rápida restaura');
    assert.match(await p3.locator('#progress-text').textContent(), /^1 de 7 passos$/, 'o progresso volta');
    assert.deepEqual(errosRapida, [], 'sem erro na Trilha Rápida');
    await rapida.close();

    assert.deepEqual(errors, [], 'sem erros JavaScript');
    console.log('PASS: ficha em PDF isolando o cartão, página de pitch autocontida (sem arquivo externo nem internet) com os dados dentro, duração 2/3/5 min somando o tempo escolhido, navegação por botões e setas, relógio correndo, cópia .json salva e restaurada nas duas trilhas, recusa de cópia inválida e de outra trilha.');
  } finally {
    await browser.close();
  }
})().catch(e => { console.error(e); process.exit(1); });
