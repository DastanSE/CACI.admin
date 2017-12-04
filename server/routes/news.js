const News = require("../models/News");
const requireLogin = require("../middlewares/requireLogin");
const keys = require("../config/keys");
const cors = require("cors");

module.exports = app => {
  app.post("/admin/api/create_news", requireLogin, (req, res) => {
    console.log("req.body", req.body);
    const { news_title, news_introduction, news_link, news_imgSrc } = req.body;
    const news = new News({
      news_title,
      news_introduction,
      news_link,
      news_imgSrc
    });

    news.save();

    res.send(news);
  });

  app.get("/admin/api/fetch_news", cors(), async (req, res) => {
    const news = await News.find();
    res.send(news);
  });
};
