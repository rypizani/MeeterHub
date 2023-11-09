const ModeloFilme = require('../models/filmeModel')

class FilmeController{
    async criarFilme(req, res) {
        const filme = req.body;
        try {
            const idFilme = await ModeloFilme.criarFilme(filme);
            res.status(201).json({ id_filme: idFilme });
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao criar um Filme" });
        }
    }

    async obterTodosFilmes(req, res) {
        try {
            const filmes = await ModeloFilme.obterTodosFilmes();
            res.status(200).json(filmes);
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar todos filmes' });
        }
    }

    async obterFilmesPorId(req, res) {
        const id = req.params.id;
        try {
            const filme = await ModeloFilme.obterFilmesPorId(id);
            if (filme) {
                res.status(200).json(filme);
            } else {
                res.status(404).json({ erro: 'Filme não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar filme' });
        }
    }

    async atualizarFilme(req, res) {
        const id = req.params.id;
        const filme = req.body;
        try {
            const resultado = await ModeloFilme.atualizarFilme(id, filme);
            if (resultado) {
                res.status(200).json({ msg: 'Filme atualizado com sucesso' });
            } else {
                res.status(404).json({ erro: 'Filme não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao atualizar Filme' });
        }
    }

    async excluirFilme(req, res) {
        const id = req.params.id;
        try {
            const resultado = await ModeloFilme.excluirFilme(id);
            if (resultado) {
                res.status(200).json({ msg: 'Filme excluído com sucesso' });
            } else {
                res.status(404).json({ erro: 'Filme não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao excluir filme' });
        }
    }

}
module.exports  = new FilmeController();