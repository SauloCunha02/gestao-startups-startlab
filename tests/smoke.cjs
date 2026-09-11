const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

(async () => {
  const base=process.env.TEST_URL||'http://127.0.0.1:8765';
  const out=path.join(__dirname,'..','test-results');fs.mkdirSync(out,{recursive:true});
  const browser=await chromium.launch({headless:true});
  try {
    const context=await browser.newContext({viewport:{width:1440,height:1100},reducedMotion:'reduce'});
    const page=await context.newPage(), errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await page.goto(base);await page.locator('.lesson-card').last().waitFor();
    assert.equal(await page.locator('.lesson-card').count(),12);
    await page.screenshot({path:path.join(out,'desktop-light.png'),fullPage:true});
    await page.getByRole('button',{name:'Ativar tema escuro'}).click();
    await page.reload();assert.equal(await page.locator('html').getAttribute('data-theme'),'dark');
    await page.screenshot({path:path.join(out,'desktop-dark.png'),fullPage:true});
    await page.getByRole('button',{name:'Ativar tema claro'}).click();
    await page.getByRole('searchbox').fill('entrevistas');
    assert.ok(await page.locator('.lesson-card').count()>0);
    await page.getByRole('searchbox').fill('zzzzzz');assert.equal(await page.locator('.lesson-card').count(),0);
    await page.getByRole('searchbox').fill('');
    await page.getByRole('button',{name:'Definir',exact:true}).click();assert.equal(await page.locator('.lesson-card').count(),2);
    await page.getByRole('button',{name:'Todas as etapas',exact:true}).click();
    await page.locator('a[href="#/etapa/1"]').first().click();
    await page.getByRole('radio',{name:'Investigar uma dificuldade de um público.'}).check();
    assert.match(await page.locator('#quiz-feedback').textContent(),/Isso mesmo/);
    await page.getByRole('button',{name:'Marcar como concluída'}).click();
    await page.reload();assert.equal(await page.locator('#complete-button').getAttribute('aria-pressed'),'true');
    await page.getByRole('button',{name:'Iniciar',exact:true}).click();
    await page.waitForTimeout(1200);assert.notEqual(await page.locator('#focus-time').textContent(),'15:00');
    await page.getByRole('button',{name:'Reiniciar cronômetro'}).click();assert.equal(await page.locator('#focus-time').textContent(),'15:00');
    await page.goto(base+'/#/caderno/1');
    await page.locator('#team-name').fill('Equipe Horizonte');
    await page.locator('[data-answer="f1_0"]').fill('Pesquisa com estudantes <script>alert(1)</script>');
    await page.reload();assert.equal(await page.locator('[data-answer="f1_0"]').inputValue(),'Pesquisa com estudantes <script>alert(1)</script>');
    const backupPromise=page.waitForEvent('download');await page.locator('#export-json').click();const backup=await backupPromise;await backup.saveAs(path.join(out,'backup.json'));
    const json=JSON.parse(fs.readFileSync(path.join(out,'backup.json'),'utf8'));assert.equal(json.team,'Equipe Horizonte');assert.deepEqual(json.completed,[1]);
    await page.locator('#team-name').fill('Outra equipe');
    page.once('dialog',dialog=>dialog.accept());
    await page.locator('#import-file').setInputFiles(path.join(out,'backup.json'));
    await page.waitForFunction(()=>document.querySelector('#team-name').value==='Equipe Horizonte');
    await page.locator('#import-file').setInputFiles({name:'invalid.json',mimeType:'application/json',buffer:Buffer.from('{"schema":2,"team":"bad","completed":[],"answers":{"__proto__":"bad"}}')});
    await page.waitForFunction(()=>document.querySelector('#toast').textContent.includes('Não foi possível importar'));
    assert.equal(await page.locator('#team-name').inputValue(),'Equipe Horizonte');
    const textPromise=page.waitForEvent('download');await page.locator('#export-text').click();const text=await textPromise;await text.saveAs(path.join(out,'respostas.txt'));assert.ok(fs.readFileSync(path.join(out,'respostas.txt'),'utf8').includes('Pesquisa com estudantes'));
    await page.goto(base+'/#/caderno/13/2');await page.locator('[data-answer="p2_2"]').fill('Na última terça, esperei oito minutos.');await page.goto(base+'/#/caderno/13/1');assert.equal(await page.locator('[data-answer="p1_2"]').inputValue(),'');await page.goto(base+'/#/caderno/13/2');assert.match(await page.locator('[data-answer="p2_2"]').inputValue(),/terça/);
    await page.goto(base+'/#/caderno/8');assert.match(await page.locator('#calc-balance').textContent(),/40,00/);
    await page.locator('[data-calc="clients"]').fill('2');assert.match(await page.locator('#calc-balance').textContent(),/-.*10,00/);
    await page.locator('[data-calc="clients"]').fill('-1');assert.equal(await page.locator('#calc-balance').textContent(),'—');
    await page.locator('[data-calc="clients"]').fill('4');
    await page.screenshot({path:path.join(out,'workbook-desktop.png'),fullPage:true});
    await page.pdf({path:path.join(out,'ficha-digital.pdf'),format:'A4',printBackground:true});
    for(let n=1;n<=12;n++) {await page.goto(base+'/#/etapa/'+n);assert.equal(await page.locator('.tasks li').count(),4);await page.goto(base+'/#/caderno/'+n);assert.ok(await page.locator('textarea').count()>0);}
    await page.goto(base+'/#/professor');assert.equal(await page.locator('details').count(),5);
    await page.goto(base+'/#/materiais');
    const links=await page.locator('.resource-card a').evaluateAll(list=>list.map(a=>a.href));
    for(const url of links){const res=await context.request.get(url);assert.equal(res.status(),200,url);}
    for(const width of [320,390,768,1440]) {
      await page.setViewportSize({width,height:900});
      for(const route of ['trilha','etapa/1','caderno/8','materiais','professor']) {
        await page.goto(base+'/#/'+route);
        assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1),`Horizontal overflow: ${width}, ${route}`);
      }
    }
    await page.setViewportSize({width:390,height:844});await page.goto(base+'/#/trilha');
    await page.screenshot({path:path.join(out,'mobile-light.png'),fullPage:true});
    await page.getByRole('button',{name:'Abrir menu'}).click();assert.equal(await page.locator('#menu-button').getAttribute('aria-expanded'),'true');
    await page.getByRole('link',{name:'Meu projeto',exact:true}).click();await page.waitForURL('**/#/caderno');await page.locator('#shade').waitFor({state:'hidden'});assert.equal(await page.locator('#shade').isVisible(),false);
    await page.getByRole('button',{name:'Abrir menu'}).click();await page.keyboard.press('Escape');assert.equal(await page.locator('#menu-button').getAttribute('aria-expanded'),'false');
    await page.getByRole('button',{name:'Ativar tema escuro'}).click();await page.goto(base+'/#/trilha');
    await page.screenshot({path:path.join(out,'mobile-dark.png'),fullPage:true});
    // HTML can also be opened directly from disk, with no server or external assets.
    const local=await context.newPage();await local.goto('file:///'+path.resolve(__dirname,'..','index.html').replaceAll('\\','/'));await local.locator('.lesson-card').last().waitFor();assert.equal(await local.locator('.lesson-card').count(),12);await local.close();
    const blocked=await browser.newContext();await blocked.addInitScript(()=>{Object.defineProperty(window,'localStorage',{get(){throw Error('blocked storage');}});});const blockedPage=await blocked.newPage();await blockedPage.goto(base);await blockedPage.locator('.lesson-card').last().waitFor();assert.equal(await blockedPage.locator('.lesson-card').count(),12);await blocked.close();
    assert.deepEqual(errors,[]);
    console.log('PASS: 12 etapas, 12 fichas, 5 entrevistas, temas, busca, filtros, progresso, revisão, foco, persistência, exportação/importação, calculadora, downloads, impressão, telas 320/390/768/1440, menu acessível, file://, armazenamento bloqueado e ausência de erros JavaScript.');
  } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
