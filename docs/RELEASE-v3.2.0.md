# v3.2.0 · A Trilha Extrema agora monta uma startup

A versão anterior da Trilha Extrema levava a equipe a **investigar um problema** em 50 minutos. Era um bom exercício de método, mas o aluno terminava a aula sem uma startup na mão. Esta versão reorienta o percurso: os mesmos 50 minutos agora produzem **uma startup montada**, e a ficha dela se monta sozinha na tela.

## Os quatro blocos, refeitos

| Bloco | Tempo | O que fica pronto |
| --- | --- | --- |
| 1 · Para quem é a sua startup | 10 min | O cliente e o que trava para ele hoje, checado com duas pessoas |
| 2 · A startup: nome e proposta | 10 min | O nome, o que ela entrega e a frase que a explica |
| 3 · Como a startup ganha dinheiro | 15 min | Quem usa, quem paga, o canal e a conta do primeiro mês |
| 4 · A prova e o pitch de 60 segundos | 15 min | O teste com duas pessoas e o pitch em cinco frases |

## A sua startup em uma folha

No fim da página, uma ficha reúne nome, proposta, público, o que entrega, quem usa e quem paga, canal, resultado do teste e o que a equipe ainda não sabe. Ela **se preenche enquanto a equipe escreve** nos blocos e mostra o quanto já está montada, em porcentagem, nomeando o que falta. A exportação passou a ser essa ficha (`ficha-da-startup.txt`), e não mais um resumo de respostas.

## A conta do primeiro mês

O bloco 3 ganhou calculadora: preço, clientes, gasto por cliente e gasto fixo produzem receita, gastos e saldo, além do cenário com metade dos clientes e de quantos clientes cobrem os gastos. Quando cada cliente custa mais do que paga, a página avisa que nenhuma quantidade fecha a conta. O saldo entra na ficha da startup automaticamente, sempre acompanhado do lembrete de que não é lucro e de que os números são hipóteses da equipe.

## Honestidade preservada

Montar rápido não é o mesmo que comprovar. O aviso de abertura foi reescrito para dizer exatamente o que se tem no fim da aula: a primeira versão da startup, apoiada em duas conversas e dois testes, com números que são hipóteses. O bloco 4 tem um campo próprio — e obrigatório — para o que a equipe ainda não sabe, e esse campo aparece em destaque na ficha e na exportação, para o professor ler junto. Quem precisa de nota continua sendo encaminhado à Trilha Rápida ou à trilha completa.

## Detalhes

Os campos mudaram de significado, então as respostas passaram para a chave `startlab-extrema-v2` — separada, como antes, da Trilha Rápida e do caderno das 12 etapas. O cronômetro, os exemplos por bloco, a impressão e o tema claro/escuro continuam como estavam. Cada bloco aponta para a etapa correspondente da trilha completa e para os passos equivalentes da Trilha Rápida.

## Validação automatizada

A suíte `npm run test:extrema` confere os quatro blocos e seus tempos, os títulos que constroem a startup, a calculadora (incluindo margem negativa e campo vazio), a ficha montando-se campo a campo até 100%, a persistência da ficha após recarregar, o cronômetro com o sprint inteiro adiantado por relógio virtual, os exemplos, a ficha exportada e a navegação entre os três percursos — sem erros de JavaScript e sem rolagem horizontal em 320, 390 e 768 pixels, nos dois temas.
