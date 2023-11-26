const { FilmeAlocacoes } = require('../../models/Filme_alocacoes/Filme_alocacoes');

exports.FilmeAlocacoesController = {
  async post(req, res) {
    const { id_filme, id_filme_distribuidora } = req.body;
    try {
      const filmeAlocacao = await FilmeAlocacoes.create({
        id_filme,
        id_filme_distribuidora,
      });
      return res.status(201).json(filmeAlocacao);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao criar alocação de filme" });
    }
  },

  async getAll(req, res) {
    try {
      const filmeAlocacoes = await FilmeAlocacoes.findAll();
      res.status(200).json({ filmeAlocacoes });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar alocações de filme' });
    }
  },

  async getById(req, res) {
    const filmeAlocacaoId = req.params.filmeAlocacaoId;
    try {
      const filmeAlocacao = await FilmeAlocacoes.findByPk(filmeAlocacaoId);
      if (filmeAlocacao) {
        return res.status(200).json(filmeAlocacao);
      } else {
        return res.status(404).json({ message: 'Alocação de filme não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar alocação de filme' });
    }
  },

  async put(req, res) {
    const filmeAlocacaoId = req.params.filmeAlocacaoId;
    const { id_filme, id_filme_distribuidora } = req.body;
    try {
      const filmeAlocacao = await FilmeAlocacoes.findByPk(filmeAlocacaoId);
      if (filmeAlocacao) {
        await filmeAlocacao.update({ id_filme, id_filme_distribuidora });
        res.status(200).json(filmeAlocacao);
      } else {
        res.status(404).json({ message: 'Alocação de filme não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao atualizar alocação de filme' });
    }
  },

  async delete(req, res) {
    const filmeAlocacaoId = req.params.filmeAlocacaoId;
    try {
      const filmeAlocacao = await FilmeAlocacoes.findByPk(filmeAlocacaoId);
      if (filmeAlocacao) {
        await filmeAlocacao.destroy();
        res.status(204).json({ message: 'Excluído com sucesso' });
      } else {
        res.status(404).json({ message: 'Alocação de filme não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao excluir alocação de filme' });
    }
  },
};