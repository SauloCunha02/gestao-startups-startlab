INTRO = '''Nestas 12 etapas a sua equipe vai construir uma startup: escolher o mercado, descobrir o que o cliente precisa, desenhar a solução, montar o modelo de negócio, testar uma primeira versão e apresentar o resultado.
As equipes da turma vão criar startups diferentes umas das outras — e todas vão usar a mesma base de trabalho. É essa base que este material ensina: o caminho que vai de uma oportunidade até uma proposta testada.
Em cada etapa você vê como uma startup real e conhecida resolveu aquele mesmo passo. Spotify, Netflix, Airbnb, iFood, Nubank, Duolingo, 99, Mercado Livre, Dropbox e Instagram aparecem aqui não para serem copiados, e sim para mostrar que o método é o mesmo, independentemente do tamanho da ideia.
Trabalhem em equipes de 3 a 5 pessoas. Alternem as funções de organizar, entrevistar, registrar, construir e apresentar. Todos precisam participar e explicar as decisões.
Usem a apostila para aprender e as fichas de mesmo número para construir a startup. Guardem todas as versões: mudar de rumo com base no que descobriram é parte do trabalho, não fracasso.
Materiais: papel, lápis, canetas e folhas reaproveitadas. Celular e computador são opcionais. Não é preciso gastar dinheiro, programar nem abrir empresa.
Percurso: escolher o território → separar fatos de suposições → ouvir o cliente → definir a dor → definir o cliente → desenhar a solução → estudar o mercado → montar o modelo de negócio → construir → testar → melhorar → apresentar.
Ritmo sugerido: cada etapa ocupa duas aulas de 50 minutos. O professor pode ampliar o percurso para 40 aulas, conforme o guia. Uma startup construída em sala é um começo investigado, não um negócio comprovado.'''

