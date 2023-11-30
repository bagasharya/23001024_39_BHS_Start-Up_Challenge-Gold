const express = require('express');
const router = express.Router();

const productsController = require('../controller/products.controller');
router.get('/produk/makanan', productsController.getProducts);

module.exports = router