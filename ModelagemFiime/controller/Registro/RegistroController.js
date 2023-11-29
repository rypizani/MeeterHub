const { Registro } = require('../../models/Registro/Registro');
const bcrypt = require('bcrypt');

exports.RegistroController = {

    async post (req,res){
        const { nome, email, endereco, senha, CEP } = req.body;
        try{
            const hashedPassword = await bcrypt.hash(senha, 10)
            const registro = await Registro.create({                
                nome,
                email,
                endereco,
                senha: hashedPassword,
                CEP
            })
            return res.status(201).json(registro);
        } catch (erro) {
            res.status(500).json({erro: "Erro ao criar registro"})
        }
    },

    async getAll (req, res){
        try{
            const registro = await  Registro.findAll();
            res.status(201).json({registro});
        } catch (erro) {
            res.status(500).json({message: 'Erro ao buscar registro'})
        }
    },

    async getById (req,res){
        const registroId = req.params.registroId;
        try {
            const registro = await Registro.findByPk(registroId)
            // fazer find by registro;
            if(registro){
                return res.status(200).json(registro);
            } else {
                return res.status(404).json({menssage: 'Registro não encontrado'});
            }
        } catch (error) {
            res.status(500).json({menssage: 'Erro ao buscar o registro'})
        }
    },

    //Get por email
    async getByEmail(req, res) {
        const email = req.params.email; // Ou você pode pegar o email de req.query ou req.body, dependendo de como estiver sendo enviado
    
        try {
            const registro = await Registro.findOne({
                where: { email: email }
            });
    
            if (registro) {
                return res.status(200).json(registro);
            } else {
                return res.status(404).json({ mensagem: 'Registro não encontrado' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensagem: 'Erro ao buscar o registro por email' });
        }
    },

    //BUscando email e senha no banco
    async  getByEmailAndComparePassword(req, res) {
        const email = req.params.email;
        const senha = req.params.senha;
        try {
            // Buscar o registro pelo email fornecido
            const registro = await Registro.findOne({
                where: { email: email }
            });
            //const hashedPassword = await bcrypt.hash(senha, 10)
            if (registro) {
                // Comparar a senha fornecida com a senha armazenada usando bcrypt
                const senhaCorreta = await bcrypt.compare(senha, registro.senha);
    
                if (senhaCorreta) {
                    // Senha correta, retornar o registro do usuário
                    return res.status(200).json({ mensagem: 'Usuário autenticado', registro: registro });
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
    

    async put (req, res){
        const registroId = req.params.registroId;
        const{ nome, email, senha, endereco, CEP }= req.body;
        try {
            const hashedPassword = await bcrypt.hash(senha, 10);
            const registroEncontrado = await Registro.findByPk(registroId);
    
            if (registroEncontrado) {
                const registroAtualizado = await Registro.update({
                    nome,
                    email,
                    endereco,
                    senha: hashedPassword,
                    CEP
                }, {
                    where: { registroId: registroId }
                });
    
                res.status(200).json(registroEncontrado);
            } else {
                res.status(404).json({ mensagem: 'Registro não encontrado' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao atualizar um registro" });
      
        }
    },

    async delete (req, res){
        const registroId = req.params.registroId;
        try {
            const registro = await Registro.findByPk(registroId);
            if(registro){
                await registro.destroy();
                res.status(204).json({menssage: 'Excluido com sucesso'})
            } else {
                res.status(404).json({menssage: 'Registro não encontrado'})
            }
        } catch (error) {
            res.status(500).json({ erro: "Erro ao excluir um registro" });
        }
    }
}