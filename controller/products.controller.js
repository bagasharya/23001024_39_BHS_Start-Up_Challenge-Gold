// exports.getProducts = (req, res) => {
//     const products = require('../data/products.json')
//     res.render('produk-makanan', {
//         products,
//     })
// }

const { knex } = require('../dbConnection');

const listProducts = async (req, res) => {
  const products = await knex
    .table('products')
    .select(['merk', 'varian', 'harga']);

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

// const updateProducts = async (req, res) => {

// }

module.exports = {
  addProduct,
  deleteProduct,
  listProducts,
};
