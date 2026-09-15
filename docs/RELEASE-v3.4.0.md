# v3.4.0 · O material passa a construir startups

Até aqui, a sequência ensinava a investigar um problema e usava um caso fictício de escala escolar. Esta versão reorienta o material inteiro: **cada equipe constrói uma startup**, e os exemplos passam a ser empresas reais e conhecidas.

## A sequência agora constrói a startup

| | Antes | Agora |
| --- | --- | --- |
| 01 | Começar por um problema | **Escolher o território da sua startup** |
| 02 | Separar necessidade, desejo e suposição | **Separar o que vocês sabem do que supõem** |
| 03 | Ouvir quem vive o problema | **Ouvir o cliente antes de construir** |
| 04 | Escolher a dor e entender suas causas | **Escolher a dor que a startup vai resolver** |
| 05 | Definir para quem vamos criar | **Definir o cliente da sua startup** |
| 06 | Criar opções e escolher uma solução | **Desenhar a solução e a proposta de valor** |
| 07 | Conhecer alternativas e condições | **Estudar o mercado e as alternativas** |
| 08 | Explicar como o negócio funcionaria | **Montar o modelo de negócio** |
| 09 | Construir algo que uma pessoa possa usar | **Construir a primeira versão** |
| 10 | Testar e registrar o que aconteceu | **Testar com usuários reais** |
| 11 | Melhorar com base nas evidências | **Melhorar e decidir o próximo ciclo** |
| 12 | Apresentar a proposta e o aprendizado | **Apresentar a sua startup** |

As equipes da turma criam startups diferentes entre si, e todas usam a mesma base. É essa base que o material ensina — e é ela que o professor avalia, não o tamanho da ideia.

## Dez startups reais, uma por etapa

O caso fictício Fila Menor foi aposentado. Cada etapa mostra uma empresa conhecida resolvendo aquele passo específico:

**iFood** escolhendo o território · **Netflix** testando a suposição que derrubaria o negócio · **Airbnb** indo até o cliente · **Spotify** descobrindo que a dor era conveniência, não preço · **Nubank** definindo um cliente estreito · **Duolingo** escrevendo a proposta de valor · **99** mapeando as alternativas que o cliente já usa · **Mercado Livre** montando o modelo de receita · **Dropbox** construindo a primeira versão · **Instagram** pivotando com base no uso real.

Airbnb aparece em três momentos — ouvir, testar e apresentar —, o que dá ao aluno o arco contínuo de uma empresa enquanto ele vê outras nove usando a mesma base.

Cada percurso usa uma empresa diferente: **Airbnb** nas fichas da trilha completa, **Duolingo** na Trilha Rápida e **Nubank** na Trilha Extrema.

## Honestidade sobre os casos

Usar empresas reais exige cuidado, e o material é explícito em cada exemplo: as informações sobre os negócios são **públicas**; onde a ficha pede pesquisa própria da equipe — entrevistas, notas de 1 a 5, tempos de teste —, os dados são **ilustrativos**, mostram o formato esperado e não são registros internos das empresas; os valores das simulações financeiras são **didáticos**. E, principalmente: os casos são referência de **raciocínio, não de tamanho**. Uma startup que atende vinte pessoas do bairro percorreu o mesmo caminho. O guia orienta o professor a não avaliar a ousadia da ideia.

## Duas correções de fundo

**As perguntas de revisão estavam quebradas.** As 12 questões ainda citavam o exemplo aposentado — “levar lanche de casa”, “um fluxo de cartões”, os números da cantina. Todas foram reescritas em cima dos casos novos.

**Os PDFs e Words vinham de uma fonte antiga.** Havia duas cópias do conteúdo pedagógico e elas saíram de sincronia: os documentos continuavam sendo gerados a partir de um texto da versão 2, sem frase-chave, essencial nem termos. Agora `apoio/gerar_material.py` lê a mesma `projeto/conteudo/material.py` do site, e `apoio/conteudo.py` só reexporta essa fonte. Word, PDF e HTML foram regenerados e já trazem as camadas de conteúdo.

## Validação automatizada

`npm run test:interativo` ganhou uma guarda de coerência que percorre as 12 etapas conferindo que cada uma cita uma startup real, traz a ressalva sobre tamanho, tem revisão com três opções e devolutiva, e não guarda resquício do exemplo antigo — exatamente o tipo de defeito que passou despercebido nesta rodada. As quatro suítes seguem verdes, sem erros de JavaScript e sem rolagem horizontal em 320, 390, 768 e 1440 pixels, nos dois temas.
