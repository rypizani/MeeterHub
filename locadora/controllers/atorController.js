const ModeloAtor = require('../models/atorModel')

class AtorController{

    async criarAtor(req, res) {
        const ator = req.body;
        try {
            const idAtor = await ModeloAtor.criarAtor(ator);
            res.status(201).json({ id_ator: idAtor });
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao criar um Ator" });
        }
    }

    async obterTodosAtores(req, res) {
        try {
            const ator = await ModeloAtor.obterTodosAtores();
            res.status(200).json(ator);
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar todos atores' });
        }
    }

    async obterAtorPorId(req, res) {
        const id = req.params.id;
        try {
            const ator = await ModeloAtor.obterAtorPorId(id);
            if (ator) {
                res.status(200).json(ator);
            } else {
                res.status(404).json({ erro: 'Ator não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar Ator' });
        }
    }

    async atualizarAtor(req, res) {
        const id = req.params.id;
        const ator = req.body;
        try {
            const resultado = await ModeloAtor.atualizarAtor(id, ator);
            if (resultado) {
                res.status(200).json({ msg: 'Ator atualizado com sucesso' });
            } else {
                res.status(404).json({ erro: 'Ator não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao atualizar ator' });
        }
    }

    async excluirAtor(req, res) {
        const id = req.params.id;
        try {
            const resultado = await ModeloAtor.excluirAtor(id);
            if (resultado) {
                res.status(200).json({ msg: 'Ator excluído com sucesso' });
            } else {
                res.status(404).json({ erro: 'Ator não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao excluir ator' });
        }
    }
}

module.exports  = new AtorController();