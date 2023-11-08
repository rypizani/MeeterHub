const pool = require('../pool')
const mysql = require("mysql2/promise");

class ModeloPais{

    async criarPais(pais) {
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'INSERT INTO pais (nome) values(?)',
                [pais.nome]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosPais() {
        const connection = await pool.getConnection();
        try {
            const[resultado] = await connection.query(
                'SELECT * FROM pais',
            )
            return resultado; // inserID é um membro que vai armazenar o ID do novo regsitro
        } finally {
            connection.release();
        }
    }

    async obterPaisPorId(id) {
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'SELECT * FROM pais WHERE id_pais = ?',
                [id]
            );
            return resultado[0];
        } finally {
            connection.release();
        }
    }

    async atualizarPais(id, pais) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'update pais set nome = ? where id_pais = ?',
                [pais.nome, id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirPais(id) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'DELETE FROM pais WHERE id_pais = ?',
                [id]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ModeloPais();