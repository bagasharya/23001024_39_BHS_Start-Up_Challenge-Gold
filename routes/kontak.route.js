const express = require('express')
const router = express.Router()
const kontakController = require('../controller/kontak.controller')

router.get('/kontak', kontakController.getKontak)

module.exports = router