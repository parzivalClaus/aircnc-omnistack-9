const Spot = require('../models/Spot');

module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    const spots = await Spot.find({ user: user_id });

    return res.json(spots);
  },

  // async index(req, res) {
  //   const spots = await Spot.find();

  //   return res.json(spots);
  // },

  // async delete(req, res) {
  //   const { id } = req.params;

  //   const spot = await Spot.findByIdAndRemove(id, { useFindAndModify: false });

  //   return res.status(200).json(id);
  // }

}