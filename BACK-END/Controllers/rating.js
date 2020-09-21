const Rating = require("../Models/rating");

module.exports = {
  getRating: async (req, res) => {
    const rating = await Rating.find()
      .populate("product")
      .populate("client");
    res.send(JSON.stringify(rating));
  },

  postRating: (req, res) => {
    console.log(req.body.client);
    Rating.find().exec(function(err, tailleshema) {
      if (err) res.send(err);
      if (tailleshema.length > 0) {
        Rating.findOne()
          .populate("client")
          .exec(function(err, story) {
            if (err) return handleError(err);
            const id = story.client._id;

            if (id == undefined) {
              const rating = new Rating(req.body);
              rating
                .save()
                .then((product) => res.json(rating))
                .catch((err) => console.log(err));
            } else res.json("vous avez deja fait le rating");
          });
      } else {
        const rating = new Rating(req.body);
        rating
          .save()
          .then((product) => res.json(rating))
          .catch((err) => console.log(err));
      }
    });
  },
};
