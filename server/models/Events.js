const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventsSchema = new Schema({
  title: String,
  event_date: String,
  event_images: [String],
  event_body: String
});

let Events = module.exports = mongoose.model("events", eventsSchema);
