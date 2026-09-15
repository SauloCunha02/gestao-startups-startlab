# v4.0.0 · Limpeza

Versão sem novidade para o aluno: o conteúdo pedagógico é o mesmo da 3.4.0, e as quatro suítes de teste passam sem nenhuma alteração de comportamento. O que mudou foi o projeto por dentro.

## Base compartilhada pelas trilhas curtas

A Trilha Rápida e a Trilha Extrema eram duas páginas independentes que faziam as mesmas coisas com código próprio: salvar no navegador, crescer o campo de texto, abrir e fechar exemplos, trocar o tema, mostrar avisos, baixar, copiar, apagar e imprimir. Cada correção precisava ser feita duas vezes — e mais de uma vez foi.

Agora existem `assets/trilha-curta.css` e `assets/trilha-curta.js`. Cada trilha ficou só com o que é dela: a Rápida com as regras, o progresso e os sete passos; a Extrema com o cronômetro, a conta do mês e a ficha da startup.

| | Antes | Depois |
| --- | --- | --- |
| `trilha-rapida/index.html` | 30,8 KB | 22,4 KB |
| `trilha-extrema/index.html` | 40,9 KB | 32,3 KB |
| Compartilhado | — | 13,5 KB em dois arquivos |
| **Total** | **71,7 KB** | **68,2 KB** |

A economia em bytes é modesta; o ganho real é que o código compartilhado existe uma vez só. Entre as duas páginas restam 2 linhas de CSS idênticas, contra 43 antes.

## Um nome só para cada coisa

O mesmo componente se chamava `.step` numa trilha e `.block` na outra. Virou `.passo` nas duas, com `.passo-head`, `.passo-body`, `.passo-foot` e `.tempo`. A cor de cada trilha passou a sair de uma variável (`--marca`), então trocar a identidade visual é uma linha.

## Código morto removido

Seis scripts de uso único saíram de `apoio/`. Dois eram ativamente perigosos:

- `preparar_projeto.py` — reescrevia `README.md` e `CHANGELOG.md` com o texto da versão 1. Rodá-lo por engano apagaria a documentação atual.
- `publicar_github.py` — quebrado: terminava afirmando que a v2 era a última versão publicada.

Os outros quatro — `conteudo.py` (cópia antiga do conteúdo), `extrair_material.py`, `verificar_entrega.py` e `preparar_ferramentas.py` — já tinham cumprido seu papel. Todos foram arquivados em `versoes/apoio-scripts-removidos-v4.zip` antes da remoção, porque `apoio/` não é versionado.

Também saíram 52 MB de instaladores `.zip` já extraídos em `apoio/.tools`, as pastas `__pycache__`, o `docs/VALIDACAO.md` (retrato da versão 2, hoje substituído pelo que as suítes imprimem) e a regra CSS órfã `.button.ghost`.

## Documentação que não sai de sincronia

O histórico de versões estava em três lugares e os três discordavam: o `STATUS_GITHUB.txt` ainda dizia que a `main` apontava para a v3.0.0 e que havia três suítes de teste.

O README virou um mapa do repositório — o que é cada pasta, qual é a fonte única de conteúdo, o que cada suíte cobre — e o histórico saiu dele. `STATUS_GITHUB.txt` e o novo `apoio/LEIA-ME.txt` passaram a apontar para as fontes canônicas em vez de copiá-las.

## Validação

As quatro suítes passam sem mudança de expectativa, exceto pelos seletores renomeados (`.step`/`.block` → `.passo`). Sem erros de JavaScript, sem rolagem horizontal em 320, 390, 768 e 1440 pixels, nos temas claro e escuro. O pipeline de documentos foi executado de ponta a ponta depois da limpeza: Word, PDF e HTML continuam sendo gerados normalmente.
