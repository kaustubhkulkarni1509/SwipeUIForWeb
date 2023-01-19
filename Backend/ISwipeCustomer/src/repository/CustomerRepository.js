const Customer = require("../entity/Customer")
const Address = require("../entity/Address");
const CustomerAddress = require("../entity/CustomerAddress");




const CustomerRepository = {
    async saveCustomer(customer) {
        let customerID
        await Customer.create(customer, { returning: true, plain: true }).then(function (result) {
            customerID = result.dataValues.c_id
        });
        return customerID
    },

    async saveCustomerAddress(address) {
        let addressID
        await Address.create(address, { returning: true, plain: true }).then(function (result) {
            addressID = result.dataValues.a_id
        })
        return addressID
    },

    async mapCustomerIDToAddressID(customerAddressInputVO) {
        await CustomerAddress.create(customerAddressInputVO)
    },

    async getCustomer(email) {
        customer = await Customer.findOne({
            where: {
                c_email: email
            }
        })
        return customer
    },

}

module.exports = CustomerRepository
