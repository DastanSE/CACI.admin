const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobsSchema = new Schema({
  job_title: String,
  job_type: String,
  job_discription: String,
  job_experience: String,
});

let Jobs = module.exports = mongoose.model("jobs", jobsSchema);
