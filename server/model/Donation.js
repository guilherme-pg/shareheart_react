const mongoose = require("mongoose");
const Schema = mongoose.Schema;



let Donation = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    item: {
      type: String,
      required: true,
    },
    hour: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    collection: "donation",
  }
);



module.exports = mongoose.model("Donation", Donation);
