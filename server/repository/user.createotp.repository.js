const OTP = require("../models/otp.model.js")
const Pending = require("../models/pending.model.js")
class OtpRepository {
    async CreateOtp(otp, first_name, last_name, email, password) {
        try {
            const createdOtp = await OTP.create({email, otp})
            const pendingUser = await Pending.create({first_name, last_name, email, password})
            return createdOtp
        } catch(err) {
            console.log(err.message)
            throw new Error("error while adding otp to the database")
        }
    }
}

module.exports = OtpRepository