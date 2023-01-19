const express = require('express')
const port = process.env.PORT || 3000
const CustomerController = require("./controller/CustomerController")
const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).send()
    }
    
    next()
})

app.use(express.json())
app.use(CustomerController)

app.listen(port, () => {
    console.log('Server is running at port ', port)
})
