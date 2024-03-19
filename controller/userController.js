const expressAsyncHandler = require("express-async-handler");
const register = require("../model/registerModel");
const bcrypt = require("bcrypt");
// LOGIN USING GET METHOD
const getLogin = (req, res) => {
  const pageData = { tittle: "user login" };
  res.setHeader("Cache-Control", "no-cache,no-store,must-revalidate");
  res.status(200).render("login", pageData);
};
const postlogin = expressAsyncHandler(async (req, res) => {
  //   console.log(req.body);
  const pageData = req.body;
  pageData.tittle = "User LOgin";
  const username = pageData.username.trim();
  const password = pageData.password.trim();
  if (username && password) {
    const user = await register.findOne({ username: username });

    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.sam = user;
      return res.redirect("/home");
    } else {
      pageData.errorMessage = "invalid username and password";
      res.status(200).render("login", pageData);
    }
  }

  pageData.errorMessage = "invalid username and password";
  res.status(200).render("login", pageData);
});

module.exports = { postlogin, getLogin };
