INTRO = '''Você vai transformar um problema do cotidiano em uma proposta de startup e testar uma primeira solução. Ao final, sua equipe terá entrevistas, uma ideia justificada, um protótipo, resultados de teste e uma apresentação de três minutos.
Trabalhem em equipes de 3 a 5 pessoas. Alternem as funções de organizar, entrevistar, registrar, construir e apresentar. Todos precisam participar e explicar as decisões.
Usem a apostila para aprender e as fichas de mesmo número para construir o projeto. Guardem todas as versões: mudar de ideia com base no que descobriram faz parte do trabalho.
Materiais: papel, lápis, canetas e folhas reaproveitadas. Celular e computador são opcionais. Não é preciso gastar dinheiro nem programar.
O exemplo “Fila Menor” é inteiramente fictício: problema, pessoas, números e resultados servem apenas para aprender. A sua equipe deve produzir seus próprios registros.
Percurso: observar → ouvir → definir → criar → comparar → planejar → construir → testar → melhorar → apresentar.
Ritmo sugerido: cada etapa ocupa duas aulas de 50 minutos. O professor pode ampliar o percurso para 40 aulas, conforme o guia. Os primeiros resultados são pistas para novos testes; concluir a atividade não significa ter um negócio comprovado.'''

LESSONS = [
dict(title='Começar por um problema', goal='Reconhecer o que é uma startup e escolher uma situação para investigar.',
key='Startup não começa com uma ideia. Começa com uma dificuldade que alguém vive de verdade.',
bullets=['Empreender é organizar ações e recursos para resolver um problema e gerar valor.',
 'Uma startup testa um modelo repetível (atender outros clientes do mesmo jeito) e escalável (crescer sem gastar na mesma proporção).',
 'Ter um aplicativo não prova nada disso. Criatividade gera possibilidades; inovação é a melhoria colocada em uso.'],
terms=[('Repetível','Atender outros clientes com um processo semelhante.'),
 ('Escalável','Ampliar o atendimento sem aumentar os recursos na mesma proporção.'),
 ('Negócio de impacto','Coloca um problema social ou ambiental no centro — e ainda precisa se sustentar.')],
concept='Empreender é organizar ações e recursos para resolver um problema e gerar valor. Uma startup busca um modelo de negócio inovador, repetível e capaz de crescer, enquanto ainda testa muitas incertezas. Repetível significa atender outros clientes com um processo semelhante; crescer com escala significa ampliar o atendimento sem aumentar os recursos na mesma proporção. Ter um aplicativo, por si só, não demonstra isso. Criatividade gera possibilidades; inovação coloca uma melhoria em uso. Um empreendimento social coloca um problema social ou ambiental no centro e também precisa sustentar suas atividades.',
example='Fila Menor: uma equipe percebe que estudantes gastam boa parte do intervalo esperando atendimento na cantina. A ideia de organizar pedidos poderá ser testada em uma cantina e, depois, investigada em outras. Essa possibilidade de expansão ainda é uma hipótese.',
steps=['Cada integrante relata um problema que observou na escola, no bairro ou em uma atividade cotidiana.', 'Listem pelo menos cinco problemas e indiquem quem vive cada situação.', 'Escolham um problema frequente e pessoas com quem seja possível conversar. Escrevam: “[público] enfrenta [dificuldade] quando [situação]”.', 'Distribuam as funções e registrem um motivo para investigar esse problema.'],
delivery='Ficha 01: equipe, lista de problemas e problema inicial.', check='A frase descreve uma dificuldade observável? “Falta um aplicativo” já escolhe uma solução e precisa ser reescrito.'),
dict(title='Separar necessidade, desejo e suposição', goal='Organizar o que a equipe sabe e o que precisa descobrir.',
key='Antes de resolver, separe o que vocês sabem do que vocês só acham que sabem.',
bullets=['Necessidade é o que a pessoa precisa atender. Desejo é uma forma específica de atender. Dor é a dificuldade concreta: perder tempo, gastar demais, repetir trabalho.',
 'A matriz CSD separa Certezas, Suposições e Dúvidas — e mostra o que investigar primeiro.',
 'Toda certeza precisa de evidência e de limite: o que vale para uma turma não vale automaticamente para a escola inteira.'],
terms=[('Demanda','Disposição e capacidade de adquirir uma oferta em certas condições.'),
 ('Dor','Dificuldade concreta e observável, não um incômodo genérico.'),
 ('CSD','Certezas, Suposições e Dúvidas: o mapa do que ainda falta descobrir.')],
concept='Necessidade é algo que a pessoa precisa atender; desejo é uma forma específica de atender essa necessidade. Demanda envolve disposição e capacidade de adquirir uma oferta em certas condições. Dor é uma dificuldade concreta: perder tempo, gastar demais, repetir trabalho ou não conseguir ajuda. A matriz CSD organiza Certezas, Suposições e Dúvidas. Toda certeza deve ter uma evidência e um limite: algo observado em uma turma não vale automaticamente para a escola inteira.',
example='Necessidade: alimentar-se no intervalo. Desejo: comprar um sanduíche específico. Dor: perder tempo na fila. Suposição: pedidos antecipados ajudariam. Dúvida: a demora acontece no pedido, no preparo ou no pagamento? Um elogio à ideia não comprova demanda.',
steps=['Identifiquem uma necessidade, um desejo e uma dor ligados ao problema.', 'Preencham a CSD. Se não houver evidência, deixem o item como suposição.', 'Selecionem a suposição que mais colocaria o projeto em risco se fosse falsa.', 'Transformem essa suposição em uma pergunta sobre a experiência real das pessoas.'],
delivery='Ficha 02: conceitos aplicados, CSD e pergunta principal.', check='Cada certeza apresenta uma observação ou relato com data e contexto?'),
dict(title='Ouvir quem vive o problema', goal='Realizar cinco entrevistas curtas sem induzir respostas.',
key='Pergunte sobre o que já aconteceu, não sobre o que a pessoa acha da sua ideia.',
bullets=['Episódios reais revelam contexto, frequência e a solução atual. “Você compraria?” só gera resposta educada.',
 'Separe relato (o que a pessoa contou), observação (o que você presenciou) e interpretação (o que a equipe concluiu).',
 'Cinco entrevistas são um começo de investigação — não uma amostra que representa o mercado.'],
terms=[('Relato','O que a pessoa conta que aconteceu com ela.'),
 ('Observação','O que você presenciou, com seus próprios olhos.'),
 ('Interpretação','A conclusão da equipe — a parte que mais erra.')],
concept='Entrevistar é entender a experiência de outra pessoa. Perguntas sobre episódios reais ajudam mais do que “você compraria minha ideia?”. Escute antes de explicar uma solução. Relato é o que a pessoa conta; observação é o que você presencia; interpretação é a conclusão da equipe. Registre essas diferenças. Cinco entrevistas são um começo de investigação, não uma amostra que representa todo o mercado.',
example='Pergunta: “Conte a última vez em que comprou algo no intervalo”. Registro fictício: P1 relatou ter esperado oito minutos na terça-feira. Interpretação da equipe: a demora pode reduzir o tempo disponível para comer. Ainda precisamos descobrir onde surge a espera.',
steps=['Peçam: “Podemos conversar por cinco minutos para um trabalho escolar? Vamos anotar sem identificar você”. Respeitem quem não quiser.', 'Conversem com cinco pessoas do público escolhido, fora da equipe. Usem a ficha de entrevista uma vez por pessoa.', 'Perguntem: quando aconteceu pela última vez? Como resolveu? Com que frequência acontece? Que tempo, esforço ou dinheiro isso exige? O que mais incomoda?', 'Para duas necessidades, peçam notas de importância e satisfação atual de 1 a 5. Registrem também o que contradiz a ideia da equipe.'],
delivery='Ficha 03: resumo de cinco entrevistas + cinco registros individuais do modelo extra.', check='Há episódios concretos e alternativas atuais? Não inventem respostas para completar a quantidade.'),
dict(title='Escolher a dor e entender suas causas', goal='Usar evidências para definir o problema central.',
key='Prioridade é onde a importância é alta e a satisfação atual é baixa.',
bullets=['Use a escala de 1 a 5 nas duas perguntas: o quanto isso importa e o quanto a solução de hoje resolve.',
 'Na árvore de problemas: raízes são causas possíveis, o tronco é o problema central e a copa são as consequências.',
 'Uma causa imaginada continua sendo suposição até alguém observar.'],
terms=[('Média','Soma das notas válidas ÷ número de respostas. Nunca preencha ausência com zero.'),
 ('Causa','Por que o problema acontece.'),
 ('Consequência','O que o problema provoca depois.')],
concept='Na matriz de necessidades, compare a importância de uma necessidade com a satisfação atual ao atendê-la. Use a escala de 1 a 5: importância de pouco a muito importante; satisfação de muito insatisfeito a muito satisfeito. Importância alta e satisfação baixa sugerem algo a investigar. Na árvore de problemas, o tronco é a dificuldade central, as raízes são possíveis causas e a copa reúne consequências. Uma causa imaginada continua sendo suposição.',
example='Dados fictícios para “comprar dentro do intervalo”: importância 5, 4, 5, 4, 5 → média 4,6; satisfação 2, 2, 1, 3, 2 → média 2,0. Problema: demora no atendimento. Causa possível: pedido e pagamento na mesma etapa. Consequência: pouco tempo para comer. A causa precisa de observação.',
steps=['Calculem as médias das duas necessidades: somem as notas válidas e dividam pela quantidade de respostas. Não preencham ausências com zero.', 'Comparem as médias com os relatos e escolham uma necessidade prioritária.', 'Desenhem a árvore com um problema, duas possíveis causas e duas consequências. Marquem o que falta verificar.', 'Escrevam: “Como podemos ajudar [público] a [resultado desejado] em [contexto]?”.'],
delivery='Ficha 04: matriz, árvore e desafio definido.', check='O problema escolhido aparece nos registros? As causas foram distinguidas das consequências?'),
dict(title='Definir para quem vamos criar', goal='Descrever o público inicial e uma persona apoiada nas entrevistas.',
key='Se o público é “todo mundo”, não sobra ninguém concreto para testar.',
bullets=['Público-alvo é o grupo. Persona é o resumo dos padrões que vocês encontraram nesse grupo.',
 'O nome da persona pode ser fictício; o comportamento precisa vir da pesquisa.',
 'Usuário usa, pagador financia, decisor autoriza. Podem ser três pessoas diferentes.'],
terms=[('Persona','Resumo de padrões reais reunidos em uma pessoa fictícia.'),
 ('Usuário','Quem utiliza a solução no dia a dia.'),
 ('Pagador','Quem coloca o dinheiro.'),
 ('Decisor','Quem autoriza a escolha.')],
concept='Público-alvo é o grupo com características relevantes para a solução. Persona é uma representação resumida de padrões encontrados nesse grupo. Seu nome pode ser fictício; necessidades e comportamentos precisam vir da pesquisa. Usuário é quem utiliza; pagador é quem financia; decisor é quem autoriza a escolha. Eles podem ser pessoas diferentes. Evite definir seu público como “todo mundo”.',
example='Público inicial: estudantes que compram na cantina durante o intervalo. Persona fictícia: Lia costuma comprar nesse horário e quer conseguir comer antes da aula. Usuário do pedido antecipado: estudante. Possível pagador de um serviço de organização: responsável pela cantina. Essa hipótese exige uma conversa própria.',
steps=['Agrupem os padrões das entrevistas: contexto, comportamento, dificuldade e objetivo.', 'Criem uma persona curta e indiquem quais registros sustentam cada característica.', 'Identifiquem usuário, possível pagador e decisor. Marquem os papéis ainda desconhecidos.', 'Escolham um grupo inicial que a equipe consegue alcançar para testar.'],
delivery='Ficha 05: público, persona e papéis na decisão.', check='A persona resume evidências ou só imaginação? Se o pagador for diferente, planejem ouvi-lo.'),
dict(title='Criar opções e escolher uma solução', goal='Gerar alternativas e escrever uma proposta de valor.',
key='Primeiro gere muitas opções sem julgar. Só depois escolha — e justifique a escolha.',
bullets=['Brainstorming: registrar primeiro, avaliar depois. Julgar cedo mata as ideias ainda no começo.',
 'Duplo Diamante: descobrir → definir → desenvolver → entregar. É permitido voltar uma fase.',
 'A proposta de valor diz para quem é, qual benefício oferece e como pretende ajudar.'],
terms=[('Mapa mental','Tema no centro, ramificações com palavras curtas.'),
 ('Proposta de valor','Ajudamos [público] a [benefício] por meio de [solução].'),
 ('Duplo Diamante','Abrir e fechar duas vezes: no problema e na solução.')],
concept='Brainstorming é uma rodada de geração de ideias: primeiro registre possibilidades, depois avalie. Mapa mental organiza um tema central e ramificações com palavras curtas. O Duplo Diamante organiza quatro movimentos: descobrir situações, definir o problema, desenvolver alternativas e entregar uma solução para testar. Podemos voltar às fases anteriores. Proposta de valor explica para quem é a solução, qual benefício oferece e como pretende ajudar.',
example='Para a fila, surgem três opções: organizar pedidos antes do intervalo, separar atendimentos simples e sinalizar opções prontas. A equipe escolhe testar pedidos antecipados. Proposta: “Ajudamos estudantes que compram no intervalo a reduzir a espera, organizando pedidos antes do atendimento”. Reduzir a espera ainda é uma promessa a testar.',
steps=['Façam cinco minutos de ideias individuais e compartilhem até reunir pelo menos oito opções.', 'Organizem um mapa mental com o desafio no centro e três ramos de possibilidades.', 'Escolham três opções e atribuam notas de 1 a 3 para benefício esperado, facilidade de testar e acesso a recursos. Somem e justifiquem a escolha; as notas são estimativas.', 'Completem: “Ajudamos [público] a [benefício] por meio de [solução]”.'],
delivery='Ficha 06: ideias, comparação e proposta de valor.', check='O benefício responde à dor escolhida? Dá para experimentar a solução com os recursos da turma?'),
dict(title='Conhecer alternativas e condições do projeto', goal='Comparar soluções atuais e transformar a análise em uma decisão.',
key='Seu concorrente é o jeito que a pessoa resolve isso hoje — inclusive não fazer nada.',
bullets=['Concorrente direto oferece algo semelhante ao mesmo público. Alternativa indireta atende a mesma necessidade de outro jeito.',
 'Microambiente: usuários, fornecedores e parceiros próximos. Macroambiente: hábitos, tecnologia, economia.',
 'A FOFA separa o que é interno (força e fraqueza) do que é externo (oportunidade e ameaça).'],
terms=[('FOFA / SWOT','Forças e Fraquezas são internas; Oportunidades e Ameaças são externas.'),
 ('Alternativa indireta','Resolve a mesma necessidade por outro caminho.'),
 ('Macroambiente','Condições amplas que você não controla.')],
concept='Concorrente direto oferece algo semelhante para o mesmo público. Uma alternativa indireta resolve a necessidade de outra forma; até deixar de comprar pode ser uma alternativa. O microambiente inclui usuários, fornecedores e parceiros próximos. O macroambiente reúne condições amplas, como hábitos, acesso à tecnologia e situação econômica. A análise FOFA (ou SWOT) separa forças e fraquezas internas de oportunidades e ameaças externas.',
example='Alternativas à fila: comprar normalmente, levar lanche de casa ou comprar em outro horário. Força interna: equipe sabe organizar registros. Fraqueza: pouca experiência de operação. Oportunidade externa, se confirmada: interesse da cantina em experimentar. Ameaça: conexão instável. Decisão: criar uma versão em papel.',
steps=['Comparem três alternativas com base nas entrevistas ou em observação: como funcionam, vantagem e limitação. Registrem a fonte e a data.', 'Anotem uma força, uma fraqueza, uma oportunidade e uma ameaça.', 'Identifiquem duas condições externas que interferem no projeto. Se forem desconhecidas, escrevam como verificar.', 'Definam uma ação concreta a partir da análise e identifiquem alguém da escola ou comunidade que possa ajudar.'],
delivery='Ficha 07: alternativas, FOFA, condições externas e ação.', check='A diferença proposta importa para o público? A análise mudou alguma decisão?'),
dict(title='Explicar como o negócio funcionaria', goal='Relacionar entrega de valor, pagamento, recursos e custos.',
key='Modelo de negócio responde: quem paga, por qual benefício e o que sobra no fim do mês.',
bullets=['Registre quem usa, quem paga, o que recebe, como chega até a solução, o que é preciso fazer e o que é preciso ter.',
 'Compare entradas e saídas sempre no mesmo período.',
 'Saldo não é lucro: faltam o tempo de trabalho da equipe e os gastos que ninguém lembrou.'],
terms=[('Receita','Valor das vendas no período.'),
 ('Gasto variável','Cresce junto com a quantidade de clientes.'),
 ('Gasto fixo','Acontece mesmo com poucos clientes.')],
concept='Modelo de negócio explica como uma organização cria valor, entrega esse valor e obtém recursos para continuar. Registre quem usa, quem paga, o que recebe, como chega até a solução, o que é necessário fazer e quais recursos são usados. Receita é o valor das vendas. Custos e despesas são os gastos envolvidos. Para comparar entradas e saídas, use o mesmo período. Uma conta positiva depende de hipóteses reais sobre clientes e gastos.',
example='Simulação mensal do Fila Menor: quatro cantinas pagariam R$ 30 cada → receita de R$ 120. Gasto variável de R$ 5 por cantina → R$ 20; outros gastos mensais → R$ 60. Saldo simplificado: 120 − 20 − 60 = R$ 40. Não é lucro líquido: tempo de trabalho e outros gastos ainda não foram estimados. Preço e clientes são hipóteses fictícias.',
steps=['Preencham os oito campos da ficha: usuário, pagador, benefício, canal, atividades, recursos/parceiros, receita e gastos.', 'Montem uma simulação de um mês. Identifiquem de onde vieram os valores ou escrevam “estimativa”.', 'Refaçam a conta com metade dos clientes previstos. Registrem o que muda.', 'Definam como investigar quem pagaria e por qual benefício. Nesta atividade, não é necessário cobrar nem comprar nada.'],
delivery='Ficha 08: modelo simples, duas contas e hipótese sobre pagamento.', check='A conta usa o mesmo período? Receita foi separada do saldo? Quem pagaria foi identificado?'),
dict(title='Construir algo que uma pessoa possa usar', goal='Criar um protótipo e planejar uma primeira entrega de valor.',
key='Protótipo não precisa funcionar. Precisa poder ser experimentado por outra pessoa.',
bullets=['Papel, encenação ou modelo físico já testam se a pessoa entende o que fazer.',
 'MVP é a versão mínima que entrega valor de verdade e testa uma hipótese importante.',
 'Comece por uma única tarefa principal e escreva o que fica de fora desta versão.'],
terms=[('Protótipo','Representação que permite experimentar como a solução funcionaria.'),
 ('MVP','Versão mínima usada para entregar valor e aprender com usuários.')],
concept='Protótipo é uma representação que permite experimentar como uma solução funcionaria: telas de papel, encenação ou modelo físico. MVP é uma versão mínima usada para testar uma hipótese importante com usuários e aprender com uma entrega de valor. Um desenho pode testar compreensão; um serviço manual pode testar a entrega. Registre exatamente o que seu teste consegue mostrar. Comece com uma única tarefa principal.',
example='Protótipo do Fila Menor: três cartões representam escolher lanche, registrar pedido e receber confirmação. A pessoa aponta suas escolhas e a equipe troca os cartões. Isso testa compreensão. Um atendimento real de pedidos, pequeno e combinado com a cantina e o professor, poderia testar operação e espera.',
steps=['Escolham uma tarefa que o usuário precisa concluir e o resultado esperado.', 'Desenhem ou montem três momentos: entrada, ação principal e resultado. Escrevam o que ficará fora desta versão.', 'Ensaiem entre os integrantes e corrijam obstáculos óbvios.', 'Planejem uma entrega mínima: quem receberia, como funcionaria e o que seria medido. Identifiquem o que depende da escola.'],
delivery='Ficha 09 + protótipo em papel ou outro formato acessível.', check='Outra pessoa consegue tentar a tarefa? Está claro se o teste avalia compreensão ou entrega real de valor?'),
dict(title='Testar e registrar o que aconteceu', goal='Observar três usuários e comparar os resultados com um critério definido antes.',
key='Defina o critério antes do teste. Depois é tarde: a meta vira desculpa.',
bullets=['Um teste precisa de hipótese, tarefa, medida e critério — nessa ordem e antes de começar.',
 'Observe tentativas, erros e pedidos de ajuda. Elogio ajuda a conversar, mas não é resultado.',
 'Três testes revelam dificuldades iniciais; não provam que o mercado vai adotar a solução.'],
terms=[('Hipótese','Afirmação que pode ser investigada e pode dar errado.'),
 ('Critério','Quantos, fazendo o quê, em quanto tempo.'),
 ('Medida','O que exatamente será anotado durante o teste.')],
concept='Hipótese é uma afirmação que pode ser investigada. Um teste precisa de tarefa, pessoas adequadas, medida e critério definidos antes de começar. Observe tentativas, erros e pedidos de ajuda. Elogios ajudam a conversar, mas não mostram que a tarefa funciona. Três testes revelam dificuldades iniciais; não comprovam que o mercado adotará a solução.',
example='Hipótese fictícia: estudantes entendem como pedir. Tarefa: “Faça um pedido usando estes cartões”. Critério: pelo menos dois de três concluem sem ajuda em até dois minutos. Resultado fictício: só um conseguiu; dois não encontraram a confirmação. Isso indica um problema no fluxo. Não mede redução da fila real.',
steps=['Preencham hipótese, tarefa, medida e critério antes de chamar participantes.', 'Testem com três pessoas do público, fora da equipe. Expliquem que estão testando o material e que a pessoa pode parar.', 'Entreguem a mesma tarefa e evitem orientar cada passo. Registrem tempo, conclusão, ajuda e dificuldades.', 'Perguntem o que foi confuso e como a pessoa resolveria a situação hoje. Comparem os registros com o critério inicial.'],
delivery='Ficha 10: plano preenchido antes do teste e três resultados registrados.', check='O critério foi mantido? A conclusão corresponde ao que foi realmente testado?'),
dict(title='Melhorar com base nas evidências', goal='Fazer uma mudança justificada e organizar o próximo ciclo.',
key='Manter, ajustar ou trocar de problema: as três são respostas válidas, se houver evidência.',
bullets=['Escolha a dificuldade mais importante do teste e mude uma coisa por vez.',
 'Organize as tarefas em “a fazer”, “fazendo” e “feito”, com responsável e prazo.',
 'Atualize a CSD: suposição só vira certeza com evidência, dentro do contexto testado.'],
terms=[('Pivô','Mudar o problema ou o público investigado, com base no que se descobriu.'),
 ('Iteração','Uma volta do ciclo: mudar, testar de novo, aprender.')],
concept='Após o teste, a equipe pode manter a proposta, ajustar a solução ou mudar o problema/público investigado. A decisão precisa de evidências. Organize o trabalho em “a fazer”, “fazendo” e “feito”, com uma pessoa responsável e prazo por tarefa. Atualize a CSD: uma suposição só muda de categoria quando há evidência suficiente para a afirmação, dentro do contexto testado.',
example='Como dois participantes não acharam a confirmação, o Fila Menor cria um cartão final com número do pedido e instrução de retirada. A equipe testa novamente. Mesmo que a navegação melhore, ainda falta verificar se a cantina consegue operar os pedidos e se pagaria pelo serviço.',
steps=['Selecionem a dificuldade mais importante observada e expliquem por que ela merece atenção.', 'Façam uma alteração e registrem o antes e o depois. Realizem ao menos um novo teste, preferencialmente com outra pessoa do público.', 'Atualizem uma certeza, uma suposição e uma dúvida, indicando as evidências disponíveis.', 'Definam três próximas tarefas, responsáveis e prazos; incluam uma hipótese de negócio ainda não investigada.'],
delivery='Ficha 11: melhoria, novo registro de teste e plano de ação.', check='A mudança enfrenta algo observado? Um novo teste isolado não deve virar uma conclusão sobre todos os usuários.'),
dict(title='Apresentar a proposta e o aprendizado', goal='Demonstrar a solução e explicar decisões em três minutos.',
key='Um bom pitch separa o que foi observado, o que foi estimado e o que ainda é dúvida.',
bullets=['Mostre problema, pessoas afetadas, solução, como o negócio funcionaria e o que os testes revelaram.',
 'Três minutos: 30s problema · 30s evidências · 60s solução · 30s negócio · 30s aprendizado.',
 'Um projeto que mudou depois de ouvir usuários mostra mais aprendizado do que um que nunca mudou.'],
terms=[('Pitch','Apresentação curta que permite entender as decisões da equipe.'),
 ('Portfólio','O conjunto de registros que sustenta o que vocês afirmam.')],
concept='Pitch é uma apresentação curta e clara. Mostre o problema, as pessoas afetadas, a solução, como o negócio poderia funcionar e o que os testes revelaram. Separe evidência, estimativa e dúvida. Uma boa apresentação permite entender por que a equipe tomou suas decisões e qual será a próxima investigação. Um projeto que mudou após ouvir usuários pode mostrar bastante aprendizado.',
example='“Investigamos a espera na cantina. Criamos um fluxo de pedido em papel. No teste fictício, um de três usuários concluiu sem ajuda. Mudamos a confirmação e fizemos um novo teste. Ainda precisamos medir a espera real e conversar com quem poderia pagar. Nosso próximo passo é testar uma pequena operação acompanhada”.',
steps=['Preparem até cinco cartazes ou slides: problema/público; evidências; solução/demonstração; modelo de negócio; teste e próximo passo.', 'Ensaiem: 30 segundos para problema e público; 30 para evidências; 60 para solução; 30 para negócio; 30 para aprendizado e próximo passo.', 'Entreguem as fichas, o protótipo e os registros. Cada integrante deve conseguir explicar uma decisão.', 'Após apresentar, registrem uma pergunta recebida e uma melhoria. Cada aluno escreve sua contribuição e o que aprendeu.'],
delivery='Ficha 12 + apresentação de três minutos + portfólio da equipe.', check='O público consegue entender a dor, experimentar a solução e distinguir o que já foi observado do que ainda é hipótese?')
]

