const pool = require('../pool')

class ModeloDistribuidora{
    
    async criarDistribuidora(distribuidora) {
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'INSERT INTO distribuidora (id_distribuidora, nome) values(?, ?)',
                [distribuidora.id_distribuidora, distribuidora.nome]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodasDistribuidoras() {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'SELECT * FROM distribuidora'
            );
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterDistribuidoraPorId(id) {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'SELECT * FROM distribuidora WHERE id_distribuidora = ?',
                [id]
            );
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarDistribuidora(id, distribuidora) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'UPDATE distribuidora SET nome = ? WHERE id_distribuidora = ?',
                [distribuidora.nome, id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirDistribuidora(id) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'DELETE FROM distribuidora WHERE id_distribuidora = ?',
                [id]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloDistribuidora();