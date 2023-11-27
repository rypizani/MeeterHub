const express = require('express');
const cors = require('cors');
const path = require('path');
require("dotenv").config();
const app = express();

// Outros imports aqui ...

const LoginRouter = require('./router/Login/LoginRouter');
const AtorRouter = require('./router/Ator/AtorRouter');
const FilmeRouter = require('./router/Filme/FilmeRouter');
const GeneroRouter = require('./router/Genero/GeneroRouter');
const DistribuidoraRouter = require('./router/Distribuidora/Distribuidora');
const PaisRouter = require('./router/Pais/PaisRouter');
const AlocacoesRouter = require('./router/Alocacoes/AlocacoesRouter');
const FilmeAlocacoesRouter = require('./router/Filme_alocacoes/FilmeAlocacoesRouter'); // Importe o roteador FilmeAlocacoesRouter
const FilmeGeneroRouter = require('./router/Filme_genero/FilmeGeneroRouter');
const FilmeAtorRouter = require('./router/Filme_ator/FilmeAtorRouter');

const { LoginValidator } = require('./middleware/Validator/LoginValidator');

const porta = 3000;

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE");
  res.header("Access-Control-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  );
  express.application.use(cors());
  next();
})

app.use("/login", LoginRouter);
app.use("/ator", AtorRouter);
app.use("/filme", FilmeRouter);
app.use("/genero", GeneroRouter);
app.use("/distribuidora", DistribuidoraRouter);
app.use("/pais", PaisRouter);
app.use("/alocacoes", AlocacoesRouter);
app.use("/filme_alocacoes", FilmeAlocacoesRouter); // Adicione o roteador FilmeAlocacoesRouter
app.use("/filme_genero", FilmeGeneroRouter); // Adicione o roteador FilmeGeneroRouter
app.use("/Filme_ator", FilmeAtorRouter); // Adicione o roteador FilmeGeneroRouter

app.get("/", (req, res) => {
  res.send({ message: 'Welcome to the matrix' });
});

app.listen(porta, () => {
  console.log('servidor no ar na porta 3000');
});
