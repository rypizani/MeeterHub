const ModeloLogin = require('../models/loginModel')

class Acesso {

    constructor(){
    }

    async autorizarTipoLogin(idUsuario, res) {
        try {

            const login = await ModeloLogin.obterLoginsPorId(idUsuario); 

            // Autorizando todos os tipos de login iguais a 1
            if(login.tp_login === '1' ){
                return true                
            } else {
                res.status(403).json({ erro: 'Acesso não autorizado' });
                return false;
            }
          
        } catch (erro) {
            console.error('Erro ao obter tipo de login:', erro);
            return false;
        }

    }

    async authenticate (req, res, next){
        // Aqui se carrega o idUsuario do front
        // Id de user 2 para não administrador e 3 para administrador
        const idUsuario = 2;
        
        try{
            const login = await ModeloLogin.obterLoginsPorId(idUsuario); 
            
            if(login && login.tp_login === '1'){
                next();
            } else {
                res.status(401).json({ error: 'Credenciais inválidas.' });
            }
        
        } catch (erro) {
            console.error('Erro ao autenticar:', erro);
        }
    }
}

module.exports = new Acesso();




// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const app = express();
// // const port = 3000;

// const authenticate = (req, res, next) => {
//   const { username, password } = req.headers;

//   // Verificar se as credenciais são válidas (apenas para fins de exemplo)
//   if (username === 'usuario' && password === 'senha') {
//     next(); // Credenciais válidas, permitir acesso à rota
//   } else {
//     res.status(401).json({ error: 'Credenciais inválidas.' });
//   }
// };

// app.use(bodyParser.json());

// app.post('/getMiddle', authenticate, (req, res) => {
//   const arr = req.body.array;
//   if (!arr || !Array.isArray(arr)) {
//     return res.status(400).json({ error: 'Por favor, forneça um array válido no corpo da solicitação.' });
//   }
//   if (arr.length % 2 === 1) {
//     const middleIndex = Math.floor(arr.length / 2);
//     res.json({ result: arr[middleIndex] });
//   } else {
//     const middleIndex1 = arr.length / 2 - 1;
//     const middleIndex2 = arr.length / 2;
//     res.json({ result: [arr[middleIndex1], arr[middleIndex2]] });
//   }
// });
// app.listen(port, () => {
//   console.log(Servidor rodando em http://localhost:${port});
// });