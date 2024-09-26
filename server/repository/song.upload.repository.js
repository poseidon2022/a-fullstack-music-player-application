const Song = require("../models/song.model")

class SongUploadRepository {
    async Upload(song_name, artist_name, user_id, audio_url, image_url, date) {
        try {
            const uploadedSong = Song.create({
                song_name,
                artist_name,
                audio_url,
                image_url,
                user_id,
                date
            })

            console.log(audio_url)
            return uploadedSong
        } catch(err) {
            throw new Error("error while uploading music to database")
        }
    }
}

module.exports = SongUploadRepository