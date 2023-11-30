const { forgotPassword } = require('../../models/ForgotPassword/ForgotPassword');
const { Login } = require('../../models/Login/Login');
const bcrypt = require('bcrypt');
const { JWTController } = require('../../middleware/JWTController');

exports.redefinirSenhaController = {

    async trocandoSenha (req, res) {
        const { senha, tokenJWT } = req.body;

        try {
            // Buscar o registro pelo email fornecido
            const registro = await forgotPassword.findOne({
                where: { tokenJWT: tokenJWT }
            });

            if (registro) {
                // Comparar a senha fornecida com a senha armazenada usando bcrypt
                const senhaCorreta = await bcrypt.compare(senha, registro.senha);
                console.log(senhaCorreta);

                if (senhaCorreta) {
                    // Senha correta, criar o login
                    const login = await Login.create({
                        email: registro.email,
                        senha: senhaCorreta,
                    });

                     // Criar token JWT
                     const payload = { 
                        email: registro.email,
                        senha: senhaCorreta
                    };

                     const tokens = JWTController.createToken(payload);
 
                     // Salvar o token na coluna tokenJWT da tabela Login
                     login.tokenJWT = tokens.access_token;
                     await login.save()

                    // Retornar o registro do usuário
                    return res.status(201).json({ mensagem: 'Usuário autenticado', login });
                } else {
                    // Senha incorreta
                    return res.status(401).json({ mensagem: 'Credenciais inválidas' });
                }
            } else {
                // Usuário não encontrado
                return res.status(403).json({ mensagem: 'Usuário não encontrado' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensagem: 'Erro durante a busca e comparação de senha' });
        }
    },
};