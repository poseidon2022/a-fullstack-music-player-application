const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

require("dotenv").config()
cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_CLOUD_API,
    api_secret : process.env.CLOUDINARY_CLOUD_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
      if (file.mimetype.startsWith('image/')) {
        return {
          folder: 'images',
          resource_type: 'image',
        };
      } else if (file.mimetype.startsWith('audio/')) {
        return {
          folder: 'audio',
          resource_type: 'video',
        };
      }
    },
  });

  const upload = multer({storage})

  module.exports = upload