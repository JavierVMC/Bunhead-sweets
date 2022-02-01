var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

// GET all
router.get("/", function (req, res, next) {
  models.order_items
    .findAll({})
    .then((order_items) => {
      res.send(order_items);
    })
    .catch((error) => console.log(error));
});

// GET by id
router.get("/:id", function (req, res, next) {
  models.order_items
  .findAll({
    where: { id: req.params.id },
  })
  .then(function (orders) {
    res.send(orders);
  })
  .catch((error) => console.log(error));
});

// POST (agregar nuevo elemento)
router.post("/", function (req, res, next) {
  const product_id = req.body.product_id;
  const order_id = req.body.order_id;
  const quantity = req.body.quantity;
  
  orders.create({
    product_id:product_id,
    order_id:order_id,
    quantity:quantity
  });
});

// DELETE
router.delete("/:id", function (req, res, next) {
  models.order_items
    .destroy({
      where: { id: req.params.id }
    })
    .then(function (result) {
      if (result) {
        res.send('El registro se encuentra');
      } else {
        res.send('El registro no se encuentra');
      }
    });
});

module.exports = router;
