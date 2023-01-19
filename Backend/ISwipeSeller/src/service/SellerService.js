const SellerRepository = require("../repository/SellerRepository")
const Seller = require("../entity/Seller")
const SellerSignUpInputVO = require("../vo/SellerSignUpInputVO")
const SellerUtils = require("../utils/SellerUtils");
const SellerSignUpOutputVO = require("../vo/SellerSignUpOutputVO");
const AddressInputVO = require("../vo/AddressInputVO");
const SellerAddressInputVO = require("../vo/SellerAddressInputVO");
const SellerLoginOutputVO = require("../vo/SellerLoginOutputVO");
const SellerLoginInputVO = require("../vo/SellerLoginInputVO");

const SellerService = {

    async signUp(req) {
        try {
            SellerSignUpInputVO.s_email = req.body.email
            SellerSignUpInputVO.s_name = req.body.name
            SellerSignUpInputVO.s_password = await SellerUtils.encrypt(req.body.password)
            SellerSignUpInputVO.s_phone_number = req.body.phoneNumber
            sellerID = await SellerRepository.saveSeller(SellerSignUpInputVO)
            console.log("SellerID" + sellerID)

            AddressInputVO.a_line1 = req.body.line1
            AddressInputVO.a_line2 = req.body.line2
            AddressInputVO.a_state = req.body.state
            AddressInputVO.a_zip_code = req.body.zipCode
            AddressInputVO.a_city = req.body.city
            AddressInputVO.a_country = req.body.country
            addressID = await SellerRepository.saveSellerAddress(AddressInputVO)

            SellerAddressInputVO.a_id = addressID
            SellerAddressInputVO.s_id = sellerID
            await SellerRepository.mapSellerIDToAddressID(SellerAddressInputVO)

            SellerSignUpOutputVO.message = "SignUp Success"
            SellerSignUpOutputVO.flag = "S"

            return SellerSignUpOutputVO
        } catch (e) {
            throw e
        }
    },

    async login(req) {
        SellerLoginInputVO.s_email = req.body.email
        SellerLoginInputVO.s_password = req.body.password
        seller = await SellerRepository.getSeller(SellerLoginInputVO.s_email)
        console.log(seller)
        if (!seller) {
            SellerLoginOutputVO.message = "Invalid Credentials"
            SellerLoginOutputVO.flag = "F"
            return SellerLoginOutputVO
        } else {
            if (await SellerUtils.isPasswordCorrect(SellerLoginInputVO.s_password, seller.dataValues.s_password)) {
                console.log("check", await SellerUtils.isPasswordCorrect(SellerLoginInputVO.s_password, seller.dataValues.s_password))
                SellerLoginOutputVO.message = " Login Success"
                SellerLoginOutputVO.flag = "S"
                return SellerLoginOutputVO
            } else {
                SellerLoginOutputVO.message = "Invalid Credentials"
                SellerLoginOutputVO.flag = "F"
                return SellerLoginOutputVO
            }
        }
    }
};

module.exports = SellerService