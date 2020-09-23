const express = require('express')
const api = express.Router()
const { addProduct } = require('../controllers/productController')

api.post('/products', addProduct)

module.exports = api
