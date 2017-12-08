const Article = require("../models/Article");
const requireLogin = require("../middlewares/requireLogin");
const keys = require("../config/keys");
const cors = require("cors");

module.exports = app => {
  app.post("/admin/api/create_article", requireLogin, (req, res) => {
    console.log("req.body", req.body);
    const {
      article_title,
      article_subtitle,
      article_type,
      article_date,
      article_images,
      article_content
    } = req.body;
    const article = new Article({
      article_title,
      article_subtitle,
      article_type,
      article_date,
      article_images,
      article_content
    });

    article.save();

    res.send(article);
  });

  app.get("/admin/api/fetch_article", cors(), async (req, res) => {
    const article = await Article.find();
    res.send(article);
  });
};
