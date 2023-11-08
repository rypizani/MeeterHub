const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 
const porta = 3000; 

app.use(bodyParser.json());

const  paisRouter = require('./router/paisRouter');

app.use('/pais', paisRouter);

app.listen( porta, () => {
    console.log(`servidor no ar na porta ${porta}`); 
})