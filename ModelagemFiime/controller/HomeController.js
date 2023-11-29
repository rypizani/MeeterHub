const bcrypt = require('bcrypt');
const { Registro } = require('../models/Registro/Registro');
const { RegistroController } = require('../controller/Registro/RegistroController');
// const transporter = require('./mailer');
// const nodemailer = require('nodemailer');
const { JWTController } = require('../middleware/JWTController');

const transporter = nodemailer.createTransport({
    
    host: "smtp.hostinger.com", // Substitua "yourdomain.com" pelo seu domínio na Hostinger
    port: 465, // A porta pode ser 587 ou 465, dependendo das configurações do seu provedor
    secure: true, // Use true para a porta 465, false para a porta 587
    auth: {
     user: "contato@rhuna.tech", // Substitua pelo seu endereço de e-mail
     pass: "Rhunatech2023#", // Substitua pela sua senha
    }
})

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
        const token = JWTController.createToken({ email: registro.email }, true);

        const responseData = {
            user: {
              nome: registro.nome,
              emailprinc: registro.emailprinc,
              tpusuario: registro.tpusuario,
              cpf: registro.cpf,
            },
          };

          res.json({responseData, accessToken: token.access_token});

    },

    async login(req, res, next) { // ou req.body, dependendo de como você está enviando os dados

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
    },

}
	
// const  transport = nodemailer.createTransport({smtpOptions});
 
//    let  message = `<p>Use esse token para resetar sua senha <code>/apiRouter/reset-password</code> api route:</p>
//                        <p><code>${resetToken}</code></p>`; // Here you can replace the message with your HTML code.
 
//   const  mailOptions = {
//     from: process.env.EMAIL_FROM,
//     to: email, // the user email
//     subject: ' Reset your Password',
//     html: `<h4>Reset Password</h4>
//                    ${message}`
//    };
 
//    const  info = transport.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log("Message sent: %s", info.messageId);
// });

