# Log de Alterações - Grupo 4

## Objetivo deste documento

Registrar, de forma cronológica e detalhada, as alterações e validações realizadas sobre a entrega do Grupo 4, com foco no estado atual da solução em React, Node.js e SQL.

## Resumo executivo

A base do projeto já estava funcional do ponto de vista técnico: backend em Node/Express, frontend em React/Vite e banco `escola_db` coerente com o cenário acadêmico. O trabalho realizado nesta etapa foi de auditoria, consolidação de diagnóstico e documentação, seguido de correções objetivas no backend, no SQL e na documentação.

Nesta rodada, além da formalização do estado do projeto em documentos de apoio dentro de `docs/`, foram executadas correções práticas para melhorar a execução do backend, estruturar o material SQL e completar a documentação final da entrega.

## Linha do tempo das alterações

### 1. Levantamento inicial do estado do repositório

Foi feita a inspeção dos arquivos do grupo 4 para entender a composição da entrega:

- `README.md` do grupo;
- backend em `app/escola-api/`;
- frontend em `app/escola-web/`;
- documentos de `der/`, `sql/`, `docs/` e `infra/`;
- script da base em `base/escola_db.sql`;
- arquivo `.env` na raiz do repositório.

### 2. Validação do backend

A revisão técnica confirmou que o backend possui estrutura funcional:

- servidor Express inicializado em `server.js`;
- aplicação configurada em `src/app.js`;
- pool MySQL configurado em `src/config/database.js`;
- rota `GET /alunos` registrada em `src/routes/routes.js`;
- consulta principal com `JOIN` entre alunos, matrículas, turmas e notas em `src/controllers/AlunoController.js`.

Pontos observados antes da correção:

- o backend depende de variáveis de ambiente definidas em `.env`;
- o `package.json` da API não possui script `start`;
- existe um controlador de turmas, mas ele está sinalizado como não utilizado;
- não foi identificado arquivo `.env.example`.

### 3. Validação do frontend

A revisão técnica confirmou que o frontend também está funcional:

- projeto React com Vite;
- consumo da API via `axios`;
- lista de alunos carregada em `App.jsx`;
- filtros por nome e turma executados no cliente;
- renderização dos campos principais em `AlunoTable.jsx`;
- interface com identidade visual própria em `App.css` e `index.css`.

Pontos observados:

- a URL da API está fixa em `localhost:3000`;
- a filtragem acontece no frontend, não diretamente em SQL;
- a solução funciona bem para demonstração, mas ainda pode ganhar portabilidade e robustez.

### 4. Validação da base de dados e do contexto SQL

Foi revisada a base `escola_db` para conferir aderência ao enunciado.

A estrutura está consistente com o cenário proposto:

- professores;
- cursos;
- turmas;
- alunos;
- matrículas;
- notas.

A modelagem cobre o fluxo necessário para consulta acadêmica e a base possui dados suficientes para demonstração.

### 5. Diagnóstico da documentação do grupo

Foi identificado que a documentação do grupo ainda estava incompleta em pontos importantes:

- o README principal possuía placeholders;
- a seção de tecnologias ainda não estava preenchida;
- as instruções de execução estavam genéricas;
- a divisão de responsabilidades não estava fechada;
- os diretórios de `sql/`, `der/` e `infra/` precisavam de melhor descrição.

### 6. Criação do checklist consolidado

Como saída da auditoria, foi criado o documento:

- `docs/relatorio-checklist-grupo-04.md`

Esse arquivo organiza o estado do projeto em formato de checklist por área:

- checklist geral;
- backend;
- frontend;
- banco de dados e SQL;
- documentação e apresentação;
- conclusão técnica;
- próximos ajustes recomendados.

### 7. Correções aplicadas no backend

Após o diagnóstico, foram executadas melhorias práticas na API:

- adição do script `start` em `app/escola-api/package.json`;
- inclusão de um script `dev` para facilitar a execução local;
- ajuste do carregamento do `.env` em `server.js` para apontar explicitamente para o arquivo na raiz do repositório.

Essas mudanças reduzem a chance de falha ao executar o backend fora do diretório da raiz do projeto.

### 8. Padronização da configuração de ambiente e do README

Também foram executadas ações de documentação operacional:

- criação de `.env.example` na raiz do repositório para servir como modelo de configuração;
- atualização do README do grupo 4 com a stack real do projeto;
- revisão das instruções de execução para refletir os comandos corretos de backend e frontend.

### 9. Consolidação da documentação SQL, DER e infraestrutura

Para completar a entrega formal, foram estruturados os documentos de apoio das demais áreas:

- atualização do README da pasta `sql/` com referência ao script de consultas do grupo;
- criação do arquivo `sql/consultas-principais.sql` com a consulta principal e exemplos de filtro;
- preenchimento do README da pasta `der/` com a descrição do diagrama e dos relacionamentos;
- preenchimento do README da pasta `infra/` com a orientação de execução local e configuração.

### 10. Criação deste log de alterações

Como segunda documentação de apoio, foi criado este arquivo para registrar o trabalho realizado de forma mais narrativa e detalhada.

## Resultado da etapa

### O que já está consolidado

- Backend funcional com API conectada ao banco.
- Frontend funcional consumindo a API.
- Base de dados coerente com o cenário acadêmico.
- Documentação de diagnóstico em formato de checklist.
- Script de inicialização formal para a API.
- Carregamento do `.env` corrigido para execução previsível.
- Arquivo `.env.example` criado para apoiar a configuração.
- README principal ajustado para descrever stack e execução reais.
- Script SQL do grupo criado para apoiar a consulta principal.
- README de `sql/`, `der/` e `infra/` concluídos.

### O que ainda precisa de ajuste

- Possível melhoria na estratégia de filtro para reforçar o uso de SQL.

## Arquivos criados nesta etapa

- `docs/relatorio-checklist-grupo-04.md`
- `docs/log-de-alteracoes-grupo-04.md`
- `.env.example`
- `entregas/noturno/grupo-04/sql/consultas-principais.sql`

## Observação final

Este log registra as ações de documentação e as correções funcionais executadas nesta rodada. A aplicação preserva sua arquitetura original, mas agora conta com um backend mais fácil de iniciar, um material SQL organizado e documentação operacional fechada para a entrega.
