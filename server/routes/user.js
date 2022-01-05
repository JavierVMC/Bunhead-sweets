var express = require("express");
var router = express.Router();

var bcrypt = require("bcrypt");

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

// GET all
router.get("/", function (req, res, next) {
  models.users
    .findAll({})
    .then((users) => {
      res.send(users);
    })
    .catch((error) => console.log(error));
});

// GET by id
router.get("/:id", function (req, res, next) {
  models.users
    .findAll({
      where: {
        user_email: req.params.id,
      },
    })
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((error) => console.log(error));
});

// POST (agregar nuevo elemento)
router.post("/", function (req, res, next) {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    }

    const newUser = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
      country: req.body.country,
      city: req.body.city,
      street: req.body.street,
      user_email: req.body.user_email,
      password: hashedPass,
      is_admin: req.body.is_admin,
    };

    models.users.create(newUser);
  });
});

// PUT (editar)
router.put("/:id", function (req, res, next) {});

// DELETE
router.delete("/:id", function (req, res, next) {});

module.exports = router;
