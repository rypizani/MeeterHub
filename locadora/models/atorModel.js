const pool = require('../pool');

class ModeloAtor {

    async criarAtor (ator) {
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'INSERT INTO ator (id_ator, nome) values(?, ?)',
                [ator.id_ator, ator.nome]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosAtores() {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'SELECT * FROM ator'
            );
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterAtorPorId(id) {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'SELECT * FROM ator WHERE id_ator = ?',
                [id]
            );
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarAtor(id, ator) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'UPDATE ator SET nome = ? WHERE id_ator = ?',
                [ator.nome, id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirAtor(id) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'DELETE FROM ator WHERE id_ator = ?',
                [id]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloAtor();