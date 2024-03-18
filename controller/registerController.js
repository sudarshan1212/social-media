const expressAsyncHandler = require("express-async-handler");
const register = require("../model/registerModel");
const bcrypt = require("bcrypt");

const getRegister = (req, res, next) => {
  const pageData = {
    tittle: "User Registration",
  };
  res.setHeader("Cache-Control", "no-cache,no-store,must-revalidate");
  res.status(200).render("reg", pageData);
};
const postRegister = async (req, res) => {
  const pageData = req.body;
  pageData.tittle = "registeration";
  const name = req.body.name.trim();
  const email = req.body.email.trim();
  const username = req.body.username.trim();
  const password = req.body.password.trim();
  if (name && password && username && password) {
    const user = await register
      .findOne({
        $or: [{ username: username }, { email: email }],
      })
      .catch((err) => {
        console.log(err);
        pageData.errorMessage = "something error";
        return res.redirect("/login");
      });
    if (user == null) {
      const data = req.body;
      data.password = await bcrypt.hash(password, 10);
      const create = await register.create(data);
      res.status(200).redirect("/login");
    } else {
      pageData.errorMessage = "email or username already taken";
      res.status(200).render("register", pageData);
    }
  } else {
    pageData.errorMessage = "make sure each fiel as a valid data";
    res.status(200).render("register", pageData);
  }
};
module.exports = { getRegister, postRegister };
