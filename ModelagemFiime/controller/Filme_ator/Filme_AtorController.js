const { FilmeAtor } = require('../../models/Filme_ator/Filme_ator');

exports.FilmeAtorController = {
  async post(req, res) {
    const { id_filme, id_ator } = req.body;
    try {
      const filmeAtor = await FilmeAtor.create({
        id_filme,
        id_ator,
      });
      return res.status(201).json(filmeAtor);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao criar filme ator" });
    }
  },

  async getAll(req, res) {
    try {
      const filmeAtor = await FilmeAtor.findAll();
      res.status(200).json({ filmeAtor });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar filme ator' });
    }
  },

  async getById(req, res) {
    const filmeAtorId = req.params.filmeAtorId;
    try {
      const filmeAtor = await FilmeAtor.findByPk(filmeAtorId);
      if (filmeAtor) {
        return res.status(200).json(filmeAtor);
      } else {
        return res.status(404).json({ message: 'Filme ator não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar filme ator' });
    }
  },

  async put(req, res) {
    const filmeAtorId = req.params.filmeAtorId;
    const { id_filme, id_ator } = req.body;
    try {
      const filmeAtor = await FilmeAtor.findByPk(filmeAtorId);
      if (filmeAtor) {
        await filmeAtor.update({ id_filme, id_ator });
        res.status(200).json(filmeAtor);
      } else {
        res.status(404).json({ message: 'Filme ator não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao atualizar filme ator' });
    }
  },

  async delete(req, res) {
    const filmeAtorId = req.params.filmeAtorId;
    try {
      const filmeAtor = await FilmeAtor.findByPk(filmeAtorId);
      if (filmeAtor) {
        await filmeAtor.destroy();
        res.status(204).json({ message: 'Excluído com sucesso' });
      } else {
        res.status(404).json({ message: 'Filme ator não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao excluir filme ator' });
    }
  },
};