const { ForgotPassword } = require('../../models/ForgotPassword/ForgotPassword');
const { JWTController } = require('../../middleware/JWTController');

exports.forgotPasswordController = {

    async sendEmailToken (req, res) {
        const { email } = req.body;

        try {

            const payload = {
                email: email,
            };

            const resetToken = JWTController.createToken(payload);

            const login = await ForgotPassword.create({
                email: email,
                tokenJWT: resetToken.access_token, // Corrigindo aqui
            });

            const responseObj = {
                email: login.email, // ou login.get('email') dependendo do modelo
                tokenJWT: resetToken.access_token,
            };
        

            // Aqui você geralmente enviaria um e-mail para o usuário contendo o link de redefinição

            res.status(201).json({ mensagem: 'Token de redefinição enviado com sucesso', responseObj });

        } catch (error) {
            
            console.error(error);
            res.status(500).json({ mensagem: 'Erro ao enviar o token de redefinição' });
        }
    },
};