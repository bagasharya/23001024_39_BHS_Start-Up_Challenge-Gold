const fs = require('fs');

const findProduct = (merk) => {
  const products = require('../data/products.json');
  const product = products.find((product) => product.merk == merk);
  return product;
};

const saveProducts = (products) => {
  fs.writeFileSync('data/products.json', JSON.stringify(products));
};

const addProduct = (product) => {
  const products = require('../data/products.json');
  products.push(product);
  saveProducts(products);
};

module.exports = { findProduct, addProduct };
