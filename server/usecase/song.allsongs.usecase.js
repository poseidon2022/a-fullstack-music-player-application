class GetAllSongsUseCase {
    constructor(getAllSongsRepository) {
        this.getAllSongsRepository = getAllSongsRepository
    }

    async GetAllSongs(user_id) {
        try {
            const allSongs = await this.getAllSongsRepository.GetAllSongs(user_id)
            return allSongs
        } catch(err) {
            throw new Error(err.message)
        }
    }
}

module.exports = GetAllSongsUseCase