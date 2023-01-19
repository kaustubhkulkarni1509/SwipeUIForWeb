import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import SignUp from '../components/SignUp'
import Login from '../components/Login'
import SellerRouter from '../components/Seller/SellerRouter'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect from="/" to="/login" exact/>
                <Route path="/signUp" component={SignUp} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/seller" component={SellerRouter} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router