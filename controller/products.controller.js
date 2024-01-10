const { knex } = require('../dbConnection');
const fs = require('fs');

const listProducts = async (req, res) => {
  const products = await knex
    .table('products')
    .select(['merk', 'varian', 'harga', 'desc']);

  res.json({
    products: products,
  });
};

const addProduct = async (req, res) => {
  await knex.table('products').insert([
    {
      merk: req.body.merk,
      varian: req.body.varian,
      harga: req.body.harga,
      desc: req.body.desc,
    },
  ]);

  res.json({
    message: 'produk berhasil di tambah',
  });
};

const deleteProduct = async (req, res) => {
  const merkInput = req.params.merk;

  await knex
    .table('products')
    .where({
      merk: merkInput,
    })
    .delete();

  res.json({
    message: 'produk berhasil di delete',
  });
};

const updateProducts = async (req, res) => {
  const idInput = req.params.id
  const merkInput = req.body.merk
  const varianInput = req.body.varian
  const hargaInput = req.body.harga
  const descInput = req.body.desc

  await knex.table('products').update({
    merk: merkInput,
    varian: varianInput,
    harga: hargaInput,
    desc: descInput
  })
  .where({
    id: idInput
  })

  res.json({message: 'berhasil'})
}

module.exports = {
  addProduct,
  deleteProduct,
  listProducts,
  updateProducts
};
