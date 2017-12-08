const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema({
  article_title: String,
  article_subtitle: String,
  article_type: String,  
  article_date: String,
  article_images: [String],
  article_content: String
});

let Article = module.exports = mongoose.model("article", articleSchema);
