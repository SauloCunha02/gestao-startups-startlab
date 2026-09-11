# StartLab · Gestão de Startups

Material didático para estudantes do 2º ano: 12 etapas para sair da observação de um problema e chegar ao primeiro teste de uma solução.

## Versão 2.0.0

Site estático interativo, com temas claro e escuro e layout adaptado para celular, tablet e computador. Cada etapa combina explicação, exemplo fictício, atividade e pergunta de revisão. Os arquivos em PDF e Word continuam disponíveis.

- Trilha com busca, filtros, progresso e retomada de etapa.
- Caderno digital com 12 fichas e cinco registros de entrevistas.
- Respostas salvas no navegador, cópia/restauração em JSON e exportação em texto para compartilhar com o professor.
- Calculadora de modelo de negócio e cronômetro de foco.
- Guia do professor com seções expansíveis e biblioteca para download.
- Navegação por teclado, redução de movimento e impressão de respostas longas.

Não há servidor de dados, login de estudante, serviços de terceiros ou sincronização automática. A equipe deve exportar uma cópia antes de trocar de aparelho, navegador ou limpar os dados locais. Cada navegador/origem mantém seu próprio projeto; abrir o HTML local e acessar um site publicado cria armazenamentos separados.

A tag `v1.0.0` preserva a primeira versão funcional; `v2.0.0` identifica a versão interativa.

## Executar

Abra `index.html` no navegador ou, com Python instalado, rode `python -m http.server 8000 --bind 127.0.0.1` nesta pasta e acesse `http://localhost:8000`.

## Percurso

Problema → necessidades → entrevistas → causas → público → ideias → mercado → modelo de negócio → protótipo → teste → melhoria → apresentação.

Carga sugerida: 24 aulas de 50 minutos, com ampliação para 40 aulas no guia do professor. Não exige programação, compra de ferramentas nem abertura de empresa.

## Publicação

O conteúdo pode ser servido como site estático, inclusive pelo GitHub Pages a partir da raiz da branch `main`. A publicação depende de um repositório e uma conta autenticada com permissão de escrita. O histórico local das versões não significa que já foram enviadas ao GitHub.

## Desenvolvimento e testes

Não há etapa de instalação ou compilação para usar o site. HTML, CSS, JavaScript e ícones são locais.

O conteúdo pedagógico está em `conteudo/material.py` e o modelo da página em `scripts/pagina.html`. Execute `python scripts/gerar_dados.py` para atualizar `assets/conteudo.js` e `index.html`. O gerador usa somente a biblioteca padrão do Python.

Para os testes, instale Node.js e execute:

```sh
npm install
npx playwright install chromium
```

Inicie o servidor em um terminal:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

Em outro terminal, execute `npm test`. Opcionalmente, defina `TEST_URL` para testar outra URL. O teste usa contextos isolados de navegador e grava evidências em `test-results/`, pasta ignorada pelo Git. `npm run check` confere a sintaxe do JavaScript.

O teste verifica fluxo de aprendizagem, busca, temas, persistência, importação/exportação, cálculos, downloads, impressão, navegação móvel e ausência de rolagem horizontal nas larguras 320, 390, 768 e 1440 pixels.

## Origem

Adaptação pedagógica dos materiais locais de Gestão de Startups. O guia do professor descreve a relação com cada material. Os arquivos originais e as extrações de preparação não fazem parte deste repositório. Todos os dados do exemplo Fila Menor são fictícios.
