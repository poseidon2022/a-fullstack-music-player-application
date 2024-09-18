const Otp = require("../models/otp.model")
const User = require("../models/user.model")
const Pending = require("../models/pending.model")
class SignupRepository {
    async Signup(email,otp) {
        try {
            const foundUser = await User.findOne({email})
            if (foundUser) {
                throw new Error("user with the specified email already exists")
            }

            const storedOtp = await Otp.find({email}).sort({created_at : -1}).limit(1)
            if (storedOtp.length == 0 || storedOtp[0].otp !== otp) {
                throw new Error("invalid otp");
            }

            const fetchedUser = await Pending.findOne({email}).sort({created_at : -1}).limit(1)
            const createdUser = await User.create({
                first_name : fetchedUser.first_name,
                last_name : fetchedUser.last_name,
                password : fetchedUser.password,
                email : fetchedUser.email
            })
            return createdUser
        } catch(err) {
            console.log(err.message)
            throw new Error(err.message)
        }
    }
}


module.exports = SignupRepository