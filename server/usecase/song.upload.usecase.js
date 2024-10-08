class SongUploadUseCase {
    constructor(songUploadRepository) {
        this.songUploadRepository = songUploadRepository
    }

    async Upload(song_name, artist_name, user_id, audio_url, image_url, date) {
        try  {
            const uploadedSong = await this.songUploadRepository.Upload(
                song_name, artist_name, user_id, audio_url, image_url, date
            )
            return uploadedSong
        } catch(err) {
            throw new Error(err.message)
        }
    }
}

module.exports = SongUploadUseCase