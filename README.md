# StartLab · Gestão de Startups

Material didático para estudantes do 2º ano: **cada equipe constrói uma startup**, em 12 etapas que vão da escolha do território até a apresentação da proposta testada.

As startups da turma serão diferentes entre si; a base de trabalho é a mesma para todas. É essa base que o material ensina — e, em cada etapa, o aluno vê como uma startup real e conhecida resolveu aquele mesmo passo.

## Três percursos

| Percurso | Tamanho | Exemplo | Quando usar |
| --- | --- | --- | --- |
| Trilha completa (`index.html`) | 12 etapas · 24 aulas | Airbnb nas fichas; um caso por etapa | O percurso que vale nota, com fichas, portfólio e avaliação de 10 pontos. |
| Trilha Rápida (`trilha-rapida/`) | 7 passos · ~6 aulas | Duolingo | Carga horária reduzida, recuperação de percurso, feira ou revisão antes de apresentar. |
| Trilha Extrema (`trilha-extrema/`) | 4 blocos · 50 minutos | Nubank | Sprint cronometrado de uma aula em que a equipe monta uma startup inteira, com pitch de 2 minutos e ficha que se monta sozinha. Primeira versão, não negócio comprovado. |

As três guardam respostas em espaços separados no navegador: uma não apaga a outra. Cada percurso usa uma empresa diferente de propósito — a base é a mesma, a startup é que muda.

## Os casos usados

iFood (território), Netflix (suposição arriscada), Airbnb (ouvir o cliente, testar e apresentar), Spotify (priorizar a dor), Nubank (definir o cliente), Duolingo (proposta de valor), 99 (alternativas de mercado), Mercado Livre (modelo de negócio), Dropbox (primeira versão) e Instagram (pivô).

São empresas reais e as informações usadas são públicas. Onde a ficha pede pesquisa própria da equipe — entrevistas, notas de 1 a 5, tempos de teste —, os dados do exemplo são **ilustrativos**: mostram o formato esperado, não registros internos das empresas. Os valores das simulações financeiras são didáticos. Os casos servem como referência de **raciocínio, não de tamanho**: uma startup que atende vinte pessoas do bairro pode ter percorrido o mesmo caminho.

## Versão 3.4.0

Site estático interativo, com temas claro e escuro e layout adaptado para celular, tablet e computador. Cada etapa entrega o conteúdo em camadas — uma frase-chave, três pontos essenciais, os termos e a explicação completa recolhida — e cada campo das fichas tem um exemplo preenchido. Os arquivos em PDF e Word são gerados a partir da mesma fonte de conteúdo do site.

- Etapa em camadas: frase-chave, três pontos essenciais, termos que revelam o significado ao toque e “Aprofundar” para o texto completo.
- Exemplo preenchido campo a campo, nas 12 fichas e no modelo de entrevista, com aviso de que copiar não gera evidência. Um botão abre e fecha todos de uma vez.
- Tarefas da etapa viram checklist, com contador e progresso guardado.
- Widgets que calculam: médias de importância e satisfação com envio para a matriz (etapa 04), soma das notas das ideias com destaque da melhor e aviso de empate (etapa 06), contagem do teste (etapa 10) e ponto de equilíbrio na calculadora (etapa 08).
- Progresso por ficha na navegação do caderno e números vivos na página inicial: etapas concluídas, tarefas marcadas e campos preenchidos.
- Trilha Rápida (`trilha-rapida/`): sete passos que constroem a startup — território, cliente, solução com nome, modelo de negócio, prova e pitch —, com o caso do Duolingo em cada passo.
- Trilha Extrema (`trilha-extrema/`): sprint de 50 minutos em quatro blocos que montam uma startup — público, nome e proposta, modelo de receita com calculadora, prova e pitch de 2 minutos (teto de 3). Um cronômetro avança sozinho de bloco em bloco e a ficha “A sua startup em uma folha” se monta enquanto a equipe escreve. O exemplo é o caso real da Nubank, com aviso de que serve como referência de raciocínio, não de tamanho, e de que os valores da conta são simplificados.
- Trilha com busca, filtros, progresso e retomada de etapa.
- Caderno digital com 12 fichas e cinco registros de entrevistas.
- Respostas salvas no navegador, cópia/restauração em JSON e exportação em texto para compartilhar com o professor.
- Guia do professor com seções expansíveis e biblioteca para download.
- Navegação por teclado, redução de movimento e impressão de respostas longas.

Cópias exportadas pela versão 2 continuam válidas: o formato não mudou, apenas ganhou campos opcionais.

