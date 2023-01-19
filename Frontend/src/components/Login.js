import React, { useState, useEffect } from 'react'

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userType, setUserType] = useState('')

    const onEmailChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const onPasswordChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const onUserTypeCustomerChange = (e) => {
        setUserType('Customer')
    }

    const onUserTypeSellerChange = (e) => {
        setUserType('Seller')
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const requestBody = {
            email: email,
            password: password,
        }

        console.log(requestBody)
    }

    const handleSignUp = () => {
        props.history.push('/signUp')
    }

    return (
        <div className="signup-wrapper">
            <div className="bg-image"></div>
            <form onSubmit={handleOnSubmit}>
                <div className="login-container">
                    <h1><center>ISwipe Login</center></h1>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            value={email}
                            onChange={onEmailChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={onPasswordChange}
                        />
                    </div>

                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="userTypeCustomer" value="customer" checked={userType === 'Customer'} onChange={onUserTypeCustomerChange} />
                        <label className="form-check-label" htmlFor="userTypeCustomer">Customer</label>
                    </div>

                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="userTypeSeller" value="seller" checked={userType === 'Seller'} onChange={onUserTypeSellerChange} />
                        <label className="form-check-label" htmlFor="userTypeSeller">Seller</label>
                    </div>

                    <div className="signup-button">
                        <button type="submit" className="btn btn-success" onClick={handleSignUp}>Sign Up</button>
                        <button type="submit" className="btn btn-success login">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login