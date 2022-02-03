var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require('../models/init-models');
var models = initModels(sequelize);

// GET all
router.get('/', function (req, res, next) {
  models.payment_details
    .findAll({})
    .then((payment_details) => {
      res.send(payment_details);
    })
    .catch((error) => console.log(error));
});

// GET by id
router.get('/:id', function (req, res, next) {});

// POST (agregar nuevo elemento)
router.post('/', function (req, res, next) {
  models.payment_details
    .create({
      card_number: req.body.card_number,
      name: req.body.name,
      expiry: req.body.expiry,
      network: req.body.network
    })
    .then((response) => res.send(response))
    .catch((err) => console.log(err));
});

// PUT (editar)
router.put('/:id', function (req, res, next) {});

// DELETE
router.delete('/:id', function (req, res, next) {});

module.exports = router;
