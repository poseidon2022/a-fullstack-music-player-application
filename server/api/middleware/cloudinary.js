const cloudinary = require("../utils/cloudinaryConfig")
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

// Set up Cloudinary storage for multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {

    console.log(file)
    return {
      folder : 'nono',
      resource_type : 'auto',
      allowedFormats : ['jpeg', 'jpg', 'png', 'mp3', 'm4a', 'mpeg'],
      path : file.path
    }
  },
});

console.log(storage.cloudinary_url)
const upload = multer({ storage: storage });

module.exports = upload;
