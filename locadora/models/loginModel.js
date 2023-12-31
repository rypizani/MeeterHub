const mysql = require('mysql2/promise');
const pool = require('../pool')

class ModeloLogin{
    
    async criarLogin(login){
        const connection = await pool.getConnection();
        try{
            const [resultado ] = await connection.query(
                'insert into login (nome, tp_login ) values (?, ?)',
                [login.nome, login.tp_login]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosLogins() {
        const connection = await pool.getConnection();
        try{
            const [registros] = await connection.query(
                'select * from login'
            );
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterLoginsPorId(id) {
        const connection = await pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'SELECT * FROM login WHERE id_login = ?',
                [id]
            );
            return resultado[0];
        } finally {
            connection.release();
        }
    }

    async atualizarLogin(id, login) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'UPDATE login SET nome = ?, tp_login = ? where id_login = ?',
                [login.nome, login.tp_login, id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirLogin(id) {
        const connection = await pool.getConnection();
        try{
            await connection.query(
                'DELETE from login where id_login = ?',
                [id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

}

module.exports = new ModeloLogin();