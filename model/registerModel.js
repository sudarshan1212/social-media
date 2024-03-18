const mongoose = require("mongoose");
const registerSchema = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    username: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    profilePic: {
      type: String,
      default: "https://img.icons8.com/?size=256&id=68720&format=png",
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Register", registerSchema);
