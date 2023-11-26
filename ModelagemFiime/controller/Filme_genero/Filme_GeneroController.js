const { FilmeGenero } = require('../../models/Filme_genero/Filme_genero');

exports.FilmeGeneroController = {
  async post(req, res) {
    const { id_filme, id_genero } = req.body;
    try {
      const filmeGenero = await FilmeGenero.create({
        id_filme,
        id_genero,
      });
      return res.status(201).json(filmeGenero);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao criar filme e genero relacionados" });
    }
  },

  async getAll(req, res) {
    try {
      const filmeGenero = await FilmeGenero.findAll();
      res.status(200).json({ filmeGenero });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar filme e genero relacionados' });
    }
  },

  async getById(req, res) {
    const filmeGeneroId = req.params.filmeGeneroId;
    try {
      const filmeGenero = await FilmeGenero.findByPk(filmeGeneroId);
      if (filmeGenero) {
        return res.status(200).json(filmeGenero);
      } else {
        return res.status(404).json({ message: 'Filme e generos relacionados não encontrados' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar filme e generos relacionados' });
    }
  },

  async put(req, res) {
    const filmeGeneroId = req.params.filmeAlocacaoId;
    const { id_filme, id_genero } = req.body;
    try {
      const filmeGenero = await FilmeGenero.findByPk(filmeGeneroId);
      if (filmeGenero) {
        await filmeGenero.update({ id_filme, id_genero });
        res.status(200).json(filmeGenero);
      } else {
        res.status(404).json({ message: 'Relacionamento filme genero não encontrados' });
      }
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao atualizar filme genero' });
    }
  },

  async delete(req, res) {
    const filmeGeneroId = req.params.filmeGeneroId;
    try {
      const filmeGenero = await FilmeGenero.findByPk(filmeGeneroId);
      if (filmeGenero) {
        await filmeGenero.destroy();
        res.status(204).json({ message: 'Excluído com sucesso' });
      } else {
        res.status(404).json({ message: 'Filme genero não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao excluir filme genero' });
    }
  },
};