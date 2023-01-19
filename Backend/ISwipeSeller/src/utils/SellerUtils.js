
const bcrypt = require('bcrypt')
const SellerUtils = {

    async encrypt(password) {
        const encryptedPassword = await bcrypt.hash(password, 8)
        return encryptedPassword
    },
    async isPasswordCorrect(encryptedPassword, password){
        const flag = await bcrypt.compare(encryptedPassword,password)
        console.log("flag",flag)
        return flag
    }

}
module.exports = SellerUtils