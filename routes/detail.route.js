const express = require('express')
const router = express.Router()
const detailController = require('../controller/detail.controller')

router.get('/produk/makanan/:merk', detailController.getDetail)

module.exports = router