LESSONS = [
dict(title='Escolher o território da sua startup', goal='Definir o mercado e o tipo de cliente que a sua startup vai atender.',
key='Toda startup começa em um território: um grupo de pessoas e um incômodo que elas vivem de novo e de novo.',
bullets=['Empreender é organizar recursos para resolver um problema e gerar valor. A startup faz isso testando um modelo que ainda é incerto.',
 'O modelo precisa ser repetível (atender o próximo cliente com o mesmo processo) e escalável (crescer sem aumentar os custos na mesma proporção).',
 'Escolham um território que vocês alcançam: gente com quem dá para conversar nas próximas semanas.'],
terms=[('Território','O recorte de mercado onde a startup vai atuar: quem são as pessoas e em que situação.'),
 ('Repetível','Atender o próximo cliente com um processo parecido.'),
 ('Escalável','Ampliar o atendimento sem aumentar os recursos na mesma proporção.')],
concept='Empreender é organizar ações e recursos para resolver um problema e gerar valor. Uma startup busca um modelo de negócio inovador, repetível e capaz de crescer, enquanto ainda testa muitas incertezas. Repetível significa atender outros clientes com um processo semelhante; escalar significa ampliar o atendimento sem aumentar os recursos na mesma proporção. Ter um aplicativo, por si só, não demonstra isso. Criatividade gera possibilidades; inovação coloca uma melhoria em uso. Uma startup de impacto coloca um problema social ou ambiental no centro e também precisa sustentar suas atividades. O primeiro trabalho da equipe não é ter uma ideia: é escolher um território onde valha a pena procurar.',
example='iFood, 2011. O território escolhido foi bem concreto: gente que pedia comida em casa e restaurantes que aceitavam pedidos por telefone. Naquele arranjo, o cliente ligava sem saber o cardápio completo, não sabia quanto tempo ia esperar e o pedido dependia de alguém anotar certo do outro lado. Repare que o território não é “alimentação”, que é amplo demais: é um momento específico, vivido por pessoas específicas, com frequência alta.',
steps=['Cada integrante descreve um território que conhece de perto: um grupo de pessoas e uma situação que se repete para elas.', 'Listem pelo menos cinco territórios e indiquem quem vive cada situação e com que frequência.', 'Escolham um território frequente e acessível. Escrevam: “[público] enfrenta [dificuldade] quando [situação]”.', 'Distribuam as funções da equipe e registrem por que essa startup vale a pena ser investigada.'],
delivery='Ficha 01: equipe, cinco territórios e o território escolhido.', check='A frase descreve uma situação observável? “Falta um aplicativo” já escolhe a solução e precisa ser reescrito.'),
dict(title='Separar o que vocês sabem do que supõem', goal='Organizar as certezas, suposições e dúvidas antes de investir tempo.',
key='A suposição que ninguém testou é a que derruba a startup mais tarde.',
bullets=['Necessidade é o que a pessoa precisa atender; desejo é uma forma específica de atender; dor é a dificuldade concreta: perder tempo, gastar demais, refazer trabalho.',
 'A matriz CSD separa Certezas, Suposições e Dúvidas — e mostra o que investigar primeiro.',
 'Toda certeza precisa de evidência e de limite: o que vale para dez pessoas não vale automaticamente para o mercado.'],
terms=[('Demanda','Disposição e capacidade de adquirir uma oferta em certas condições.'),
 ('Dor','Dificuldade concreta e observável, não um incômodo genérico.'),
 ('CSD','Certezas, Suposições e Dúvidas: o mapa do que ainda falta descobrir.')],
concept='Necessidade é algo que a pessoa precisa atender; desejo é uma forma específica de atender essa necessidade. Demanda envolve disposição e capacidade de adquirir uma oferta em certas condições. Dor é uma dificuldade concreta: perder tempo, gastar demais, repetir trabalho ou não conseguir ajuda. A matriz CSD organiza Certezas, Suposições e Dúvidas. Toda certeza deve ter uma evidência e um limite: algo observado em um grupo pequeno não vale automaticamente para todo o mercado. Startups quebram por suposições que pareciam óbvias e nunca foram verificadas — por isso vale identificar cedo qual delas derruba o projeto se for falsa.',
example='Netflix, 1997. A empresa dependia de uma suposição perigosa: um disco sobreviveria ao correio comum e chegaria inteiro na casa da pessoa. Em vez de discutir, os fundadores enviaram um disco para eles mesmos pelo correio e esperaram a entrega. O teste custou quase nada e verificou justamente o item que, se fosse falso, encerraria o negócio antes de ele existir. Pergunte-se qual é o seu “disco no envelope”.',
steps=['Identifiquem uma necessidade, um desejo e uma dor do cliente do seu território.', 'Preencham a CSD. Se não houver evidência, o item fica como suposição — sem exceção.', 'Selecionem a suposição que mais colocaria a startup em risco se fosse falsa.', 'Transformem essa suposição em uma pergunta sobre a experiência real das pessoas.'],
delivery='Ficha 02: conceitos aplicados, CSD e a suposição mais arriscada.', check='Cada certeza apresenta uma observação ou relato com data e contexto?'),
dict(title='Ouvir o cliente antes de construir', goal='Realizar cinco entrevistas curtas sem induzir respostas.',
key='Pergunte sobre o que já aconteceu, não sobre o que a pessoa acha da sua ideia.',
bullets=['Episódios reais revelam contexto, frequência e a solução atual. “Você usaria?” só gera resposta educada.',
 'Separe relato (o que a pessoa contou), observação (o que você presenciou) e interpretação (o que a equipe concluiu).',
 'Cinco entrevistas são um começo de investigação — não uma amostra que representa o mercado.'],
terms=[('Relato','O que a pessoa conta que aconteceu com ela.'),
 ('Observação','O que você presenciou, com seus próprios olhos.'),
 ('Interpretação','A conclusão da equipe — a parte que mais erra.')],
concept='Entrevistar é entender a experiência de outra pessoa. Perguntas sobre episódios reais ajudam mais do que “você compraria minha ideia?”. Escute antes de explicar uma solução. Relato é o que a pessoa conta; observação é o que você presencia; interpretação é a conclusão da equipe. Registre essas diferenças. Cinco entrevistas são um começo de investigação, não uma amostra que representa todo o mercado. Ouvir cedo é mais barato do que construir e descobrir depois que ninguém queria aquilo.',
example='Airbnb, 2009. Em vez de tentar entender os anfitriões por planilhas, dois fundadores foram a Nova York, onde estava a maior parte deles, e passaram dias conversando pessoalmente e vendo os anúncios de perto. Descobriram algo que nenhum relatório mostrava: as fotos dos anúncios eram ruins, e isso afastava hóspedes. Sair do escritório e ir até o cliente revelou um problema concreto que eles ainda não tinham enxergado.',
steps=['Peçam: “Podemos conversar por cinco minutos para um trabalho escolar? Vamos anotar sem identificar você”. Respeitem quem não quiser.', 'Conversem com cinco pessoas do território escolhido, fora da equipe. Usem a ficha de entrevista uma vez por pessoa.', 'Perguntem: quando aconteceu pela última vez? Como resolveu? Com que frequência acontece? Que tempo, esforço ou dinheiro isso exige? O que mais incomoda?', 'Para duas necessidades, peçam notas de importância e satisfação atual de 1 a 5. Registrem também o que contradiz a ideia da equipe.'],
delivery='Ficha 03: resumo de cinco entrevistas + cinco registros individuais do modelo extra.', check='Há episódios concretos e alternativas atuais? Não inventem respostas para completar a quantidade.'),
dict(title='Escolher a dor que a startup vai resolver', goal='Usar evidências para definir o problema central e suas causas.',
key='Prioridade é onde a importância é alta e a satisfação atual é baixa.',
bullets=['Use a escala de 1 a 5 nas duas perguntas: o quanto isso importa e o quanto a solução de hoje resolve.',
 'Na árvore de problemas: raízes são causas possíveis, o tronco é o problema central e a copa são as consequências.',
 'Uma causa imaginada continua sendo suposição até alguém observar.'],
terms=[('Média','Soma das notas válidas ÷ número de respostas. Nunca preencha ausência com zero.'),
 ('Causa','Por que o problema acontece.'),
 ('Consequência','O que o problema provoca depois.')],
concept='Na matriz de necessidades, compare a importância de uma necessidade com a satisfação atual ao atendê-la. Use a escala de 1 a 5: importância de pouco a muito importante; satisfação de muito insatisfeito a muito satisfeito. Importância alta e satisfação baixa sugerem algo a investigar. Na árvore de problemas, o tronco é a dificuldade central, as raízes são possíveis causas e a copa reúne consequências. Uma causa imaginada continua sendo suposição. Escolher a dor errada custa caro: a startup passa meses resolvendo algo que ninguém sentia falta de resolver.',
example='Spotify, 2006. Na época, a indústria dizia que a dor era o preço da música e que o problema se resolvia combatendo a pirataria. Olhando para o comportamento real, a dor prioritária era outra: conveniência. Baixar música ilegalmente era mais rápido e mais fácil do que comprar de forma legal. A causa não estava no valor, e sim no atrito — e a solução precisou atacar essa causa: ouvir qualquer música, na hora, sem baixar nada.',
steps=['Calculem as médias das duas necessidades: somem as notas válidas e dividam pela quantidade de respostas. Não preencham ausências com zero.', 'Comparem as médias com os relatos e escolham uma necessidade prioritária.', 'Desenhem a árvore com um problema, duas possíveis causas e duas consequências. Marquem o que falta verificar.', 'Escrevam: “Como podemos ajudar [cliente] a [resultado desejado] em [contexto]?”.'],
delivery='Ficha 04: matriz, árvore e desafio definido.', check='A dor escolhida aparece nos registros? As causas foram distinguidas das consequências?'),
dict(title='Definir o cliente da sua startup', goal='Descrever o cliente inicial e uma persona apoiada nas entrevistas.',
key='Se o cliente é “todo mundo”, não sobra ninguém concreto para atender primeiro.',
bullets=['Público-alvo é o grupo. Persona é o resumo dos padrões que vocês encontraram nesse grupo.',
 'O nome da persona pode ser fictício; o comportamento precisa vir da pesquisa.',
 'Usuário usa, pagador financia, decisor autoriza. Podem ser três pessoas diferentes.'],
terms=[('Persona','Resumo de padrões reais reunidos em uma pessoa fictícia.'),
 ('Usuário','Quem utiliza a solução no dia a dia.'),
 ('Pagador','Quem coloca o dinheiro.'),
 ('Decisor','Quem autoriza a escolha.')],
concept='Público-alvo é o grupo com características relevantes para a solução. Persona é uma representação resumida de padrões encontrados nesse grupo. Seu nome pode ser fictício; necessidades e comportamentos precisam vir da pesquisa. Usuário é quem utiliza; pagador é quem financia; decisor é quem autoriza a escolha. Eles podem ser pessoas diferentes. Evite definir seu cliente como “todo mundo”: startups começam estreitas de propósito, porque é assim que conseguem atender bem e aprender rápido.',
example='Nubank, 2013. O cliente inicial não foi “quem usa banco”, que seria o país inteiro. Foi um recorte estreito: gente que já resolvia a vida pelo celular e não aceitava mais agência, fila, papelada e anuidade. Esse recorte definiu tudo — o produto sem agência, o atendimento pelo aplicativo e até o lançamento por convite, que fazia a empresa crescer só no ritmo em que conseguia atender bem.',
steps=['Agrupem os padrões das entrevistas: contexto, comportamento, dificuldade e objetivo.', 'Criem uma persona curta e indiquem quais registros sustentam cada característica.', 'Identifiquem usuário, possível pagador e decisor. Marquem os papéis ainda desconhecidos.', 'Escolham um cliente inicial que a equipe consegue alcançar para testar.'],
delivery='Ficha 05: cliente inicial, persona e papéis na decisão.', check='A persona resume evidências ou só imaginação? Se o pagador for diferente, planejem ouvi-lo.'),
dict(title='Desenhar a solução e a proposta de valor', goal='Gerar alternativas, escolher uma solução e escrever a proposta de valor.',
key='Primeiro gere muitas opções sem julgar. Só depois escolha — e justifique a escolha.',
bullets=['Brainstorming: registrar primeiro, avaliar depois. Julgar cedo mata as ideias ainda no começo.',
 'Duplo Diamante: descobrir → definir → desenvolver → entregar. É permitido voltar uma fase.',
 'A proposta de valor diz para quem é a startup, qual benefício ela oferece e como pretende ajudar.'],
terms=[('Mapa mental','Tema no centro, ramificações com palavras curtas.'),
 ('Proposta de valor','A [startup] ajuda [cliente] a [benefício] por meio de [solução].'),
 ('Duplo Diamante','Abrir e fechar duas vezes: no problema e na solução.')],
concept='Brainstorming é uma rodada de geração de ideias: primeiro registre possibilidades, depois avalie. Mapa mental organiza um tema central e ramificações com palavras curtas. O Duplo Diamante organiza quatro movimentos: descobrir situações, definir o problema, desenvolver alternativas e entregar uma solução para testar. Podemos voltar às fases anteriores. Proposta de valor explica para quem é a solução, qual benefício oferece e como pretende ajudar. Ela é a frase que a startup inteira precisa conseguir sustentar.',
example='Duolingo, 2011. A dor era o custo e a barreira dos cursos de idioma. Entre as saídas possíveis, a escolhida foi a mais difícil de copiar e a mais fácil de experimentar: lições curtas, gratuitas e com cara de jogo, feitas para caber em poucos minutos por dia. A proposta ficou direta — ajudar quem quer aprender um idioma a estudar todo dia sem pagar por isso, por meio de lições curtas e gratuitas. Nenhuma palavra sobre “revolucionar a educação”.',
steps=['Façam cinco minutos de ideias individuais e compartilhem até reunir pelo menos oito opções.', 'Organizem um mapa mental com o desafio no centro e três ramos de possibilidades.', 'Escolham três opções e atribuam notas de 1 a 3 para benefício esperado, facilidade de testar e acesso a recursos. Somem e justifiquem a escolha; as notas são estimativas.', 'Completem: “A [startup] ajuda [cliente] a [benefício] por meio de [solução]”.'],
delivery='Ficha 06: ideias, comparação e proposta de valor.', check='O benefício responde à dor escolhida? Dá para experimentar a solução com os recursos da turma?'),
dict(title='Estudar o mercado e as alternativas', goal='Comparar as soluções que já existem e transformar a análise em decisão.',
key='O seu concorrente é o jeito que a pessoa resolve isso hoje — inclusive não fazer nada.',
bullets=['Concorrente direto oferece algo semelhante ao mesmo cliente. Alternativa indireta atende a mesma necessidade de outro jeito.',
 'Microambiente: clientes, fornecedores e parceiros próximos. Macroambiente: hábitos, tecnologia, economia e regras.',
 'A FOFA separa o que é interno (força e fraqueza) do que é externo (oportunidade e ameaça).'],
terms=[('FOFA / SWOT','Forças e Fraquezas são internas; Oportunidades e Ameaças são externas.'),
 ('Alternativa indireta','Resolve a mesma necessidade por outro caminho.'),
 ('Macroambiente','Condições amplas que a startup não controla.')],
concept='Concorrente direto oferece algo semelhante para o mesmo cliente. Uma alternativa indireta resolve a necessidade de outra forma; até deixar de consumir pode ser uma alternativa. O microambiente inclui clientes, fornecedores e parceiros próximos. O macroambiente reúne condições amplas, como hábitos, acesso à tecnologia, situação econômica e regras. A análise FOFA (ou SWOT) separa forças e fraquezas internas de oportunidades e ameaças externas. Mapear alternativas evita a armadilha de achar que a startup não tem concorrente: se o cliente já resolve aquilo de algum jeito, concorrente existe.',
example='99, 2012. A startup nasceu para chamar táxi pelo celular, mas o concorrente não era só a cooperativa de táxi. As alternativas reais do cliente eram levantar a mão na rua, pegar ônibus, dirigir o próprio carro, pedir carona ou simplesmente não sair. Cada alternativa tinha uma vantagem — a rua é imediata, o ônibus é barato, ficar em casa é grátis. A proposta só fazia sentido se fosse melhor do que isso em algum ponto que importasse ao cliente.',
steps=['Comparem três alternativas que o cliente usa hoje: como funcionam, vantagem e limitação. Registrem a fonte e a data.', 'Anotem uma força, uma fraqueza, uma oportunidade e uma ameaça da sua startup.', 'Identifiquem duas condições externas que interferem no projeto. Se forem desconhecidas, escrevam como verificar.', 'Definam uma ação concreta a partir da análise e identifiquem alguém que possa ajudar.'],
delivery='Ficha 07: alternativas, FOFA, condições externas e ação.', check='A diferença proposta importa para o cliente? A análise mudou alguma decisão?'),
dict(title='Montar o modelo de negócio', goal='Relacionar entrega de valor, pagamento, recursos e custos.',
key='Modelo de negócio responde: quem paga, por qual benefício e o que sobra no fim do mês.',
bullets=['Registre quem usa, quem paga, o que recebe, como chega até a solução, o que é preciso fazer e o que é preciso ter.',
 'Compare entradas e saídas sempre no mesmo período.',
 'Saldo não é lucro: faltam o tempo de trabalho da equipe e os gastos que ninguém lembrou.'],
terms=[('Receita','Valor das vendas no período.'),
 ('Gasto variável','Cresce junto com a quantidade de clientes.'),
 ('Gasto fixo','Acontece mesmo com poucos clientes.')],
concept='Modelo de negócio explica como uma organização cria valor, entrega esse valor e obtém recursos para continuar. Registre quem usa, quem paga, o que recebe, como chega até a solução, o que é necessário fazer e quais recursos são usados. Receita é o valor das vendas. Custos e despesas são os gastos envolvidos. Para comparar entradas e saídas, use o mesmo período. Uma conta positiva depende de hipóteses reais sobre clientes e gastos. Nem sempre quem usa é quem paga — e startups que não percebem isso não conseguem explicar de onde vem o dinheiro.',
example='Mercado Livre, 1999. O usuário que compra não paga para usar o site. O dinheiro entra por mais de um caminho: comissão sobre o que o vendedor vende, anúncios para quem quer aparecer melhor na busca e serviços de pagamento e entrega. Repare que quem sustenta o negócio é o outro lado do balcão. Antes de definir preço, a pergunta certa é: quem tem mais a ganhar com isso funcionando?',
steps=['Preencham os oito campos da ficha: usuário, pagador, benefício, canal, atividades, recursos/parceiros, receita e gastos.', 'Montem uma simulação de um mês. Identifiquem de onde vieram os valores ou escrevam “estimativa”.', 'Refaçam a conta com metade dos clientes previstos. Registrem o que muda.', 'Definam como investigar quem pagaria e por qual benefício. Nesta atividade, não é necessário cobrar nem comprar nada.'],
delivery='Ficha 08: modelo simples, duas contas e hipótese sobre pagamento.', check='A conta usa o mesmo período? Receita foi separada do saldo? Quem pagaria foi identificado?'),
dict(title='Construir a primeira versão', goal='Criar um protótipo e planejar uma primeira entrega de valor.',
key='A primeira versão não precisa funcionar por completo. Precisa poder ser experimentada.',
bullets=['Papel, encenação, vídeo ou modelo físico já testam se a pessoa entende e quer aquilo.',
 'MVP é a versão mínima que entrega valor de verdade e testa uma hipótese importante.',
 'Comecem por uma única tarefa principal e escrevam o que fica de fora desta versão.'],
terms=[('Protótipo','Representação que permite experimentar como a solução funcionaria.'),
 ('MVP','Versão mínima usada para entregar valor e aprender com usuários.')],
concept='Protótipo é uma representação que permite experimentar como uma solução funcionaria: telas de papel, encenação, vídeo ou modelo físico. MVP é uma versão mínima usada para testar uma hipótese importante com usuários e aprender com uma entrega de valor. Um desenho pode testar compreensão; um serviço feito à mão pode testar a entrega. Registre exatamente o que o seu teste consegue mostrar. Comece com uma única tarefa principal: construir demais antes de testar é o erro mais caro de uma startup iniciante.',
example='Dropbox, 2008. Construir o produto inteiro para descobrir se alguém queria levaria muito tempo. A equipe gravou um vídeo curto demonstrando como o programa funcionaria e publicou para o público certo. O vídeo não era o produto — era a primeira versão testável da ideia, e serviu para medir interesse real pelo número de pessoas que entraram na lista de espera. Pergunte-se qual é a versão mais barata que ainda deixa alguém experimentar a sua proposta.',
steps=['Escolham uma tarefa que o usuário precisa concluir e o resultado esperado.', 'Desenhem ou montem três momentos: entrada, ação principal e resultado. Escrevam o que ficará fora desta versão.', 'Ensaiem entre os integrantes e corrijam obstáculos óbvios.', 'Planejem uma entrega mínima: quem receberia, como funcionaria e o que seria medido.'],
delivery='Ficha 09 + protótipo em papel ou outro formato acessível.', check='Outra pessoa consegue tentar a tarefa? Está claro se o teste avalia compreensão ou entrega real de valor?'),
dict(title='Testar com usuários reais', goal='Observar três usuários e comparar os resultados com um critério definido antes.',
key='Defina o critério antes do teste. Depois é tarde: a meta vira desculpa.',
bullets=['Um teste precisa de hipótese, tarefa, medida e critério — nessa ordem e antes de começar.',
 'Observe tentativas, erros e pedidos de ajuda. Elogio ajuda a conversar, mas não é resultado.',
 'Três testes revelam dificuldades iniciais; não provam que o mercado vai adotar a solução.'],
terms=[('Hipótese','Afirmação que pode ser investigada e pode dar errado.'),
 ('Critério','Quantos, fazendo o quê, em quanto tempo.'),
 ('Medida','O que exatamente será anotado durante o teste.')],
concept='Hipótese é uma afirmação que pode ser investigada. Um teste precisa de tarefa, pessoas adequadas, medida e critério definidos antes de começar. Observe tentativas, erros e pedidos de ajuda. Elogios ajudam a conversar, mas não mostram que a tarefa funciona. Três testes revelam dificuldades iniciais; não comprovam que o mercado adotará a solução. Testar é a forma mais barata de descobrir que você estava errado enquanto ainda dá para mudar.',
example='Airbnb, 2009. A hipótese era que as fotos ruins dos anúncios reduziam as reservas. Em vez de discutir, os fundadores alugaram uma câmera e foram fotografar pessoalmente os imóveis de Nova York. Depois compararam o que acontecia com esses anúncios. O teste era manual e não daria para repetir no mundo inteiro — mas respondia a pergunta com clareza, que é exatamente o que um teste precisa fazer.',
steps=['Preencham hipótese, tarefa, medida e critério antes de chamar participantes.', 'Testem com três pessoas do público, fora da equipe. Expliquem que estão testando o material e que a pessoa pode parar.', 'Entreguem a mesma tarefa e evitem orientar cada passo. Registrem tempo, conclusão, ajuda e dificuldades.', 'Perguntem o que foi confuso e como a pessoa resolveria a situação hoje. Comparem os registros com o critério inicial.'],
delivery='Ficha 10: plano preenchido antes do teste e três resultados registrados.', check='O critério foi mantido? A conclusão corresponde ao que foi realmente testado?'),
dict(title='Melhorar e decidir o próximo ciclo', goal='Fazer uma mudança justificada e organizar o próximo ciclo da startup.',
key='Manter, ajustar ou trocar de rumo: as três são respostas válidas, se houver evidência.',
bullets=['Escolham a dificuldade mais importante do teste e mudem uma coisa por vez.',
 'Organizem as tarefas em “a fazer”, “fazendo” e “feito”, com responsável e prazo.',
 'Atualizem a CSD: suposição só vira certeza com evidência, dentro do contexto testado.'],
terms=[('Pivô','Mudar o problema, o cliente ou a solução, com base no que se descobriu.'),
 ('Iteração','Uma volta do ciclo: mudar, testar de novo, aprender.')],
concept='Após o teste, a equipe pode manter a proposta, ajustar a solução ou mudar o problema, o cliente ou o caminho escolhido — isso se chama pivô. A decisão precisa de evidências. Organize o trabalho em “a fazer”, “fazendo” e “feito”, com uma pessoa responsável e prazo por tarefa. Atualize a CSD: uma suposição só muda de categoria quando há evidência suficiente, dentro do contexto testado. Uma startup que nunca mudou depois de ouvir usuários provavelmente não ouviu de verdade.',
example='Instagram, 2010. O aplicativo começou com outro nome e muitas funções ao mesmo tempo: localização, planos com amigos, pontos, fotos. Olhando o uso real, a equipe viu que as pessoas praticamente só usavam uma dessas funções — compartilhar fotos. A decisão foi cortar quase tudo e refazer o aplicativo em volta do que já estava funcionando. Pivotar não foi desistir: foi seguir a evidência.',
steps=['Selecionem a dificuldade mais importante observada e expliquem por que ela merece atenção.', 'Façam uma alteração e registrem o antes e o depois. Realizem ao menos um novo teste, preferencialmente com outra pessoa.', 'Atualizem uma certeza, uma suposição e uma dúvida, indicando as evidências disponíveis.', 'Definam três próximas tarefas, responsáveis e prazos; incluam uma hipótese de negócio ainda não investigada.'],
delivery='Ficha 11: melhoria, novo registro de teste e plano de ação.', check='A mudança enfrenta algo observado? Um novo teste isolado não deve virar conclusão sobre todos os usuários.'),
dict(title='Apresentar a sua startup', goal='Demonstrar a solução e explicar as decisões em três minutos.',
key='Um bom pitch separa o que foi observado, o que foi estimado e o que ainda é dúvida.',
bullets=['Mostrem: o problema, o cliente, a solução, como o negócio funcionaria e o que os testes revelaram.',
 'Três minutos: 30s problema · 30s evidências · 60s solução · 30s negócio · 30s aprendizado.',
 'Uma startup que mudou depois de ouvir usuários mostra mais aprendizado do que uma que nunca mudou.'],
terms=[('Pitch','Apresentação curta que permite entender as decisões da equipe.'),
 ('Portfólio','O conjunto de registros que sustenta o que vocês afirmam.')],
concept='Pitch é uma apresentação curta e clara. Mostre o problema, o cliente, a solução, como o negócio poderia funcionar e o que os testes revelaram. Separe evidência, estimativa e dúvida. Uma boa apresentação permite entender por que a equipe tomou suas decisões e qual será a próxima investigação. Quem esconde a dúvida perde credibilidade: a plateia sempre pergunta justamente o que não foi dito.',
example='Airbnb, 2008. A apresentação usada pelos fundadores para explicar a empresa é curta e direta: diz o problema, o tamanho do mercado, a solução, como o dinheiro entra, quem são as alternativas e o que já tinha acontecido até ali. Não gasta tempo com adjetivos nem com promessas grandiosas. Cada tela responde uma pergunta que a plateia faria de qualquer jeito — e é por isso que ela é estudada até hoje.',
steps=['Preparem até cinco cartazes ou slides: problema/cliente; evidências; solução/demonstração; modelo de negócio; teste e próximo passo.', 'Ensaiem: 30 segundos para problema e cliente; 30 para evidências; 60 para solução; 30 para negócio; 30 para aprendizado e próximo passo.', 'Entreguem as fichas, o protótipo e os registros. Cada integrante deve conseguir explicar uma decisão.', 'Após apresentar, registrem uma pergunta recebida e uma melhoria. Cada aluno escreve sua contribuição e o que aprendeu.'],
delivery='Ficha 12 + apresentação de três minutos + portfólio da equipe.', check='A plateia entende a dor, consegue experimentar a solução e distingue o que já foi observado do que ainda é hipótese?')
]

