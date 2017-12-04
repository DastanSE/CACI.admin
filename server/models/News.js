const mongoose = require("mongoose");
const { Schema } = mongoose;

const newsSchema = new Schema({
  news_title: String,
  news_type: String,
  news_discription: String,
  news_experience: String,
});

let News = module.exports = mongoose.model("news", newsSchema);
