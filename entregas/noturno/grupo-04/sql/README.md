# SQL - Grupo 4

## Objetivo

Esta pasta reúne o material SQL utilizado pelo Grupo 4 para demonstrar o uso da base `escola_db` no projeto final do módulo.

## Conteúdo desta pasta

- Script base do banco em [base/escola_db.sql](../../../../base/escola_db.sql)
- Script de consultas do grupo em [consultas-principais.sql](consultas-principais.sql)
- Observações sobre a consulta principal da aplicação
- Orientações para leitura do modelo relacional utilizado

## Estrutura lógica do banco

A solução utiliza as seguintes tabelas principais:

- `professores`
- `cursos`
- `turmas`
- `alunos`
- `matriculas`
- `notas`

## Consulta principal da aplicação

A aplicação consome uma consulta com `JOIN` entre as tabelas de alunos, matrículas, turmas e notas para exibir:

- nome do aluno
- e-mail
- turma
- data de matrícula
- nota 1
- nota 2
- nota 3
- média final

## Observação técnica

O filtro por nome e turma foi implementado na interface para agilizar a demonstração, mas o banco de dados continua sendo a base central da consulta acadêmica.