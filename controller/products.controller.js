exports.getProducts = (req, res) => {
    const products = require('../data/products.json')
    res.render('produk-makanan', {
        products,
    })
}