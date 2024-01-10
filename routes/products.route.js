const express = require('express');
const router = express.Router();
const { addProduct, deleteProduct, listProducts, updateProducts } = require('../controller/products.controller')

router.post('/products', addProduct)
router.delete('/products/:merk', deleteProduct)
router.get('/products', listProducts)
router.put('/products/:id', updateProducts)

module.exports = router