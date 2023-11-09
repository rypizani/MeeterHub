const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 
const porta = 3000; 

app.use(bodyParser.json());

// import Rotas
const distribuidoraRouter = require('./router/distribuidoraRouter');
const filmeRouter = require('./router/filmeRouter');
const  paisRouter = require('./router/paisRouter');

// rotas sendo usadas
app.use('/pais', paisRouter);//endpoint pais
app.use('/filme', filmeRouter);//endpoint filme
app.use('/distribuidora', distribuidoraRouter);//endpoint distribuidora


app.listen( porta, () => {
    console.log(`servidor no ar na porta ${porta}`); 
})