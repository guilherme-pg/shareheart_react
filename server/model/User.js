const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let User = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    cpf: {
      type: String,
      required: true,
      unique: true
    },
    telephone: {
      type: String,
      required: true
    },
    birthday: {
      type: String,
      required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
  },
  {
    collection: "user",
  }
);

module.exports = mongoose.model("User", User);
