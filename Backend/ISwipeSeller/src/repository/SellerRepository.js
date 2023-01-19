const Seller = require("../entity/Seller")
const Address = require("../entity/Address");
const SellerAddress = require("../entity/SellerAddress");




const SellerRepository = {


    async saveSeller(seller) {
        let sellerID
        await Seller.create(seller, { returning: true, plain: true }).then(function (result) {
            sellerID = result.dataValues.s_id
        });
        return sellerID
    },

    async saveSellerAddress(address) {
        let addressID
        await Address.create(address, { returning: true, plain: true }).then(function (result) {
            addressID = result.dataValues.a_id
        })
        return addressID
    },

    async mapSellerIDToAddressID(sellerAddressInputVO) {
        await SellerAddress.create(sellerAddressInputVO)
    },

    async getSeller(email) {
        seller = await Seller.findOne({
            where: {
                s_email: email
            }
        })
        return seller
    },

}

module.exports = SellerRepository