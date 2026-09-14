# v3.0.0 · Mais curto de ler, mais fácil de fazer

O conteúdo de cada etapa passou a ser entregue em camadas, o exemplo fictício Fila Menor foi desenvolvido campo a campo, e quatro pontos do percurso onde o aluno costuma travar em conta agora calculam sozinhos.

## Conteúdo mais curto, sem perder profundidade

- Cada etapa abre com uma frase-chave, três pontos essenciais e os termos daquela etapa; os termos revelam o significado ao toque.
- O texto completo continua disponível, recolhido em “Aprofundar”. Quem quer só executar lê em vinte segundos; quem quer entender abre.

## Exemplo preenchido onde ele é necessário

- Cada campo das 12 fichas e do modelo de entrevista tem um exemplo do caso fictício Fila Menor, no formato do campo: texto para campos de escrita, tabela para tabelas.
- O exemplo abre por campo ou todo de uma vez, nunca preenche a resposta do aluno e sempre vem com o aviso de que copiar não gera evidência.
- A Trilha Rápida recebeu o mesmo exemplo, condensado por passo.

## Interação que faz a conta junto com a equipe

- **Etapa 04** — calculadora de médias: notas de 1 a 5 por respondente, média de importância e satisfação, veredito de prioridade e envio do resultado para a matriz. Campo em branco não vira zero.
- **Etapa 06** — as notas das três opções somam sozinhas, a melhor linha é destacada e o empate é comunicado em vez de resolvido no automático.
- **Etapa 08** — a calculadora passou a mostrar quantos clientes cobrem os gastos e avisa quando cada cliente custa mais do que paga.
- **Etapa 10** — “Concluiu?” e “Ajuda?” viraram seleção e o resultado é contado, lembrando que o critério foi definido antes.

## Acompanhar o próprio avanço

- As tarefas de cada etapa viraram checklist, com contador.
- A navegação do caderno mostra a porcentagem preenchida de cada ficha.
- A página inicial mostra etapas concluídas, tarefas marcadas e campos preenchidos.
- A exportação em texto passou a listar as tarefas concluídas por etapa.

## Compatibilidade

O formato das cópias não mudou: ganhou apenas campos opcionais. Uma cópia exportada pela versão 2 é aceita normalmente. Respostas continuam apenas no navegador usado, sem conta, servidor ou sincronização.

## Validação automatizada

Três suítes executadas em `npm test`, em navegador real: fluxo das 12 etapas e fichas, busca, temas, persistência, importação/exportação, downloads e impressão; conteúdo em camadas, termos, checklist, exemplos nas 12 fichas e na entrevista, os quatro widgets, progresso por ficha e leitura de cópias da versão anterior; e os sete passos da Trilha Rápida com armazenamento separado do caderno. Sem erros de JavaScript e sem rolagem horizontal em 320, 390, 768 e 1440 pixels, nos temas claro e escuro.
