# Histórico de versões

## 3.4.0

- **Todo o material reorientado à construção de uma startup.** A sequência das 12 etapas deixou de ser “investigar um problema” e passou a construir a startup: escolher o território, separar fato de suposição, ouvir o cliente, priorizar a dor, definir o cliente, desenhar a proposta, estudar o mercado, montar o modelo, construir, testar, melhorar e apresentar.
- **O caso fictício Fila Menor foi aposentado.** No lugar, cada etapa mostra uma startup real e conhecida resolvendo aquele passo: iFood (território), Netflix (suposição arriscada), Airbnb (ouvir, testar e apresentar), Spotify (priorizar a dor), Nubank (cliente), Duolingo (proposta de valor), 99 (alternativas), Mercado Livre (modelo de negócio), Dropbox (primeira versão) e Instagram (pivô).
- Cada percurso usa uma empresa diferente — Airbnb nas fichas da trilha completa, Duolingo na Trilha Rápida, Nubank na Trilha Extrema —, reforçando que a base é a mesma e a startup é que muda.
- As 12 perguntas de revisão foram reescritas: as antigas ainda citavam o exemplo aposentado.
- Trilha Rápida reorientada: os sete passos agora vão de território a pitch, com campo para o nome da startup.
- Ressalvas explícitas em todo lugar: informações das empresas são públicas; entrevistas, notas e tempos de teste do exemplo são ilustrativos; valores financeiros são didáticos; os casos são referência de raciocínio, não de tamanho. O guia orienta a não avaliar o tamanho da ideia.
- **Fonte única de conteúdo.** Até a 3.3 havia duas cópias do conteúdo e os DOCX/PDF continuavam sendo gerados a partir de um texto da versão 2. Agora `apoio/gerar_material.py` lê `projeto/conteudo/material.py`, e `apoio/conteudo.py` apenas reexporta essa fonte.
- Word, PDF e HTML regenerados, já com frase-chave, essencial e termos — que só existiam no site.
- Nova guarda de coerência em `test:interativo`: percorre as 12 etapas conferindo que cada uma cita uma startup real, traz a ressalva de tamanho, tem revisão com devolutiva e não guarda resquício de exemplo antigo.

## 3.3.0

- Pitch da Trilha Extrema passou de 60 segundos para **2 minutos, com teto de 3**, alinhando-se ao formato da etapa 12. O roteiro tem cinco partes cronometradas que somam 120 segundos.
- Blocos rebalanceados para abrir espaço ao ensaio: 10 · 8 · 14 · 18 minutos, mantendo os 50 minutos de uma aula. O bloco 4 reserva 8 minutos só para montar e ensaiar o pitch com o relógio.
- Exemplos da Trilha Extrema trocados do caso fictício Fila Menor para o caso **real da Nubank**, em todos os quatro blocos: o cliente e o que travava em 2013, o nome e a proposta, a pergunta “se não cobra anuidade, de onde vem o dinheiro?” e o pitch de 2 minutos escrito por inteiro.
- Três ressalvas explícitas junto ao exemplo: as informações do negócio são públicas, os valores da conta do mês são simplificados e não são os da empresa, e o tamanho dela não é a meta — serve como referência de raciocínio.
- A Trilha Rápida e a trilha completa seguem com o Fila Menor, que é de escala escolar e mostra o nível de detalhe esperado do próprio aluno.

## 3.2.0

