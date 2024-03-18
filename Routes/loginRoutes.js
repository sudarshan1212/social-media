const express = require("express");
const { postlogin, getLogin } = require("../controller/userController");
const app = express();
const router = express.Router();
router.get("/", getLogin);
router.post("/", postlogin);
module.exports = router;
