const CustomerRepository = require("../repository/CustomerRepository")
const Customer = require("../entity/Customer")
const CustomerSignUpInputVO = require("../vo/CustomerSignUpInputVO")
const CustomerUtils = require("../utils/CustomerUtils");
const CustomerSignUpOutputVO = require("../vo/CustomerSignUpOutputVO");
const AddressInputVO = require("../vo/AddressInputVO");
const CustomerAddressInputVO = require("../vo/CustomerAddressInputVO");
const CustomerLoginOutputVO = require("../vo/CustomerLoginOutputVO");
const CustomerLoginInputVO = require("../vo/CustomerLoginInputVO");

const CustomerService = {

    async signUp(req) {
        try {
            CustomerSignUpInputVO.c_email = req.body.email
            CustomerSignUpInputVO.c_name = req.body.name
            CustomerSignUpInputVO.c_password = await CustomerUtils.encrypt(req.body.password)
            CustomerSignUpInputVO.c_sex = req.body.sex
            CustomerSignUpInputVO.c_phone_number = req.body.phoneNumber
            CustomerSignUpInputVO.c_dob = req.body.dateOfBirth
            customerID = await CustomerRepository.saveCustomer(CustomerSignUpInputVO)
            console.log("InCustomerService" + customerID)

            AddressInputVO.a_line1 = req.body.line1
            AddressInputVO.a_line2 = req.body.line2
            AddressInputVO.a_state = req.body.state
            AddressInputVO.a_zip_code = req.body.zipCode
            AddressInputVO.a_city = req.body.city
            AddressInputVO.a_country = req.body.country
            addressID = await CustomerRepository.saveCustomerAddress(AddressInputVO)

            CustomerAddressInputVO.a_id = addressID
            CustomerAddressInputVO.c_id = customerID
            await CustomerRepository.mapCustomerIDToAddressID(CustomerAddressInputVO)

            CustomerSignUpOutputVO.message = "SignUp Success"
            CustomerSignUpOutputVO.flag = "S"
            return CustomerSignUpOutputVO
        } catch (e) {
            throw e
        }
    },

    async login(req) {
        CustomerLoginInputVO.c_email = req.body.email
        CustomerLoginInputVO.c_password = req.body.password
        customer = await CustomerRepository.getCustomer(CustomerLoginInputVO.c_email)
        console.log(customer)
        if (!customer) {
            CustomerLoginOutputVO.message = "Invalid Credentials"
            CustomerLoginOutputVO.flag = "F"
            return CustomerLoginOutputVO
        } else {
            if (await CustomerUtils.isPasswordCorrect(CustomerLoginInputVO.c_password, customer.dataValues.c_password)) {
                console.log("check", await CustomerUtils.isPasswordCorrect(CustomerLoginInputVO.c_password, customer.dataValues.c_password))
                CustomerLoginOutputVO.message = " Login Success"
                CustomerLoginOutputVO.flag = "S"
                return CustomerLoginOutputVO
            } else {
                CustomerLoginOutputVO.message = "Invalid Credentials"
                CustomerLoginOutputVO.flag = "F"
                return CustomerLoginOutputVO
            }
        }
    }
};

module.exports = CustomerService
