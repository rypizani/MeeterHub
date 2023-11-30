const { JWTController } = require('../../middleware/JWTController');

exports.LoginController = {

    async sendEmailToken(req, res) {
        const { email } = req.body;

        try {
            const payload = {
                email: email,
                // outras informações relevantes, se aplicável
            };

            const resetToken = JWTController.createToken(payload);

            // Aqui você geralmente enviaria um e-mail para o usuário contendo o link de redefinição

            // usando o resetToken.access_token como parte do link

            res.status(200).json({ mensagem: 'Token de redefinição enviado com sucesso' });

        } catch (error) {
            
            console.error(error);
            res.status(500).json({ mensagem: 'Erro ao enviar o token de redefinição' });
        }
    },
};