# Each item creates a writing area or a table in the editable workbook.
WORKSHEETS = [
 [('Equipe, integrantes e funções',2), ('Cinco territórios observados', ['Território: público + situação','Quem vive isso?','Com que frequência?'],5), ('Território escolhido: público + dificuldade + situação',2), ('Por que esta startup vale a investigação? Quem podemos ouvir?',2)],
 [('Necessidade / desejo / dor do cliente',3), ('Nossa matriz CSD', ['Certeza + evidência e data','Suposição','Dúvida'],3), ('Suposição mais arriscada e pergunta para investigar',3)],
 [('Use o modelo extra uma vez por entrevistado. Resuma aqui cinco pessoas do território, sem nomes.',0), ('Resumo das entrevistas', ['Código / contexto','Episódio e frequência','Solução atual / dificuldade'],5), ('Dois padrões encontrados e quais registros os sustentam',3), ('O que contrariou nossa ideia? O que ainda falta ouvir?',3)],
 [('Médias: soma das notas válidas ÷ número de respostas. Use apenas notas de 1 a 5.',0), ('Matriz de necessidades', ['Necessidade','Nº respostas I / S','Média I','Média S'],2), ('Copa: duas consequências | Tronco: problema | Raízes: duas causas possíveis. Marque evidência ou suposição.',6), ('Dor priorizada e justificativa com base nos relatos',2), ('Como podemos ajudar...?',2)],
 [('Cliente inicial: quem, em que situação e onde encontrar',2), ('Persona: nome fictício, comportamento, dificuldade e objetivo',4), ('Quais entrevistas sustentam as características? O que ainda é suposição?',2), ('Papéis', ['Usuário','Possível pagador','Decisor'],2), ('Como vamos ouvir o pagador, se for outra pessoa?',2)],
 [('Oito ideias, antes de julgar',4), ('Mapa mental: desafio no centro e três ramos (use o verso se necessário)',4), ('Notas de 1 a 3; 3 = mais favorável. As notas são estimativas.', ['Opção','Benefício','Facilidade','Recursos','Total'],3), ('Solução escolhida, motivo e frase da proposta de valor',3)],
 [('Alternativas que o cliente usa hoje', ['Alternativa','Vantagem','Limitação','Fonte / data'],3), ('FOFA', ['Força interna','Fraqueza interna','Oportunidade externa','Ameaça externa'],2), ('Duas condições externas e como verificar seu efeito',2), ('Ação que a análise sugere; pessoa ou instituição que pode ajudar',2)],
 [('Modelo de negócio simples', ['Campo','Resposta / evidência ou hipótese'],8), ('Campos: usuário; pagador; benefício; canal de acesso; atividades; recursos/parceiros; receita; gastos.',0), ('Simulação mensal: receita, gastos e saldo', ['Cenário','Receita','Gastos','Saldo'],2), ('Indique preço, quantidade, gastos variáveis e outros gastos. Compare o previsto com metade dos clientes (arredonde para baixo se necessário).',2), ('O que não entrou na conta? Como investigar se alguém pagaria?',2)],
 [('Tarefa principal e resultado que queremos permitir',2), ('Desenhe: entrada → ação principal → resultado',7), ('O que esta versão não faz?',2), ('Plano de entrega mínima: para quem, como, medida e combinações necessárias',3)],
 [('ANTES: hipótese, tarefa, medida e critério (quantos, fazendo o quê e em quanto tempo)',3), ('DEPOIS: resultados', ['Código','Concluiu?','Tempo','Ajuda?','Dificuldade observada'],3), ('Critério atingido? O que os registros permitem concluir?',3), ('O que este teste NÃO permite concluir? Qual será a mudança?',2)],
 [('Dificuldade prioritária e evidência do teste',2), ('Antes → depois: mudança realizada',3), ('Novo teste: código, tarefa, resultado, ajuda e conclusão limitada',3), ('CSD atualizada: uma certeza com evidência, uma suposição e uma dúvida',3), ('Próximas ações', ['Tarefa','Responsável','Prazo','Situação'],3)],
 [('Roteiro do pitch', ['Parte','O que mostrar / dizer'],5), ('Use: problema/cliente; evidências; solução; modelo; testes/próximo passo.',0), ('Conferência do portfólio: fichas 01–12; 5 entrevistas; protótipo; 3 testes iniciais; 1 novo teste; apresentação.',2), ('Pergunta recebida e melhoria sugerida',2), ('Reflexão individual (cada aluno no caderno): minha contribuição; decisão que ajudei a tomar; o que mudou no meu entendimento; próxima aprendizagem.',2)]
]

