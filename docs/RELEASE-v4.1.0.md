# v4.1.0 · Levar a startup embora

A Trilha Extrema termina com a ficha “A sua startup em uma folha” montada na tela. Faltava poder tirá-la dali. Esta versão dá três saídas.

## Ficha em PDF

O botão **Baixar a ficha em PDF** imprime só o cartão, sozinho em uma folha A4 — sem cronômetro, sem os quatro blocos, sem os exemplos. Sai pela impressão do navegador, então serve tanto para salvar em PDF quanto para imprimir em papel e entregar.

## Página do pitch

**Gerar a página do pitch** baixa um arquivo HTML único, com CSS, JavaScript e os dados da startup dentro dele. Não busca nada na internet e não depende do StartLab: abre com duplo clique em qualquer computador.

O que ela traz:

- **Capa** com o nome e a proposta da startup.
- **As cinco partes do roteiro**, preenchidas com o que a equipe escreveu — o problema e o cliente, a startup, como ganha dinheiro, o que o teste mostrou e o que ainda não se sabe. A conta do mês aparece como três cartões (receita, gastos, saldo).
- **Cronômetro de 2, 3 ou 5 minutos.** O tempo escolhido é rateado entre as partes na mesma proporção do roteiro da trilha (25/35/25/25/10), pelo método do maior resto — em qualquer duração, cada parte fica a menos de um segundo da sua fatia exata. A página mostra o total restante e quanto sobra na parte atual, e avisa quando aquela parte estourou.
- **Navegação** por botões, pelas setas do teclado ou pela barra de espaço, com barra de progresso e transições curtas. O relógio nunca vira o slide sozinho: quem apresenta é a equipe.
- A ressalva do sprint vai junto, no último slide: uma startup montada em 50 minutos, com duas conversas e dois testes, é um ponto de partida investigado, não um negócio comprovado.

Campos deixados em branco aparecem marcados como “não preenchido na trilha”, em vez de sumirem — assim a equipe vê o buraco durante o ensaio.

## Salvar e subir a cópia

**Salvar cópia (.json)** baixa tudo o que a equipe escreveu; **Subir cópia** devolve. É como continuar a startup na aula seguinte, em outro computador, ou recuperar o trabalho depois de limpar o navegador.

Funciona na **Trilha Rápida e na Trilha Extrema**: a rotina ficou na base compartilhada criada na versão 4.0, então as duas ganharam a mesma coisa de uma vez.

A cópia é conferida antes de entrar: precisa ser da mesma trilha e todo campo precisa ser reconhecido. Um arquivo de outra trilha, com campo desconhecido ou fora do formato é recusado com um aviso, **sem sobrescrever nada** do que já estava escrito. Subir uma cópia válida ainda pede confirmação, porque substitui o conteúdo atual.

## Validação automatizada

A nova suíte `npm run test:entrega` preenche uma startup inteira e então:

- confere que o botão de PDF aciona a impressão e isola a ficha, voltando ao normal depois;
- gera a página do pitch, verifica que ela não referencia arquivo externo nem endereço da internet, que leva todos os campos e a conta;
- **abre o arquivo gerado por `file://`** e apresenta nele: troca entre 2, 3 e 5 minutos, percorre as cinco partes pelos botões e pelas setas, confere que os tempos somam a duração escolhida e que o relógio corre, tudo sem erro de JavaScript;
- salva a cópia, apaga as respostas, restaura a partir do arquivo e confirma que a ficha volta a 100%, nas duas trilhas;
- tenta subir uma cópia com campo desconhecido e uma de outra trilha, e confirma que ambas são recusadas sem estragar o que estava escrito.

São cinco suítes em `npm test`.
