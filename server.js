const express = require('express');
const port = 3000;
const server = express();
const routerAddProduct = require('./routes/products.route')
const routerDashboard = require('./routes/dashboard.route')

server.set('view engine', 'ejs');
server.use(express.static('views'));
server.use(express.json());

server.use(routerAddProduct)
server.use(routerDashboard)

server.listen(port, () => {
  console.log(`Server on port ${port}`);
});
