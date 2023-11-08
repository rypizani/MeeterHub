const mysql = require('mysql2/promise');
const pool = require('../pool.js')

class ModeloFilme{
    
    async criarFilme(filme){
        const connection = await pool.getConnection();
        try{
            const [resultado ] = await connection.query(
                'insert into filme (nome, id_pais ) values (?, ?)',
                [filme.nome, filme.id_pais]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }
}