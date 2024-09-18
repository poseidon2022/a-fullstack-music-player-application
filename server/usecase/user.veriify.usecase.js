class SignupUseCase {
    constructor(signupRepository) {
        this.signupRepository = signupRepository
    }
    
    async Signup(email, otp) {
        try {
            const createdUser = await this.signupRepository.Signup(email, otp)
            return createdUser
        } catch(err) {
            throw new Error(err.message)
        }
    }
}

module.exports = SignupUseCase