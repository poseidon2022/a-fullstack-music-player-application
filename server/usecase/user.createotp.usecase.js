class OtpUseCase {
    constructor(otpRepository) {
        this.otpRepository = otpRepository
    }

    async CreateOtp(otp, first_name, last_name, email, hashedPwd) {
        try {
            const createdOtp = await this.otpRepository.CreateOtp(otp, first_name, last_name, email, hashedPwd)
            return createdOtp
        } catch(err) {
            throw new Error("error while creating Otp")
        }
    }
}

module.exports = OtpUseCase