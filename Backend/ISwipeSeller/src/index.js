const express = require('express')
const port = process.env.PORT || 3001
const SellerController = require("../src/controller/SellerController")
const app = express()

app.use(express.json())
app.use(SellerController)



app.listen(port, () => {
    console.log('Server is running at port ', port)
})