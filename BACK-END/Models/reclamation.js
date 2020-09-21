let mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Reclamation = new Schema({
  client: { type: Schema.Types.ObjectId, ref: "Auth" },
  text: { type: String },
  name: { type: String },
  email: { type: String },
  article: { type: Schema.Types.ObjectId, ref: "Products" },
});

module.exports = mongoose.model("reclamations", Reclamation);
