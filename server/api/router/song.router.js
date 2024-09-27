const express = require("express")
const SongUploadController = require("../controller/song.upload.controller")
const SongUploadUseCase = require("../../usecase/song.upload.usecase")
const SongUploadRepository = require("../../repository/song.upload.repository")

const GetAllSongsController = require("../controller/song.allsongs.controller")
const GetAllSongsUseCase = require("../../usecase/song.allsongs.usecase")
const GetAllSongsRepository = require("../../repository/song.allsongs.repository")
const upload = require("../middleware/cloudinary")

const router = express.Router()
const songUploadRepository = new SongUploadRepository()
const songUploadUseCase = new SongUploadUseCase(songUploadRepository)
const songUploadController = new SongUploadController(songUploadUseCase)

const getAllSongsRepository = new GetAllSongsRepository()
const getAllSongsUseCase = new GetAllSongsUseCase(getAllSongsRepository)
const getAllSongsController = new GetAllSongsController(getAllSongsUseCase)



router.post("/upload", upload.fields([{name : 'audio_url', maxCount :1 }, {name : 'image_url', maxCount : 1}]) , (req, res) => songUploadController.Upload(req, res))
router.get("/allsongs/:id", (req, res) => getAllSongsController.GetAllSongs(req, res))

module.exports = router
