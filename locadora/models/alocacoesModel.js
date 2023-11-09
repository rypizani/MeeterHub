const mysql = require('mysql2/promise');
const pool = require('../pool')

class ModeloAlocacoes{
    
    async criarAlocacoes(alocacoes){
        const connection = await pool.getConnection();
        try{
            const [resultado ] = await connection.query(
                'INSERT INTO alocacoes (nome) VALUES (?)',
                [alocacoes.nome]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosAlocacoess() {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'SELECT * FROM alocacoes'
            );
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterAlocacoessPorId(id) {
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'SELECT * FROM alocacoes WHERE id_alocacoes = ?',
                [id]
            );
            return resultado[0];
        } finally {
            connection.release();
        }
    }

    async atualizarAlocacoes(id, alocacoes) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'UPDATE alocacoes SET nome = ? where id_alocacoes = ?',
                [alocacoes.nome, id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirAlocacoes(id) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'DELETE FROM alocacoes WHERE id_alocacoes = ?',
                [id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

}

module.exports = new ModeloAlocacoes();