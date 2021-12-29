var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

// GET all
router.get("/", function (req, res, next) {
  models.products
    .findAll({})
    .then((products) => {
      res.send(products);
    })
    .catch((error) => console.log(error));
});

// GET all available products
router.get("/is_available", function (req, res, next) {
  models.products
    .findAll({
      where: {
        is_available: true,
      },
    })
    .then((products) => {
      res.send(products);
    })
    .catch((error) => console.log(error));
});

// GET by id
router.get("/:id", function (req, res, next) {});

// POST (agregar nuevo elemento)
router.post("/", function (req, res, next) {});

// PUT (editar)
router.put("/:id", function (req, res, next) {});

// DELETE
router.delete("/:id", function (req, res, next) {});

module.exports = router;
