const { ForgotPassword } = require('../../models/ForgotPassword/ForgotPassword');
const { JWTController } = require('../../middleware/JWTController');
const nodemailer = require('nodemailer');

// Certifique-se de configurar 'transporter' corretamente

exports.forgotPasswordController = {
    async sendEmailToken(req, res) {
        const { email } = req.body;

        try {
            const payload = {
                email: email,
            };

            const resetToken = JWTController.createToken(payload);

            await ForgotPassword.create({
                email: email,
                tokenJWT: resetToken.access_token,
            });

            //Configuração do transporter
            const transporter = nodemailer.createTransport({
                host: "smtp.hostinger.com",
                port: 465, // A porta pode ser 587 ou 465, dependendo das configurações do seu provedor
                secure: true, // Use true para a porta 465, false para a porta 587
                auth: {
                  user: "contato@rhuna.tech", // Substitua pelo seu endereço de e-mail
                  pass: "Rhunatech2023#", // Substitua pela sua senha
                },
                tls:{rejectUnauthorized: false,},
              });

            // Configuração para envio de email
            const resetLink = `${resetToken}`;
            const mailOptions = {
                from: "contato@rhuna.tech",
                to: email,
                subject: "Redefinição de Senha",
                html: `Você solicitou a redefinição de senha. Copie e cole a chave no campo solicitado ${resetLink}`,
            };

            // Enviar o email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error(error);
                    return res.status(500).json({ errors: { msg: "Falha ao enviar e-mail de redefinição" } });
                }

                // Responder apenas após o e-mail ser enviado com sucesso
                const responseObj = {
                    email: email,
                    tokenJWT: resetToken.access_token,
                };
                res.status(200).json(responseObj);
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: { msg: "Erro ao enviar o token de redefinição" } });
        }
    },
};