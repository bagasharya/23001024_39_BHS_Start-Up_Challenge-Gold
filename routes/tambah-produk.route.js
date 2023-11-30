const express = require('express')
const router = express.Router()
const tambahProdukController = require ('../controller/tambah-produk.controller')

router.get('/tambah/produk', tambahProdukController.getTambahProduk)

module.exports = router