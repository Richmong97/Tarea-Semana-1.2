const express = require('express');
const tblproducto = express();
const db = require('../Database/conn');

tblproducto.get('', async (req, res) => {
  let sql = 'SELECT * FROM tbl_productos';
  const resultado = await db.query(sql);
  res.json(resultado);
});

module.exports = tblproducto;