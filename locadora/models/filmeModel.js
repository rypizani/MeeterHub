const mysql = require('mysql2/promise');
const pool = require('../pool')

class ModeloFilme{
    
    async criarFilme(filme){
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'insert into filme (nome, id_pais ) values (?, ?)',
                [filme.nome, filme.id_pais]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosFilmes() {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from filme'
            );
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterFilmesPorId(id) {
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'SELECT * FROM filme WHERE id_filme = ?',
                [id]
            );
            return resultado[0];
        } finally {
            connection.release();
        }
    }

    async atualizarFilme(id, filme) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'update filme set nome = ?, id_pais = ? where id_filme = ?',
                [filme.nome, filme.id_pais, id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirFilme(id) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'delete from filme where id_filme = ?',
                [id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

}

module.exports = new ModeloFilme();