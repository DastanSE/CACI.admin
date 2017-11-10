// prod.js dont commit this
module.exports = {
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
  cloudinaryApiSecretKey: process.env.CLOUDINARY_API_SECRET_KEY,
  cloudinaryUploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET,
  cloudinaryImageUploadUrl: process.env.CLOUDINARY_IMAGE_UPLOAD_URL,
}