# Each item creates a writing area or a table in the editable workbook.
WORKSHEETS = [
 [('Equipe, integrantes e funções',2), ('Cinco problemas observados', ['Problema / contexto','Quem enfrenta?','Como percebemos?'],5), ('Problema escolhido: público + dificuldade + situação',2), ('Por que investigar? Quem podemos ouvir?',2)],
 [('Necessidade / desejo / dor do nosso público',3), ('Nossa matriz CSD', ['Certeza + evidência e data','Suposição','Dúvida'],3), ('Suposição mais arriscada e pergunta para investigar',3)],
 [('Use o modelo extra uma vez por entrevistado. Resuma aqui cinco pessoas do público, sem nomes.',0), ('Resumo das entrevistas', ['Código / contexto','Episódio e frequência','Solução atual / dificuldade'],5), ('Dois padrões encontrados e quais registros os sustentam',3), ('O que contrariou nossa ideia? O que ainda falta ouvir?',3)],
 [('Médias: soma das notas válidas ÷ número de respostas. Use apenas notas de 1 a 5.',0), ('Matriz de necessidades', ['Necessidade','Nº respostas I / S','Média I','Média S'],2), ('Copa: duas consequências | Tronco: problema | Raízes: duas causas possíveis. Marque evidência ou suposição.',6), ('Necessidade priorizada e justificativa com base nos relatos',2), ('Como podemos ajudar...?',2)],
 [('Público inicial: quem, em que situação e onde encontrar',2), ('Persona: nome fictício, comportamento, dificuldade e objetivo',4), ('Quais entrevistas sustentam as características? O que ainda é suposição?',2), ('Papéis', ['Usuário','Possível pagador','Decisor'],2), ('Como vamos ouvir o pagador, se for outra pessoa?',2)],
 [('Oito ideias, antes de julgar',4), ('Mapa mental: desafio no centro e três ramos (use o verso se necessário)',4), ('Notas de 1 a 3; 3 = mais favorável. As notas são estimativas.', ['Opção','Benefício','Facilidade','Recursos','Total'],3), ('Solução escolhida, motivo e frase da proposta de valor',3)],
 [('Alternativas atuais', ['Alternativa','Vantagem','Limitação','Fonte / data'],3), ('FOFA', ['Força interna','Fraqueza interna','Oportunidade externa','Ameaça externa'],2), ('Duas condições externas e como verificar seu efeito',2), ('Ação que a análise sugere; pessoa ou instituição que pode ajudar',2)],
 [('Modelo de negócio simples', ['Campo','Resposta / evidência ou hipótese'],8), ('Campos: usuário; pagador; benefício; canal de acesso; atividades; recursos/parceiros; receita; gastos.',0), ('Simulação mensal: receita, gastos e saldo', ['Cenário','Receita','Gastos','Saldo'],2), ('Indique preço, quantidade, gastos variáveis e outros gastos. Compare o previsto com metade dos clientes (arredonde para baixo se necessário).',2), ('O que não entrou na conta? Como investigar se alguém pagaria?',2)],
 [('Tarefa principal e resultado que queremos permitir',2), ('Desenhe: entrada → ação principal → resultado',7), ('O que esta versão não faz?',2), ('Plano de entrega mínima: para quem, como, medida e combinações necessárias',3)],
 [('ANTES: hipótese, tarefa, medida e critério (quantos, fazendo o quê e em quanto tempo)',3), ('DEPOIS: resultados', ['Código','Concluiu?','Tempo','Ajuda?','Dificuldade observada'],3), ('Critério atingido? O que os registros permitem concluir?',3), ('O que este teste NÃO permite concluir? Qual será a mudança?',2)],
 [('Dificuldade prioritária e evidência do teste',2), ('Antes → depois: mudança realizada',3), ('Novo teste: código, tarefa, resultado, ajuda e conclusão limitada',3), ('CSD atualizada: uma certeza com evidência, uma suposição e uma dúvida',3), ('Próximas ações', ['Tarefa','Responsável','Prazo','Situação'],3)],
 [('Roteiro do pitch', ['Parte','O que mostrar / dizer'],5), ('Use: problema/público; evidências; solução; modelo; testes/próximo passo.',0), ('Conferência do portfólio: fichas 01–12; 5 entrevistas; protótipo; 3 testes iniciais; 1 novo teste; apresentação.',2), ('Pergunta recebida e melhoria sugerida',2), ('Reflexão individual (cada aluno no caderno): minha contribuição; decisão que ajudei a tomar; o que mudou no meu entendimento; próxima aprendizagem.',2)]
]

