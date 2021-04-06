const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Review
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  find: function(req, res) {
    db.Review
      .find({id:req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    let body = req.body;
    let num = parseInt(body.review[0].rating);
    body.review[0].rating = num
    db.Review
      .create(body)
      .then(dbModel => res.json(dbModel))
      .catch(err =>{ console.log(err); res.status(422).json(err)});
  },
  update: function(req, res) {
    db.Review
      .findOneAndUpdate({ id: req.params.id }, {
        $push:{
          review: req.body
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Review
      .findById({ id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
