USE escola_db;

-- Consulta principal da aplicação
SELECT
    a.id_aluno,
    a.nome,
    a.email,
    t.nome_turma,
    m.data_matricula,
    n.nota1,
    n.nota2,
    n.nota3,
    n.media
FROM alunos a
INNER JOIN matriculas m ON a.id_aluno = m.id_aluno
INNER JOIN turmas t ON m.id_turma = t.id_turma
INNER JOIN notas n ON n.id_matricula = m.id_matricula
ORDER BY a.nome;

-- Consulta filtrada por turma
SELECT
    a.id_aluno,
    a.nome,
    a.email,
    t.nome_turma,
    m.data_matricula,
    n.nota1,
    n.nota2,
    n.nota3,
    n.media
FROM alunos a
INNER JOIN matriculas m ON a.id_aluno = m.id_aluno
INNER JOIN turmas t ON m.id_turma = t.id_turma
INNER JOIN notas n ON n.id_matricula = m.id_matricula
WHERE t.nome_turma = 'BD-01'
ORDER BY a.nome;

-- Consulta filtrada por nome
SELECT
    a.id_aluno,
    a.nome,
    a.email,
    t.nome_turma,
    m.data_matricula,
    n.nota1,
    n.nota2,
    n.nota3,
    n.media
FROM alunos a
INNER JOIN matriculas m ON a.id_aluno = m.id_aluno
INNER JOIN turmas t ON m.id_turma = t.id_turma
INNER JOIN notas n ON n.id_matricula = m.id_matricula
WHERE a.nome LIKE '%Ana%'
ORDER BY a.nome;
