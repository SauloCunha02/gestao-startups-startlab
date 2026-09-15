# v3.3.0 · Pitch de 2 minutos e a Nubank como exemplo

Duas mudanças na Trilha Extrema: o pitch final ganhou fôlego e o exemplo deixou de ser um caso inventado para ser uma startup que todo aluno conhece.

## O pitch agora é de 2 minutos (máximo 3)

Sessenta segundos davam para dizer o que a startup era, mas não para mostrar. O pitch passou a ter **2 minutos, com teto de 3** — o mesmo formato da etapa 12 da trilha completa, que usa 3 minutos. O roteiro traz cinco partes cronometradas que somam exatamente 120 segundos:

| Parte | Tempo |
| --- | --- |
| Problema e público | 25 s |
| A startup e demonstração | 35 s |
| Como ganha dinheiro | 25 s |
| O que o teste mostrou | 25 s |
| O que falta descobrir e próximo passo | 10 s |

Para caber o ensaio, os blocos foram rebalanceados sem sair dos 50 minutos de uma aula: **10 · 8 · 14 · 18**. O bloco 4 reserva 8 dos seus 18 minutos só para montar e ensaiar o roteiro com o relógio na mão.

## O exemplo virou a Nubank

O caso fictício Fila Menor foi substituído, nesta trilha, pelo caso real da **Nubank** — brasileira, conhecida por qualquer estudante e com um modelo de receita que ensina exatamente o que o bloco 3 pede. Cada bloco mostra a parte correspondente:

- **Bloco 1** — o cliente de 2013: gente que resolvia a vida pelo celular e não aceitava mais agência, fila, papelada e anuidade. Reforça que o cliente não era “todo mundo”.
- **Bloco 2** — o nome curto, o roxo que veio *depois* de o produto funcionar, e a frase da proposta sem “inovador” nem “revolucionário”.
- **Bloco 3** — a pergunta que destrava o conceito: se não cobra anuidade, de onde vem o dinheiro? A resposta separa quem usa de quem paga (o lojista, a cada compra), passa por juros e assinaturas, e termina na lição de que nem sempre quem usa é quem paga.
- **Bloco 4** — a abertura por convite como teste em escala pequena, e o pitch de 2 minutos escrito por inteiro, com os tempos de cada parte.

## Três ressalvas que acompanham o exemplo

Usar uma empresa real exige cuidado, e a página é explícita sobre isso: as informações sobre o negócio da Nubank são públicas; os valores da conta do mês são **simplificados para ensinar o cálculo e não são os números da empresa**; e o tamanho dela **não é a meta** — está ali como referência de raciocínio, e a startup do aluno pode resolver algo do tamanho da escola seguindo o mesmo caminho. O aviso aparece no topo da página e repetido em cada caixa de exemplo.

A Trilha Rápida e a trilha completa continuam com o Fila Menor, que é de escala escolar e serve de modelo do nível de detalhe esperado do próprio aluno. Um caso conhecido faz o conceito encaixar rápido num primeiro contato de uma aula; um caso de escala escolar mostra o que a equipe consegue reproduzir.

## Validação automatizada

Além do que a suíte já cobria, `npm run test:extrema` passou a conferir os novos tempos dos blocos (10/8/14/18), o teto de 3 minutos, a soma das partes do roteiro em exatamente 120 segundos, a etiqueta “EXEMPLO REAL · NUBANK”, a presença das ressalvas em cada exemplo, a pergunta do modelo de receita no bloco 3, os tempos dentro do pitch do exemplo e a ausência de qualquer resquício do caso fictício nesta trilha.