INTERVIEW = [
 ('Código (P1, P2...): __________  Data: __________  Contexto/público: __________________',0),
 ('Explique o trabalho, peça concordância e registre sem identificar a pessoa. Não precisa de telefone, documento, foto ou gravação.',0),
 ('1. Conte a última vez em que essa dificuldade aconteceu. Quando e onde foi?',3),
 ('2. Com que frequência acontece? Como você resolve hoje?',3),
 ('3. Que tempo, esforço ou dinheiro isso exige? O que mais incomoda?',3),
 ('4. Notas de 1 a 5: importância da necessidade e satisfação com a forma atual de atendê-la.', ['Necessidade (mesma para todos)','Importância','Satisfação'],2),
 ('5. Alguma coisa importante que não perguntamos?',2),
 ('Anotação da equipe: o que é relato, observação e interpretação? O que contrariou nossa hipótese?',2)
]

# Exemplo fictício Fila Menor preenchido campo a campo, na mesma ordem de WORKSHEETS.
# Texto simples para campos de escrita; lista de linhas para tabelas.
EXAMPLES = {
 1: {
  0: 'Equipe Fila Menor — Ana (organiza e controla o tempo), Bruno (entrevista), Carla (registra), Diego (constrói o protótipo) e Elisa (apresenta). As funções giram a cada etapa.',
  1: [['Espera longa na cantina no intervalo','Estudantes que compram lanche','Observamos três dias seguidos: fila até o fim do intervalo'],
      ['Bebedouro do 2º andar quebrado há semanas','Todas as turmas do andar','Relato repetido em sala; vimos o aviso colado'],
      ['Material esquecido em casa com frequência','Estudantes do turno da tarde','Pedidos de empréstimo quase toda aula'],
      ['Quadra ocupada sem revezamento','Quem quer jogar e não consegue','Observamos dois intervalos seguidos'],
      ['Avisos da escola se perdem no grupo de mensagens','Estudantes e responsáveis','Três colegas perderam o prazo da feira']],
  2: 'Estudantes do 2º ano que compram na cantina enfrentam espera longa quando o intervalo começa e todos chegam ao mesmo tempo.',
  3: 'Acontece todo dia e reduz o tempo de comer — quem chega atrasado na aula seguinte perde conteúdo. Podemos ouvir colegas de três turmas na saída do intervalo e a responsável pela cantina.'
 },
 2: {
  0: 'Necessidade: se alimentar durante o intervalo. Desejo: comprar o salgado específico da cantina. Dor: perder de 8 a 10 minutos na fila e comer com pressa a caminho da sala.',
  1: [['A fila passa de 8 minutos nos dias de maior movimento (3 medições nossas em 12/03 e 13/03)','Pedidos antecipados reduziriam a espera','A demora está no pedido, no preparo ou no pagamento?'],
      ['O intervalo dura 20 minutos (horário oficial da escola)','A cantina aceitaria receber pedidos antes do sinal','Quantos estudantes pediriam antes, se pudessem?'],
      ['Parte dos colegas desiste ao ver a fila (5 relatos em 14/03)','Quem desiste passa a levar lanche de casa','A demora é igual nos dois intervalos?']],
  2: 'Mais arriscada: “pedidos antecipados reduziriam a espera”. Se for falsa, o projeto inteiro cai, porque é a base da nossa solução. Pergunta para investigar: em que momento exato a fila trava — ao escolher, ao preparar ou ao pagar?'
 },
 3: {
  1: [['P1 · 2º ano, compra quase todo dia','Terça: esperou 8 min e comeu andando. Acontece 4x por semana','Chega antes do sinal; mesmo assim pega fila'],
      ['P2 · 1º ano, compra 2x por semana','Ontem desistiu ao ver a fila e ficou sem comer','Passou a trazer bolacha de casa'],
      ['P3 · 3º ano, compra todo dia','Quinta: 10 min entre entrar na fila e receber','Pede para um colega guardar lugar'],
      ['P4 · 2º ano, compra às vezes','Na semana passada perdeu o começo da aula seguinte','Compra só no segundo intervalo, que é mais vazio'],
      ['P5 · 2º ano, quase não compra','Parou de comprar no mês passado por causa da espera','Traz lanche de casa todos os dias']],
  2: 'Padrão 1 — a espera faz a pessoa comer com pressa ou desistir de comprar (P1, P2, P4 e P5). Padrão 2 — quem continua comprando inventa um jeito próprio de furar a espera: chegar antes, guardar lugar, mudar de intervalo (P1, P3 e P4).',
  3: 'Contrariou nossa ideia: imaginávamos que a demora estava no preparo do lanche, mas P1 e P3 descreveram a espera no momento de pagar. Ainda falta ouvir quem trabalha na cantina e alguém que nunca compra lá.'
 },
 4: {
  1: [['Comprar dentro do tempo do intervalo','5 / 5','4,6','2,0'],
      ['Ter opções de lanche disponíveis','5 / 5','3,8','3,4']],
  2: 'COPA (consequências): 1) come com pressa ou fica sem comer; 2) chega atrasado na aula seguinte.\nTRONCO (problema central): a espera na cantina consome quase metade do intervalo.\nRAÍZES (causas possíveis): 1) pedido e pagamento acontecem na mesma etapa [SUPOSIÇÃO — falta observar]; 2) todos chegam no mesmo minuto, quando o sinal toca [EVIDÊNCIA — observado em 12/03].',
  3: 'Priorizada: comprar dentro do tempo do intervalo. É a maior distância entre importância (4,6) e satisfação (2,0). Quatro dos cinco entrevistados descreveram prejuízo concreto: comer com pressa, desistir ou se atrasar.',
  4: 'Como podemos ajudar estudantes que compram na cantina a receber o lanche dentro do intervalo, nos dias de maior movimento?'
 },
 5: {
  0: 'Estudantes do 2º ano que compram na cantina no primeiro intervalo, em dias de aula. Encontramos todos os dias, das 9h40 às 10h, no pátio coberto.',
  1: 'Lia, 16 anos, 2º ano. Compra quase todo dia e chega antes do sinal para tentar pegar a fila menor. Dificuldade: gasta de 8 a 10 minutos esperando e come andando até a sala. Objetivo: comprar e conseguir comer sentada antes da próxima aula.',
  2: 'Sustentam: P1 (chega antes e mesmo assim espera), P3 (10 minutos de espera) e P4 (perdeu o começo da aula). Ainda é suposição que ela pagaria a mais por um pedido antecipado — ninguém falou sobre pagar.',
  3: [['Estudante que compra o lanche','Responsável pela cantina (hipótese — não conversamos ainda)','Direção da escola, que autoriza a experiência no pátio'],
      ['Usa o pedido antecipado no intervalo','Pagaria por um serviço que organize os pedidos','Autoriza o uso do espaço e do horário']],
  4: 'Vamos pedir dez minutos com a responsável pela cantina, com autorização do professor, para perguntar como ela organiza o atendimento hoje e o que mais atrapalha — sem oferecer a nossa solução logo na primeira conversa.'
 },
 6: {
  0: '1) Pedido em papel entregue antes do sinal. 2) Fila separada só para quem já sabe o que quer. 3) Cardápio com os lanches prontos sinalizados. 4) Senha por ordem de chegada. 5) Ponto de venda extra no pátio. 6) Pagamento adiantado na entrada da escola. 7) Combo pronto do dia. 8) Cardápio avisado na sala antes do intervalo.',
  1: 'Centro: receber o lanche dentro do intervalo.\nRamo 1 — ANTES do intervalo: pedido em papel, cardápio na sala, combo do dia.\nRamo 2 — NA FILA: fila separada, senha, sinalização do que já está pronto.\nRamo 3 — PAGAMENTO: pagar adiantado, pagar depois, ficha pré-paga.',
  2: [['Pedido em papel antes do sinal','3','3','3','9'],
      ['Fila separada para quem já decidiu','2','3','3','8'],
      ['Cardápio com os prontos sinalizados','2','2','3','7']],
  3: 'Escolhida: pedido em papel antes do sinal (total 9). É a única que ataca a causa que observamos — todo mundo chegar junto — e dá para testar esta semana só com papel. Proposta: Ajudamos estudantes que compram no intervalo a receber o lanche dentro do tempo, organizando os pedidos antes de o sinal tocar.'
 },
 7: {
  0: [['Encarar a fila normalmente','Não exige nada de novo','Consome de 8 a 10 min do intervalo','P1 e P3 · 14/03'],
      ['Levar lanche de casa','Sem espera e mais barato','Depende de alguém preparar em casa','P2 e P5 · 14/03'],
      ['Comprar no segundo intervalo','Fila bem menor','Fica muitas horas sem comer','P4 · 14/03']],
  1: [['A equipe já sabe registrar e organizar dados','Ninguém conhece a rotina da cantina por dentro','A cantina demonstrou interesse em testar (a confirmar)','Dia de chuva muda o fluxo do pátio e atrapalha o teste'],
      ['Temos acesso diário ao público','Pouca experiência para operar no horário de pico','A escola apoia projetos feitos no pátio','Mudança no horário do intervalo durante o bimestre']],
  2: '1) Autorização da direção para atuar no pátio — verificamos pedindo a resposta por escrito ao coordenador. 2) Disposição da cantina em receber pedidos antes do sinal — verificamos na conversa de dez minutos já agendada.',
  3: 'Ação: manter a primeira versão inteiramente em papel, sem depender de celular nem de internet. Podem ajudar: a coordenação (autorização) e a responsável pela cantina (rotina e horários).'
 },
 8: {
  0: [['Usuário','Estudante que compra no intervalo (evidência: 5 entrevistas)'],
      ['Pagador','Responsável pela cantina (hipótese — ainda não conversamos)'],
      ['Benefício','Receber o lanche dentro do intervalo, sem perder tempo na fila'],
      ['Canal de acesso','Formulário em papel entregue na sala antes do sinal'],
      ['Atividades','Recolher pedidos, organizar por turma e entregar a lista à cantina'],
      ['Recursos e parceiros','Papel, caneta e 10 minutos de dois integrantes por dia'],
      ['Receita','R$ 30 por mês por cantina atendida (hipótese)'],
      ['Gastos','R$ 5 de papel e impressão por cantina + R$ 60 fixos por mês (estimativa)']],
  2: [['Previsto: 4 cantinas','R$ 120,00','R$ 80,00','R$ 40,00'],
      ['Metade: 2 cantinas','R$ 60,00','R$ 70,00','− R$ 10,00']],
  3: 'Preço R$ 30 por cantina; 4 cantinas; gasto variável R$ 5 por cantina; outros gastos R$ 60 por mês. Com 4: 120 − (20 + 60) = R$ 40. Com 2: 60 − (10 + 60) = − R$ 10. O gasto fixo é o que derruba o cenário menor.',
  4: 'Não entrou na conta: as cerca de 10 horas de trabalho da equipe por mês, transporte e material reserva. Para investigar o pagamento, vamos perguntar à cantina quanto ela gasta hoje para dar conta do pico — antes de falar em preço.'
 },
 9: {
  0: 'Tarefa: fazer um pedido antes de o sinal tocar. Resultado esperado: o estudante recebe uma confirmação com o número do pedido e sabe onde retirar.',
  1: 'ENTRADA — cartão 1: cardápio do dia com 6 opções e o campo “sua turma”.\nAÇÃO PRINCIPAL — cartão 2: marcar até 2 itens, escrever o nome e entregar ao colega responsável.\nRESULTADO — cartão 3: confirmação com número do pedido, valor total e ponto de retirada.\n(A pessoa aponta as escolhas e a equipe troca os cartões na mão dela.)',
  2: 'Não calcula troco, não reserva o lanche de verdade, não atende quem chega depois do sinal e não trata pedido cancelado.',
  3: 'Para quem: 10 estudantes de uma turma, em um único dia. Como: dois integrantes recolhem os pedidos em papel 10 minutos antes do sinal e entregam a lista à cantina. Medida: quantos receberam o lanche antes do fim do intervalo. Combinações necessárias: autorização do professor da aula anterior e aviso à cantina no dia anterior.'
 },
 10: {
  0: 'Hipótese: estudantes entendem sozinhos como fazer o pedido usando os cartões. Tarefa: “Faça um pedido de lanche usando este material”. Medida: concluiu sem ajuda e em quanto tempo. Critério: pelo menos 2 de 3 concluem sem ajuda em até 2 minutos.',
  1: [['T1','Sim','1 min 20 s','Não','Procurou onde escrever a turma'],
      ['T2','Não','2 min 40 s','Sim, 1 vez','Não encontrou a confirmação; achou que o pedido não tinha sido registrado'],
      ['T3','Não','2 min 10 s','Sim, 2 vezes','Marcou 3 itens sem perceber o limite de 2']],
  2: 'Critério NÃO atingido: 1 de 3, abaixo dos 2 de 3 definidos antes. Os registros permitem concluir que o passo da confirmação não está claro — dois participantes não souberam dizer se o pedido tinha sido feito.',
  3: 'NÃO permite concluir que a fila diminuiria, nem que a cantina consegue operar os pedidos: testamos compreensão em papel, não a operação real. Mudança: criar um cartão de confirmação com número do pedido e ponto de retirada.'
 },
 11: {
  0: 'A confirmação do pedido. Evidência: T2 e T3 não souberam dizer se o pedido tinha sido registrado, e os dois pediram ajuda exatamente nesse ponto.',
  1: 'ANTES: o terceiro cartão só dizia “pedido recebido”.\nDEPOIS: o cartão passou a trazer o número do pedido, os itens marcados, o valor e a frase “retire no balcão lateral quando chamarem seu número”.',
  2: 'T4 (2º ano, não participou do primeiro teste). Tarefa: a mesma. Resultado: concluiu em 1 min 05 s, sem ajuda, e soube dizer onde retirar. Conclusão limitada: a mudança resolveu a dúvida de uma pessoa — ainda precisamos repetir com mais participantes.',
  3: 'CERTEZA: a espera passa de 8 minutos nos dias de maior movimento (3 medições em 12/03 e 13/03). SUPOSIÇÃO: a cantina consegue separar os pedidos antecipados durante o pico. DÚVIDA: alguém pagaria por esse serviço — e quem seria?',
  4: [['Conversar 10 minutos com a responsável pela cantina','Bruno','22/03','Fazendo'],
      ['Repetir o teste dos cartões com mais 3 estudantes','Carla e Diego','24/03','A fazer'],
      ['Medir o tempo real da fila em 3 dias diferentes','Ana','26/03','A fazer']]
 },
 12: {
  0: [['Problema e público','Estudantes perdem até 10 dos 20 minutos do intervalo na fila da cantina. Ouvimos 5 pessoas, do 1º ao 3º ano. (30 s)'],
      ['Evidências','4 de 5 relataram prejuízo concreto: comer com pressa, desistir ou se atrasar. Importância 4,6 contra satisfação 2,0. (30 s)'],
      ['Solução e demonstração','Pedido em papel antes do sinal. Demonstrar os 3 cartões com alguém da plateia. (60 s)'],
      ['Modelo de negócio','Quem usa é o estudante; quem pagaria seria a cantina, R$ 30 por mês — ainda é hipótese. Saldo simulado: R$ 40 com 4 cantinas. (30 s)'],
      ['Testes e próximo passo','1 de 3 concluiu no primeiro teste; mudamos a confirmação e o novo participante concluiu em 1 min. Próximo passo: medir a fila real e conversar com a cantina. (30 s)']],
  2: 'Fichas 01 a 12 preenchidas ✓ · 5 entrevistas registradas ✓ · protótipo de 3 cartões ✓ · 3 testes iniciais ✓ · 1 novo teste após a melhoria ✓ · apresentação ensaiada em 2 min 50 s ✓',
  3: 'Pergunta recebida: “e se a cantina não quiser participar?”. Melhoria sugerida: testar o mesmo fluxo com o grêmio, que já vende lanche em dias de evento.',
  4: '(Cada aluno escreve no próprio caderno.) Exemplo: “Fiquei responsável pelas entrevistas. Ajudei a decidir mudar o cartão de confirmação, porque vi duas pessoas travarem no mesmo ponto. Mudou meu entendimento: eu achava que a ideia boa vinha primeiro; agora vejo que ela vem do que a gente observa”.'
 }
}