Não há servidor de dados, login de estudante, serviços de terceiros ou sincronização automática. A equipe deve exportar uma cópia antes de trocar de aparelho, navegador ou limpar os dados locais. Cada navegador/origem mantém seu próprio projeto; abrir o HTML local e acessar um site publicado cria armazenamentos separados.

A tag `v1.0.0` preserva a primeira versão funcional; `v2.0.0` identifica a versão interativa.

## Executar

Abra `index.html` no navegador ou, com Python instalado, rode `python -m http.server 8000 --bind 127.0.0.1` nesta pasta e acesse `http://localhost:8000`.

## Percurso

Problema → necessidades → entrevistas → causas → público → ideias → mercado → modelo de negócio → protótipo → teste → melhoria → apresentação.

Carga sugerida: 24 aulas de 50 minutos, com ampliação para 40 aulas no guia do professor. Não exige programação, compra de ferramentas nem abertura de empresa.

## Publicação

O conteúdo pode ser servido como site estático, inclusive pelo GitHub Pages a partir da raiz da branch `main`. A publicação depende de um repositório e uma conta autenticada com permissão de escrita. O histórico local das versões não significa que já foram enviadas ao GitHub.

## Desenvolvimento e testes

Não há etapa de instalação ou compilação para usar o site. HTML, CSS, JavaScript e ícones são locais.

### Fonte única de conteúdo

Todo o conteúdo pedagógico vive em **`conteudo/material.py`** — site, Word, PDF e HTML impresso saem dele. O modelo da página está em `scripts/pagina.html`.

```sh
python scripts/gerar_dados.py        # site: assets/conteudo.js e index.html
cd ../apoio && python gerar_material.py   # DOCX + HTML na raiz do material
cd ../apoio && python exportar_pdf.py     # PDF a partir dos DOCX (requer Word)
```

Depois de gerar os documentos, copie os arquivos atualizados (`01_`, `02_`, `03_` e `00_Comece_aqui.html`) para dentro de `projeto/`, que é a biblioteca de download do site.

Até a versão 3.3 havia duas cópias do conteúdo — `apoio/conteudo.py` e a do site — e elas saíram de sincronia: os DOCX e PDF continuaram sendo gerados a partir de um texto da versão 2. Desde a 3.4, `apoio/conteudo.py` apenas reexporta `projeto/conteudo/material.py`, e não deve voltar a ter conteúdo próprio.

O exemplo preenchido campo a campo fica em `EXAMPLES` e `INTERVIEW_EXAMPLES`, na mesma ordem de `WORKSHEETS` e `INTERVIEW`: texto simples para campos de escrita, lista de linhas para tabelas.

Para os testes, instale Node.js e execute:

```sh
npm install
npx playwright install chromium
```

Inicie o servidor em um terminal:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

Em outro terminal, execute `npm test`. Opcionalmente, defina `TEST_URL` para testar outra URL. Os testes usam contextos isolados de navegador e gravam evidências em `test-results/`, pasta ignorada pelo Git. `npm run check` confere a sintaxe do JavaScript.

`npm test` roda três suítes, que também podem ser executadas isoladamente:

- `npm run test:smoke` — fluxo de aprendizagem, busca, temas, persistência, importação/exportação, cálculos, downloads, impressão, navegação móvel e ausência de rolagem horizontal nas larguras 320, 390, 768 e 1440 pixels.
- `npm run test:interativo` — conteúdo em camadas, termos, checklist de tarefas, **coerência das 12 etapas** (cada uma cita uma startup real, traz a ressalva de tamanho, tem revisão com devolutiva e nenhum resquício de exemplo antigo), exemplos nas 12 fichas e na entrevista, os quatro widgets de cálculo, progresso por ficha e compatibilidade com cópias da versão anterior.
- `npm run test:rapida` — os sete passos da Trilha Rápida, exemplos, progresso, resumo exportado e armazenamento separado do caderno.
- `npm run test:extrema` — os quatro blocos da Trilha Extrema, o cronômetro (incluindo o sprint inteiro adiantado com relógio virtual), o aviso dos limites e a navegação entre os três percursos.

## Origem

Adaptação pedagógica dos materiais locais de Gestão de Startups. O guia do professor descreve a relação com cada material. Os arquivos originais e as extrações de preparação não fazem parte deste repositório.

As empresas citadas como exemplo pertencem a seus respectivos titulares e aparecem aqui apenas em caráter didático, a partir de informações públicas sobre sua origem e seu modelo de negócio. Nenhuma delas tem relação com este material.
