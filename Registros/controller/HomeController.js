const bcrypt = require('bcrypt');
const { Registro } = require('../models/Registro/Registro');
const { connect } = require("../dbconfig");
const { RegistroController } = require('../controller/registro/RegistroController');
const { JWTController } = require('../middleware/JWTController');
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com", // Substitua "yourdomain.com" pelo seu domínio na Hostinger
  port: 465, // A porta pode ser 587 ou 465, dependendo das configurações do seu provedor
  secure: true, // Use true para a porta 465, false para a porta 587
  auth: {
    user: "contato@rhuna.tech", // Substitua pelo seu endereço de e-mail
    pass: "Rhunatech2023#", // Substitua pela sua senha
  },
  tls:{rejectUnauthorized: false,},
});


exports.HomeController = {
  
  async forgetPassword(req, res){
    await connect();

    const email = req.body.email;
  const registro = await RegistroController.getByEmail(email);

  if (!registro) {
    return res.status(404).json({ errors: { msg: "User not found" } });
  }

  // Gere um token exclusivo para redefinição de senha (pode ser um UUID)
  const resetToken = bcrypt.hashSync(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), 10);
  // Armazene o token no banco de dados (você pode adicionar um campo 'resetToken' ao modelo Login)
  registro.token = resetToken;
  await registro.save();

  // Envie o e-mail com o link para redefinição de senha
  const resetLink = `${resetToken}`;
  const mailOptions = {
    from: "contato@rhuna.tech",
    to: email,
    subject: "Redefinição de Senha",
    html: `Você solicitou a redefinição de senha. Copie e cole a chave no campo solicitado ${resetLink}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
      return res.status(500).json({ errors: { msg: "Failed to send reset email" } });
    }

    res.status(200).json({ success: { msg: "Reset email sent successfully", token: resetToken } });
  });
  },


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

    async login(req, res){ // ou req.body, dependendo de como você está enviando os dados
        let registro = await RegistroController.getByEmail(req.body.email);
        // let para coisas mutaveis
        if(!registro){
            return res.status(404).json({message: "Não está cadastrado"});
        }
        if (bcrypt.compareSync(req.body.senha, registro.senha)) {
            // Senha correta, retornar o registro do usuário
            //Crete token para armazenar o token de acesso
            const token = JWTController.createToken({ email: registro.email }, true);
             res.status(200).json({ mensagem: 'Usuário autenticado', accessToken: token.access_token });
        } else {
            // Senha incorreta
            return res.status(401).json({ mensagem: 'Credenciais inválidas' });
        }
    },

    async refreshPassword (req, res) {
      const { email, token, senha } = req.body;
  
      try {
        // Buscar o registro pelo email fornecido
        const registro = await Registro.findOne({
          where: { email: email, token: token }
        });
  
        if (registro) {
  
          const hashedPassword = await bcrypt.hash(senha, 10);
                
          registro.token = null;
          registro.senha = hashedPassword;
  
          await registro.save();
              
          return res.status(201).json({ mensagem: 'Alteração realizada', registro });
  
          } else {
            // Senha incorreta
            return res.status(401).json({ mensagem: 'Credenciais inválidas' });
              }
      } catch (error) {
          console.error(error);
          res.status(500).json({ mensagem: 'Erro durante a busca e comparação de senha' });
      };
    }


}
	

