# v3.1.0 · Trilha Extrema

O StartLab passa a ter três portas de entrada, do mais longo ao mais curto. A nova **Trilha Extrema** é um sprint cronometrado de 50 minutos: cabe em uma aula e leva a equipe do problema ao pitch de 60 segundos.

| Percurso | Tamanho | Para quê |
| --- | --- | --- |
| Trilha completa | 12 etapas · 24 aulas | O percurso que vale nota, com fichas, portfólio e avaliação. |
| Trilha Rápida | 7 passos · ~6 aulas | Carga reduzida, recuperação, feira, revisão antes de apresentar. |
| **Trilha Extrema** | **4 blocos · 50 minutos** | **Primeiro contato com o método, em uma única aula.** |

## Os quatro blocos

1. **O problema em uma frase** — 10 min. Cravar uma dificuldade real, sem solução escondida dentro.
2. **Três conversas de 3 minutos** — 15 min. A equipe sai da sala e troca achismo por três relatos, com duas perguntas apenas.
3. **Um desenho e dois testes** — 15 min. Três quadros em papel, critério escrito antes, duas pessoas tentando enquanto a equipe fica calada.
4. **Pitch de 60 segundos** — 10 min. Quatro frases, sendo a quarta obrigatoriamente o que ainda não se sabe.

## O relógio conduz a aula

O cronômetro é o diferencial do percurso, não um enfeite. “Iniciar sprint” começa o bloco 1; quando o tempo acaba, a página avança sozinha, rola até o bloco seguinte e o destaca. Dá para pausar, pular adiante e zerar sem perder nenhuma resposta. Uma barra mostra o avanço do sprint inteiro e o painel informa quanto resta no bloco e no total.

## Honestidade sobre o que um sprint não prova

A página diz, em destaque e antes de começar, que três conversas e dois testes em uma aula são um primeiro contato com o método — não evidência suficiente para afirmar que o problema existe, que o público é aquele ou que a solução funciona. O bloco 4 obriga a equipe a declarar em voz alta o que não descobriu, e o resumo exportado leva esse mesmo aviso para o professor. Quem precisa de nota é encaminhado à Trilha Rápida ou à trilha completa.

## Exemplo em cada bloco

Cada bloco traz o caso fictício Fila Menor preenchido. No bloco 1 o exemplo mostra também a **versão errada** da frase — “falta um aplicativo de pedidos” — para o aluno reconhecer quando uma solução se disfarçou de problema.

## Detalhes

As respostas ficam na chave `startlab-extrema-v1`, separada da Trilha Rápida e do caderno das 12 etapas: uma não apaga a outra. O cronômetro não é salvo — recarregar reinicia o relógio e mantém as respostas. A página funciona offline, imprime sem cronômetro nem exemplos, acompanha o tema claro/escuro escolhido no StartLab e usa um acento próprio para não ser confundida com a Trilha Rápida.

## Validação automatizada

A suíte `npm run test:extrema` adianta o sprint inteiro com relógio virtual e confere as quatro viradas automáticas de bloco, o destaque do bloco ativo, pausar/pular/zerar, o fim do sprint, o aviso dos limites, os exemplos, o resumo exportado e a navegação entre os três percursos — sem erros de JavaScript e sem rolagem horizontal em 320, 390 e 768 pixels, nos dois temas. Ela roda junto com as outras três em `npm test`.
