const express = require('express')
const SellerController = new express.Router()
const SellerService = require("../service/SellerService")
const SellerSignUpOutputVO = require('../vo/SellerSignUpOutputVO')
const SellerLoginOutputVO = require("../vo/SellerLoginOutputVO");


SellerController.post('/sellersignup', async (req, res) => {
    try {
        console.log("Hello,World!!!")
        res.status(201).send(await SellerService.signUp(req))
    } catch (e) {
        console.log(e)
        SellerSignUpOutputVO.message = "SignUp Failed"
        SellerSignUpOutputVO.flag = "F"
        res.status(400).send(SellerSignUpOutputVO)
    }
})

SellerController.post('/sellerlogin', async (req, res) => {
    try {
        console.log("Hello,World!!!")
        res.status(201).send(await SellerService.login(req))
    } catch (e) {
        console.log(e)
        SellerSignUpOutputVO.message = "Invalid Credentials"
        SellerSignUpOutputVO.flag = "F"
        res.status(400).send(SellerSignUpOutputVO)
    }
})

module.exports = SellerController