INTERVIEW = [
 ('Código (P1, P2...): __________  Data: __________  Contexto/território: __________________',0),
 ('Explique o trabalho, peça concordância e registre sem identificar a pessoa. Não precisa de telefone, documento, foto ou gravação.',0),
 ('1. Conte a última vez em que essa dificuldade aconteceu. Quando e onde foi?',3),
 ('2. Com que frequência acontece? Como você resolve hoje?',3),
 ('3. Que tempo, esforço ou dinheiro isso exige? O que mais incomoda?',3),
 ('4. Notas de 1 a 5: importância da necessidade e satisfação com a forma atual de atendê-la.', ['Necessidade (mesma para todos)','Importância','Satisfação'],2),
 ('5. Alguma coisa importante que não perguntamos?',2),
 ('Anotação da equipe: o que é relato, observação e interpretação? O que contrariou nossa hipótese?',2)
]

# Reconstrução didática do Airbnb, campo a campo, na mesma ordem de WORKSHEETS.
# A história da empresa é pública. Onde a ficha pede pesquisa própria da equipe
# (entrevistas, notas, tempos de teste), os dados são ILUSTRATIVOS: mostram o
# formato esperado, não registros reais da empresa.
EXAMPLES = {
 1: {
  0: 'Equipe Airbnb (2007) — Brian (organiza e fala com hóspedes), Joe (desenha o site e o anúncio), Nathan (entra depois para cuidar da parte técnica). Nesta etapa as funções ainda giravam: quem estava livre atendia.',
  1: [['Viajantes sem hotel em datas de evento','Quem vai a congressos e feiras','Toda vez que um evento grande lota a cidade'],
      ['Gente com quarto ou sofá sobrando','Moradores com espaço ocioso e contas a pagar','O ano inteiro, sem render nada'],
      ['Hospedagem cara para estadias longas','Quem passa semanas fora a trabalho','Em toda viagem longa'],
      ['Viajante que quer se sentir em um bairro, não num hotel','Turista que volta ao mesmo destino','A cada viagem de lazer'],
      ['Anfitrião sem saber quanto cobrar','Quem aluga pela primeira vez','Em todo anúncio novo']],
  2: 'Participantes de um congresso de design em São Francisco enfrentam falta de hospedagem quando o evento lota todos os hotéis da cidade e os preços disparam.',
  3: 'Acontece sempre que a cidade recebe um evento grande, então se repete e dá para prever. Podemos ouvir os próprios inscritos do congresso e vizinhos que têm espaço sobrando.'
 },
 2: {
  0: 'Necessidade: ter onde dormir na cidade do evento. Desejo: um hotel perto do centro de convenções. Dor: não encontrar vaga nenhuma e considerar desistir da viagem.',
  1: [['Os hotéis da cidade estão lotados nas datas do congresso (verificamos por telefone em 3 hotéis, outubro de 2007)','Estranhos aceitariam dormir na casa de desconhecidos','O que pesa mais na decisão: o preço ou a falta de vaga?'],
      ['Temos espaço livre e três colchões infláveis (é a nossa própria sala)','Moradores comuns topariam receber hóspedes em casa','Quem aceitaria primeiro: o hóspede ou o anfitrião?'],
      ['O congresso tem data marcada e público definido (programação pública do evento)','A confiança entre desconhecidos pode ser construída com fotos e mensagens','Isso funcionaria fora de uma semana de evento?']],
  2: 'Mais arriscada: “pessoas aceitariam dormir na casa de um desconhecido”. Se for falsa, não existe negócio — nem com o melhor site do mundo. Pergunta para investigar: o que faria você aceitar, ou recusar, ficar na casa de alguém que não conhece?'
 },
 3: {
  1: [['P1 · inscrito no congresso, vem de outro estado','Procurou hotel na semana passada e não achou vaga; acontece em todo evento grande','Cogitou dormir na casa de um colega de trabalho'],
      ['P2 · inscrita, viaja algumas vezes por ano','Pagou caro em uma diária de última hora no mês passado','Reserva com meses de antecedência para não correr risco'],
      ['P3 · mora na cidade, tem quarto vago','Nunca alugou; ficou com receio de quem entraria em casa','Deixa o quarto fechado mesmo precisando de dinheiro'],
      ['P4 · moradora, já recebeu amigos de amigos','Recebeu duas pessoas no ano passado e deu certo','Aceita quando alguém conhecido indica'],
      ['P5 · inscrito, orçamento apertado','Desistiu de um evento no ano passado por causa do custo da hospedagem','Só vai a eventos na própria cidade']],
  2: 'Padrão 1 — a falta de vaga, e não só o preço, é o que trava a viagem (P1, P2, P5). Padrão 2 — do lado de quem hospeda, a barreira é confiança, não dinheiro: P3 tem o quarto e a necessidade, mas não sabe quem vai entrar em casa; P4 só aceita com indicação.',
  3: 'Contrariou nossa ideia: achávamos que o problema era preço, mas P1 e P2 pagariam mais se houvesse vaga. E descobrimos um segundo cliente que não estava no plano: o anfitrião, que tem suas próprias condições. Falta ouvir quem já recusou hospedar.'
 },
 4: {
  1: [['Ter onde dormir na data do evento','5 / 5','4,8','1,6'],
      ['Sentir segurança em quem recebe ou é recebido','5 / 5','4,6','2,2']],
  2: 'COPA (consequências): 1) a pessoa desiste da viagem ou do evento; 2) quem vai paga caro e chega estressado.\nTRONCO (problema central): não há vaga suficiente na cidade quando um evento grande acontece.\nRAÍZES (causas possíveis): 1) a oferta de hospedagem é fixa e não cresce nos picos [EVIDÊNCIA — hotéis lotados verificados por telefone]; 2) existe espaço ocioso em casas, mas ninguém o oferece por falta de confiança e de um lugar para anunciar [SUPOSIÇÃO — precisa ser testada].',
  3: 'Priorizada: ter onde dormir na data do evento. É a maior distância entre importância (4,8) e satisfação (1,6). Três dos cinco entrevistados descreveram prejuízo concreto: desistir do evento, pagar muito acima do normal ou depender de favor.',
  4: 'Como podemos ajudar pessoas que vão a um evento a encontrar onde dormir, quando a cidade está lotada, usando espaços que já existem e estão vazios?'
 },
 5: {
  0: 'Cliente inicial: inscritos no congresso de design de São Francisco que ainda não têm hospedagem, nas datas do evento. Encontramos na lista pública de participantes e nos fóruns do próprio congresso.',
  1: 'Marcos, 28 anos, designer, vem de outra cidade para o congresso. Procurou hotel tarde e não achou vaga. Aceita algo simples, desde que fique perto do centro de convenções e caiba no orçamento da viagem. Objetivo: assistir ao congresso inteiro sem gastar o que não tem.',
  2: 'Sustentam: P1 (não achou vaga), P2 (pagou caro de última hora) e P5 (desistiu por custo). Ainda é suposição que ele aceite dormir na sala de um desconhecido — nenhum entrevistado tinha feito isso antes.',
  3: [['Hóspede: o participante do evento que precisa de vaga','O próprio hóspede paga pela estadia','O anfitrião decide se aceita ou não aquele hóspede'],
      ['Usa o site para achar e reservar um espaço','Paga o valor da diária combinada','Autoriza a entrada na própria casa']],
  4: 'Aqui o pagador é o próprio usuário, o que simplifica. Mas o anfitrião é um segundo cliente, com necessidades próprias: vamos conversar separadamente com cinco moradores que têm espaço vago, para entender o que os faria aceitar.'
 },
 6: {
  0: '1) Alugar colchões infláveis na nossa própria sala. 2) Site que conecta quem tem espaço a quem precisa. 3) Lista de casas enviada por e-mail aos inscritos. 4) Parceria com o congresso para indicar hospedagem. 5) Ônibus fretado de uma cidade vizinha com hotéis vagos. 6) Acordo com pousadas fora do centro. 7) Camping organizado perto do evento. 8) Grupo de mensagens para combinar caronas e quartos.',
  1: 'Centro: onde dormir quando a cidade lota.\nRamo 1 — ESPAÇO QUE JÁ EXISTE: colchão na sala, quarto vago, casa inteira.\nRamo 2 — CONFIANÇA: foto do espaço, apresentação do anfitrião, indicação de conhecidos.\nRamo 3 — COMBINAR: site, e-mail, parceria com o evento.',
  2: [['Colchões na nossa sala + site simples','3','3','3','9'],
      ['Site que conecta anfitriões e hóspedes','3','2','2','7'],
      ['Lista de casas por e-mail','2','3','3','8']],
  3: 'Escolhida: colchões na nossa própria sala, anunciados em um site simples (total 9). É a única que podemos colocar de pé nesta semana, sem depender de ninguém, e ainda assim testa as duas pontas do problema. Proposta: A Air Bed & Breakfast ajuda participantes de eventos a encontrar onde dormir quando a cidade lota, oferecendo espaços de moradores que já estão vazios.'
 },
 7: {
  0: [['Hotel','Padrão conhecido e seguro','Esgota e encarece em datas de evento','P1 e P2 · out/2007'],
      ['Casa de amigos ou colegas','De graça e com confiança','Depende de conhecer alguém na cidade','P1 · out/2007'],
      ['Desistir de ir ao evento','Custo zero','Perde o congresso inteiro','P5 · out/2007']],
  1: [['Sabemos desenhar e montar um site rápido','Nenhum de nós entende de hospedagem ou de regras do setor','Um evento grande com público concentrado e data marcada','Desconfiança entre estranhos pode travar a adesão'],
      ['Somos nós mesmos os primeiros anfitriões','Não temos dinheiro para divulgação','Existe muito espaço ocioso nas casas da cidade','Regras de locação e condomínio que ainda não conhecemos']],
  2: '1) Regras locais sobre hospedar pessoas em casa — verificamos consultando a prefeitura e lendo o regulamento do prédio. 2) Disposição real de moradores em receber desconhecidos — verificamos nas cinco conversas já agendadas com anfitriões.',
  3: 'Ação: começar pelo nosso próprio apartamento, para aprender a operação antes de convidar outros anfitriões. Podem ajudar: a organização do congresso, que fala direto com o público certo, e os primeiros hóspedes, que podem indicar outros.'
 },
 8: {
  0: [['Usuário','Participante do evento que precisa de vaga (5 conversas)'],
      ['Pagador','O próprio hóspede paga a diária; o anfitrião cede o espaço'],
      ['Benefício','Ter onde dormir perto do evento, por um valor abaixo do hotel de última hora'],
      ['Canal de acesso','Site simples divulgado nos fóruns e listas do congresso'],
      ['Atividades','Anunciar o espaço, combinar a reserva, receber o hóspede e cobrar'],
      ['Recursos e parceiros','A própria sala, três colchões infláveis, café da manhã e um site'],
      ['Receita','Diária por hóspede (hipótese: valor bem abaixo do hotel na mesma data)'],
      ['Gastos','Roupa de cama, café da manhã e hospedagem do site (estimativa)']],
  2: [['Previsto: 3 hóspedes × 3 noites','R$ 720,00','R$ 250,00','R$ 470,00'],
      ['Metade: 1 hóspede × 3 noites','R$ 240,00','R$ 130,00','R$ 110,00']],
  3: 'Valores ilustrativos para aprender a conta: diária de R$ 80 por hóspede, 3 hóspedes, 3 noites. Gasto por hóspede R$ 30 (roupa de cama e café) e R$ 160 fixos (site e limpeza). Previsto: 720 − (90 + 160) = R$ 470. Com um hóspede: 240 − (30 + 160) = R$ 110. Mesmo no cenário pequeno a conta fecha, porque o gasto fixo é baixo.',
  4: 'Não entrou na conta: as horas da equipe recebendo e atendendo hóspedes, a conta de luz e água, e o risco de dano ao imóvel. Para investigar o pagamento, vamos perguntar aos inscritos quanto estão dispostos a pagar por noite quando não existe hotel disponível.'
 },
 9: {
  0: 'Tarefa: reservar um espaço para as noites do evento. Resultado esperado: o hóspede sabe o endereço, o valor total e quem vai recebê-lo.',
  1: 'ENTRADA — página única com fotos da sala, o valor da diária e as datas livres.\nAÇÃO PRINCIPAL — formulário curto: nome, datas e uma mensagem para o anfitrião.\nRESULTADO — e-mail de confirmação com endereço, valor total e o nome de quem vai receber.\n(Nesta versão, nós mesmos respondíamos cada e-mail à mão.)',
  2: 'Não processa pagamento no site, não tem avaliação de hóspedes, não funciona para outras cidades e não cancela reserva sozinho.',
  3: 'Entrega mínima: três hóspedes reais, nas datas do congresso, dormindo na nossa sala. Medida: quantos concluem a reserva sozinhos e quantos chegam sem precisar ligar perguntando. Combinações necessárias: avisar os vizinhos e preparar café da manhã.'
 },
 10: {
  0: 'Hipótese: um participante do evento consegue entender a oferta e concluir uma reserva sozinho. Tarefa: “Reserve um lugar para as noites do congresso usando este site”. Medida: concluiu sem ajuda e em quanto tempo. Critério: pelo menos 2 de 3 concluem sem ajuda em até 3 minutos.',
  1: [['T1','Sim','2 min 10 s','Não','Procurou o preço total das três noites, que só aparecia no fim'],
      ['T2','Não','3 min 40 s','Sim, 1 vez','Não entendeu quem era o anfitrião e desistiu antes de enviar'],
      ['T3','Sim','1 min 50 s','Não','Perguntou se o café da manhã estava incluído']],
  2: 'Critério atingido por pouco: 2 de 3 concluíram sem ajuda dentro do tempo. Os registros permitem concluir que a reserva em si é compreensível, mas que falta apresentar o anfitrião: foi exatamente aí que T2 parou.',
  3: 'NÃO permite concluir que as pessoas se sentiriam seguras dormindo na casa de um desconhecido de verdade — testamos a compreensão do site, não a experiência da estadia. Mudança: incluir foto e uma apresentação curta do anfitrião na página, antes do formulário.'
 },
 11: {
  0: 'A ausência do anfitrião na página. Evidência: T2 desistiu ao não saber quem receberia, e T1 e T3 fizeram perguntas sobre quem estava do outro lado.',
  1: 'ANTES: a página mostrava só fotos do espaço e o valor.\nDEPOIS: passou a abrir com uma foto do anfitrião, três linhas de apresentação e o total das três noites já calculado no topo.',
  2: 'T4 (participante do congresso, não participou do primeiro teste). Tarefa: a mesma. Resultado: concluiu em 1 min 30 s, sem ajuda, e comentou que se sentiu mais à vontade sabendo quem receberia. Conclusão limitada: a mudança resolveu a dúvida de uma pessoa — precisamos repetir com mais participantes e, principalmente, medir o que acontece na estadia real.',
  3: 'CERTEZA: nas datas do congresso não havia vaga em hotel na região central (verificado por telefone em 3 hotéis, out/2007). SUPOSIÇÃO: moradores comuns aceitariam receber desconhecidos com regularidade. DÚVIDA: isso funciona fora de uma semana de evento, quando a cidade não está lotada?',
  4: [['Conversar com 5 moradores que têm espaço vago','Joe','próxima semana','Fazendo'],
      ['Repetir o teste do site com mais 3 participantes','Brian','em 10 dias','A fazer'],
      ['Receber os 3 primeiros hóspedes e anotar tudo que der errado','Equipe toda','nas datas do evento','A fazer']]
 },
 12: {
  0: [['Problema e cliente','Quando um evento grande lota a cidade, participantes não encontram onde dormir. Ouvimos 5 pessoas: 3 relataram prejuízo concreto. (30 s)'],
      ['Evidências','Importância 4,8 contra satisfação 1,6 para “ter onde dormir na data”. Hotéis lotados confirmados por telefone. (30 s)'],
      ['Solução e demonstração','Espaços que já existem e estão vazios, anunciados em uma página simples. Demonstrar a reserva ao vivo. (60 s)'],
      ['Modelo de negócio','O hóspede paga a diária; o anfitrião cede o espaço e recebe por isso. Na simulação, o saldo fecha positivo mesmo com um hóspede. (30 s)'],
      ['Testes e próximo passo','2 de 3 concluíram a reserva sozinhos; quem parou não sabia quem era o anfitrião. Mudamos a página e o novo teste concluiu em 1min30. Próximo passo: receber os três primeiros hóspedes de verdade. (30 s)']],
  2: 'Fichas 01 a 12 preenchidas ✓ · 5 entrevistas registradas ✓ · página de reserva impressa ✓ · 3 testes iniciais ✓ · 1 novo teste após a melhoria ✓ · apresentação ensaiada em 2 min 50 s ✓',
  3: 'Pergunta recebida: “e quando não houver nenhum evento na cidade?”. Melhoria sugerida: testar o mesmo site em um fim de semana comum, para ver se a procura existe fora dos picos.',
  4: '(Cada aluno escreve no próprio caderno.) Exemplo: “Fiquei responsável pelas entrevistas. Ajudei a decidir colocar a foto do anfitrião na página, porque vi uma pessoa desistir exatamente nesse ponto. Mudou meu entendimento: eu achava que startup era ter a ideia certa; agora vejo que é descobrir, a cada teste, o que estava errado na ideia”.'
 }
}

