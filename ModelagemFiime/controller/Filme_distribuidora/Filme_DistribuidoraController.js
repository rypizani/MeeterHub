const { FilmeDistribuidora } = require('../../models/Filme_distribuidora/Filme_distribuidora');

exports.FilmeDistribuidoraController = {
  async post(req, res) {
    const {id_filme, id_distribuidora } = req.body;
    try {
      const filmeDistribuidora = await FilmeDistribuidora.create({
        id_filme,
        id_distribuidora,
      });
      return res.status(201).json(filmeDistribuidora);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao criar distribuidora do filme" });
    }
  },

  async getAll(req, res) {
    try {
      const filmeDistribuidora = await FilmeDistribuidora.findAll();
      res.status(200).json({ filmeDistribuidora });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar distribuidora do filme' });
    }
  },

  async getById(req, res) {
    const filmeDistribuidoraId = req.params.filmeDistribuidoraId;
    try {
      const filmeDistribuidora = await FilmeDistribuidora.findByPk(filmeDistribuidoraId);
      if (filmeDistribuidora) {
        return res.status(200).json(filmeDistribuidora);
      } else {
        return res.status(404).json({ message: 'Distribuidora do filme não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar Distribuidora do filme' });
    }
  },

  async put(req, res) {
    const filmeDistribuidoraId = req.params.filmeDistribuidoraId;
    const {id_filme, id_distribuidora } = req.body;
    try {
      const filmeDistribuidora = await FilmeDistribuidora.findByPk(filmeDistribuidoraId);
      if (filmeDistribuidora) {
        await filmeDistribuidora.update({id_filme, id_distribuidora });
        res.status(200).json(filmeDistribuidora);
      } else {
        res.status(404).json({ message: 'Distribuidora do filme não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao atualizar Distribuidora do filme' });
    }
  },

  async delete(req, res) {
    const filmeDistribuidoraId = req.params.filmeDistribuidoraId;
    try {
      const filmeDistribuidora = await FilmeDistribuidora.findByPk(filmeDistribuidoraId);
      if (filmeDistribuidora) {
        await filmeDistribuidora.destroy();
        res.status(204).json({ message: 'Excluído com sucesso' });
      } else {
        res.status(404).json({ message: 'Distribuidora do filme não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao excluir Distribuidora do filme' });
    }
  },
};