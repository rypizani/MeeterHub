const pool = require("../pool");

class ModeloGenero {
  async criarGenero(genero) {
    const connection = await pool.getConnection();
    try {
      const [resultado] = await connection.query(
        "INSERT INTO genero (id_genero, nome) values(?, ?)",
        [genero.id_genero, genero.nome]
      );
      return resultado.insertId;
    } finally {
      connection.release();
    }
  }

  async obterTodosGeneros() {
    const connection = await pool.getConnection();
    try {
      const [registros] = await connection.query("SELECT * FROM genero");
      return registros;
    } finally {
      connection.release();
    }
  }

  async obterGeneroPorId(id) {
    const connection = await pool.getConnection();
    try {
      const [registros] = await connection.query(
        "SELECT * FROM genero WHERE id_genero = ?",
        [id]
      );
      return registros[0];
    } finally {
      connection.release();
    }
  }

  async atualizarGenero(id, genero) {
    const connection = await pool.getConnection();
    try {
      await connection.query("UPDATE genero SET nome = ? WHERE id_genero = ?", [
        genero.nome,
        id,
      ]);
      return true;
    } finally {
      connection.release();
    }
  }

  async excluirGenero(id) {
    const connection = await pool.getConnection();
    try {
      await connection.query("DELETE FROM genero WHERE id_genero = ?", [id]);
      return true;
    } finally {
      connection.release();
    }
  }
}

module.exports = new ModeloGenero();
