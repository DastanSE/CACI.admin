const mongoose = require("mongoose");
const { Schema } = mongoose;

const repertoireSchema = new Schema({
  repertoire_title: String,
  repertoire_type: String,

});

let Repertoire = module.exports = mongoose.model("repertoire", repertoireSchema);
