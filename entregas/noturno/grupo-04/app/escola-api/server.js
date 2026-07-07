const path = require("path");
const envPath = path.join(__dirname, "..", "..", ".env");

require("dotenv").config({ path: envPath });

const app = require("./src/app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});