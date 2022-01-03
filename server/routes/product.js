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
router.get("/:id", function (req, res, next) {
  models.products
    .findByPk(req.params.id)
    .then((product) => {
      res.send(product);
    })
    .catch((error) => console.log(error));
});

// POST (agregar nuevo elemento)
router.post("/", function (req, res, next) {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image,
    is_available: req.body.is_available,
    category_id: req.body.category_id,
  };
  models.products
    .create(newProduct)
    .then((response) =>
      res.status(200).send({
        message: "Product added successfully",
        response,
      })
    )
    .catch((error) =>
      res.status(400).send({
        message: "Something was wrong",
        error,
      })
    );
});

// PUT (editar)
router.put("/:id", function (req, res, next) {
  const newProductInfo = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image,
    is_available: req.body.is_available,
    category_id: req.body.category_id,
  };
  models.products
    .update(newProductInfo, {
      where: {
        id: req.params.id,
      },
    })
    .then((response) =>
      res.status(200).send({
        message: "Product updated successfully",
        response,
      })
    )
    .catch((error) =>
      res.send({
        message: "Something was wrong",
        error,
      })
    );
});

// DELETE
router.delete("/:id", function (req, res, next) {
  models.products
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((response) =>
      res.status(200).send({
        message: "Product deleted successfully",
        response,
      })
    )
    .catch((error) =>
      res.send({
        message: "Something was wrong",
        error,
      })
    );
});

module.exports = router;
