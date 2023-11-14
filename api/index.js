const mysql = require("mysql2/promise");
const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

/*const host = "unimed.czh86ybxly4j.us-east-1.rds.amazonaws.com";
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
  };*/


const router = express.Router();
/*const getSector = async (req, res) => {
    var connection = await mysql.createConnection(connectionConfig);
    const [rows, fields] = await connection.execute(
        "SELECT * FROM setor_atendimento WHERE cd_setor_atendimento = ?",
        [req.params.id]
      );
      if(rows.length >0){
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
      if(rows.length >0){
        res.json(rows);
      }
      connection.end();
  }; 

  const finishService = async (req, res) => {
    console.log(req.body)
    body= req.body
    var connection = await mysql.createConnection(connectionConfig);
    const [rows, fields] = await connection.execute("UPDATE chamados SET responsavel = ?, observacoes = ?, chamado_status_id = 2 WHERE id = ?", [body.responsible, body.observations, body.id])

      if(rows.length >0){
        res.json(rows);
      }
      connection.end();
  };*/

router.get("/get-sector/:id", (req, res) => {
    res.json({ setor: "Exemplo" });
});

router.get("/get-services/:id", (req, res) => {
    res.json([
        {
            "idAtendimento": "1",
            "nome": "João",
            "quarto": "10",
            "solicitacao": "Estou com fome",
            "horarioSolicitacao": "2023-11-14T08:30:00",
            "idade": "20 anos",
            "sexo": "Masculino",
            "estadoDeSaude": "Bom",
            "tipoDePlano": "Particular",
            "acompanhante": "Maria"
        },
        {
            "idAtendimento": "2",
            "nome": "Maria",
            "quarto": "12",
            "solicitacao": "Preciso de assistência médica",
            "horarioSolicitacao": "2023-11-14T09:45:00",
            "idade": "35 anos",
            "sexo": "Feminino",
            "estadoDeSaude": "Regular",
            "tipoDePlano": "Seguro de Saúde",
            "acompanhante": "Pedro"
        },
        {
            "idAtendimento": "3",
            "nome": "Luisa",
            "quarto": "8",
            "solicitacao": "Preciso de ajuda para ir ao banheiro",
            "horarioSolicitacao": "2023-11-14T11:00:00",
            "idade": "45 anos",
            "sexo": "Feminino",
            "estadoDeSaude": "Bom",
            "tipoDePlano": "Particular",
            "acompanhante": "Carlos"
        },
        {
            "idAtendimento": "4",
            "nome": "Pedro",
            "quarto": "15",
            "solicitacao": "Estou com sede",
            "horarioSolicitacao": "2023-11-14T12:15:00",
            "idade": "50 anos",
            "sexo": "Masculino",
            "estadoDeSaude": "Regular",
            "tipoDePlano": "Seguro de Saúde",
            "acompanhante": "Marta"
        },
        {
            "idAtendimento": "5",
            "nome": "Ana",
            "quarto": "20",
            "solicitacao": "Estou com frio",
            "horarioSolicitacao": "2023-11-14T13:30:00",
            "idade": "35 anos",
            "sexo": "Feminino",
            "estadoDeSaude": "Ruim",
            "tipoDePlano": "Particular",
            "acompanhante": "Ricardo"
        },
        {
            "idAtendimento": "6",
            "nome": "Ricardo",
            "quarto": "14",
            "solicitacao": "Preciso de assistência médica",
            "horarioSolicitacao": "2023-11-14T14:45:00",
            "idade": "40 anos",
            "sexo": "Masculino",
            "estadoDeSaude": "Regular",
            "tipoDePlano": "Seguro de Saúde",
            "acompanhante": "Luisa"
        },
        {
            "idAtendimento": "7",
            "nome": "Marta",
            "quarto": "11",
            "solicitacao": "Estou com calor",
            "horarioSolicitacao": "2023-11-14T16:00:00",
            "idade": "55 anos",
            "sexo": "Feminino",
            "estadoDeSaude": "Bom",
            "tipoDePlano": "Particular",
            "acompanhante": "João"
        },
        {
            "idAtendimento": "8",
            "nome": "Carlos",
            "quarto": "18",
            "solicitacao": "Estou com fome",
            "horarioSolicitacao": "2023-11-14T17:15:00",
            "idade": "32 anos",
            "sexo": "Masculino",
            "estadoDeSaude": "Regular",
            "tipoDePlano": "Seguro de Saúde",
            "acompanhante": "Maria"
        },
        {
            "idAtendimento": "9",
            "nome": "Joana",
            "quarto": "9",
            "solicitacao": "Preciso de ajuda para ir ao banheiro",
            "horarioSolicitacao": "2023-11-14T18:30:00",
            "idade": "60 anos",
            "sexo": "Feminino",
            "estadoDeSaude": "Bom",
            "tipoDePlano": "Particular",
            "acompanhante": "Pedro"
        },
        {
            "idAtendimento": "10",
            "nome": "Gustavo",
            "quarto": "13",
            "solicitacao": "Estou com sede",
            "horarioSolicitacao": "2023-11-14T19:45:00",
            "idade": "28 anos",
            "sexo": "Masculino",
            "estadoDeSaude": "Ruim",
            "tipoDePlano": "Seguro de Saúde",
            "acompanhante": "Luisa"
        },
        {
            "idAtendimento": "11",
            "nome": "Renata",
            "quarto": "17",
            "solicitacao": "Estou com fome",
            "horarioSolicitacao": "2023-11-14T21:00:00",
            "idade": "38 anos",
            "sexo": "Feminino",
            "estadoDeSaude": "Bom",
            "tipoDePlano": "Particular",
            "acompanhante": "Carlos"
        },
        {
            "idAtendimento": "12",
            "nome": "Eduardo",
            "quarto": "22",
            "solicitacao": "Preciso de assistência médica",
            "horarioSolicitacao": "2023-11-14T22:15:00",
            "idade": "42 anos",
            "sexo": "Masculino",
            "estadoDeSaude": "Regular",
            "tipoDePlano": "Seguro de Saúde",
            "acompanhante": "Maria"
        },
        {
            "idAtendimento": "13",
            "nome": "Isabel",
            "quarto": "19",
            "solicitacao": "Estou com frio",
            "horarioSolicitacao": "2023-11-14T23:30:00",
            "idade": "48 anos",
            "sexo": "Feminino",
            "estadoDeSaude": "Bom",
            "tipoDePlano": "Particular",
            "acompanhante": "Pedro"
        },
        {
            "idAtendimento": "14",
            "nome": "Antônio",
            "quarto": "21",
            "solicitacao": "Estou com calor",
            "horarioSolicitacao": "2023-11-15T00:45:00",
            "idade": "29 anos",
            "sexo": "Masculino",
            "estadoDeSaude": "Regular",
            "tipoDePlano": "Seguro de Saúde",
            "acompanhante": "Ana"
        },
        {
            "idAtendimento": "15",
            "nome": "Laura",
            "quarto": "16",
            "solicitacao": "Preciso de ajuda para ir ao banheiro",
            "horarioSolicitacao": "2023-11-15T02:00:00",
            "idade": "52 anos",
            "sexo": "Feminino",
            "estadoDeSaude": "Ruim",
            "tipoDePlano": "Particular",
            "acompanhante": "Gustavo"
        },
        {
            "idAtendimento": "16",
            "nome": "Fernando",
            "quarto": "24",
            "solicitacao": "Estou com sede",
            "horarioSolicitacao": "2023-11-15T03:15:00",
            "idade": "37 anos",
            "sexo": "Masculino",
            "estadoDeSaude": "Regular",
            "tipoDePlano": "Seguro de Saúde",
            "acompanhante": "Renata"
        },
        {
            "idAtendimento": "17",
            "nome": "Carla",
            "quarto": "23",
            "solicitacao": "Preciso de assistência médica",
            "horarioSolicitacao": "2023-11-15T04:30:00",
            "idade": "47 anos",
            "sexo": "Feminino",
            "estadoDeSaude": "Bom",
            "tipoDePlano": "Particular",
            "acompanhante": "Antônio"
        },
        {
            "idAtendimento": "18",
            "nome": "Hugo",
            "quarto": "25",
            "solicitacao": "Estou com fome",
            "horarioSolicitacao": "2023-11-15T05:45:00",
            "idade": "33 anos",
            "sexo": "Masculino",
            "estadoDeSaude": "Regular",
            "tipoDePlano": "Seguro de Saúde",
            "acompanhante": "Isabel"
        },
        {
            "idAtendimento": "19",
            "nome": "Daniela",
            "quarto": "26",
            "solicitacao": "Estou com frio",
            "horarioSolicitacao": "2023-11-15T07:00:00",
            "idade": "41 anos",
            "sexo": "Feminino",
            "estadoDeSaude": "Bom",
            "tipoDePlano": "Particular",
            "acompanhante": "Hugo"
        },
        {
            "idAtendimento": "20",
            "nome": "Elena",
            "quarto": "27",
            "solicitacao": "Estou com calor",
            "horarioSolicitacao": "2023-11-15T08:15:00",
            "idade": "30 anos",
            "sexo": "Feminino",
            "estadoDeSaude": "Ruim",
            "tipoDePlano": "Particular",
            "acompanhante": "João"
        }
    ]);
});

router.post("/finish-service", (req, res) => {
    res.json({ mensagem: "Serviço finalizado" });
});


app.use(router);

app.listen(3001, () => {
    console.log("rodando na porta 3001");
});
