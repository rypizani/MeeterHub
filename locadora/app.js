const express = require("express");
const bodyParser = require("body-parser");

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
app.use("/pais", paisRouter); //endpoint pais
app.use("/filme", filmeRouter); //endpoint filme
app.use("/distribuidora", distribuidoraRouter); //endpoint distribuidora
app.use("/login", loginRouter); //endpoint distribuidora
app.use("/alocacoes", alocacoesRouter); //endpoint distribuidora
app.use("/ator", atorRouter); //endpoint distribuidora
app.use("/genero", generoRouter); //endpoint distribuidora

app.listen(porta, () => {
  console.log(`servidor no ar na porta ${porta}`);
});

// const verificacaoAdmin = require('./middleware/verificacaoAdministrador')

// app.use('/pais', verificacaoAdmin , paisRouter, (req, res) => {
//     res.json({msg: 'Não autorizado'})
// }); //endpoint pais
