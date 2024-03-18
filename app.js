const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const dbConnection = require("./config/dbConnection");
const session = require("express-session");
const port = process.env.PORT || 3001;

const middleWare = require("./middleware/middleware");
//DATABASE
dbConnection();

//ENGINE
app.set("view engine", "pug");
app.set("views", "view");
app.use(express.json());
app.use(
  session({
    secret: "admin",
    resave: true,
    saveUninitialized: false,
  })
);
const staticUri = path.join(__dirname, "public");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(staticUri));

//ROUTER
app.use("/register", middleWare.isLogin, require("./Routes/registerRoutes"));
app.use("/login", middleWare.isLogin, require("./Routes/loginRoutes"));
app.use("/logout", require("./Routes/logoutRoutes"));
app.get(["/", "/index", "/home"], middleWare.isAlreadyLogin, (req, res) => {
  const pageData = {
    tittle: "hoem page",
    userDetails:req.session.sam
  };
  res.render("home", pageData);
});
//API SERVER
app.use("/api/posts",require('./Routes/api/post'))
//SERVER
app.listen(port, () => {
  console.log(`SERVER IS RUNNIG ON: ${port}`);
});
