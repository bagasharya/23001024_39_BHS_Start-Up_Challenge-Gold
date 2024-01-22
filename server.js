const express = require('express');
const port = 3000;
const server = express();
const bodyParser = require("body-parser")
const routerProducts = require('./routes/products.route')
const methodOverride = require('method-override')

server.set('view engine', 'ejs');
server.use('/assets', express.static('assets'));
server.use(express.static('views'));
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }))
server.use(methodOverride('_method'))

server.use(routerProducts)

server.listen(port, () => {
  console.log(`Server on port ${port}`);
});