# Exemplo de um entrevistado, na mesma ordem de INTERVIEW. Dados ilustrativos.
INTERVIEW_EXAMPLES = {
 2: 'Na semana passada, quando fui procurar hotel para o congresso. Liguei em três lugares perto do centro de convenções e todos estavam lotados nas datas.',
 3: 'Sempre que vou a um evento grande, umas três vezes por ano. Hoje eu resolvo reservando com muita antecedência, ou peço para dormir na casa de algum colega da área.',
 4: 'Perdi uma tarde inteira ligando e pesquisando, e o preço que encontrei fora do centro era quase o dobro do normal. O que mais incomoda é a sensação de que vou ter que desistir da viagem por causa da cama.',
 5: [['Ter onde dormir na data do evento','5','1'],
     ['Sentir segurança em quem recebe','5','2']],
 6: 'Disse que já pensou em dividir um quarto com outro participante que não conhece, para baratear — mas não sabe como encontrar alguém assim.',
 7: 'RELATO: ligou para três hotéis e não achou vaga. OBSERVAÇÃO: durante a conversa, abriu o site do evento e mostrou que a lista de hotéis indicados estava toda esgotada. INTERPRETAÇÃO da equipe: a falta de oferta, e não o preço, é o que trava. Contrariou nossa hipótese: ela pagaria mais caro se houvesse vaga.'
}

