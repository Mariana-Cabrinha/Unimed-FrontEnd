const Alexa = require("ask-sdk-core");
const AWSXRay = require("aws-xray-sdk-core");
const captureMySQL = require("aws-xray-sdk-mysql");
const mysql = require("mysql2/promise");
const AWS = require("aws-sdk");

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

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === "LaunchRequest"
    );
  },
  handle(handlerInput) {
    const speechText =
      "Bem vindo ao central de ajuda da unimed, para abrir o menu fale abrir menu";
    console.log(speechText);
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  },
};

const chamarMenuHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest" &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === "chamarMenu"
    );
  },
  async handle(handlerInput) {
    const cpf = await handlerInput.requestEnvelope.request.intent.slots.cpf
      .value;
    const acao = await handlerInput.requestEnvelope.request.intent.slots.menu
      .value;
      const setor = await handlerInput.requestEnvelope.request.intent.slots.setor
      .value;
    let pessoaFisica = null;
    try {
      var connection = await mysql.createConnection(connectionConfig);


      const [rows, fields] = await connection.execute(
        "SELECT * FROM pessoa_fisica WHERE nr_cpf = ?",
        [cpf]
      );
      console.log(rows);
      if(rows.length >0){
        pessoaFisica = rows[0];
        await connection.execute(
          "INSERT INTO chamados (texto,pessoa_fisica_id,chamado_status_id, cd_setor_atendimento) VALUES (?,?,1,?)",
          [acao,pessoaFisica.cd_pessoa_fisica,setor]
        );

      }
      await connection.end();

    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
    
    return handlerInput.responseBuilder.speak('O chamado foi registrado com sucesso em nome de '+ pessoaFisica.nm_pessoa_fisica+', aguarde alguns minutos que ele será atendido').getResponse();
  },
};

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(LaunchRequestHandler, chamarMenuHandler)
  .lambda();
