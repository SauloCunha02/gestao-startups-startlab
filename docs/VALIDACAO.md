# Verificação da versão 2.0.0

Os testes em Chromium passaram para:

- 12 etapas, suas atividades, perguntas de revisão e fichas correspondentes.
- Alternância entre temas e persistência após recarregar a página.
- Busca, filtros e estado de busca sem resultados.
- Marcação de progresso, revisão da etapa e cronômetro de foco.
- Salvamento de nome de equipe e respostas, inclusive texto que contém marcação HTML.
- Exportação de cópia JSON, restauração, rejeição de arquivo inválido e exportação das respostas em texto.
- Separação dos registros individuais de entrevista.
- Cálculo do saldo positivo e negativo e rejeição de entradas numéricas inválidas.
- Downloads dos três materiais em PDF, Word e HTML.
- Impressão do caderno digital.
- Ausência de rolagem horizontal da página nas larguras 320, 390, 768 e 1440 pixels.
- Menu móvel, fechamento por Escape e navegação para o projeto.
- Uso do site aberto diretamente por arquivo local e com armazenamento do navegador indisponível.
- Ausência de erros de execução de JavaScript durante o percurso testado.

A suíte está em `tests/smoke.cjs`. As capturas para revisão visual ficam em `test-results/` e não são publicadas no repositório.

Foram também conferidos os PDFs didáticos (13, 13 e 5 páginas) e a integridade dos 18 arquivos originais da pasta de trabalho por SHA-256. Nenhum deles foi alterado.

Limite de verificação: os testes automatizados usaram Chromium; não foi feita uma matriz completa de navegadores ou testes em aparelhos físicos. Não há backend ou sincronização de registros entre dispositivos.
