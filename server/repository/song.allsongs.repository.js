const Songs = require("../models/song.model")
class GetAllSongsRepository {
    async GetAllSongs(user_id) {
        try {
            const allSongs = await Songs.find({user_id})
            return allSongs
        } catch(err) {
            console.log(err.message)
            throw new Error(err.message)
        }
    }
}

module.exports = GetAllSongsRepository