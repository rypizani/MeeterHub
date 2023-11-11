const ModeloPais = require('../models/paisModel');

class ControladorPais{

    async criarPais( req, res ){

        const pais = req.body;

        // Aqui se carrega o idUsuario do front
        // Id de user 2 para não administrador e 3 para administrador
        const idUsuario = 2;
        const validacao = await acesso.autorizarTipoLogin(idUsuario, res);

        if(validacao){

            try{
                const idPais = await ModeloPais.criarPais(pais);
                res.status(201).json({ id_pais: idPais});
            } catch( erro ){
                res.status(500).json({ erro: 'Erro ao criar um Pais'});
            }
        }
    }

    async obterTodosPais( req, res ){

        // Aqui se carrega o idUsuario do front
        // Id de user 2 para não administrador e 3 para administrador
        const idUsuario = 2;
        const validacao = await acesso.autorizarTipoLogin(idUsuario, res);

        try{
            const pais = await ModeloPais.obterTodosPais();
            res.status(200).json(pais);
        } catch( erro ){
            res.status(500).json({ erro: 'Erro ao buscar todos os Pais'});
        }
    }

    async obterPaisPorId( req, res ){

        const id = req.params.id;

        // Aqui se carrega o idUsuario do front
        // Id de user 2 para não administrador e 3 para administrador
        const idUsuario = 2;
        const validacao = await acesso.autorizarTipoLogin(idUsuario, res);

        if(validacao){

            try{
                const pais = await ModeloPais.obterPaisPorId(id);
                
                if( pais ){
                    res.status(200).json(pais);
                } else {
                    res.status(404).json({erro: 'Pais não encontrado'})
                }
            } catch( erro ){
                res.status(500).json({erro: 'Erro ao buscar o Pais'});
            }
        }
    }

    async atualizarPais( req, res ){
        
        const id = req.params.id;
        const pais = req.body; 

        // Aqui se carrega o idUsuario do front
        // Id de user 2 para não administrador e 3 para administrador
        const idUsuario = 2;
        const validacao = await acesso.autorizarTipoLogin(idUsuario, res);

        if(validacao){

            try{
                const resultado = await ModeloPais.atualizarPais(id, pais);
                
                if( resultado ){
                    res.status(200).json({msg: 'Pais atualizado com sucesso'});
                } else {
                    res.status(404).json({erro: 'Pais não encontrado'})
                }
            } catch( erro ){
                res.status(500).json({ erro: 'Erro ao atualizar Pais'});
            }
        }
    }
   
    async excluirPais( req, res ){

        const id = req.params.id;

        // Aqui se carrega o idUsuario do front
        // Id de user 2 para não administrador e 3 para administrador
        const idUsuario = 2;
        const validacao = await acesso.autorizarTipoLogin(idUsuario, res);

        if(validacao){

            try{
                const resultado = await ModeloPais.excluirPais(id);
                
                if( resultado ){
                    res.status(200).json({msg: 'Pais excluido com sucesso'});
                } else {
                    res.status(404).json({erro: 'Pais não encontrado'})
                }
            } catch( erro ){
                res.status(500).json({ erro: 'Erro ao excluir Pais'});
            }
        }
    }
}

module.exports = new ControladorPais();