GUIDE = [
 ('Como conduzir o percurso', '''Público: estudantes do 2º ano que estão começando. Objetivo: cada equipe constrói uma startup, apoiada em investigação e testada em pequena escala. A expectativa é um projeto inicial; formalização de empresa, programação e vendas reais não são exigências.
A sequência essencial tem 12 etapas de duas aulas de 50 minutos: 24 aulas, totalizando 1.200 minutos (20 horas de relógio). Para trabalhar as 40 aulas de 50 minutos previstas no escopo, use a ampliação da página seguinte: 2.000 minutos (33 horas e 20 minutos). Esta reorganização não reproduz aula por aula o cronograma original.
As equipes da turma vão criar startups diferentes entre si, e é isso que se espera. O que se repete de uma equipe para a outra é a base de trabalho: escolher um território, separar fato de suposição, ouvir o cliente, priorizar a dor, definir o cliente, desenhar a proposta, estudar o mercado, montar o modelo, construir, testar, melhorar e apresentar. Avalie a base, não a ousadia da ideia.
Cada etapa traz o exemplo de uma startup real e conhecida resolvendo aquele passo específico: iFood na escolha do território, Netflix na suposição arriscada, Airbnb ao ouvir o cliente, Spotify na priorização da dor, Nubank na definição do cliente, Duolingo na proposta de valor, 99 nas alternativas de mercado, Mercado Livre no modelo de negócio, Dropbox na primeira versão, Airbnb no teste, Instagram no pivô e Airbnb novamente no pitch. A repetição do Airbnb é proposital: o aluno acompanha uma mesma empresa em três momentos diferentes do percurso, enquanto vê outras nove empresas usando a mesma base.
Deixe claro para a turma que os casos servem como referência de raciocínio, não de tamanho. A startup de uma equipe de 2º ano pode atender vinte pessoas do próprio bairro e ainda assim ter percorrido o mesmo caminho. Comparar o projeto do aluno ao tamanho dessas empresas desmotiva e não ensina nada.
Distribua a apostila para consulta e uma ficha por equipe a cada etapa. Na etapa 03, acrescente cinco cópias do modelo de entrevista. Todos fazem a reflexão individual final no próprio caderno. A apostila e as fichas possuem os mesmos números.
Roteiro para a primeira aula de cada etapa: 5 min para retomar a entrega anterior; 10 min de explicação; 10 min para analisar o exemplo; 20 min de produção; 5 min para combinar a continuação. Na segunda: 5 min de retomada; 30 min de pesquisa, construção ou teste; 10 min de devolutiva; 5 min para registrar a entrega. Nas entrevistas e testes, distribua papéis para usar o tempo de forma produtiva.
Organize equipes de 3 a 5 e faça rodízio de funções. Ofereça leitura compartilhada, resposta oral com colega escriba e protótipos táteis ou encenações quando ajudarem. Uma pessoa com dificuldade de apresentação pode demonstrar ou explicar uma parte com apoio.
Para pesquisa sem internet, use conversas e observação nos espaços a que a turma tem acesso. Se o cliente escolhido não estiver acessível, ajuste o recorte ou reserve tempo para convidá-lo. Simulações entre colegas servem como ensaio e devem ser identificadas; não substituem evidências de usuários reais.
Combine previamente as atividades que acontecerem no espaço escolar. Alunos não precisam sair sozinhos, divulgar dados pessoais, arrecadar dinheiro ou operar um serviço real. Uma operação de verdade só cabe quando organizada com os responsáveis.
No site, cada etapa abre com uma frase-chave, três pontos essenciais e os termos da etapa; o texto completo fica em “Aprofundar”. Cada campo das fichas tem um exemplo preenchido, que pode ser exibido com um clique. Oriente as equipes a ler o exemplo para entender o nível de detalhe esperado e depois escrever com os próprios registros: copiar o exemplo não gera evidência.
Há três percursos, e a escolha é sua. A trilha completa, de 12 etapas, é a que sustenta a avaliação de 10 pontos. A Trilha Rápida, de sete passos em cerca de seis aulas, serve a turmas com carga reduzida, recuperação de percurso, feiras e revisão antes da apresentação. A Trilha Extrema é um sprint cronometrado de 50 minutos, em quatro blocos, que cabe em uma aula: a equipe monta uma startup inteira e a ficha se monta na tela enquanto os alunos escrevem. Cada percurso usa uma empresa diferente como exemplo — Airbnb nas fichas da trilha completa, Duolingo na Trilha Rápida e Nubank na Trilha Extrema —, o que reforça que a base é a mesma e a startup é que muda.
Use a Trilha Extrema para abrir o módulo, para uma oficina avulsa, para destravar uma equipe parada ou como aquecimento. Ela não substitui a investigação avaliada: duas conversas e dois testes em uma aula produzem a primeira versão de uma startup, não um negócio comprovado. Se receber um sprint como entrega de nota, peça a investigação completa antes de pontuar.'''),
 ('Distribuição para 40 aulas', '''Use as mesmas 12 etapas, ampliando o tempo de investigação e revisão. A soma abaixo é de 40 aulas de 50 minutos.
01 | Aulas 1–3 | 3 aulas: território, criatividade, empreendedorismo e rede de apoio.
02 | Aulas 4–5 | 2 aulas: necessidade, desejo, demanda e CSD.
03 | Aulas 6–9 | 4 aulas: ensaio, cinco entrevistas e organização dos registros.
04 | Aulas 10–13 | 4 aulas: médias, árvore, observação das causas e revisão do desafio.
05 | Aulas 14–16 | 3 aulas: cliente, persona e conversa com possível pagador/decisor.
06 | Aulas 17–20 | 4 aulas: brainstorming, mapa mental, seleção e proposta de valor.
07 | Aulas 21–24 | 4 aulas: alternativas, ambiente, FOFA e decisão.
08 | Aulas 25–27 | 3 aulas: modelo de negócio e simulações.
09 | Aulas 28–31 | 4 aulas: protótipo, ensaio e plano de entrega mínima.
10 | Aulas 32–34 | 3 aulas: preparar, testar e analisar.
11 | Aulas 35–37 | 3 aulas: melhorar, testar novamente e planejar.
12 | Aulas 38–40 | 3 aulas: ensaio, apresentações e devolutiva.
Na etapa 01, amplie a rede de apoio: cada equipe mapeia três atores acessíveis — escola, profissional, associação ou instituição de ensino — e explica que ajuda buscaria. Isso aproxima o tema do ecossistema local sem depender de uma lista de programas que pode mudar. Inclua um exemplo de startup de impacto e discuta quem se beneficia e como a atividade se sustenta. Relacione dificuldades econômicas a restrições de recursos e oportunidades de melhoria, sem tratar crise como garantia de sucesso.
Na etapa 07, amplie o macroambiente com seis perguntas: que decisões públicas interferem? Que condições econômicas? Que hábitos sociais? Que condições tecnológicas? Que impactos ambientais? Que regras precisam ser verificadas? Essa organização é chamada PESTEL. Escolha dois fatores relevantes, registre fonte/data ou marque como dúvida, e transforme a análise em uma ação.
Na etapa 12, reserve aproximadamente cinco minutos por grupo: três de pitch e dois de perguntas. Até oito equipes cabem em 40 minutos. Para turmas maiores, use duas rodadas e distribua a devolutiva nas demais aulas da etapa.'''),
 ('Como avaliar: 10 pontos', '''Avalie a qualidade da investigação e do aprendizado, sem exigir que a startup dê certo comercialmente. Devolva uma orientação concreta por etapa: algo que está sustentado e algo que precisa de revisão.
1. Território e investigação — 0 a 2 pontos. 2: cliente e dor claros, cinco registros reais e análise das contradições; 1: território reconhecível, mas registros ou análise incompletos; 0: ausência de investigação documentada.
2. Coerência da proposta — 0 a 2 pontos. 2: persona, alternativas e solução conectadas às evidências; 1: conexão parcial; 0: proposta sem relação demonstrada com o problema.
3. Protótipo, teste e melhoria — 0 a 2 pontos. 2: tarefa executável, critério prévio, três testes, alteração justificada e novo teste; 1: execução parcial ou registros frágeis; 0: ausência de teste documentado.
4. Modelo e comunicação — 0 a 2 pontos. 2: usuário/pagador claros, contas coerentes, hipóteses identificadas e pitch compreensível; 1: explicação ou contas incompletas; 0: não consegue explicar como a startup funcionaria.
5. Contribuição individual — 0 a 2 pontos. 2: contribuição observada e reflexão que explica uma decisão; 1: participação ou reflexão parcial; 0: não há evidência de contribuição mesmo após oportunidade de participação.
Os quatro primeiros critérios formam até 8 pontos da equipe; o quinto forma até 2 pontos individuais. Use observação, versões do trabalho e uma pergunta curta a cada aluno para atribuir a parte individual.
Não avalie o tamanho ou a originalidade da ideia. Uma startup que atende vinte pessoas do bairro, com investigação sólida, vale mais do que uma proposta ambiciosa sem nenhuma evidência.
Não atribua nota zero a um teste que não atingiu o critério. Uma falha bem registrada e uma melhoria coerente podem receber pontuação máxima. Dados fabricados não contam como pesquisa: peça nova coleta e ofereça prazo de recuperação.
Uma ficha que repete o exemplo do Airbnb não é evidência: peça os registros da própria equipe antes de pontuar.
Marcos de acompanhamento: depois da etapa 04, confira se a dor está sustentada; depois da 08, confira a relação entre cliente, solução e modelo; depois da 11, confira o aprendizado do teste. Se algo faltar, determine uma pequena tarefa de recuperação antes de avançar.
Modelo de devolutiva: “Vocês mostraram [evidência]. Ainda precisam verificar [dúvida]. Na próxima aula, façam [ação observável]”.'''),
 ('Respostas de referência e intervenções', '''01–02: “Participantes de eventos não encontram hospedagem quando a cidade lota” descreve uma situação; “falta um app de hospedagem” antecipa a solução. Necessidade: ter onde dormir; desejo: um hotel no centro; dor: não haver vaga nenhuma; demanda: investigar aquisição em condições concretas. Intenção declarada não equivale a compra.
03: espere relatos de episódios recentes e registro da solução atual. Troque “você gostou da nossa ideia?” por “como você resolveu na última vez?”. Se a pessoa não vive o problema, registre isso e procure participantes do território definido.
04: no exemplo, importância = 24 ÷ 5 = 4,8 e satisfação = 8 ÷ 5 = 1,6. Isso sugere atenção, não aprovação automática de um negócio. Raiz é causa possível; copa é consequência. “Existe espaço ocioso que ninguém oferece” precisa ser observado antes de virar causa confirmada.
05–06: nome fictício é aceitável na persona; comportamento inventado precisa ser marcado como hipótese. A proposta deve informar cliente, benefício e mecanismo. Peça que o aluno explique a solução sem usar “inovador”, “melhor” ou “revolucionário” como justificativa. Fique atento a negócios de dois lados, como o do exemplo: quando existem hóspede e anfitrião, a equipe precisa investigar os dois.
07: ficar em casa e desistir da viagem são alternativas legítimas e costumam ser esquecidas pelas equipes. Saber montar um site é uma força interna; regras de locação são condição externa. Peça uma decisão derivada da análise, como começar pelo próprio espaço antes de convidar terceiros.
08: cenário ilustrativo: 3 hóspedes × 3 noites × R$ 80 = R$ 720; gastos = 3 × R$ 30 + R$ 160 = R$ 250; saldo = R$ 470. Com um hóspede: receita 240; gastos 190; saldo 50 a 110, conforme o que for considerado fixo. Pergunte sobre tempo da equipe, contas de consumo e riscos omitidos. Os valores da atividade são simulações didáticas, não preços de mercado.
09–10: uma página de reserva pode testar compreensão da oferta; não permite afirmar que a pessoa se sentiria segura na estadia real. No exemplo, 2 de 3 atingiram o critério, mas o participante que parou revelou o ponto mais importante. A conclusão correta é ajustar a página; não “o negócio está validado”.
11–12: aceite manter, ajustar ou trocar de rumo quando houver justificativa — isso é pivô, e o caso do Instagram ajuda a explicar. Uma nova tentativa melhor não prova adoção ampla. No pitch, peça que a equipe aponte uma evidência, uma estimativa e uma dúvida.
Perguntas de saída: quem é o cliente desta startup? Que registro sustenta sua escolha? O que vocês mudaram após ouvir alguém? Qual hipótese ainda pode derrubar o projeto? Cada aluno responde uma delas em duas ou três frases.'''),
 ('Sobre os exemplos e o material de origem', '''Os casos citados — iFood, Netflix, Airbnb, Spotify, Nubank, Duolingo, 99, Mercado Livre, Dropbox e Instagram — são empresas reais, e as informações usadas aqui são de domínio público: origem, cliente inicial, proposta e forma de ganhar dinheiro. Onde a ficha pede pesquisa própria da equipe — entrevistas, notas de 1 a 5, tempos de teste —, os dados do exemplo do Airbnb são ILUSTRATIVOS: mostram o formato e o nível de detalhe esperados, não registros internos da empresa. Os valores das simulações financeiras são didáticos e não são números reais de nenhuma dessas empresas. Deixe isso explícito para a turma.
Foram inventariados os 18 arquivos da raiz: oito PDFs, nove DOCX e uma planilha XLSX. Foram extraídos seus textos e tabelas, e consultadas imagens de ferramentas presentes nos documentos. As extrações e o inventário de integridade estão em apoio. Páginas sem texto extraível são assinaladas nas extrações; não se presume que imagens tenham sido transcritas integralmente.
Base curricular: “Módulo 1 - Ementa.pdf”, “Módulo 1 - Cronograma.pdf” e “Módulo 1 - Escopo SEDUC.xlsx”. Sustentam os temas e a referência de 40 aulas; a planilha especifica 50 minutos. O cronograma traz o cabeçalho “Gestão de Projetos”, e a aba da planilha tem nome “Lógica de Programação”; o conteúdo interno de ambos trata da sequência de Gestão de Startups.
Base conceitual: “Módulo 1 - Ebook.pptx.pdf”, 77 páginas: criatividade (5–12), necessidades e árvore (13–22), técnicas criativas (23–38), mercado/FOFA (39–51), público/persona (52–74). A página 75 anuncia proposta de valor, modelagem, MVP e apresentações para o módulo seguinte. Esses assuntos foram desenvolvidos aqui como complemento autoral nas etapas 06 e 08–12, para fechar um ciclo prático.
Empreendedorismo: “ATIVIDADE- AULA 07-08.docx” e “GESTÃO DE STARTUPS- atividade.pdf” apresentam perguntas semelhantes. Foram convertidas em investigação e decisões da equipe na etapa 01.
Dores e necessidades: “Dor e Necessidades!.docx”, “Gestão de Startups - Dor e Necessidades!.pdf”, “O que é dor do cliente.docx” e “Identificando a necessidade dos consumidores.docx” sustentam as etapas 02–04. Adotou-se a escala 1–5 do último arquivo, uniformizada nas fichas; o ebook usa 1–10.
Árvore: “Arvore de problemas.docx”, “Arvore de problemas Simplificada.docx” e “Arvore de problemas Simplificada.pdf” fundamentam a etapa 04. A redação foi simplificada para distinguir problema, causa possível e efeito.
Criação e organização: “Mapa Mental.docx”, “Técnicas criativas.docx” e “Duplo diamante e Matriz CSD.docx” fundamentam as etapas 02, 06 e 11. Textos repetidos, trechos promocionais e afirmações gerais sobre o cérebro foram dispensados.
Contexto: “Link Eixo_TIC.docx.pdf” situa Gestão de Startups no 2º ano do eixo Informação e Comunicação. Não foi necessário depender dos sites e vídeos citados nos originais para executar as novas atividades.
Escolhas didáticas: orientar toda a sequência à construção de uma startup; usar casos reais e conhecidos, um por etapa, para mostrar que a mesma base gera startups diferentes; antecipar cliente e entrevistas; separar evidência de suposição; incluir alternativas indiretas; distinguir teste de compreensão de teste de valor; avaliar a revisão da ideia em vez do tamanho dela. O material é uma adaptação pedagógica, sem pretensão de substituir a ementa oficial.''')
]
