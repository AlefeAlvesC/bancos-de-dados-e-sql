const db = require("../config/database");
const { getFallbackTurmas } = require("../services/localData");

module.exports = {
    async index(req, res) {
        try {
            const [rows] = await db.query(
                "SELECT * FROM turmas ORDER BY nome_turma"
            );

            res.json(rows);
        } catch (error) {
            console.error(error);

            const fallbackRows = getFallbackTurmas();
            if (fallbackRows.length > 0) {
                return res.json(fallbackRows);
            }

            res.status(500).json({
                erro: "Erro ao buscar turmas"
            });
        }
    }
};