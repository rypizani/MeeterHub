const express = require('express');
const cors = require('cors');
const path = require('path');
require("dotenv").config();
const app = express();

//Os imports vem aqui
const RegistroRouter = require('./router/Registro/registroRouter');
const LoginRouter = require('./router/Login/loginRouter');
const forgotPasswordRouter = require('./router/ForgotPassword/forgotPasswordRouter')


const porta = 3000;

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Orgin", "http://localhost:4200");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE");
    res.header("Access-Control-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type,Accept"
    );
    express.application.use(cors());
    next();
});

//Os endpoints vem aqui
app.use("/registro", RegistroRouter);
app.use("/login", LoginRouter);
app.use("/forgotpassword", forgotPasswordRouter);


app.get("/", (req, res) => {
    res.send({ message: 'Olá' });
});

app.listen(porta, () => {
    console.log('servidor no ar na porta 3000');
});