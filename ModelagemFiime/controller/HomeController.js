const bcrypt = require('bcrypt');
const { Registro } = require('../models/Registro/Registro');
const { RegistroController } = require('../controller/Registro/RegistroController');


exports.HomeController = {

    async register(req, res){
        let registro =  await RegistroController.getByEmail(req.body.email);

        if(registro){
            return res.status(400).json({message: "Este email já está cadastrado"});
        }

        const hashedPassword = bcrypt.hashSync(req.body.senha, 10);

        registro = await Registro.create({ 
            nome: req.body.nome, 
            email: req.body.email, 
            endereco: req.body.endereco, 
            senha: hashedPassword, 
            CEP: req.body.CEP
        });

        //Crete token para armazenar o token de acesso

        res.json({
            message: 'Cadastro realizado com sucesso', registro: {
                nome: registro.nome, 
                email: registro.email, 
                endereco: registro.endereco, 
                CEP: registro.CEP
            }
        })



    },

    async  login(req, res, next) { // ou req.body, dependendo de como você está enviando os dados

        const registro = await RegistroController.get
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // try {
        //     const registro = await RegistroController.getByEmail;
            
        //     let email = registro.params

        //     if(!registro){
        //         res.status(404).json({ mensagem: 'Email não encontrado, por favor registre-se.' });
        //     }

        //     if (registro) {
        //         const senhaCorreta = await bcrypt.compare(senha, registro.senha);

        //         if (senhaCorreta) {
        //             req.usuarioAutenticado = registro;
        //             next(); // Chama o próximo middleware ou rota
        //         } else {
        //             res.status(401).json({ mensagem: 'Credenciais inválidas' });
        //         }
        //     } else {
        //         res.status(404).json({ mensagem: 'Usuário não encontrado' });
        //     }
        // } catch (error) {
        //     console.error(error);
        //     res.status(500).json({ mensagem: 'Erro durante a busca e comparação de senha' });
        // }
    }
}

