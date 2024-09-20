const express = require("express")
const SongUploadController = require("../controller/song.upload.controller")
const SongUploadUseCase = require("../../usecase/song.upload.usecase")
const SongUploadRepository = require("../../repository/song.upload.repository")
const upload = require("../middleware/cloudinary")

const router = express.Router()
const songUploadRepository = new SongUploadRepository()
const songUploadUseCase = new SongUploadUseCase(songUploadRepository)
const songUploadController = new SongUploadController(songUploadUseCase)

router.post("/upload", upload.fields([{name : 'audio'}, {name : 'image'}]) , (req, res) => songUploadController.Upload(req, res))

module.exports = router
