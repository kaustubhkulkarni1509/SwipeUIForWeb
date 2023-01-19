const express = require('express')
const ProductRouter = new express.Router()
const ProductService = require('../service/ProductService')

ProductRouter.post('/product', async (req,res) => {
    try {
        await ProductService.addProduct(req)
        res.status(200).send("Success")
    }
    catch(e) {
        res.status(400).send(e)
    }
})

ProductRouter.get('/product/search/:searchTerm', async (req,res) => {
    try {
        console.log(req.params.searchTerm)
        await ProductService.searchProduct(req.params.searchTerm)
        res.status(200).send("Success")
    }
    catch(e) {
        res.status(400).send({ "flag" : "F" , "message" : e.message})
    }
})

module.exports = ProductRouter