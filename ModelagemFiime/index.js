const express = require('express');
const cors = require('cors');
const path = require('path');
require ("dotenv").config();
const app = express();
//Imports aqui \/ 
const LoginRouter = require('./router/Login/LoginRouter');
const FilmeRouter = require('./router/Filme/FilmeRouter');
const GeneroController = require('./router/Genero/GeneroRouter')  
const AtorRouter = require('./router/Ator/AtorRouter');
const { LoginValidator }= require('./middleware/Validator/LoginValidator')
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

app.use("/ator", AtorRouter);
app.use("/filme", FilmeRouter);
app.use( "/login", LoginRouter);
app.use( "/genero", GeneroController)


app.get("/", (req, res) => {
    res.send({ message: 'Welcome to the matrix' });   
});

app.listen(porta, () => {
    console.log('servidor no ar na porta 3000');
});