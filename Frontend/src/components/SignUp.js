import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SignUp = (props) => {

    // State variables
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [sex, setSex] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [userType, setUserType] = useState('')

    // Address state variables
    const [addressLine1, setAddressLine1] = useState('')
    const [addressLine2, setAddressLine2] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [zipCode, setZipCode] = useState('')

    // Change handlers
    const onNameChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const onEmailChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const onPhoneNumberChange = (e) => {
        e.preventDefault()
        setPhoneNumber(e.target.value)
    }

    const onSexChange = (e) => {
        setSex(e.target.value)
    }

    const onPasswordChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const onConfirmPasswordChange = (e) => {
        e.preventDefault()
        setConfirmPassword(e.target.value)
    }

    const onDateOfBirthChange = (e) => {
        e.preventDefault()
        setDateOfBirth(e.target.value)
    }

    const onUserTypeCustomerChange = (e) => {
        setUserType('Customer')
    }

    const onUserTypeSellerChange = (e) => {
        setUserType('Seller')
    }


    // Address change handlers
    const onAddressLine1Change = (e) => {
        e.preventDefault()
        setAddressLine1(e.target.value)
    }
    const onAddressLine2Change = (e) => {
        e.preventDefault()
        setAddressLine2(e.target.value)
    }
    const onCityChange = (e) => {
        e.preventDefault()
        setCity(e.target.value)
    }
    const onStateChange = (e) => {
        e.preventDefault()
        setState(e.target.value)
    }
    const onCountryChange = (e) => {
        e.preventDefault()
        setCountry(e.target.value)
    }
    const onZipCodeChange = (e) => {
        e.preventDefault()
        setZipCode(e.target.value)
    }

    // Submit handler
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const request = {
            'name': name,
            'email': email,
            'password': password,
            'dateOfBirth': dateOfBirth,
            'sex': sex,
            'phoneNumber': phoneNumber,
            'line1': addressLine1,
            'line2': addressLine2,
            'city': city,
            'state': state,
            'country': country,
            'zipCode': zipCode
        }

        console.log(request)

        const response = await axios.post('http://localhost:3000/customersignup', request)

        console.log(response)

        props.history.push('/login')
    }

    const handleBackToLogin = () => {
        props.history.push('/login')
    }

    return (
        <div className="signup-wrapper">
            <div className="bg-image"></div>
            <form onSubmit={handleOnSubmit}>
                <div className="signup-container">
                    <h1><center>ISwipe Sign Up</center></h1>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                aria-describedby="emailHelp"
                                placeholder="Enter Name (Ex. John Doe)"
                                value={name}
                                onChange={onNameChange}
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={email}
                                onChange={onEmailChange}
                                required
                            />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                type="number"
                                className="form-control"
                                id="phoneNumber"
                                aria-describedby="emailHelp"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={onPhoneNumberChange}
                                required
                            />
                        </div>

                        <div className="form-group col-md-6">
                            <div className="signup-radio">
                                <input type="radio" className="form-check-input" id="male" value="M" checked={sex === 'M'} onChange={onSexChange} />
                                <label className="form-check-label" htmlFor="male">Male</label>

                                <input type="radio" className="form-check-input" id="female" value="F" checked={sex === 'F'} onChange={onSexChange} />
                                <label className="form-check-label" htmlFor="female">Female</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={onPasswordChange}
                                required
                            />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                value={confirmPassword}
                                onChange={onConfirmPasswordChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <input
                                type="date"
                                className="form-control"
                                id="dateOfBirth"
                                placeholder="Date of Birth"
                                value={dateOfBirth}
                                onChange={onDateOfBirthChange}
                                required
                            />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="addressLine1">Address Line 1</label>
                            <input
                                type="text"
                                className="form-control"
                                id="addressLine1"
                                aria-describedby="emailHelp"
                                placeholder="Address Line 1"
                                value={addressLine1}
                                onChange={onAddressLine1Change}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="addressLine2">Address Line 2</label>
                            <input
                                type="text"
                                className="form-control"
                                id="addressLine2"
                                aria-describedby="emailHelp"
                                placeholder="Address"
                                value={addressLine2}
                                onChange={onAddressLine2Change}
                            />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                aria-describedby="emailHelp"
                                placeholder="City"
                                value={city}
                                onChange={onCityChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="state">State</label>
                            <input
                                type="text"
                                className="form-control"
                                id="state"
                                aria-describedby="emailHelp"
                                placeholder="State (Ex. CA)"
                                value={state}
                                onChange={onStateChange}
                                required
                            />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="country">Country</label>
                            <input
                                type="text"
                                className="form-control"
                                id="country"
                                aria-describedby="emailHelp"
                                placeholder="Country (Ex. US)"
                                value={country}
                                onChange={onCountryChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="zipCode">ZipCode</label>
                            <input
                                type="text"
                                className="form-control"
                                id="zipCode"
                                aria-describedby="emailHelp"
                                placeholder="ZipCode"
                                value={zipCode}
                                onChange={onZipCodeChange}
                                required
                            />
                        </div>

                        <div className="form-group col-md-6">
                            <div className="signup-radio">
                                <input type="radio" className="form-check-input" id="userTypeCustomer" value="customer" checked={userType === 'Customer'} onChange={onUserTypeCustomerChange} />
                                <label className="form-check-label" htmlFor="userTypeCustomer">Customer</label>

                                <input type="radio" className="form-check-input" id="userTypeSeller" value="seller" checked={userType === 'Seller'} onChange={onUserTypeSellerChange} />
                                <label className="form-check-label" htmlFor="userTypeSeller">Seller</label>
                            </div>
                        </div>
                    </div>

                    <div className="signup-button">
                        <button type="submit" className="btn btn-success">Sign Up</button>
                        <button type="submit" className="btn btn-success login" onClick={handleBackToLogin}>Back to Login!</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp