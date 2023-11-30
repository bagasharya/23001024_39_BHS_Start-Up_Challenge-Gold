const findProduct = (merk) => {
    const products = require('./products.json')
    const product = products.find((product) => product.merk == merk)
    return product
}

module.exports = {findProduct}