const express = require("express");
const {
  getRegister,
  postRegister,
} = require("../controller/registerController");
const app = express();
const router = express.Router();

router.get("/", getRegister);
router.post("/", postRegister);

module.exports = router;
