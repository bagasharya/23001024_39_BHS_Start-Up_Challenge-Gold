const { findProduct } = require("../utils/products")

exports.getDetail = (req, res) => {
    const product = findProduct(req.params.merk)
    res.render('detail', {
        product
    })
}