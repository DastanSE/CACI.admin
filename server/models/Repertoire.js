const mongoose = require("mongoose");
const { Schema } = mongoose;

const repertoireSchema = new Schema({
  repertoire_title: String,
  repertoire_type: String,
  repertoire_city: String,
  repertoire_imgSrc: String,
  repertoire_discription: String,
  repertoire_date: String,
});

let Repertoire = module.exports = mongoose.model("repertoire", repertoireSchema);
