const Events = require("../models/Events");
const requireLogin = require("../middlewares/requireLogin");
const keys = require("../config/keys");

module.exports = app => {
  app.post("/admin/api/create_event", requireLogin,(req, res) => {
    console.log("req.body", req.body);
    const { title, event_date, event_images, event_body } = req.body;
    const events = new Events({
      title,
      event_date,
      event_images,
      event_body
    });

    events.save();

    res.send(events);
  });

  app.get("/admin/api/fetch_events", async (req, res) => {
    const events = await Events.find();
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");
    res.send(events.json());
  });
};
