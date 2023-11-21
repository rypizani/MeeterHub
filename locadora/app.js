const express = require("express");
const bodyParser = require("body-parser");
const verificarAcesso = require("../locadora/middleware/acesso");

const app = express();
const porta = 3000;

app.use(bodyParser.json());

// import Rotas
const distribuidoraRouter = require("./router/distribuidoraRouter");
const paisRouter = require("./router/paisRouter");
const filmeRouter = require("./router/filmeRouter");
const loginRouter = require("./router/loginRouter");
const alocacoesRouter = require("./router/alocacoesRouter");
const atorRouter = require("./router/atorRouter");
const generoRouter = require("./router/generoRouter");

// rotas sendo usadas
app.use("/pais", verificarAcesso, paisRouter); // Endpoint pais
app.use("/filme", filmeRouter); // Endpoint filme
app.use("/distribuidora", verificarAcesso, distribuidoraRouter); // Endpoint distribuidora
app.use("/login", verificarAcesso, loginRouter); // Endpoint login
app.use("/alocacoes", verificarAcesso, alocacoesRouter); // Endpoint alocacoes
app.use("/ator", verificarAcesso, atorRouter); // Endpoint ator
app.use("/genero", verificarAcesso, generoRouter); // Endpoint genero

app.listen(porta, () => {
  console.log('servidor no ar na porta ${porta}');
});

//comentario de atualização