- Trilha Extrema reorientada: a entrega deixou de ser um problema investigado e passou a ser **uma startup montada**. Os quatro blocos agora são para quem é a startup, nome e proposta, como ela ganha dinheiro, e a prova com o pitch.
- Nova ficha “A sua startup em uma folha”, que se monta sozinha enquanto a equipe escreve e mostra em porcentagem o quanto já está pronta, indicando o que ainda falta.
- Calculadora do primeiro mês no bloco 3: receita, gastos, saldo, cenário com metade dos clientes e ponto de equilíbrio, com aviso quando cada cliente custa mais do que paga. O resultado entra sozinho na ficha.
- Campo próprio e obrigatório para o que a equipe ainda não sabe sobre a startup; ele ocupa lugar de destaque na ficha.
- A exportação virou a ficha da startup (`ficha-da-startup.txt`), com nome, proposta, público, papéis, canal, a conta do mês, a prova, o pitch, as dúvidas e o aviso sobre os limites do sprint.
- Aviso inicial reescrito: o que se monta em 50 minutos é a primeira versão da startup, com duas conversas e dois testes — não um negócio comprovado.
- Respostas migraram para a chave `startlab-extrema-v2`, já que os campos mudaram de significado.

## 3.1.0

- Trilha Extrema em `trilha-extrema/`: o percurso mais curto do StartLab — quatro blocos que somam 50 minutos, do problema ao pitch de 60 segundos, em uma única aula.
- Cronômetro do sprint conduz o percurso: avança sozinho quando o bloco acaba, rola até o bloco novo, destaca o que está em andamento e permite pausar, pular e zerar sem apagar respostas.
- Aviso permanente de que três conversas e dois testes em uma aula são um primeiro contato com o método, não evidência avaliável; o aviso também vai no resumo exportado, para o professor.
- Exemplo do caso Fila Menor em cada bloco; no bloco 1, o exemplo mostra também a frase errada, em que uma solução se disfarça de problema.
- Menu lateral, Trilha Rápida e o fim do sprint ligam os três percursos entre si.
- Suíte `test:extrema`, que adianta o sprint inteiro com relógio virtual, roda junto com as outras em `npm test`.

## 3.0.0

- Etapa em camadas: frase-chave, três pontos essenciais, termos que revelam o significado ao toque e o texto completo recolhido em “Aprofundar”.
- Exemplo do caso fictício Fila Menor preenchido campo a campo, nas 12 fichas e no modelo de entrevista, com botão por campo e botão que abre todos.
- Tarefas da etapa viraram checklist, com contador e progresso guardado.
- Widgets que calculam: médias de importância e satisfação com envio para a matriz (04), soma das notas das ideias com destaque e aviso de empate (06), contagem do teste (10) e ponto de equilíbrio na calculadora (08).
- Progresso por ficha na navegação do caderno; página inicial mostra etapas concluídas, tarefas marcadas e campos preenchidos.
- Exportação em texto passou a listar as tarefas concluídas por etapa.
- Trilha Rápida ganhou exemplo preenchido em cada um dos sete passos.
- Duas novas suítes de teste (`test:interativo` e `test:rapida`), executadas junto com a existente em `npm test`.
- Cópias exportadas pela versão 2 continuam válidas: o formato ganhou apenas campos opcionais.

## 2.1.0

- Trilha Rápida em `trilha-rapida/`: sete passos diretos ao ponto, com o essencial das 12 etapas, para cerca de seis aulas.
- Cada passo traz objetivo, três ações, campos de registro, critério de conclusão, erro comum e link para a etapa completa.
- Respostas salvas no navegador em chave própria, com resumo em `.txt`, cópia e impressão.
- Entrada "Trilha rápida" no menu lateral.

## 2.0.0

- Nova interface StartLab com temas claro e escuro e layout responsivo.
- Trilha com progresso, busca e filtros por fase.
- Caderno preenchível, salvamento local, cópia/restauração e exportação de respostas.
- Perguntas de revisão, cronômetro de foco e calculadora didática.
- Biblioteca de downloads e guia do professor organizado em seções.
- Navegação por teclado, redução de movimento e impressão.
- Testes automatizados de fluxos e tamanhos de tela.

## 1.0.0

- Primeira versão funcional do site.
- 12 etapas didáticas e fichas práticas.
- Apostila, atividades e guia em HTML, PDF e DOCX.
