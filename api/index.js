const mysql = require("mysql2/promise");
const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

const host = "unimed.czh86ybxly4j.us-east-1.rds.amazonaws.com";
const user = "admin";
const password = "admin123";
const database = "testdb";
const region = "us-east-1d";

let connectionConfig = {
    host: host,
    user: user,
    database: database,
    // ssl: "Amazon RDS",
    password: password,
    // authPlugins: { mysql_clear_password: () => () => signer.getAuthToken() }
};

const router = express.Router();
const getSector = async (req, res) => {
    var connection = await mysql.createConnection(connectionConfig);
    const [rows, fields] = await connection.execute(
        "SELECT * FROM setor_atendimento WHERE cd_setor_atendimento = ?",
        [req.params.id]
    );
    if (rows.length > 0) {
        res.json(rows[0]);
    }
    connection.end();

};

const getServices = async (req, res) => {
    var connection = await mysql.createConnection(connectionConfig);
    const [rows, fields] = await connection.execute(
        "SELECT p.nm_pessoa_fisica as nome, c.id as idAtendimento, c.texto as solicitacao, DATE_FORMAT(FROM_DAYS(DATEDIFF(NOW(), dt_nascimento)), '%Y') + 0 AS idade, s.nome as status FROM chamados AS c, pessoa_fisica AS p, chamado_status AS s  WHERE cd_setor_atendimento = ? AND c.pessoa_fisica_id = p.cd_pessoa_fisica AND c.chamado_status_id = s.id ORDER BY c.id DESC",
        [req.params.id]
    );
    if (rows.length > 0) {
        res.json(rows);
    }
    connection.end();
};

const finishService = async (req, res) => {
    console.log(req.body)
    body = req.body
    var connection = await mysql.createConnection(connectionConfig);
    const [rows, fields] = await connection.execute("UPDATE chamados SET responsavel = ?, observacoes = ?, chamado_status_id = 2 WHERE id = ?", [body.responsible, body.observations, body.id])

    if (rows.length > 0) {
        res.json(rows);
    }
    connection.end();
};

router.get("/get-sector/:id", getSector);
router.get("/get-services/:id", getServices);
router.post("/finish-service", finishService);

app.use(router);

app.listen(3001, () => {
    console.log("rodando na porta 3001");
});
