const Jobs = require("../models/Jobs");
const requireLogin = require("../middlewares/requireLogin");
const keys = require("../config/keys");
const cors = require("cors");

module.exports = app => {
  app.post("/admin/api/create_job", requireLogin, (req, res) => {
    console.log("req.body", req.body);
    const { job_title, job_type, job_discription, job_experience } = req.body;
    const jobs = new Jobs({
      job_title,
      job_type,
      job_discription,
      job_experience
    });

    jobs.save();

    res.send(jobs);
  });

  app.get("/admin/api/fetch_jobs", cors(), async (req, res) => {
    const jobs = await Jobs.find();
    res.send(jobs);
  });
};
