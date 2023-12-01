const express = require('express');
const port = 3000;
const server = express();
const routerDashboard = require('./routes/dashboard.route');
const routerProducts = require('./routes/products.route');
const routerKontak = require('./routes/kontak.route');
const routerDetail = require('./routes/detail.route');
const routerTambahProduk = require('./routes/tambah-produk.route');
const routerAddProduct = require('./routes/products.route')
const { addProduct } = require('./utils/products');

server.set('view engine', 'ejs');
server.use(express.static('views'));
server.use('/assets', express.static('assets'));
server.use(express.json());
server.use(express.urlencoded());

server.use(routerDashboard);
server.use(routerProducts);
server.use(routerKontak);
server.use(routerDetail);
server.use(routerTambahProduk);
server.use(routerAddProduct)

server.post('/produk/makanan', (req, res) => {
  addProduct(req.body)
  res.redirect('/produk/makanan')
})

server.listen(port, () => {
  console.log(`Server on port ${port}`);
});
