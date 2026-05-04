const pool = require('../config/database');

async function listarTodos() {
  // PostgreSQL: a query retorna um objeto 'result'
  const result = await pool.query(
    'SELECT * FROM produtos ORDER BY id'
  );
  
  // Os dados ficam em result.rows
  return result.rows;
}

async function buscarPorId(id) {
  const result = await pool.query(
    'SELECT * FROM produtos WHERE id = $1',
    [id] 
  );
  

  return result.rows[0];
}

async function criar(dados) {
  const { nome, preco, estoque, categoria } = dados;

  const sql = `
    INSERT INTO produtos (nome, preco, estoque, categoria)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;
  
  const result = await pool.query(
    sql,
    [nome, preco, estoque, categoria]
  );
  
  return result.rows[0];
}

async function atualizar(id, dados) {
  const { nome, preco, estoque, categoria } = dados;
  
  const sql = `
    UPDATE produtos
    SET nome = $1, preco = $2, estoque = $3, categoria = $4
    WHERE id = $5
    RETURNING *
  `;
  
  const result = await pool.query(
    sql,
    [nome, preco, estoque, categoria, id]
  );
  
  return result.rows[0] || null;
}

async function deletar(id) {
  const result = await pool.query(
    'DELETE FROM produtos WHERE id = $1',
    [id]
  );

  return result.rowCount > 0;
}

async function buscarPorCategoria(categoria) {

  const sql = 'SELECT * FROM produtos WHERE categoria ILIKE $1';
  
  const result = await pool.query(
    sql,
    [`%${categoria}%`]
  );
  
  return result.rows;
}


module.exports = {
  listarTodos,
  buscarPorId,
  criar,
  atualizar,
  deletar,
  buscarPorCategoria
};
