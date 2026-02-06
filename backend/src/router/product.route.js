const express = require('express')
const { createProduct,getproductController } = require('../controller/product.controller')

const router = express.Router()

router.post('/createProduct',createProduct)

router.get('/getproduct',getproductController)


module.exports=router