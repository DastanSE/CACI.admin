const mongoose = require("mongoose");
const { Schema } = mongoose;

const newsSchema = new Schema({
  news_title: String,
  news_introduction: String,
  news_link: String,
  news_imgSrc: String,
});

let News = module.exports = mongoose.model("news", newsSchema);
