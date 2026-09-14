# Histórico de versões

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
