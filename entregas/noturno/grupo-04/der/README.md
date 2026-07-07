# DER - Grupo 4

## Objetivo

Esta pasta registra o diagrama de entidade-relacionamento utilizado na modelagem da base `escola_db`.

## Arquivo esperado

- `DER.png`

## Entidades representadas

O DER cobre as tabelas principais do cenário escolar:

- `professores`
- `cursos`
- `turmas`
- `alunos`
- `matriculas`
- `notas`

## Relacionamentos principais

- um curso possui várias turmas
- um professor pode ministrar várias turmas
- um aluno pode ter uma matrícula vinculada a uma turma
- uma matrícula pode ter um registro de notas associado

## Finalidade no projeto

O diagrama serve para demonstrar a coerência entre modelagem, banco físico e consulta utilizada pela aplicação web.