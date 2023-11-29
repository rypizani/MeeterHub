const bcrypt = require('bcrypt');
const { Registro } = require('../../models/Registro/Registro');

async function login(req, res, next) {
    const { email, senha } = req.params; // ou req.body, dependendo de como você está enviando os dados

    try {
        const registro = await Registro.findOne({
            where: { email: email }
        });

        if (registro) {
            const senhaCorreta = await bcrypt.compare(senha, registro.senha);

            if (senhaCorreta) {
                req.usuarioAutenticado = registro;
                next(); // Chama o próximo middleware ou rota
            } else {
                res.status(401).json({ mensagem: 'Credenciais inválidas' });
            }
        } else {
            res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: 'Erro durante a busca e comparação de senha' });
    }
}

module.exports = login;
