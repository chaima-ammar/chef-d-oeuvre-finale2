const Reclamations = require("../Models/reclamation");

module.exports = {
  getReclamation: async (req, res) => {
    console.log(res.body);
    const reclamation = await Reclamations.find()
      .populate("client")
      .populate("article");
    res.send(reclamation);
  },

  postReclamation: (req, res) => {
    const newReclamation = new Reclamations(req.body);
    newReclamation
      .save()
      .then(() => res.json(newReclamation))
      .catch((err) => console.log(err));
  },

  deleteReclamation: (req, res) => {
    const reclamation = Reclamations.findByIdAndDelete(req.params.id)
      .then(() => res.send(reclamation))
      .catch((err) => console.log(err));
  },
};
