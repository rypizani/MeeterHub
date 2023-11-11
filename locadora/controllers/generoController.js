const ModeloGenero = require("../models/generoModel");

class GeneroController {
  
  async criarGenero(req, res) {

    // Aqui se carrega o idUsuario do front
    // Id de user 2 para não administrador e 3 para administrador
    const idUsuario = 2;
    const validacao = await acesso.autorizarTipoLogin(idUsuario, res);

    if(validacao){

      const genero = req.body;
        
      try {
        const idGenero = await ModeloGenero.criarGenero(genero);
        res.status(201).json({ id_genero: idGenero });
      } catch (erro) {
        res.status(500).json({ erro: "Erro ao criar Gênero" });
      }
    }
  }

  async obterTodosGeneros(req, res) {

    // Aqui se carrega o idUsuario do front
    // Id de user 2 para não administrador e 3 para administrador
    const idUsuario = 2;
    const validacao = await acesso.autorizarTipoLogin(idUsuario, res);

    if(validacao){

      try {
        const genero = await ModeloGenero.obterTodosGeneros();
        res.status(200).json(genero);
      } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar todos gêneros" });
      }
    }
  }

  async obterGeneroPorId(req, res) {

    const id = req.params.id;

    // Aqui se carrega o idUsuario do front
    // Id de user 2 para não administrador e 3 para administrador
    const idUsuario = 2;
    const validacao = await acesso.autorizarTipoLogin(idUsuario, res);

    if(validacao){

      try {
        
        const genero = await ModeloGenero.obterGeneroPorId(id);
        
        if (genero) {
          res.status(200).json(genero);
        } else {
          res.status(404).json({ erro: "Gênero não encontrado" });
        }
      } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar Gênero" });
      }
    }
  }

  async atualizarGenero(req, res) {

    const id = req.params.id;
    const genero = req.body;

    // Aqui se carrega o idUsuario do front
    // Id de user 2 para não administrador e 3 para administrador
    const idUsuario = 2;
    const validacao = await acesso.autorizarTipoLogin(idUsuario, res);
    
    if(validacao){
    
      try {

        const resultado = await ModeloGenero.atualizarGenero(id, genero);
      
        if (resultado) {
          res.status(200).json({ msg: "Gênero atualizado com sucesso" });
        } else {
          res.status(404).json({ erro: "Gênero não encontrado" });
        }
      } catch (erro) {
        res.status(500).json({ erro: "Erro ao atualizar gênero" });
      }
    }
  }

  async excluirGenero(req, res) {

    const id = req.params.id;

    // Aqui se carrega o idUsuario do front
    // Id de user 2 para não administrador e 3 para administrador
    const idUsuario = 2;
    const validacao = await acesso.autorizarTipoLogin(idUsuario, res);

    if(validacao){

      try {
          
        const resultado = await ModeloGenero.excluirGenero(id);
          
        if (resultado) {
          res.status(200).json({ msg: "Gênero excluído com sucesso" });
        } else {
          res.status(404).json({ erro: "Gênero não encontrado" });
        }
      } catch (erro) {
        res.status(500).json({ erro: "Erro ao excluir gênero" });
      }
    }
  }
}

module.exports = new GeneroController();
