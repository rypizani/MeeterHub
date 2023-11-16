const ModeloAlocacoes = require('../models/alocacoesModel')

class AlocacoesController{

    async criarAlocacoes(req, res) {
        const alocacoes = req.body;
        try {
            const idAlocacoes = await ModeloAlocacoes.criarAlocacoes(alocacoes);
            res.status(201).json({ id_alocacoes: idAlocacoes });
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao criar um Alocacoes" });
        }
    }

    async obterTodosAlocacoes(req, res) {
        try {
            const alocacoess = await ModeloAlocacoes.obterTodosAlocacoess();
            res.status(200).json(alocacoess);
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar todos Alocacoess' });
        }
    }

    async obterAlocacoesPorId(req, res) {
        const id = req.params.id;
        try {
            const alocacoes = await ModeloAlocacoes.obterAlocacoessPorId(id);
            if (alocacoes) {
                res.status(200).json(alocacoes);
            } else {
                res.status(404).json({ erro: 'Alocacoes não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar Alocacoes' });
        }
    }

    async atualizarAlocacoes(req, res) {
        const id = req.params.id;
        const alocacoes = req.body;
        try {
            const resultado = await ModeloAlocacoes.atualizarAlocacoes(id, alocacoes);
            if (resultado) {
                res.status(200).json({ msg: 'Alocacoes atualizado com sucesso' });
            } else {
                res.status(404).json({ erro: 'Alocacoes não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao atualizar Alocacoes' });
        }
    }

    async excluirAlocacoes(req, res) {
        const id = req.params.id;
        try {
            const resultado = await ModeloAlocacoes.excluirAlocacoes(id);
            if (resultado) {
                res.status(200).json({ msg: 'Alocacoes excluído com sucesso' });
            } else {
                res.status(404).json({ erro: 'Alocacoes não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao excluir Alocacoes' });
        }
    }

}
module.exports  = new AlocacoesController();