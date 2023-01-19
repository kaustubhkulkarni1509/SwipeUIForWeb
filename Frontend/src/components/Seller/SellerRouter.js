import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import AddProduct from './AddProduct'

const SellerRouter = () => {

    console.log('Inside SellerRouter')
    return (
        <BrowserRouter>
            <p>Header</p>
            <Switch>
                
            </Switch>
        </BrowserRouter>
    )
}

export default SellerRouter