# StartLab · Gestão de Startups

Material didático para estudantes do 2º ano: 12 etapas para sair da observação de um problema e chegar ao primeiro teste de uma solução.

## Três percursos

| Percurso | Tamanho | Quando usar |
| --- | --- | --- |
| Trilha completa (`index.html`) | 12 etapas · 24 aulas | O percurso que vale nota, com fichas, portfólio e avaliação de 10 pontos. |
| Trilha Rápida (`trilha-rapida/`) | 7 passos · ~6 aulas | Carga horária reduzida, recuperação de percurso, feira ou revisão antes de apresentar. |
| Trilha Extrema (`trilha-extrema/`) | 4 blocos · 50 minutos | Sprint cronometrado de uma aula em que a equipe monta uma startup inteira: público, nome, proposta, receita, prova e pitch de 2 minutos. Usa o caso real da Nubank como exemplo e a ficha da startup se monta sozinha. Primeira versão, não negócio comprovado. |

As três guardam respostas em espaços separados no navegador: uma não apaga a outra.

## Versão 3.1.0

Site estático interativo, com temas claro e escuro e layout adaptado para celular, tablet e computador. Cada etapa entrega o conteúdo em camadas — uma frase-chave, três pontos essenciais, os termos e a explicação completa recolhida — e cada campo das fichas tem um exemplo preenchido do caso fictício Fila Menor. Os arquivos em PDF e Word continuam disponíveis.

- Etapa em camadas: frase-chave, três pontos essenciais, termos que revelam o significado ao toque e “Aprofundar” para o texto completo.
- Exemplo preenchido campo a campo, nas 12 fichas e no modelo de entrevista, com aviso de que copiar não gera evidência. Um botão abre e fecha todos de uma vez.
- Tarefas da etapa viram checklist, com contador e progresso guardado.
- Widgets que calculam: médias de importância e satisfação com envio para a matriz (etapa 04), soma das notas das ideias com destaque da melhor e aviso de empate (etapa 06), contagem do teste (etapa 10) e ponto de equilíbrio na calculadora (etapa 08).
- Progresso por ficha na navegação do caderno e números vivos na página inicial: etapas concluídas, tarefas marcadas e campos preenchidos.
- Trilha Rápida (`trilha-rapida/`): versão curta de sete passos, também com exemplo preenchido em cada passo.
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

O conteúdo pedagógico está em `conteudo/material.py` e o modelo da página em `scripts/pagina.html`. Execute `python scripts/gerar_dados.py` para atualizar `assets/conteudo.js` e `index.html`. O gerador usa somente a biblioteca padrão do Python.

O exemplo Fila Menor preenchido campo a campo fica em `EXAMPLES` e `INTERVIEW_EXAMPLES`, dentro de `conteudo/material.py`, na mesma ordem de `WORKSHEETS` e `INTERVIEW`: texto simples para campos de escrita, lista de linhas para tabelas.

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
- `npm run test:interativo` — conteúdo em camadas, termos, checklist de tarefas, exemplos nas 12 fichas e na entrevista, os quatro widgets de cálculo, progresso por ficha e compatibilidade com cópias da versão anterior.
- `npm run test:rapida` — os sete passos da Trilha Rápida, exemplos, progresso, resumo exportado e armazenamento separado do caderno.
- `npm run test:extrema` — os quatro blocos da Trilha Extrema, o cronômetro (incluindo o sprint inteiro adiantado com relógio virtual), o aviso dos limites e a navegação entre os três percursos.

## Origem

Adaptação pedagógica dos materiais locais de Gestão de Startups. O guia do professor descreve a relação com cada material. Os arquivos originais e as extrações de preparação não fazem parte deste repositório. Todos os dados do exemplo Fila Menor são fictícios.
