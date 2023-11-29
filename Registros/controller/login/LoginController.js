const { Registro } = require('../../models/Registro/Registro');
const { Login } = require('../../models/Login/Login');
const bcrypt = require('bcrypt');

exports.LoginController = {

    async accessByEmailAndComparePassword(req, res) {
        const { email, senha } = req.body;

        try {
            // Buscar o registro pelo email fornecido
            const registro = await Registro.findOne({
                where: { email: email }
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