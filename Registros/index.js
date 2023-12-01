const express = require('express');
const cors = require('cors');
const path = require('path');
require("dotenv").config();
const app = express();
const { JWTController } =require('./middleware/JWTController')

//Os imports vem aqui
const RegistroRouter = require('./router/Registro/registroRouter');
const LoginRouter = require('./router/Login/loginRouter');
const forgotPasswordRouter = require('./router/ForgotPassword/forgotPasswordRouter');
const { HomeController } =require('./controller/HomeController');


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
//Rotas do controle de registro
app.post("/registro", HomeController.register )
app.post("/login", HomeController.login )
app.post("/refreshPassword",HomeController.refreshPassword)
app.post("/forgetpassword", HomeController.forgetPassword )


app.get("/", (req, res) => {
    res.send({ message: 'Olá' });
});

app.listen(porta, () => {
    console.log('servidor no ar na porta 3000');
});