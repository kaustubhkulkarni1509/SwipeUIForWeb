
const express = require('express')
const CustomerController = new express.Router()
const CustomerService = require("../service/CustomerService")
const CustomerSignUpOutputVO = require('../vo/CustomerSignUpOutputVO')
const CustomerLoginOutputVO = require("../vo/CustomerLoginOutputVO");
CustomerController.post('/customersignup', async (req, res) => {
    try {
        console.log("Hello,World!!!")
        res.status(200).send(await CustomerService.signUp(req))
    } catch (e) {
        console.log(e)
        CustomerSignUpOutputVO.message = "SignUp Failed"
        CustomerSignUpOutputVO.flag = "F"
        res.status(400).send(CustomerSignUpOutputVO)
    }
})

CustomerController.post('/customerlogin', async (req, res) => {
    try {
        console.log("Hello,World!!!")
        res.status(200).send(await CustomerService.login(req))
    } catch (e) {
        console.log(e)
        CustomerLoginOutputVO.message = "Invalid Credentials"
        CustomerLoginOutputVO.flag = "F"
        res.status(400).send(CustomerSignUpOutputVO)
    }
})

module.exports = CustomerController
