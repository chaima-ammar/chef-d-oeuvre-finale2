let mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Rating = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "Products" },
  client: { type: Schema.Types.ObjectId, ref: "Auth" },
  color5: {
    type: String,
  },
  color4: {
    type: String,
  },
  color3: {
    type: String,
  },
  color2: {
    type: String,
  },
  color: {
    type: String,
  },
  num: {
    type: String,
  },
});

module.exports = mongoose.model("ratings", Rating);
