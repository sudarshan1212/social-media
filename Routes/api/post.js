const express = require("express");
const router = express.Router();
const User = require("../../model/registerModel");
const Post = require("../../model/postModel");
router.get("/", (req, res) => {
  Post.find()
    .populate("postedBY")
    .then((result) => {
      // const newPost = await User.populate(result, { path: "postedBY" });
      return res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
    });
  //   res.send("GET request to the homepage");
});
router.post("/", async (req, res) => {
  //   res.status(200).send(req.body);
  if (!req.body.content) {
    console.log("content err");
    return res.sendStatus(400);
  }
  const user = {
    content: req.body.content,
    postedBY: req.session.sam,
  };
  Post.create(user)
    .then(async (result) => {
      newPost = await User.populate(result, { path: "postedBY" });
      return res.status(200).send(newPost);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
