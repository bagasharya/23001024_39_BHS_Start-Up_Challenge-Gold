const express = require('express');
const router = express.Router();
const { addProduct, deleteProduct, listProducts } = require('../controller/products.controller')

// const productsController = require('../controller/products.controller');
// router.get('/produk/makanan', productsController.getProducts);


router.post('/products', addProduct)
router.delete('/products/:merk', deleteProduct)
router.get('/products', listProducts)


module.exports = router