const express = require('express');
const router = express.Router();
const { addProductFood, deleteProductFood, listProductsFood, updateProductsFood, listProductsMedic, addProductMedic, updateProductsMedic, deleteProductMedic, listProductsVit, addProductVit, updateProductsVit, deleteProductVit, listProductsGroom, addProductGroom, updateProductsGroom, deleteProductGroom, listProductsLitter, addProductLitter, updateProductsLitter, deleteProductLitter, listProductsAcc, addProductAcc, updateProductsAcc, deleteProductAcc, detailProductsFood, getDashboard, detailProductsMedic, detailProductsVit, detailProductsGroom, detailProductsLitter, detailProductsAcc} = require('../controller/products.controller')

// DASHBOARD
router.get('/dashboard', getDashboard)

// PRODUCTS FOOD
router.get('/products/food', listProductsFood)
router.post('/products/food', addProductFood)
router.put('/products/food/:id', updateProductsFood)
router.delete('/products/food/:id', deleteProductFood)
router.get('/products/food/detail/:id', detailProductsFood)

// PRODUCTS MEDIC
router.get('/products/medic', listProductsMedic)
router.post('/products/medic', addProductMedic)
router.put('/products/medic/:id', updateProductsMedic)
router.delete('/products/medic/:id', deleteProductMedic)
router.get('/products/medic/detail/:id', detailProductsMedic)

// PRODUCTS VIT
router.get('/products/vit', listProductsVit)
router.post('/products/vit', addProductVit)
router.put('/products/vit/:id', updateProductsVit)
router.delete('/products/vit/:merk', deleteProductVit)
router.get('/products/vit/detail/:id', detailProductsVit)

// PRODUCTS GROOM
router.get('/products/groom', listProductsGroom)
router.post('/products/groom', addProductGroom)
router.put('/products/groom/:id', updateProductsGroom)
router.delete('/products/groom/:merk', deleteProductGroom)
router.get('/products/groom/detail/:id', detailProductsGroom)

// PRODUCTS LITTER
router.get('/products/litter', listProductsLitter)
router.post('/products/litter', addProductLitter)
router.put('/products/litter/:id', updateProductsLitter)
router.delete('/products/litter/:merk', deleteProductLitter)
router.get('/products/litter/detail/:id', detailProductsLitter)

// PRODUCTS ACC
router.get('/products/acc', listProductsAcc)
router.post('/products/acc', addProductAcc)
router.put('/products/acc/:id', updateProductsAcc)
router.delete('/products/acc/:merk', deleteProductAcc)
router.get('/products/acc/detail/:id', detailProductsAcc)

// Router tambahan karena HTML tidak bisa method PUT & DELETE
router.post('/products/food/:id', deleteProductFood)
router.post('/products/food/detail/:id', updateProductsFood)
router.post('/products/medic/:id', deleteProductMedic)
router.post('/products/medic/detail/:id', updateProductsMedic)
router.post('/products/vit/:id', deleteProductVit)
router.post('/products/vit/detail/:id', updateProductsVit)
router.post('/products/groom/:id', deleteProductGroom)
router.post('/products/groom/detail/:id', updateProductsGroom)
router.post('/products/litter/:id', deleteProductLitter)
router.post('/products/litter/detail/:id', updateProductsLitter)
router.post('/products/acc/:id', deleteProductAcc)
router.post('/products/acc/detail/:id', updateProductsAcc)


module.exports = router