# StartLab · Gestão de Startups

Material didático para o 2º ano do ensino profissional. **Cada equipe constrói uma startup**, da escolha do território até a apresentação da proposta testada.

As startups da turma serão diferentes entre si; a base de trabalho é a mesma para todas. É essa base que o material ensina — e, em cada etapa, o aluno vê como uma startup real e conhecida resolveu aquele mesmo passo.

Site estático: sem servidor, sem login, sem serviços externos. Papel e caneta bastam para a atividade; computador e celular são opcionais.

## Três percursos

| Percurso | Tamanho | Exemplo | Para quê |
| --- | --- | --- | --- |
| **Trilha completa** — `index.html` | 12 etapas · 24 aulas | Airbnb nas fichas, um caso por etapa | O percurso que vale nota, com fichas, portfólio e avaliação de 10 pontos. |
| **Trilha Rápida** — `trilha-rapida/` | 7 passos · ~6 aulas | Duolingo | Carga reduzida, recuperação de percurso, feira, revisão antes de apresentar. |
| **Trilha Extrema** — `trilha-extrema/` | 4 blocos · 50 minutos | Nubank | Sprint cronometrado de uma aula, com pitch de 2 minutos e ficha que se monta sozinha. Primeira versão, não negócio comprovado. |

Cada percurso usa uma empresa diferente de propósito: a base é a mesma, a startup é que muda. Os três guardam respostas em espaços separados no navegador — um não apaga o outro.

## Executar

Abra `index.html` no navegador. Para servir localmente:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Publicável como site estático, inclusive pelo GitHub Pages a partir da raiz da branch `main`.

## Mapa do repositório

```
index.html              Trilha completa (12 etapas). Gerado de scripts/pagina.html.
trilha-rapida/          Trilha Rápida: 7 passos.
trilha-extrema/         Trilha Extrema: sprint de 50 minutos.

conteudo/material.py    FONTE ÚNICA de todo o conteúdo pedagógico.
scripts/gerar_dados.py  material.py  ->  assets/conteudo.js + index.html
scripts/pagina.html     Molde do index.html.

assets/app.js           Aplicação da trilha completa.
assets/styles.css       Estilos da trilha completa.
assets/trilha-curta.css Base visual compartilhada pelas duas trilhas curtas.
assets/trilha-curta.js  Comportamentos compartilhados: salvar, exemplos, tema, ações.
assets/conteudo.js      Gerado. Não edite à mão.

tests/                  Quatro suítes em Chromium (ver abaixo).
docs/                   Notas de cada versão publicada.
01_ 02_ 03_ 00_         Apostila, caderno, guia e índice — gerados, para download.
```

## Fonte única de conteúdo

Todo o conteúdo pedagógico vive em **`conteudo/material.py`**. Site, Word, PDF e HTML impresso saem dele:

```sh
python scripts/gerar_dados.py            # site: assets/conteudo.js e index.html
python ../apoio/gerar_material.py        # DOCX + HTML na raiz do material
python ../apoio/exportar_pdf.py          # PDF a partir dos DOCX (requer Word)
```

Depois de gerar os documentos, copie `00_`, `01_`, `02_` e `03_` para dentro de `projeto/`, que é a biblioteca de download do site.

Estruturas dentro de `material.py`:

| Nome | O que é |
| --- | --- |
| `INTRO` | Abertura da apostila. |
| `LESSONS` | As 12 etapas: `key`, `bullets`, `terms`, `concept`, `example`, `steps`, `delivery`, `check`. |
| `WORKSHEETS` | As 12 fichas. Texto simples vira campo de escrita; lista de colunas vira tabela. |
| `INTERVIEW` | Modelo de entrevista individual. |
| `EXAMPLES` / `INTERVIEW_EXAMPLES` | Exemplo preenchido campo a campo, na mesma ordem das duas anteriores. |
| `GUIDE` | Guia do professor. |

## Testes

Instale o Node.js e o Chromium do Playwright:

```sh
npm install
npx playwright install chromium
```

Suba o servidor em um terminal e rode `npm test` em outro:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

| Comando | Cobre |
| --- | --- |
| `npm run test:smoke` | Fluxo das 12 etapas e fichas, busca, temas, persistência, importação/exportação, downloads, impressão, `file://`, armazenamento bloqueado, telas 320/390/768/1440. |
| `npm run test:interativo` | Conteúdo em camadas, termos, checklist, **coerência das 12 etapas**, exemplos nas fichas, os quatro widgets de cálculo, progresso por ficha, compatibilidade com cópias antigas. |
| `npm run test:rapida` | Os 7 passos, exemplos, progresso, resumo exportado, armazenamento separado. |
| `npm run test:extrema` | Os 4 blocos, o cronômetro (sprint inteiro adiantado com relógio virtual), a conta do mês, a ficha da startup, o aviso dos limites. |

`npm test` roda as quatro. `npm run check` confere a sintaxe do JavaScript. As evidências vão para `test-results/`, ignorada pelo Git.

Nota: o Playwright não instala dentro do Google Drive — a extração do pacote é corrompida. Instale-o fora do Drive e aponte `NODE_PATH` para lá.

## Os casos usados

iFood (território), Netflix (suposição arriscada), Airbnb (ouvir, testar e apresentar), Spotify (priorizar a dor), Nubank (definir o cliente), Duolingo (proposta de valor), 99 (alternativas de mercado), Mercado Livre (modelo de negócio), Dropbox (primeira versão) e Instagram (pivô).

São empresas reais e as informações usadas são públicas. Onde a ficha pede pesquisa própria da equipe — entrevistas, notas de 1 a 5, tempos de teste —, os dados do exemplo são **ilustrativos**: mostram o formato esperado, não registros internos. Os valores das simulações financeiras são didáticos. Os casos são referência de **raciocínio, não de tamanho**: uma startup que atende vinte pessoas do bairro pode ter percorrido o mesmo caminho.

## Dados do aluno

Respostas e progresso ficam apenas no navegador usado. Não há servidor, login nem sincronização. A equipe deve exportar uma cópia antes de trocar de aparelho, de navegador ou limpar os dados locais. Abrir o HTML local e acessar o site publicado cria armazenamentos separados.

Cópias exportadas desde a versão 2 continuam válidas: o formato só ganhou campos opcionais.

## Origem

Adaptação pedagógica dos materiais locais de Gestão de Startups. O guia do professor descreve a relação com cada material de origem. Os arquivos originais e as extrações de preparação não fazem parte deste repositório.

As empresas citadas como exemplo pertencem a seus respectivos titulares e aparecem aqui apenas em caráter didático, a partir de informações públicas. Nenhuma delas tem relação com este material.

O histórico de versões está em [CHANGELOG.md](CHANGELOG.md); as notas de cada publicação, em [docs/](docs/).
