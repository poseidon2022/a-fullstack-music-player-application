class GetAllSongsController {
    constructor(getAllSongsUseCase) {
        this.getAllSongsUseCase = getAllSongsUseCase
    }

    async GetAllSongs(req, res) {
        try {
            const user_id = req.params.id
            if (!user_id) {
                res.status(400).json({
                    status : false,
                    message: "provide the user id as a param"
                })
            }

            const allSongs = await this.getAllSongsUseCase.GetAllSongs(user_id)
            res.status(200).json({
                success : true,
                songs : allSongs,
                message : "song fetched successfully"
            })
        } catch(err) {
            res.status(500).json({
                success : false,
                message : err.message
            })
        }
    }
}

module.exports = GetAllSongsController