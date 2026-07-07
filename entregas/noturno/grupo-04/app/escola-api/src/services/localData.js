const fs = require("fs");
const path = require("path");

function readBaseSql() {
    const basePath = path.resolve(__dirname, "../../../../../../../base/escola_db.sql");
    return fs.readFileSync(basePath, "utf8");
}

function extractInsertValues(sql, tableName) {
    const pattern = new RegExp(`INSERT INTO ${tableName}[^;]*?VALUES\\s*([\\s\\S]*?);`, "i");
    const match = sql.match(pattern);
    if (!match) return [];

    const valuesText = match[1].trim();
    const rows = [];
    let current = "";
    let depth = 0;
    let inString = false;

    for (let index = 0; index < valuesText.length; index += 1) {
        const character = valuesText[index];

        if (character === "'" && valuesText[index - 1] !== "\\") {
            inString = !inString;
        }

        if (!inString) {
            if (character === "(") {
                if (depth > 0) current += character;
                depth += 1;
                continue;
            }

            if (character === ")") {
                depth -= 1;
                if (depth === 0) {
                    rows.push(current);
                    current = "";
                    continue;
                }
            }

            if (character === "," && depth === 0) {
                continue;
            }
        }

        if (depth > 0) {
            current += character;
        }
    }

    return rows;
}

function splitRow(rowText) {
    const values = [];
    let current = "";
    let inString = false;

    for (let index = 0; index < rowText.length; index += 1) {
        const character = rowText[index];

        if (character === "'" && rowText[index - 1] !== "\\") {
            inString = !inString;
            continue;
        }

        if (character === "," && !inString) {
            values.push(current.trim());
            current = "";
            continue;
        }

        current += character;
    }

    if (current.length > 0) {
        values.push(current.trim());
    }

    return values.map((value) => {
        if (value.toUpperCase() === "NULL") return null;
        if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
        return value;
    });
}

function parseTable(sql, tableName, columns) {
    return extractInsertValues(sql, tableName).map((rowText) => {
        const values = splitRow(rowText);
        return columns.reduce((record, column, index) => {
            record[column] = values[index];
            return record;
        }, {});
    });
}

function buildFallbackData() {
    const sql = readBaseSql();

    const turmas = parseTable(sql, "turmas", [
        "id_turma",
        "id_curso",
        "id_professor",
        "nome_turma",
        "turno",
        "periodo",
        "capacidade",
    ]);

    const alunos = parseTable(sql, "alunos", [
        "id_aluno",
        "nome",
        "email",
        "data_nascimento",
        "cidade",
    ]);

    const matriculas = parseTable(sql, "matriculas", [
        "id_matricula",
        "id_aluno",
        "id_turma",
        "data_matricula",
        "status",
    ]);

    const notas = parseTable(sql, "notas", [
        "id_nota",
        "id_matricula",
        "nota1",
        "nota2",
        "nota3",
        "media",
    ]);

    const turmaMap = new Map(turmas.map((turma) => [turma.id_turma, turma]));
    const alunoMap = new Map(alunos.map((aluno) => [aluno.id_aluno, aluno]));
    const notaMap = new Map(notas.map((nota) => [nota.id_matricula, nota]));

    const registros = matriculas.map((matricula) => {
        const aluno = alunoMap.get(matricula.id_aluno) || {};
        const turma = turmaMap.get(matricula.id_turma) || {};
        const nota = notaMap.get(matricula.id_matricula) || {};

        return {
            id_aluno: aluno.id_aluno,
            nome: aluno.nome,
            email: aluno.email,
            nome_turma: turma.nome_turma,
            data_matricula: matricula.data_matricula,
            nota1: nota.nota1,
            nota2: nota.nota2,
            nota3: nota.nota3,
            media: nota.media,
        };
    });

    return {
        alunos: registros.sort((first, second) => String(first.nome).localeCompare(String(second.nome), "pt-BR")),
        turmas: turmas.sort((first, second) => String(first.nome_turma).localeCompare(String(second.nome_turma), "pt-BR")),
    };
}

const cachedData = buildFallbackData();

function getFallbackAlunos() {
    return cachedData.alunos;
}

function getFallbackTurmas() {
    return cachedData.turmas;
}

module.exports = {
    getFallbackAlunos,
    getFallbackTurmas,
};