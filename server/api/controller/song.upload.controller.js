class SongUploadController {
    constructor(songUploadUseCase) {
        this.songUploadUseCase = songUploadUseCase
    }

    async Upload(req, res) {
        try {
            const {song_name, artist_name, user_id} = req.body
            const audio_url = req.files['audio'][0].path
            const image_url = req.files['image'][0].path

            const uploadedSong = await this.songUploadUseCase.Upload(
                song_name, artist_name, user_id, audio_url, image_url
            )

            res.status(200).json({
                success : true,
                message : "song uploaded successfully",
                song : uploadedSong
            })
        } catch(err) {
            res.status(500).json({
                success : false,
                message : err.message
            })
        }
    }
}

module.exports = SongUploadController