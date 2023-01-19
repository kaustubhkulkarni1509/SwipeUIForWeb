const express = require('express')
const port = process.env.PORT || 3002
const ProductRouter = require("../src/router/ProductRouter")
const app = express()

app.use(express.json())
app.use(ProductRouter)



app.listen(port, () => {
    console.log('Server is running at port ', port)
})