# Exemplo de um entrevistado, na mesma ordem de INTERVIEW.
INTERVIEW_EXAMPLES = {
 2: 'Terça-feira, no primeiro intervalo, na cantina. Entrei na fila assim que o sinal tocou e só recebi o lanche perto do fim. Comi andando até a sala.',
 3: 'Quatro vezes por semana. Para tentar resolver, chego antes do sinal ou peço para um colega guardar lugar na fila.',
 4: 'Uns 8 minutos de espera, quase metade do intervalo. O que mais incomoda é comer com pressa e chegar atrasada na aula seguinte.',
 5: [['Comprar dentro do tempo do intervalo','5','2'],
     ['Ter opções de lanche disponíveis','4','3']],
 6: 'Disse que em dia de chuva é pior, porque todo mundo fica no pátio coberto e a fila cresce.',
 7: 'RELATO: esperou 8 minutos na terça. OBSERVAÇÃO: durante a conversa, apontou a fila e disse “olha ali”. INTERPRETAÇÃO da equipe: a espera reduz o tempo de comer. Contrariou nossa hipótese: ela não reclamou do preparo, e sim do momento de pagar.'
}

GUIDE = [
 ('Como conduzir o percurso', '''Público: estudantes do 2º ano que estão começando. Objetivo: produzir uma proposta de startup apoiada em investigação e testada em pequena escala. A expectativa é um projeto inicial; formalização de empresa, programação e vendas reais não são exigências.
A sequência essencial tem 12 etapas de duas aulas de 50 minutos: 24 aulas, totalizando 1.200 minutos (20 horas de relógio). Para trabalhar as 40 aulas de 50 minutos previstas no escopo, use a ampliação da página seguinte: 2.000 minutos (33 horas e 20 minutos). Esta reorganização não reproduz aula por aula o cronograma original.
Distribua a apostila para consulta e uma ficha por equipe a cada etapa. Na etapa 03, acrescente cinco cópias do modelo de entrevista. Todos fazem a reflexão individual final no próprio caderno. A apostila e as fichas possuem os mesmos números.
Roteiro para a primeira aula de cada etapa: 5 min para retomar a entrega anterior; 10 min de explicação; 10 min para analisar o exemplo; 20 min de produção; 5 min para combinar a continuação. Na segunda: 5 min de retomada; 30 min de pesquisa, construção ou teste; 10 min de devolutiva; 5 min para registrar a entrega. Nas entrevistas e testes, distribua papéis para usar o tempo de forma produtiva.
Organize equipes de 3 a 5 e faça rodízio de funções. Ofereça leitura compartilhada, resposta oral com colega escriba e protótipos táteis ou encenações quando ajudarem. Uma pessoa com dificuldade de apresentação pode demonstrar ou explicar uma parte com apoio.
Para pesquisa sem internet, use conversas e observação no espaço escolar. Se o público não estiver acessível, ajuste o recorte ou reserve tempo para convidá-lo. Simulações entre colegas servem como ensaio e devem ser identificadas; não substituem evidências de usuários reais.
Combine previamente as atividades no espaço escolar. Alunos não precisam sair sozinhos, divulgar dados pessoais, arrecadar dinheiro ou operar a cantina. No exemplo, um fluxo de papel basta para testar compreensão. Uma operação real só cabe quando organizada com os responsáveis pelo espaço.
No site, cada etapa abre com uma frase-chave, três pontos essenciais e os termos da etapa; o texto completo fica em “Aprofundar”. Cada campo das fichas tem um exemplo do caso fictício Fila Menor, que pode ser exibido com um clique. Oriente as equipes a ler o exemplo para entender o nível de detalhe esperado e depois escrever com os próprios registros: copiar o exemplo não gera evidência.'''),
 ('Distribuição para 40 aulas', '''Use as mesmas 12 etapas, ampliando o tempo de investigação e revisão. A soma abaixo é de 40 aulas de 50 minutos.
01 | Aulas 1–3 | 3 aulas: problema, criatividade, empreendedorismo e rede de apoio.
02 | Aulas 4–5 | 2 aulas: necessidade, desejo, demanda e CSD.
03 | Aulas 6–9 | 4 aulas: ensaio, cinco entrevistas e organização dos registros.
04 | Aulas 10–13 | 4 aulas: médias, árvore, observação das causas e revisão do desafio.
05 | Aulas 14–16 | 3 aulas: público, persona e conversa com possível pagador/decisor.
06 | Aulas 17–20 | 4 aulas: brainstorming, mapa mental, seleção e proposta de valor.
07 | Aulas 21–24 | 4 aulas: alternativas, ambiente, FOFA e decisão.
08 | Aulas 25–27 | 3 aulas: modelo de negócio e simulações.
09 | Aulas 28–31 | 4 aulas: protótipo, ensaio e plano de entrega mínima.
10 | Aulas 32–34 | 3 aulas: preparar, testar e analisar.
11 | Aulas 35–37 | 3 aulas: melhorar, testar novamente e planejar.
12 | Aulas 38–40 | 3 aulas: ensaio, apresentações e devolutiva.
Na etapa 01, amplie a rede de apoio: cada equipe mapeia três atores acessíveis — escola, profissional, associação ou instituição de ensino — e explica que ajuda buscaria. Isso aproxima o tema do ecossistema local sem depender de uma lista de programas que pode mudar. Inclua um exemplo de projeto social e discuta quem se beneficia e como a atividade se sustenta. Relacione dificuldades econômicas a restrições de recursos e oportunidades de melhoria, sem tratar crise como garantia de sucesso.
Na etapa 07, amplie o macroambiente com seis perguntas: que decisões públicas interferem? Que condições econômicas? Que hábitos sociais? Que condições tecnológicas? Que impactos ambientais? Que regras precisam ser verificadas? Essa organização é chamada PESTEL. Escolha dois fatores relevantes, registre fonte/data ou marque como dúvida, e transforme a análise em uma ação.
Na etapa 12, reserve aproximadamente cinco minutos por grupo: três de pitch e dois de perguntas. Até oito equipes cabem em 40 minutos. Para turmas maiores, use duas rodadas e distribua a devolutiva nas demais aulas da etapa.'''),
 ('Como avaliar: 10 pontos', '''Avalie a qualidade da investigação e do aprendizado, sem exigir que a ideia comercial dê certo. Devolva uma orientação concreta por etapa: algo que está sustentado e algo que precisa de revisão.
1. Problema e investigação — 0 a 2 pontos. 2: público e dor claros, cinco registros reais e análise das contradições; 1: problema reconhecível, mas registros ou análise incompletos; 0: ausência de investigação documentada.
2. Coerência da proposta — 0 a 2 pontos. 2: persona, alternativas e solução conectadas às evidências; 1: conexão parcial; 0: proposta sem relação demonstrada com o problema.
3. Protótipo, teste e melhoria — 0 a 2 pontos. 2: tarefa executável, critério prévio, três testes, alteração justificada e novo teste; 1: execução parcial ou registros frágeis; 0: ausência de teste documentado.
4. Modelo e comunicação — 0 a 2 pontos. 2: usuário/pagador claros, contas coerentes, hipóteses identificadas e pitch compreensível; 1: explicação ou contas incompletas; 0: não consegue explicar como a proposta funcionaria.
5. Contribuição individual — 0 a 2 pontos. 2: contribuição observada e reflexão que explica uma decisão; 1: participação ou reflexão parcial; 0: não há evidência de contribuição mesmo após oportunidade de participação.
Os quatro primeiros critérios formam até 8 pontos da equipe; o quinto forma até 2 pontos individuais. Use observação, versões do trabalho e uma pergunta curta a cada aluno para atribuir a parte individual.
Não atribua nota zero a um teste que não atingiu o critério. Uma falha bem registrada e uma melhoria coerente podem receber pontuação máxima. Dados fabricados não contam como pesquisa: peça nova coleta e ofereça prazo de recuperação.
Uma ficha que repete o exemplo Fila Menor não é evidência: peça os registros da própria equipe antes de pontuar.
Marcos de acompanhamento: depois da etapa 04, confira se a dor está sustentada; depois da 08, confira a relação entre público, solução e modelo; depois da 11, confira o aprendizado do teste. Se algo faltar, determine uma pequena tarefa de recuperação antes de avançar.
Modelo de devolutiva: “Vocês mostraram [evidência]. Ainda precisam verificar [dúvida]. Na próxima aula, façam [ação observável]”.'''),
 ('Respostas de referência e intervenções', '''01–02: “Estudantes esperam muito no atendimento durante o intervalo” descreve uma dificuldade; “falta um app” antecipa a solução. Necessidade: alimentar-se; desejo: um alimento específico; dor: espera; demanda: investigar aquisição em condições concretas. Intenção declarada não equivale a compra.
03: espere relatos de episódios recentes e registro da solução atual. Troque “você gostou da nossa ideia?” por “como você resolveu na última vez?”. Se a pessoa não vive o problema, registre isso e procure participantes do recorte definido.
04: no exemplo, importância = 23 ÷ 5 = 4,6 e satisfação = 10 ÷ 5 = 2,0. Isso sugere atenção, não aprovação automática de um negócio. Raiz é causa possível; copa é consequência. “Pedido e pagamento juntos” precisa ser observado antes de ser tratado como causa confirmada.
05–06: nome fictício é aceitável na persona; comportamento inventado precisa ser marcado como hipótese. A proposta deve informar público, benefício e mecanismo. Peça que o aluno explique a solução sem usar “inovador”, “melhor” ou “revolucionário” como justificativa.
07: levar lanche de casa é uma alternativa indireta no caso fictício. Saber organizar dados é uma força interna; falta de conectividade é uma condição externa. Peça uma decisão derivada da análise, como manter um caminho em papel.
08: cenário fictício de quatro cantinas: 4 × 30 = 120; gastos = 4 × 5 + 60 = 80; saldo = 40. Com duas: receita = 60; gastos = 10 + 60 = 70; saldo = −10. Pergunte sobre tempo da equipe, suporte e outros gastos omitidos. Valores da atividade são simulações didáticas, não preços de mercado.
09–10: cartões podem testar compreensão do pedido; não permitem afirmar redução real da fila. No exemplo, um de três ficou abaixo do critério de dois de três. A conclusão correta é revisar o fluxo; não “ninguém quer a solução”.
11–12: aceite manter, ajustar ou abandonar uma solução quando houver justificativa. Uma nova tentativa melhor não prova adoção ampla. No pitch, peça que a equipe aponte uma evidência, uma estimativa e uma dúvida.
Perguntas de saída: quem vive esse problema? Que registro sustenta sua escolha? O que vocês mudaram após ouvir alguém? Qual hipótese ainda pode derrubar o projeto? Cada aluno responde uma delas em duas ou três frases.'''),
 ('Relação com o material da pasta', '''Foram inventariados os 18 arquivos da raiz: oito PDFs, nove DOCX e uma planilha XLSX. Foram extraídos seus textos e tabelas, e consultadas imagens de ferramentas presentes nos documentos. As extrações e o inventário de integridade estão em apoio. Páginas sem texto extraível são assinaladas nas extrações; não se presume que imagens tenham sido transcritas integralmente.
Base curricular: “Módulo 1 - Ementa.pdf”, “Módulo 1 - Cronograma.pdf” e “Módulo 1 - Escopo SEDUC.xlsx”. Sustentam os temas e a referência de 40 aulas; a planilha especifica 50 minutos. O cronograma traz o cabeçalho “Gestão de Projetos”, e a aba da planilha tem nome “Lógica de Programação”; o conteúdo interno de ambos trata da sequência de Gestão de Startups.
Base conceitual: “Módulo 1 - Ebook.pptx.pdf”, 77 páginas: criatividade (5–12), necessidades e árvore (13–22), técnicas criativas (23–38), mercado/FOFA (39–51), público/persona (52–74). A página 75 anuncia proposta de valor, modelagem, MVP e apresentações para o módulo seguinte. Esses assuntos foram desenvolvidos aqui como complemento autoral nas etapas 06 e 08–12, para fechar um ciclo prático.
Empreendedorismo: “ATIVIDADE- AULA 07-08.docx” e “GESTÃO DE STARTUPS- atividade.pdf” apresentam perguntas semelhantes. Foram convertidas em investigação e decisões da equipe na etapa 01.
Dores e necessidades: “Dor e Necessidades!.docx”, “Gestão de Startups - Dor e Necessidades!.pdf”, “O que é dor do cliente.docx” e “Identificando a necessidade dos consumidores.docx” sustentam as etapas 02–04. Adotou-se a escala 1–5 do último arquivo, uniformizada nas fichas; o ebook usa 1–10.
Árvore: “Arvore de problemas.docx”, “Arvore de problemas Simplificada.docx” e “Arvore de problemas Simplificada.pdf” fundamentam a etapa 04. A redação foi simplificada para distinguir problema, causa possível e efeito.
Criação e organização: “Mapa Mental.docx”, “Mapa Mental.pdf”, “Técnicas criativas.docx” e “Duplo diamante e Matriz CSD.docx” fundamentam as etapas 02, 06 e 11. Textos repetidos, trechos promocionais e afirmações gerais sobre o cérebro foram dispensados.
Contexto: “Link Eixo_TIC.docx.pdf” situa Gestão de Startups no 2º ano do eixo Informação e Comunicação. Não foi necessário depender dos sites e vídeos citados nos originais para executar as novas atividades.
Escolhas didáticas: antecipar público e entrevistas; usar um único exemplo fictício; separar evidência de suposição; incluir alternativas indiretas; distinguir teste de compreensão de teste de valor; avaliar revisão da ideia. O exemplo Fila Menor foi desenvolvido campo a campo para servir de referência de detalhe, permanecendo integralmente fictício. O material é uma adaptação pedagógica, sem pretensão de substituir a ementa oficial.''')
]
