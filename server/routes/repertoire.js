const Repertoire = require("../models/Repertoire");
const requireLogin = require("../middlewares/requireLogin");
const keys = require("../config/keys");
const cors = require("cors");

module.exports = app => {
  app.post("/admin/api/create_repertoire", requireLogin, (req, res) => {
    console.log("req.body", req.body);
    const {
      repertoire_title,
      repertoire_type,
      repertoire_city,
      repertoire_imgSrc,
      repertoire_discription,
      repertoire_date
    } = req.body;
    const repertoire = new Repertoire({
      repertoire_title,
      repertoire_type,
      repertoire_city,
      repertoire_imgSrc,
      repertoire_discription,
      repertoire_date
    });

    repertoire.save();

    res.send(repertoire);
  });

  app.get("/admin/api/fetch_repertoire", cors(), async (req, res) => {
    const repertoire = await Repertoire.find();
    res.send(repertoire);
  });
};
